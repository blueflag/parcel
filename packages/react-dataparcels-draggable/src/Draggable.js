// @flow

import type {ComponentType} from 'react';
import type {Node} from 'react';
import type Parcel from 'react-dataparcels';

import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import {SortableElement} from 'react-sortable-hoc';

type Config = {
    element: (parcel: Parcel, rest: *) => Node,
    container?: ComponentType<*>
};

type Props = {
    parcel: Parcel,
    onSortEnd?: ({oldIndex: number, newIndex: number}) => void
};

export default ({element, container}: Config) => {
    let Container = container || 'div';
    let ConfiguredElement = SortableElement(({parcel, ...rest}) => element(parcel, rest));
    let ConfiguredContainer = SortableContainer(({parcel}) => <Container>
        {parcel.toArray((elementParcel, index) => <ConfiguredElement
            key={elementParcel.key}
            index={index}
            parcel={elementParcel}
        />)}
    </Container>);

    return ({parcel, onSortEnd, ...rest}: Props): Node => {
        return <ConfiguredContainer
            parcel={parcel}
            onSortEnd={(param) => {
                let {oldIndex, newIndex} = param;
                parcel.move(oldIndex, newIndex);
                onSortEnd && onSortEnd(param);
            }}
            {...rest}
        />;
    };
};
