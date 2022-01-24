export function IsDataEmpty(dataArr){
    let isElementsEmpty = new Boolean(false);
    var _this = this;
    dataArr.forEach(function callback(element){
        if (element == "" || element === undefined || element == null) {
            isElementsEmpty = true;
            return element;
        }
        else{
            isElementsEmpty = isElementsEmpty === true ? true : false;
            return element
        }
    }, _this);
    return isElementsEmpty;
}