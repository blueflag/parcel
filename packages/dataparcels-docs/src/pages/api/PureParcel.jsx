// @flow
import type {Node} from 'react';
import React from 'react';
import {Wrapper, Text, Typography} from 'dcme-style';
import Markdown from 'pages/api/PureParcel.md';
import PageLayout from 'component/PageLayout';

export default () => <PageLayout
    content={() => <Typography><Markdown /></Typography>}
/>;
