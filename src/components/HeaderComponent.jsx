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
                        <div><a href='https://javaguides.net'>User sei la</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;