import React, {Component} from "react";
import { productOption } from "./Product";

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

export class ProductOptionWithIndex extends Component{
    constructor(props){
        super(props);
    }
    productList = [
        new productOption(1, "Golden Apple"),
        new productOption(2, "Granny Apple"),
        new productOption(3, "Pepsi 1.0L"),
        new productOption(4, "Coca-cola 1.0L"),
        new productOption(5, "Apple Juice 1.0L")
    ]

    render(){
        var _this = this;
        return(
            Array.prototype.map.call(this.productList, function (item) {
                return <option key={`productOption${item.id}`}>
                    {item.name}
                </option>
            }, _this)
        );
    }
}