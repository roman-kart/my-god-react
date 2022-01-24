import React, {Component} from "react";
import {Form, FormGroup, Label} from 'reactstrap';
import { FactsAboutOrderring } from "../Notes/FactsAboutOrderring";
import { OrderMainInfo } from "../OrderData/OrderMainInfo";

export class NewOrder extends Component{
    static displayName = NewOrder.displayName;

    render(){
        return(
            <div>
                <h1>Новый заказ</h1>
                <div>
                    
                </div>
                <div>
                    <OrderMainInfo />
                </div>
            </div>
        );
    }
}