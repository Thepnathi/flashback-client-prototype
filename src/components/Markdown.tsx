import React from 'react';
import marked from 'marked';
import {User} from '../interface/User';
import {RawMarkup} from '../interface/RawMarkup';

type Props = RawMarkup & User;

export const Markdown: React.FC<Props> =  props => {

    const rawmarkup = props as RawMarkup;
    const user = props as User;

    const convertToMarkdown = () => {
        var rawMarkup = marked('This is _Markdown_ \n\n**Title One**\n\n # Hello', 
        {sanitize: true});
        return {__html: rawMarkup};
    }

    return (
        <div dangerouslySetInnerHTML={convertToMarkdown()}>
        </div>
    )
}
