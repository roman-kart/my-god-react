import React, {Component} from "react";
import { Button, Container } from "reactstrap";
import something from './Home.module.css';

export class Home extends Component{
    static displayName = Home.displayName;

    render(){
        return(
            <div>
                <div>
                    <h1>Добро пожаловать!</h1>
                    <p>
                        Рад приветствовать вас на главной странице проекта HowMuch!
                        Цель нашего проекта - помочь людям не совершать лишних трат.
                    </p>
                </div>
            </div>
        );
    }
}