// @flow

// exports
import Parcel from '../src/index';
import ChangeRequest from '../ChangeRequest';
import combine from '../combine';
import ParcelNode from '../ParcelNode';
import arrange from '../arrange';
import cancel from '../cancel';
import promisify from '../promisify';
import translate from '../translate';

// internal files
import InternalParcel from '../src/parcel/Parcel';

// internal lib files
import InternalChangeRequest from '../lib/change/ChangeRequest';
import InternalParcelNode from '../lib/parcelNode/ParcelNode';
import InternalCreateUpdater from '../lib/combine';
import InternalAsNodes from '../lib/parcelNode/arrange';
import Internalcancel from '../lib/cancel';
import InternalPromisify from '../lib/promisify';
import InternalTranslate from '../lib/translate';

test('index should export Parcel', () => {
    expect(Parcel).toBe(InternalParcel);
});

test('/ChangeRequest should export ChangeRequest', () => {
    expect(ChangeRequest).toBe(InternalChangeRequest);
});

test('/combine should export combine', () => {
    expect(combine).toBe(InternalCreateUpdater);
});

test('/ParcelNode should export ParcelNode', () => {
    expect(ParcelNode).toBe(InternalParcelNode);
});

test('/arrange should export arrange', () => {
    expect(arrange).toBe(InternalAsNodes);
});

test('/cancel should export cancel', () => {
    expect(cancel).toBe(Internalcancel);
});

test('/promisify should export promisify', () => {
    expect(promisify).toBe(InternalPromisify);
});

test('/translate should export translate', () => {
    expect(translate).toBe(InternalTranslate);
});
