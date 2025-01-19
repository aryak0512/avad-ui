import {Component} from "react";
import {NavLink} from "react-router-dom";

export class Navbar extends Component {

    render(){

        return (
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">A.V.A.D.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">

                            {/* render the link conditionally */}
                            {this.props.isLoggedIn ? (<li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Cart</NavLink>
                            </li>) : ""}

                            {/* render the link conditionally */}
                            {!this.props.isLoggedIn ? (<li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>) : ""}

                            {/* render the link conditionally */}
                            {this.props.isLoggedIn ? (<li className="nav-item">
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                            </li>) : ""}


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                </div>
            </nav>
        )
    }
}