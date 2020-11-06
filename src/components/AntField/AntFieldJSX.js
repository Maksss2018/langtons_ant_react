import React from 'react';
import Ant from '../ant/';

const AntFieldJsx = ({width=0, height=0, ...initialData}) =>(
    <div style={{
        width:`${width}px`,
        height:`${height}px`,
    }}>
        <Ant {...initialData} />
    </div>
);

export default AntFieldJsx;