// @flow
import test from 'ava';
import Action from '../../change/Action';
import ChangeRequest from '../../change/ChangeRequest';
import Parcel from '../../parcel/Parcel';
import Types from '../Types';

import map from 'unmutable/lib/map';
import pipeWith from 'unmutable/lib/util/pipeWith';

//
// Test the type checker
//

let types = {
    ['action']: new Action(),
    ['actionArray']: [new Action(),new Action()],
    ['booleanTrue']: true,
    ['booleanFalse']: false,
    ['changeRequest']: new ChangeRequest(),
    ['event']: {currentTarget: {value: null}},
    ['function']: () => {},
    ['functionArray']: [() => {}, () => {}],
    ['modifierObject']: {modifier: () => {}},
    ['modifierObjectWrong']: {modifier: 123},
    ['number']: 123,
    ['numberArray']: [123, 456],
    ['object']: {},
    ['parcel']: new Parcel(),
    ['parcelData']: {value: 123},
    ['string']: "abc",
    ['stringArray']: ["abc", "def"],
    ['undefined']: undefined
};

let testTypes = (type: string, shouldAllow: string[]) => (tt: *) => {
    let message = `Expected thing to be`;
    pipeWith(
        types,
        map((data, dataType) => {
            if(shouldAllow.indexOf(dataType) !== -1) {
                tt.notThrows(() => Types(message, type)(data), `${type} should not throw when given ${dataType}`);
            } else {
                tt.true(tt.throws(() => Types(message, type)(data), Error).message.indexOf("but got") !== -1, `${type} should throw error when given ${dataType}`);
            }
        })
    );
};

test('Types will error if type is not found', tt => {
    tt.is("Unknown type check", tt.throws(() => Types('???', 'notfound')({abc: 123}), Error).message);
});

test('Types() can identify a boolean', testTypes(`boolean`, [
    'booleanTrue',
    'booleanFalse'
]));

test('Types() can identify a dispatchable', testTypes(`dispatchable`, [
    'action',
    'actionArray',
    'changeRequest'
]));

test('Types() can identify an event', testTypes(`event`, [
    'event'
]));

test('Types() can identify a function', testTypes(`function`, [
    'function'
]));

test('Types() can identify a function array', testTypes(`functionArray`, [
    'functionArray'
]));

test('Types() can identify an optional function', testTypes(`functionOptional`, [
    'function',
    'undefined'
]));

test('Types() can identify a keyIndex', testTypes(`keyIndex`, [
    'number',
    'string'
]));

test('Types() can identify a keyIndexPath', testTypes(`keyIndexPath`, [
    'numberArray',
    'stringArray'
]));

test('Types() can identify a modifier', testTypes(`modifier`, [
    'function',
    'modifierObject'
]));

test('Types() can identify a number', testTypes(`number`, [
    'number'
]));

test('Types() can identify a object', testTypes(`object`, [
    'action',
    'actionArray',
    'changeRequest',
    'event',
    'functionArray',
    'modifierObject',
    'modifierObjectWrong',
    'numberArray',
    'object',
    'parcel',
    'parcelData',
    'stringArray'
]));

test('Types() can identify a parcel', testTypes(`parcel`, [
    'parcel'
]));

test('Types() can identify a parcelData', testTypes(`parcelData`, [
    'parcelData'
]));

test('Types() can identify a string', testTypes(`string`, [
    'string'
]));
