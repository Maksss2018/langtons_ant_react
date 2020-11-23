import React from 'react';
import { Row } from 'reactstrap';
import Ant from '../ant/';

const AntFieldJsx = ({width=0, height=0, ...initialData}) =>(
    <Row  style={{
         height:`${height}px`,
    }}>
        <Ant {...initialData} />
    </Row>
);

export default AntFieldJsx;