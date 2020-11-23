import * as React from 'react';
import logo from "../../logo.svg";

const AntJSX = ({ coords, objectsSize:size,antsBites=[] }) => (<span>
    {
            antsBites.length !== 0 ? antsBites.map((item,ind)=>(
                <div
                    key={`ants-bites-${ind}`}
                    style={{
                    position:"absolute",
                    display:"block",
                    background:"red",
                    height:size,
                    width:size,
                    ...item
                    }}
                />)):""
        }
        <img
            style={{
                ...coords,
                height:size,
                width:size,
            }}
            src={logo}
            className="App-logo"
            alt="logo" />
    </span>);

export default AntJSX;