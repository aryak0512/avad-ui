import React, {Component} from "react";
import {Navbar} from "./Navbar";
import {ShoppingCart} from "./ShoppingCart";
import {Login} from "./Login";

/**
 * The top level, root component. All components are nested within this component.
 * This component gets loaded through index.js
 *
 * @author aryak
 */
export class App extends Component {

    render(){
        return (
            <React.Fragment>
                <Navbar/>
                {/*<ShoppingCart/>*/}
                <ShoppingCart/>
            </React.Fragment>
        )
    }
}