// @flow
import ChangeRequest from '../ChangeRequest';
import ChangeRequestReducer from '../ChangeRequestReducer';
import Action from '../Action';
import pipeWith from 'unmutable/lib/util/pipeWith';

const makeReducer = (action) => pipeWith(
    new ChangeRequest(action),
    ChangeRequestReducer
);

let data = {
    value: [0,1,2],
    key: "^",
    meta: {abc: 123}
};

let EXPECTED_KEY_AND_META = {
    key: "^",
    meta: {abc: 123}
};

[
    "insertAfter",
    "insertBefore",
    "swap",
    "swapNext",
    "swapPrev"
].forEach((type: string) => {
    test(`Reducer ${type} action should return unchanged parcelData if keyPath is empty`, () => {
        expect(makeReducer(new Action({type}))(data)).toEqual(data);
    });
});

test('Reducer swap action should throw error if payload.swapKey doesnt exist', () => {
    let action = new Action({
        type: "swap",
        keyPath: [0]
    });

    expect(() => makeReducer(action)(data)).toThrowError(`swap actions must have a swapKey in their payload`);
});

const TestIndex = (arr) => arr.map(({action, expectedData}) => {
    test(`Reducer ${action.type} action should ${action.type} with keyPath ${JSON.stringify(action.keyPath)}`, () => {
        expect(makeReducer(new Action(action))(data)).toEqual(expectedData);
    });

    let deepAction = {
        ...action,
        keyPath: ["a", "b", ...action.keyPath]
    };

    let deepData = {
        ...data,
        value: {
            a: {
                b: data.value
            }
        }
    };

    let deepExpectedData = {
        ...expectedData,
        value: {
            a: {
                b: expectedData.value
            }
        },
        child: {
            a: {
                key: "a",
                child: {
                    b: {
                        key: "b",
                        child: expectedData.child
                    }
                }
            }
        }
    };

    test(`Reducer ${action.type} action should ${action.type} deeply with keyPath ${JSON.stringify(deepAction.keyPath)}`, () => {
        expect(makeReducer(new Action(deepAction))(deepData)).toEqual(deepExpectedData);
    });
});

TestIndex([
    {
        action: {
            type: "delete",
            keyPath: [0]
        },
        expectedData: {
            value: [1,2],
            child: [{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "delete",
            keyPath: ["#a"]
        },
        expectedData: {
            value: [1,2],
            child: [{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "delete",
            keyPath: [-3]
        },
        expectedData: {
            value: [1,2],
            child: [{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    }
]);

TestIndex([
    {
        action: {
            type: "insertAfter",
            payload: {
                value: 3
            },
            keyPath: [0]
        },
        expectedData: {
            value: [0,3,1,2],
            child: [{key: "#a"},{key: "#d"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "insertAfter",
            payload: {
                value: 3
            },
            keyPath: [2]
        },
        expectedData: {
            value: [0,1,2,3],
            child: [{key: "#a"},{key: "#b"}, {key: "#c"},{key: "#d"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "insertAfter",
            payload: {
                value: 3
            },
            keyPath: ["#a"]
        },
        expectedData: {
            value: [0,3,1,2],
            child: [{key: "#a"},{key: "#d"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "insertAfter",
            payload: {
                value: 3
            },
            keyPath: [-3]
        },
        expectedData: {
            value: [0,3,1,2],
            child: [{key: "#a"},{key: "#d"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    }
]);

TestIndex([
    {
        action: {
            type: "insertBefore",
            payload: {
                value: 3
            },
            keyPath: [0]
        },
        expectedData: {
            value: [3,0,1,2],
            child: [{key: "#d"},{key: "#a"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "insertBefore",
            payload: {
                value: 3
            },
            keyPath: [2]
        },
        expectedData: {
            value: [0,1,3,2],
            child: [{key: "#a"},{key: "#b"},{key: "#d"},{key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "insertBefore",
            payload: {
                value: 3
            },
            keyPath: ["#a"]
        },
        expectedData: {
            value: [3,0,1,2],
            child: [{key: "#d"},{key: "#a"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "insertBefore",
            payload: {
                value: 3
            },
            keyPath: [-3]
        },
        expectedData: {
            value: [3,0,1,2],
            child: [{key: "#d"},{key: "#a"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    }
]);

TestIndex([
    {
        action: {
            type: "pop",
            keyPath: []
        },
        expectedData: {
            value: [0,1],
            child: [{key: "#a"}, {key: "#b"}],
            ...EXPECTED_KEY_AND_META
        }
    }
]);

TestIndex([
    {
        action: {
            type: "push",
            keyPath: [],
            payload: {
                values: [3,4]
            }
        },
        expectedData: {
            value: [0,1,2,3,4],
            child: [{key: "#a"},{key: "#b"}, {key: "#c"},{key: "#d"},{key: "#e"}],
            ...EXPECTED_KEY_AND_META
        }
    }
]);

TestIndex([
    {
        action: {
            type: "set",
            payload: {
                value: 3
            },
            keyPath: [0]
        },
        expectedData: {
            value: [3,1,2],
            child: [{key: "#a"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "set",
            payload: {
                value: 3
            },
            keyPath: ["#a"]
        },
        expectedData: {
            value: [3,1,2],
            child: [{key: "#a"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "set",
            payload: {
                value: 3
            },
            keyPath: [-3]
        },
        expectedData: {
            value: [3,1,2],
            child: [{key: "#a"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "set",
            payload: {
                value: 3
            },
            keyPath: [3]
        },
        expectedData: {
            value: [0,1,2,3],
            child: [{key: "#a"},{key: "#b"}, {key: "#c"}, {key: "#d"}],
            ...EXPECTED_KEY_AND_META
        }
    },
]);

TestIndex([
    {
        action: {
            type: "shift",
            keyPath: []
        },
        expectedData: {
            value: [1,2],
            child: [{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    }
]);

TestIndex([
    {
        action: {
            type: "swap",
            payload: {
                swapKey: 2
            },
            keyPath: [0]
        },
        expectedData: {
            value: [2,1,0],
            child: [{key: "#c"},{key: "#b"}, {key: "#a"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "swap",
            payload: {
                swapKey: "#c"
            },
            keyPath: ["#a"]
        },
        expectedData: {
            value: [2,1,0],
            child: [{key: "#c"},{key: "#b"}, {key: "#a"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "swap",
            payload: {
                swapKey: -1
            },
            keyPath: [-3]
        },
        expectedData: {
            value: [2,1,0],
            child: [{key: "#c"},{key: "#b"}, {key: "#a"}],
            ...EXPECTED_KEY_AND_META
        }
    }
]);

TestIndex([
    {
        action: {
            type: "swapNext",
            keyPath: [0]
        },
        expectedData: {
            value: [1,0,2],
            child: [{key: "#b"},{key: "#a"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "swapNext",
            keyPath: ["#a"]
        },
        expectedData: {
            value: [1,0,2],
            child: [{key: "#b"},{key: "#a"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
    {
        action: {
            type: "swapNext",
            keyPath: [-3]
        },
        expectedData: {
            value: [1,0,2],
            child: [{key: "#b"},{key: "#a"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    },
]);

TestIndex([
    {
        action: {
            type: "unshift",
            keyPath: [],
            payload: {
                values: [3,4]
            }
        },
        expectedData: {
            value: [3,4,0,1,2],
            child: [{key: "#d"},{key: "#e"},{key: "#a"},{key: "#b"}, {key: "#c"}],
            ...EXPECTED_KEY_AND_META
        }
    }
]);
