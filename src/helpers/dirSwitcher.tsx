const dirSwitcher = (str,flag)=>{
    if ((str === "right" || str === "left") && !flag) {
         return  str === "right" ? "bottom":"top";
    } else if ( (str === "right" || str === "left") && flag) {
        return  str === "right" ? "top":"bottom";
    } else if ( (str === "top" || str === "bottom") && flag) {
        return  str === "top" ? "left":"right";
    } else if ( (str === "top" || str === "bottom") && !flag) {
        return  str !== "top" ? "left":"right";
    }
};
export default dirSwitcher;