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
import { ProductOptions } from "../Model/ProductOptions";
import { ShopsOptions } from "../Model/Shops";
import { product } from "../Model/Product";
import { CheckProductAll } from "../CheckFunctions.js/CheckProductAll";

export class OrderMainInfo extends Component{
    constructor(props){
        super(props);
        this.addProduct = this.addProduct.bind(this);
        this.state = {userProductListState: [], alertForUser: [], alertForUserAddedProduct: [] }
    }

    // продукты, которые добавил пользователя
    userProductList = [

    ];

    // предупреждения для пользователя
    alertForUser = [

    ];

    alertForUserAddedProduct = [

    ];

    displayName = OrderMainInfo.displayName;

    // userProductList = [
    //     new product("Apple", 10, 100)
    // ];

    addProduct = () => {
        let productName = document.getElementById("productName").value;
        let productCost = document.getElementById("productCost").value;
        let productQuantity = document.getElementById("productQuantity").value;

        let productForAdd = new product(1, productName, productQuantity, productCost);

        let isProdValid = CheckProductAll(
            productForAdd, 
            [productName, productQuantity, productCost],
            [productQuantity],
            [productCost],
            this.userProductList,
            this.alertForUser
        );

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
                                <Label for="productName">Product: </Label>
                                <Input type='select' id="productName">
                                    <ProductOptions/>
                                </Input>
                            </p>
                            <p>
                                <Label for="productCost">Cost: </Label>
                                <Input type='number' id="productCost"></Input>
                            </p>
                            <p>
                                <Label for="productQuantity">Quantity: </Label>
                                <Input type='number' id="productQuantity"></Input>
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
                    <div id="alertForUser">
                        {this.state.alertForUserAddedProduct.map((item) => {
                            return(
                                <Alert color="danger">
                                    {item}
                                </Alert>
                            );
                        })}
                    </div>

                    {this.state.userProductListState.map(function (item) {
                        return(
                            <Card body>
                                <CardTitle tag="h6">
                                    {item.name}
                                </CardTitle>
                                <CardBody>
                                    <Label for={`productCardQuantity${item.id}`}>Quantity: </Label>
                                    <Input type="number" placeholder={item.quantity} id={`productCardQuantity${item.id}`}></Input><br/>

                                    <Label for={`productCardCost${item.id}`}>Cost: </Label>
                                    <Input type="number" placeholder={item.cost} id={`productCardCost${item.id}`}></Input>

                                    <Button 
                                        onClick={() => {
                                            _this.userProductList.splice(
                                                _this.userProductList.indexOf(item), 1
                                            );
                                            _this.setState({
                                                userProductList : _this.userProductList
                                            });
                                        }}
                                        color="danger"
                                    >
                                        Delete
                                    </Button>

                                    <Button
                                        color="success"
                                        onClick={() => {
                                            const indexOfElementForEdit = _this.userProductList.indexOf(item);
                                            let quantity = document.getElementById(`productCardQuantity${item.id}`).value;
                                            let cost = document.getElementById(`productCardCost${item.id}`).value;

                                            // если пользователь не изменил одно из свойств, необходимо присвоить ему существующее значение из элемента 
                                            quantity = quantity === "" ? item.quantity : quantity;
                                            cost = cost === "" ? item.cost : cost;

                                            if (CheckProductAll(
                                                new product(-100, "undefined"),
                                                [quantity, cost],
                                                [quantity],
                                                [cost],
                                                _this.userProductList,
                                                _this.alertForUserAddedProduct
                                                )) {
                                                _this.userProductList[indexOfElementForEdit].quantity = quantity;
                                                _this.userProductList[indexOfElementForEdit].cost = cost;
                                                _this.setState({
                                                    userProductList: _this.userProductList
                                                });
                                            }
                                            else{
                                                // убираем введенные пользователем значения
                                                document.getElementById(`productCardQuantity${item.id}`).value = null;
                                                document.getElementById(`productCardCost${item.id}`).value = null;
                                            }
                                            // обновляем список предупреждений для пользователя
                                            _this.setState({
                                                alertForUserAddedProduct: _this.alertForUserAddedProduct
                                            });
                                        }}
                                    >
                                        SaveChanges
                                    </Button>

                                </CardBody>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }
}