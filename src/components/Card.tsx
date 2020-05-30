import React from 'react';
import { Markdown } from './Markdown';
import { rawMarkupExample } from '../interface/RawMarkup';
import { errorUser } from '../interface/User';

export const Card = () => {

    return (
        <div>
            <Markdown props={rawMarkupExample} />
        </div>
    )
}


