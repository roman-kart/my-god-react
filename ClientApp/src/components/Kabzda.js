import React, { Component } from "react";
import SimpleCounter from "./simpleCounter";

export class Kabzda extends Component{
    static displayName = Kabzda.name;

    constructor(props){
        super(props);
        this.state = {arr : [12, 12, 23, 35, 12]};
    }

    static renderTable(arr){
        return(
            <div>
                <table className="table table-bordered table-hover">
                    <thead className="thead thead-dark">
                        <th>Num</th>
                    </thead>
                    <tbody>
                        {arr.map( item => 
                            <tr>
                                <td>{item}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    render(){
        let content = Kabzda.renderTable(this.state.arr);
        return(
            <div>
                <div>
                    Kabzda!!1
                </div>
                {content}
                <SimpleCounter/>
            </div>
        );
    }
}