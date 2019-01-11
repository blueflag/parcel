// @flow
import type ChangeRequest from '../../change/ChangeRequest';

import Parcel from '../Parcel';
import StaticParcel from '../../staticParcel/StaticParcel';

test('Parcel.modifyDown() should return a new parcel with updated parcelData', () => {
    expect.assertions(2);
    var data = {
        value: [123]
    };
    var parcel = new Parcel(data).get(0);
    var updated = parcel
        .modifyDown((value: *, parcelData: Parcel) => {
            expect(parcelData).toBe(parcel);
            return value + 1;
        })
        .data;

    var expectedData = {
        meta: {},
        child: undefined,
        value: 124,
        key: "#a"
    };
    expect(expectedData).toEqual(updated);
});

test('Parcel.modifyDown() should allow non-parent types to be returned', () => {
    let updatedValue = new Parcel({
        value: 123
    })
        .modifyDown(value => value + 1)
        .value;

    expect(updatedValue).toEqual(124);
});

test('Parcel.modifyDown() should allow childless parent types to be returned', () => {
    let updatedValue = new Parcel({
        value: 123
    })
        .modifyDown(value => [])
        .value;

    expect(updatedValue).toEqual([]);
});

test('Parcel.modifyDown() should allow parent types to be returned if they dont change', () => {
    let updatedValue = new Parcel({
        value: [123]
    })
        .modifyDown(value => value)
        .value;

    expect(updatedValue).toEqual([123]);
});

test('Parcel.modifyDown() should throw error if changed parent types with children are returned', () => {
    expect(() => {
        new Parcel({
            value: [123]
        }).modifyDown(value => [...value, 456]);

    }).toThrowError(`modifyDown()`);
});

test('Parcel.modifyDown() should throw error if childless is turned into parent types with children', () => {
    expect(() => {
        new Parcel({
            value: 123
        }).modifyDown(value => [123, 456]);

    }).toThrowError(`modifyDown()`);
});

test('Parcel.modifyDown() should recognise if value changes types, and set value if type changes', () => {
    let handleChange = jest.fn();
    let parcel = new Parcel({
        value: 123,
        handleChange
    })
        .modifyDown(value => [])
        .push(123);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].value).toEqual([123]);
});

test('Parcel.modifyDown() should have id which is unique to updater', () => {
    let updater = value => [];
    let parcel = new Parcel().modifyDown(updater);
    let parcel2 = new Parcel().modifyDown(updater);
    let parcel3 = new Parcel().modifyDown(a => 1 + 2);

    expect(parcel.id).toBe("^.~mv-643198612");
    expect(parcel2.id).toBe("^.~mv-643198612"); // same updater should produce the same hash
    expect(parcel3.id).not.toBe("^.~mv-643198612"); // different updater should produce different hash
});

test('Parcel.modifyChange() should allow you to change the payload of a changed parcel', () => {
    expect.assertions(1);

    var data = {
        value: 123,
        handleChange: (parcel: Parcel) => {
            let {value} = parcel.data;
            expect(457).toBe(value);
        }
    };

    new Parcel(data)
        .modifyChange((parcel: Parcel, changeRequest: ChangeRequest) => {
            parcel.set(changeRequest.nextData.value + 1);
        })
        .onChange(456);
});

test('Parcel.modifyChange() should allow you to stop a change by not calling dispatch', () => {
    var handleChange = jest.fn();

    var data = {
        value: 123,
        handleChange
    };

    new Parcel(data)
        .modifyChange((parcel: Parcel, changeRequest: ChangeRequest) => {
            // nothing here
        })
        .onChange(456);

    expect(handleChange).toHaveBeenCalledTimes(0);
});

test('Parcel.modifyChange() should have id which is unique to updater', () => {
    let updater = value => [];
    let parcel = new Parcel().modifyChange(updater);
    let parcel2 = new Parcel().modifyChange(updater);
    let parcel3 = new Parcel().modifyChange(a => "woop");

    expect(parcel.id).toBe("^.~mcb-643198612");
    expect(parcel2.id).toBe("^.~mcb-643198612"); // same updater should produce the same hash
    expect(parcel3.id).not.toBe("^.~mcb-643198612"); // different updater should produce different hash
});

test('Parcel.modifyUp() should allow you to change the payload of a changed parcel with an updater (and should allow non-parent types to be returned)', () => {
    var handleChange = jest.fn();
    new Parcel({
        value: 123,
        handleChange
    })
        .modifyUp(value => value + 1)
        .onChange(456);

    expect(handleChange.mock.calls[0][0].value).toBe(457);
});


test('Parcel.modifyUp() should allow parent types to be returned', () => {
    var handleChange = jest.fn();
    new Parcel({
        value: 123,
        handleChange
    })
        .modifyUp(value => [123,456])
        .onChange(456);

    expect(handleChange.mock.calls[0][0].value).toEqual([123,456]);
});

