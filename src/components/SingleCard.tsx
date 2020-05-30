import React from 'react';
import { Card } from 'antd';
import { Markdown } from './Markdown';
import { rawMarkupExample, rawMarkupCodeExample} from '../interface/RawMarkup';

export const SingleCard = () => {
    return (
        <div style={{backgroundColor: "grey"}}>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300, height: 500 }}>
                <Markdown text={rawMarkupExample.text} />
                <Markdown text={rawMarkupCodeExample.text} />
            </Card>
        </div>
    )
}


