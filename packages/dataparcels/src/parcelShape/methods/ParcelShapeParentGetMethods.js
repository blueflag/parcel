// @flow
import type {Index} from '../../types/Types';
import type {Key} from '../../types/Types';
import type {ParentType} from '../../types/Types';
import type ParcelShape from '../ParcelShape';

import parcelGet from '../../parcelData/get';
import parcelHas from '../../parcelData/has';
import parcelKeyOrIndexToKey from '../../parcelData/keyOrIndexToKey';

import map from 'unmutable/lib/map';
import size from 'unmutable/lib/size';
import toArray from 'unmutable/lib/toArray';
import pipeWith from 'unmutable/lib/util/pipeWith';

export default (_this: ParcelShape) => ({

    has: (key: Key|Index): boolean => {
        _this._prepareChildKeys();
        return parcelHas(key)(_this._parcelData);
    },

    size: (): number => {
        return size()(_this._parcelData.value);
    },

    get: (key: Key|Index, notFoundValue: ?* = undefined): ParcelShape => {
        _this._prepareChildKeys();
        return _this._pipeSelf(
            parcelGet(key, notFoundValue),
            {
                isIndexed: _this._isIndexed,
                isChildFirst: false,
                isChildLast: false
            }
        );
    },

    getIn: (keyPath: Array<Key|Index>, notFoundValue: ?* = undefined): ParcelShape => {
        let parcelShape = _this;

        for(let key of keyPath) {
            if(!parcelShape.isParent() || !parcelShape.has(key)) {
                return _this._pipeSelf(
                    () => ({
                        value: notFoundValue,
                        key: parcelKeyOrIndexToKey(key)(parcelShape.data)
                    }),
                    {
                        isIndexed: _this._isIndexed,
                        isChildFirst: false,
                        isChildLast: false
                    }
                );
            }
            parcelShape = parcelShape.get(key, notFoundValue);
        }
        return parcelShape;
    },

    children: (): ParentType<ParcelShape> => {
        return pipeWith(
            _this._parcelData.value,
            map((value, key) => _this.get(key))
        );
    },

    toArray: (): Array<ParcelShape> => {
        return toArray()(_this.children());
    }
});