test('Parcel.modifyUp() should allow parent types to be returned if they dont change', () => {
    var handleChange = jest.fn();
    new Parcel({
        value: [123],
        handleChange
    })
        .modifyUp(value => value)
        .onChange([456]);

    expect(handleChange.mock.calls[0][0].value).toEqual([456]);
});

test('Parcel.modifyUp() should throw error if changed parent types with children are returned', () => {
    expect(() => {
        var handleChange = jest.fn();
        new Parcel({
            value: [123],
            handleChange
        })
            .modifyUp(value => [...value, 456])
            .onChange([456]);

    }).toThrowError(`modifyUp()`);
});

test('Parcel.modifyUp() should allow changes to meta through', () => {
    expect.assertions(2);

    var data = {
        value: 123,
        handleChange: (parcel: Parcel) => {
            let {value, meta} = parcel.data;
            expect(457).toBe(value);
            expect({abc: 123}).toEqual(meta);
        }
    };

    new Parcel(data)
        .modifyUp(value => value + 1)
        .batch(parcel => {
            parcel.onChange(456);
            parcel.setMeta({
                abc: 123
            });
        });
});

test('Parcel.modifyDownDeep() should be called with static parcel and return with no change', () => {

    let handleChange = jest.fn();
    let updater = jest.fn(staticParcel => staticParcel);

    let parcel = new Parcel({
        handleChange,
        value: [1,2,3]
    });

    let {value} = parcel
        .modifyDownDeep(updater)
        .data;

    let expectedValue = [1,2,3];

    expect(value).toEqual(expectedValue);
    expect(updater.mock.calls[0][0] instanceof StaticParcel).toBe(true);
    expect(updater.mock.calls[0][0].data.value).toEqual(expectedValue);
});

test('Parcel.modifyDownDeep() should modify value', () => {

    let handleChange = jest.fn();
    let updater = jest.fn(staticParcel => staticParcel.push(4));

    let parcel = new Parcel({
        handleChange,
        value: [1,2,3]
    });

    let parcelWithModifier = parcel.modifyDownDeep(updater);
    let {value} = parcelWithModifier.data;
    parcelWithModifier.push(5);

    expect(value).toEqual([1,2,3,4]);
    expect(handleChange.mock.calls[0][0].data.value).toEqual([1,2,3,4,5]);
});

test('Parcel.modifyUpDeep() should be called with static parcel and return with no change', () => {

    let handleChange = jest.fn();
    let updater = jest.fn(staticParcel => staticParcel);

    let parcel = new Parcel({
        handleChange,
        value: 123
    });

    let parcelWithModifier = parcel.modifyUpDeep(updater);
    let {value} = parcelWithModifier.data;

    expect(value).toEqual(123);
    expect(updater).not.toHaveBeenCalled();

    parcelWithModifier.set(456);

    expect(updater.mock.calls[0][0] instanceof StaticParcel).toBe(true);
    expect(updater.mock.calls[0][0].data.value).toEqual(456);
});

test('Parcel.modifyUpDeep() should modify value', () => {

    let handleChange = jest.fn();
    let updater = jest.fn(staticParcel => staticParcel.push(5));

    let parcel = new Parcel({
        handleChange,
        value: [1,2,3]
    });

    let parcelWithModifier = parcel.modifyUpDeep(updater);
    let {value} = parcelWithModifier.data;

    expect(value).toEqual([1,2,3]);
    expect(updater).not.toHaveBeenCalled();

    parcelWithModifier.push(4);

    expect(updater.mock.calls[0][0] instanceof StaticParcel).toBe(true);
    expect(handleChange.mock.calls[0][0].data.value).toEqual([1,2,3,4,5]);
});

test('Parcel.initialMeta() should work', () => {
    expect.assertions(3);

    let meta = {a:1, b:2};

    var data = {
        value: 123,
        handleChange: (parcel: Parcel) => {
            let {meta} = parcel.data;
            expect({a:1, b:3}).toEqual(meta);
            expect({a:1, b:3}).toEqual(parcel.initialMeta().meta);
        }
    };

    let parcel = new Parcel(data).initialMeta(meta);
    expect(meta).toEqual(parcel.meta);
    parcel.setMeta({
        b: 3
    });
});

test('Parcel.initialMeta() should merge', () => {
    expect.assertions(2);

    let meta = {a:1, b:2};
    let meta2 = {b:1, c:3}; // this b will be ignored because it will have already been set by the time this is applied

    var data = {
        value: 123,
        handleChange: (parcel: Parcel) => {
            let {meta} = parcel.data;
            expect({a:1, b:3, c:3}).toEqual(meta);
        }
    };

    let parcel = new Parcel(data).initialMeta(meta).initialMeta(meta2);
    expect({a:1, b:2, c:3}).toEqual(parcel.meta);
    parcel.setMeta({
        b: 3
    });
});
