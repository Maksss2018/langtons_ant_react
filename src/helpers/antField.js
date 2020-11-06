const antField = () => {
    const { innerWidth:width, innerHeight } = window;
    const  height = Math.floor((innerHeight-210));
    const objectsSize = width/100;
    return {
        width:width-4,
        height,
        objectsSize,
        center: {x:Math.floor(width/2),y:Math.floor(height/2)}
    }
};

export default antField;