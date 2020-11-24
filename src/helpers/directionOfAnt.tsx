type ParamsType = {bottom:number, left:number, objectsSize:number}
const direction= (str:string,{ bottom, left, objectsSize:stepSize }:ParamsType)=>{

    if (str === "left") {
        return {left: left - stepSize, bottom};
    } else if (str === "right") {
        return {left: left + stepSize, bottom};
    } else if (str === "top") {
        return {left, bottom: bottom + stepSize};
    } else if (str === "bottom") {
        return {left, bottom: bottom - stepSize};
    }
};

export default direction;