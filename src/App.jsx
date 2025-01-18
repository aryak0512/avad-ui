import React, {Component} from "react";
import {Navbar} from "./Navbar";
import {MainContent} from "./MainContent";

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
                <MainContent/>
            </React.Fragment>
        )
    }
}