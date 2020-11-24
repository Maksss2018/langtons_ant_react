import React,{ FunctionComponent, useEffect, useState} from "react";
import AntJSX from "./AntJSX";
import dirSwitcher from "../../helpers/dirSwitcher";
import directionOfAnt from "../../helpers/directionOfAnt";

const initAntSettings = {
    direction:"top",
    action:"bite",
    rotate:90,
    coords:{left:0,bottom:0}
};

type CoordTypes = { bottom: number, left: number} ;

type CenterType = {x:number,y:number};

interface AntProps { objectsSize?:number , center?:CenterType | any }

const Ant:FunctionComponent<AntProps> = ({ objectsSize=0, center:{x=0,y=0} }) =>{
    const correctionOf = ( trg:number )=> trg+objectsSize;
    const initCenter:CoordTypes = {
        bottom: correctionOf(y),
        left: correctionOf(x)
    };
    const [ant, setAnt]= useState<{ coords:CoordTypes | any, direction:string | any }>({
        ...initAntSettings
    });
    const [antsBites, setAntsBites ]= useState<any>([]);
    const  isEqualCoords:( prop:CoordTypes ) => boolean  =
        ({ bottom, left }) => bottom === ant.coords.bottom && left === ant.coords.left;
    const  isNotEqualCoords:(arg:CoordTypes) =>boolean =
        (item)=> item.bottom !== ant.coords.bottom || item.left !== ant.coords.left;

    useEffect(()=>{
        ant.coords = initCenter;
        setAnt(ant);
    },[x,y]);

    useEffect(()=>{
        const antMoves = setInterval(function(){
            const flagRotation = antsBites.some(isEqualCoords);
            if(flagRotation){
                setAntsBites(
                    antsBites
                        .filter(isNotEqualCoords)
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
