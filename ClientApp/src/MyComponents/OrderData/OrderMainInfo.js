import React, {Component} from "react";
import { 
    Button,  
    Input, 
    Label, 
    Card,
    CardBody,
    CardTitle,
    Alert 
} from "reactstrap";
import { CheckElementInList } from "../CheckFunctions.js/CheckElementInList";
import { CheckEmptyConstraint } from "../CheckFunctions.js/CheckEmptyConstraint";
import { IsDataEmpty } from "../CheckFunctions.js/IsEmpty";
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
        this.state = {userProductListState: [], alertForUser: [] }
    }

    // продукты, которые добавил пользователя
    userProductList = [

    ];

    // предупреждения для пользователя
    alertForUser = [

    ];

    displayName = OrderMainInfo.displayName;

    // userProductList = [
    //     new product("Apple", 10, 100)
    // ];

    addProduct = () => {
        let productName = document.getElementById("productName").value;
        let productCost = document.getElementById("productCost").value;
        let productQuantity = document.getElementById("productQuantity").value;

        let productForAdd = new product(productName, productQuantity, productCost);

        let isProdValid = true;

        // если не прошел проверку на пустые значения, то делаем продукт невалидным
        if (!CheckEmptyConstraint([productName, productQuantity, productCost], this.alertForUser)) {
            isProdValid = false;
        }
        // если такой продукт уже есть в списке, то делаем продукт невалидным
        if (CheckElementInList(productForAdd, this.userProductList, this.alertForUser)) {
            isProdValid = false;
        }

        console.log(isProdValid);

        if (isProdValid) {
            this.userProductList.push(productForAdd);
            this.setState({
                userProductListState: this.userProductList
            });   
        }

        // обновляем предупреждения в любом случае
        this.setState({
            alertForUser : this.alertForUser
        });
    };

    render(){
        let _this = this;
        return(
            <div>
                <div id="alertForUser">
                    {this.state.alertForUser.map((item) => {
                        return(
                            <Alert color="danger">
                                {item}
                            </Alert>
                        );
                    })}
                </div>
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
                <Button color="primary">
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