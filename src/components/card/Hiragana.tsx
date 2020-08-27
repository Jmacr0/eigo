import React from 'react';
import { CardTypes as OwnTypes } from './Types';

export const Hiragana = React.memo((hiragana: OwnTypes.hiragana) => (
    <h3>{hiragana}</h3>
));