import Link from 'component/Link';

```flow
(parcel: Parcel, actions: ParcelBoundaryActions) => Node
```

```flow
ParcelBoundaryActions = {
    release: () => void,
    cancel: () => void
}
```

ParcelBoundaries must be given a `childRenderer` function as children. This is called whenever the ParcelBoundary updates.

It is passed a `parcel` and a set of `actions`. The parcel is on the "inside" of the parcel boundary, and is able to update independently of the parcel that was passed into the ParcelBoundary.
The actions can be used to control the ParcelBoundary's action buffer (see the <Link to="/examples/parcelboundary-hold">hold example</Link>). 

The return value of `childRenderer` will be rendered.

```js
// personParcel is a Parcel
<ParcelBoundary parcel={personParcel}>
    {(parcel, actions) => {
        return <input type="text" {...parcel.spreadDOM} />;
    }}
</ParcelBoundary>
```