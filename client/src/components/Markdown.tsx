import React from 'react';
import marked from 'marked';
import {User} from '../interface/User';
import {RawMarkup} from '../interface/RawMarkup';

export const Markdown: React.FC<RawMarkup> =  ({text}) => {

    const convertToMarkdown = () => {
        var rawMarkup = marked(text, 
        {sanitize: true});
        return {__html: rawMarkup};
    }
    
    return (
        <div dangerouslySetInnerHTML={convertToMarkdown()}>
        </div>
    )
}

Markdown.defaultProps = {
    text: "Insert Markdown"
}
