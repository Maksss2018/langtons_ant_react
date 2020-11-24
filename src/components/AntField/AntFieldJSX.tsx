import React from 'react';
import { Row } from 'reactstrap';
import Ant from '../ant/';

interface Props {
    width?:number | null,
    height?: number | null,
    initialData?: {objectsSize:number  | null, center:object}
}

const AntFieldJsx:React.FC<Props> = ({width=0, height=0, ...initialData}) =>(
    <Row  style={{
         height:`${height}px`,
    }}>
        <Ant {...initialData} />
    </Row>
);

export default AntFieldJsx;