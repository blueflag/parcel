// @flow
import type {Key} from '../types/Types';
import type {Index} from '../types/Types';
import type {ParcelData} from '../types/Types';
import type {Property} from '../types/Types';

import prepareChildKeys from './prepareChildKeys';

import findKey from 'unmutable/lib/findKey';
import get from 'unmutable/lib/get';
import isIndexed from 'unmutable/lib/util/isIndexed';
import pipeWith from 'unmutable/lib/util/pipeWith';

export default (key: Key|Index) => (parcelData: ParcelData): ?Property => {
    if(!isIndexed(parcelData.value) || typeof key === "number") {
        return key;
    }
    return pipeWith(
        parcelData,
        prepareChildKeys(),
        get('child'),
        findKey(_ => _.key === key)
    );
};
