import React, { useEffect, useState } from 'react';
import AntFieldJsx from './AntFieldJSX';
import antField from '../../helpers/antField';

const AntField:React.FC<{}> = () => {
    const [ settings, setSettings ]= useState<object>({ width:null,height:null,center:{}, objectsSize:null });
    useEffect(()=>{
        const initSettings = antField();
        setSettings({...initSettings});
    },[]);

    return (<AntFieldJsx {...settings}/>);
};

export default AntField;