// @flow

import Action from '../action/Action';
import strip from '../parcelData/strip';

import set from 'unmutable/lib/set';
import pipeWith from 'unmutable/lib/util/pipeWith';

import type Parcel from './Parcel';

export default (_this: Parcel): Object => ({
    chain: (updater: Function): Parcel => {
        return updater(_this);
    },

    modify: (updater: Function): Parcel => {
        return pipeWith(
            _this._parcelData,
            strip(),
            updater,
            parcelData => ({parcelData}),
            set('id', _this._id.pushModifier('ud')),
            _this._create
        );
    },

    modifyValue: (updater: Function): Parcel => {
        return pipeWith(
            _this._parcelData,
            set('value', updater(_this._parcelData.value, _this)),
            parcelData => ({parcelData}),
            set('id', _this._id.pushModifier('uv')),
            _this._create
        );
    },

    modifyChange: (batcher: Function): Parcel => {
        return pipeWith(
            _this._parcelData,
            parcelData => ({parcelData}),
            set('handleChange', (newParcel: Parcel, actions: Action[]) => {
                _this.batch((parcel: Parcel) => {
                    batcher({
                        parcel,
                        newParcelData: newParcel.data(),
                        apply: () => _this.dispatch(actions),
                        actions
                    });
                });
            }),
            set('id', _this._id.pushModifier('ucd')),
            _this._create
        );
    }
});