import React, {Component} from "react";
import {ShoppingCart} from "./ShoppingCart";
import {Login} from "./Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./Navbar";
import {PageNotFound} from "./PageNotFound";

/**
 * The top level, root component. All components are nested within this component.
 * This component gets loaded through index.js
 *
 * @author aryak
 */
export class App extends Component {

    state = {};

    constructor(props){
        super(props);
        this.setState({"isLoggedIn": false});
    }

    render(){
        return (
            <BrowserRouter>
                <Navbar isLoggedIn={this.state.isLoggedIn}/>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<ShoppingCart/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}