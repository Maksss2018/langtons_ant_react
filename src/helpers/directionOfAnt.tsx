const direction = (str,{ bottom, left, objectsSize:stepSize })=>{

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