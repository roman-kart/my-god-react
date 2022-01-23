import React, {Component} from "react";
import { 
    Button,  
    Input, 
    Label, 
    Card,
    CardBody,
    CardTitle 
} from "reactstrap";
import { LinkedList } from "../DataStruct/LinkedList";
import { ProductOptions } from "../Model/Product";
import { ShopsOptions } from "../Model/Shops";

function product(name, quantity, cost) {
    this.name = name;
    this.quantity = quantity;
    this.cost = cost;
}

export class OrderMainInfo extends Component{
    constructor(props){
        super(props);
        this.addProduct = this.addProduct.bind(this);
        this.state = {userProductListState: [] }
    }

    userProductList = [

    ];

    displayName = OrderMainInfo.displayName;

    // userProductList = [
    //     new product("Apple", 10, 100)
    // ];

    addProduct = () => {
        let productName = document.getElementById("productName").value;
        let productCost = document.getElementById("productCost").value;
        let productQuantity = document.getElementById("productQuantity").value;
        this.userProductList.push(new product(productName, productQuantity, productCost));
        this.setState({
            userProductListState: this.userProductList
        });
    };

    render(){
        let _this = this;
        return(
            <div>
                <div>
                    <Label for="ShopName">
                        Shop name
                    </Label>
                    <Input
                        id="ShopName"
                        name="ShopName"
                        type="select"
                    >
                        <ShopsOptions />
                    </Input>
                </div>
                <div>
                    <Card body>
                        <CardTitle tag="h5">
                            Новый продукт в заказе
                        </CardTitle>
                        <CardBody>
                            <p>
                                Product: <Input type='select' id="productName">
                                    <ProductOptions/>
                                </Input>
                            </p>
                            <p>
                                Cost: <Input type='number' id="productCost"></Input>
                            </p>
                            <p>
                                Quantity: <Input type='number' id="productQuantity"></Input>
                            </p>
                        </CardBody>
                    </Card>
                    <Button onClick={this.addProduct}>
                        Add product
                    </Button>
                </div>
                <Button>
                    Add new order
                </Button>
                <div>
                    {this.state.userProductListState.map(function (item) {
                        return(
                            <Card body>
                                <CardTitle tag="h6">
                                    {item.name}
                                </CardTitle>
                                <CardBody>
                                    Quantity : {item.quantity} <br/>
                                    Cost: {item.cost}
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }
}