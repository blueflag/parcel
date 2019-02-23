// @flow
import type Action from '../../change/Action';
import type Parcel from '../Parcel';
import Types from '../../types/Types';

import ChangeRequest from '../../change/ChangeRequest';

export default (_this: Parcel): Object => ({
    dispatch: (dispatchable: Action|Action[]|ChangeRequest) => {
        Types(`dispatch()`, `dispatchable`, `dispatchable`)(dispatchable);

        let {
            _onDispatch,
            _onHandleChange
        } = _this;

        let changeRequest: ChangeRequest = dispatchable instanceof ChangeRequest
            ? dispatchable
            : new ChangeRequest(dispatchable);

        if(!changeRequest._originId) {
            changeRequest._originId = _this.id;
            changeRequest._originPath = _this.path;
        }

        if(_this._log) {
            console.log(`Parcel change: ${_this._logName}`); // eslint-disable-line
            console.log(changeRequest.toJS()); // eslint-disable-line
        }

        if(_onHandleChange) {
            let changeRequestWithBase = changeRequest._create({
                prevData: _this.data
            });
            let parcelData = changeRequestWithBase.nextData;

            if(!parcelData) {
                return;
            }

            let parcelWithChangedData = _this._create({
                handleChange: _onHandleChange,
                parcelData,
                lastOriginId: changeRequest.originId
            });

            _onHandleChange(parcelWithChangedData, changeRequestWithBase);
            return;
        }
        _onDispatch && _onDispatch(changeRequest);
    }
});
