// @flow
import type {ParcelData} from '../types/Types';
import type Parcel from './Parcel';
import strip from '../parcelData/strip';
import ActionCreators from '../action/ActionCreators';

import pipeWith from 'unmutable/lib/util/pipeWith';

export default (_this: Parcel): Object => ({

    // get methods

    raw: (): ParcelData => {
        return _this._parcelData;
    },

    data: (): ParcelData => {
        return pipeWith(
            _this._parcelData,
            strip()
        );
    },

    value: (): * => {
        return _this._parcelData.value;
    },

    spread: (): Object => ({
        value: _this.value(),
        onChange: _this.onChange
    }),

    spreadDOM: (): Object => ({
        value: _this.value(),
        onChange: _this.onChangeDOM
    }),

    meta: (metaKey: ?string = undefined): * => {
        let {meta} = _this._parcelData;
        return metaKey ? meta[metaKey] : {...meta};
    },

    // change methods

    setSelf: (value: *) => {
        _this.dispatch(ActionCreators.setSelf(value));
    },

    updateSelf: (updater: Function) => {
        _this.setSelf(updater(_this.value()));
    },

    onChange: (newValue: *) => {
        _this.setSelf(newValue);
    },

    onChangeDOM: (event: Object) => {
        _this.onChange(event.target.value);
    },

    setMeta: (partialMeta: Object) => {
        _this.dispatch(ActionCreators.setMeta(partialMeta));
    },

    updateMeta: (updater: Function) => {
        let {meta} = _this._parcelData;
        _this.setMeta(updater(meta));
    },

    refresh: () => {
        _this._buffer();
        let thisId: string = _this.id();
        _this
            ._treeshare
            .registry
            .list()
            .filter((parcel: Parcel): boolean => {
                let id: string = parcel.id();
                return id.startsWith(thisId); // AND if a child is called, none of its parents should be
            })
            .forEach((parcel: Parcel) => {
                parcel.dispatch(ActionCreators.noop());
            });
        _this._flush();
    }
});
