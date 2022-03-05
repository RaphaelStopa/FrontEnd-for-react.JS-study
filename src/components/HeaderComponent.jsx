import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <div><a href='https://www.google.com/'>Header link</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;