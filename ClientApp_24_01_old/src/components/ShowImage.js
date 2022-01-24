import React, { Component } from 'react';

export class ShowImage extends Component {
    static displayName = this.displayName;

    render() {
        return (
            <div>
                <h1>Look at this kind boy!</h1>
                <img src='./images/pexels-fotostudio-all-eyes-on-you-10239276.jpg' alt='Boy looks at the sea' />
                <div>
                    <a href='https://google.com' target='_self'>Link</a><br/>
                    <a href='https://google.com' target='_self'>Link</a><br/>
                    <a href='https://google.com' target='_self'>Link</a><br/>
                    <a href='https://google.com' target='_self'>Link</a><br/>
                    <a href='https://google.com' target='_self'>Link</a><br/>
                    <a href='https://google.com' target='_self'>Link</a><br/>
                </div>
            </div>
        );
    }
}