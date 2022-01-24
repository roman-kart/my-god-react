import React, { Component } from "react";
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";

export class FactsAboutOrderring extends Component{
    static displayName = FactsAboutOrderring.displayName;

    constructor(props){
        super(props);

        this.GetFact = this.GetFact.bind(this);
    }

    defaultFacts = [
        "Привычные для нас бутылки из пластика разлагаются около 500-550 лет.",
        " Каждый год люди выбрасывают на свалку примерно 123-126 миллионов еще нормально работающих смартфонов, так как они просто надоедают своим хозяевам или же в продаже появляется новая модель.",
        "Для выращивания 1 килограмма картошки в среднем тратится 120 литров воды, а для получения 1 килограмма говядины – около 13.000 литров, в сотню с лишним раз больше."
    ];

    GetFact(){
        const index =  Math.floor(Math.random() * ((this.defaultFacts.length - 1) - 0 + 1));
        return this.defaultFacts[index];
    };

    render(){
        return(
            <div>
                <Button
                    id="interestingFact"
                    type="button"
                >
                    Интересный факт
                </Button>
                <UncontrolledPopover
                    placement="bottom"
                    target="interestingFact"
                    trigger="legacy"
                >
                    <PopoverHeader>
                        Интересный факт
                    </PopoverHeader>
                    <PopoverBody>
                        {this.GetFact()}
                    </PopoverBody>
                </UncontrolledPopover>
            </div>
        );
    }
}