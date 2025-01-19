import React, {Component} from "react";
import {ShoppingCart} from "./ShoppingCart";
import {Login} from "./Login";
import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./Navbar";
import {PageNotFound} from "./PageNotFound";
import {createBrowserHistory} from "history";
import {Product} from "./Product";

const customHistory = createBrowserHistory();

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
            <HistoryRouter history={customHistory}>
                <Navbar isLoggedIn={this.state.isLoggedIn}/>
                <Routes>

                    <Route path="/cart" element={<ShoppingCart history={customHistory}/>}>
                    </Route>

                    {/* we passed a mutator method as prop to the child component */}
                    <Route path="/"
                           element={<Login updateLoginState={this.updateLoginState} history={customHistory}/>}>
                    </Route>

                    <Route path="*" element={<PageNotFound history={customHistory}/>}>
                    </Route>

                </Routes>
            </HistoryRouter>
        )
    }

    // this will update the user's login state, method will be invoked by child component (login)
    updateLoginState = (state) => {
        this.setState({"isLoggedIn": state});
    }
}