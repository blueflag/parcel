// @flow
import type {ParcelData} from '../types/Types';

import {AsNodeReturnNonParcelNodeError} from '../errors/Errors';
import ParcelNode from './ParcelNode';

export default (updater: Function): Function => {
    let fn = (parcelData: ParcelData, changeRequest: *): ParcelData => {
        let parcelNode = new ParcelNode();
        parcelNode._parcelData = parcelData;
        parcelNode._changeRequest = changeRequest;
        let result = updater(parcelNode, changeRequest);
        if(!(result instanceof ParcelNode)) {
            throw AsNodeReturnNonParcelNodeError();
        }
        return result.data;
    };
    fn._updater = updater;
    return fn;
};
