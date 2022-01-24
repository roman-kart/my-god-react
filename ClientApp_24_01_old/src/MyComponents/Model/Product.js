import React, {Component} from "react";

export class ProductOptions extends Component{
    constructor(props){
        super(props);
    }
    productList = [
        "Apple",
        "Orange",
        "Apple Juice",
        "Pancakes",
        "Coca-cola",
        "Pepsi"
    ]

    render(){
        var _this = this;
        return(
            Array.prototype.map.call(this.productList, function (item) {
                return <option key={item}>
                    {item}
                </option>
            }, _this)
        );
    }
}