import React, { useEffect, useState } from 'react';
import AntFieldJsx from './AntFieldJSX';
import antField from '../../helpers/antField';

const AntField = () => {
    const [ settings, setSettings ]= useState({ width:null,height:null,center:{}, objectsSize:null });
    useEffect(()=>{
        const initSettings = antField();
        setSettings({...initSettings});
    },[]);

    return (<AntFieldJsx {...settings}/>);
};

export default AntField;