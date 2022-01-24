import React, {Component} from "react";

export class ShopsOptions extends Component{
    getShopList(){
        return [
            "Нет магазина",
            "Другой магазин",
            "Ашан",
            "Перекресток",
            "Дикси",
            "Пятерочка",
            "Атак",
            "Billa"
        ];
    };
    ShopList = this.getShopList();
    render(){
        var _this = this;
        return(
            Array.prototype.map.call(this.ShopList, function (item) {
                return <option key={item}>
                    {item}
                </option>
            }, _this)
        );
    }
}