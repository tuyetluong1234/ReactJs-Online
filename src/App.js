import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    name: "Abc",
                    level: 0 // 0 Small, 1 Medium, 2 High
                },
                {
                    name: "Def",
                    level: 1 // 0 Small, 1 Medium, 2 High
                },
                {
                    name: "Ghj",
                    level: 2 // 0 Small, 1 Medium, 2 High
                }
            ]
        };
    }

 

    render() {
    	// console.log(this.state.items)
        let items= this.state.items;
        return (
            <div className="row">
                {/* TITLE : START */}
                <Title />
                {/* TITLE : END */}
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}
                {/* FORM : START */}
                <Form />
                {/* FORM : END */}
                {/* LIST : START */}
                <List items = {items}/>
            </div>
        );
    }
}

export default App;
