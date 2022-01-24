import React, {Component} from "react";
import { Button, Card, CardBody, CardTitle, Input } from "reactstrap";

export class OrderDetailMinimal extends Component{
    static displayName = OrderDetailMinimal.displayName;

    constructor(props){
        super(props);
        this.ProductId = props.product.ProductId;
        this.ProductName = props.product.ProductName;
        this.Quantity = props.product.Quantity;
        this.Cost = props.product.Cost;
        this.EditFunction = props.product.EditFunction;
        this.DeleteFunction = props.product.DeleteFunction;
    }

    ProductId;
    ProductName;
    Quantity;
    Cost;
    EditFunction;
    DeleteFunction;

    render(){
        return(
            <div>
                <Card body>
                    <CardTitle tag="h5">
                        {this.ProductName}
                    </CardTitle>
                    <CardBody>
                        <p>
                            Cost: <Input value={this.props.product.Cost} type='number' id="productCost"></Input>
                        </p>
                        <p>
                            Quantity: <Input value={this.props.product.Quantity} type='number' id="productQuantity"></Input>
                        </p>
                        <Button color="primary" onClick={this.props.product.EditFunction}>
                            Edit
                        </Button>
                        <Button color="danger" onClick={this.props.product.DeleteFunction}>
                            Delete
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}