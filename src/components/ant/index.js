import React,{ useEffect, useState} from "react";
import AntJSX from "./AntJSX";
import dirSwitcher from "../../helpers/dirSwitcher";
import directionOfAnt from "../../helpers/directionOfAnt";

const initAntSettings = {
    direction:"top",
    action:"bite",
    rotate:90,
    coords:{left:0,bottom:0}
};

const Ant = ({ objectsSize, center:{x=0,y=0} }) =>{
    const correctionOf = ( trg )=> trg+objectsSize;
    const [ant, setAnt]= useState({
        ...initAntSettings
    });
    const [antsBites, setAntsBites ]= useState([]);

    useEffect(()=>{
        ant.coords = {
            bottom: correctionOf(y),
            left: correctionOf(x)
            };
        setAnt(ant);
    },[x,y]);

    useEffect(()=>{
        const antMoves = setInterval(function(){
            const flagRotation = antsBites.some(
                (item) => item.bottom === ant.coords.bottom && item.left === ant.coords.left
            );
            if(flagRotation){
                setAntsBites(
                    antsBites
                        .filter(
                            (item)=> item.bottom !== ant.coords.bottom || item.left !== ant.coords.left
                        )
                );
            }else{
                setAntsBites([{...ant.coords},...antsBites]);
            }

            ant.direction = dirSwitcher(ant.direction,flagRotation);
            ant.coords ={
            ...directionOfAnt(ant.direction,{ ...ant.coords, objectsSize })
            };

            setAnt({...ant});

        },1000);

        return () => clearInterval(antMoves);
    });
    const props = {
        direction:'left',
        coords:ant.coords,
        objectsSize,
        antsBites
    };
    return <AntJSX {...props }  />;
};

export default Ant;
