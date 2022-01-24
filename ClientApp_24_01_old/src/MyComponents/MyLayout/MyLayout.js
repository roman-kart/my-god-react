import React, {Component} from "react";
import { Col, Container, Row } from "reactstrap";
import { MyNavMenu } from "../MyNavMenu/MyNavMenu";

export class MyLayout extends Component{
    static displayName = MyLayout.displayName;

    render(){
        return(
            <div>
                <MyNavMenu />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}