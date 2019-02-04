// @flow
import ParcelShape from '../ParcelShape';
import TestValidateValueUpdater from '../../util/__test__/TestValidateValueUpdater-testUtil';

test('ParcelShapes set(key) should work', () => {
    let parcelShape = ParcelShape.fromData({
        value: {
            a: 1,
            b: 4
        },
        child: {
            a: {key: "a"},
            b: {key: "b"}
        }
    });

    let expectedData = {
        value: {
            a: 456,
            b: 4
        },
        child: {
            a: {
                child: undefined,
                key: "a"
            },
            b: {
                key: "b"
            }
        }
    };

    expect(parcelShape.set('a', 456).data).toEqual(expectedData);
});

test('ParcelShapes setIn(keyPath) should work', () => {
    let parcelShape = ParcelShape.fromData({
        value: {
            a: {
                b: 123
            },
            c: 456
        }
    });

    let expectedData = {
        value: {
            a: {
                b: 456
            },
            c: 456
        },
        child: {
            a: {
                child: {
                    b: {
                        child: undefined,
                        key: "b"
                    }
                },
                key: "a"
            },
            c: {
                key: "c"
            }
        }
    };

    expect(parcelShape.setIn(['a', 'b'], 456).data).toEqual(expectedData);
});

test('ParcelShapes delete(key) should work', () => {
    let parcelShape = ParcelShape.fromData({
        value: {
            a: 1,
            b: 4
        },
        child: {
            a: {key: "a"},
            b: {key: "b"}
        }
    });

    let expectedData = {
        value: {
            b: 4
        },
        child: {
            b: {
                key: "b"
            }
        }
    };

    expect(parcelShape.delete('a').data).toEqual(expectedData);
});

test('ParcelShapes deleteIn(keyPath) should work', () => {
    let parcelShape = ParcelShape.fromData({
        value: {
            a: {
                b: 123
            },
            c: 456
        }
    });

    let expectedData = {
        value: {
            a: {},
            c: 456
        },
        child: {
            a: {
                child: {},
                key: "a"
            },
            c: {
                key: "c"
            }
        }
    };

    expect(parcelShape.deleteIn(['a', 'b']).data).toEqual(expectedData);
});

test('ParcelShapes update(key) should work', () => {
    let parcelShape = ParcelShape.fromData({
        value: {
            a: 1,
            b: 4
        }
    });

    let expectedData = {
        value: {
            a: 2,
            b: 4
        },
        child: {
            a: {
                child: undefined,
                key: "a"
            },
            b: {
                child: undefined,
                key: "b"
            }
        }
    };

    expect(parcelShape.update('a', ii => ii + 1).data).toEqual(expectedData);
});

test('ParcelShapes update(key) should validate value updater', () => {
    TestValidateValueUpdater(
        expect,
        (value, updater) => new ParcelShape({
            abc: value
        }).update('abc', updater)
    );
});

test('ParcelShapes updateIn(keyPath) should work', () => {
    let parcelShape = ParcelShape.fromData({
        value: {
            a: {
                b: 123
            }
        }
    });

    let expectedData = {
        value: {
            a: {
                b: 124
            }
        },
        child: {
            a: {
                child: {
                    b: {
                        child: undefined,
                        key: "b"
                    }
                },
                key: "a"
            }
        }
    };

    expect(parcelShape.updateIn(['a', 'b'], ii => ii + 1).data).toEqual(expectedData);
});

test('ParcelShapes updateIn(keyPath) should validate value updater', () => {
    TestValidateValueUpdater(
        expect,
        (value, updater) => new ParcelShape({
            a: {
                b: value
            }
        }).updateIn(['a', 'b'], updater)
    );
});

test('ParcelShapes updateShape(key) should work', () => {
    let parcelShape = ParcelShape.fromData({
        value: {
            abc: [1,2,3]
        }
    });

    let expectedValue = {
        abc: [1,2,3,4]
    };

    expect(parcelShape.updateShape('abc', parcelShape => parcelShape.push(4)).value).toEqual(expectedValue);
});

test('ParcelShapes updateShapeIn(keyPath) should work', () => {
    let parcelShape = ParcelShape.fromData({
        value: {
            abc: {
                def: [1,2,3]
            }
        }
    });

    let expectedValue = {
        abc: {
            def: [1,2,3,4]
        }
    };

    expect(parcelShape.updateShapeIn(['abc', 'def'], parcelShape => parcelShape.push(4)).value).toEqual(expectedValue);
});
