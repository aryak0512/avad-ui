import React from "react";
import {Product} from "./Product";


export class ShoppingCart extends React.Component {

    state = {products: []};

    constructor(props){
        console.log("Constructor called")

        // initialise the state
        super(props);

    }

    render(){

        console.log("render called");
        return (<React.Fragment>

            {this.printBasicInfo()}

            {this.loadProductCard()}

        </React.Fragment>)
    }

    /**
     * fetch data from database, make HTTP calls etc.
     */
    componentDidMount = async () => {

        let promise = await fetch("http://localhost:8081/products", {method: "GET"});
        let data = await promise.json()
        this.setState({products: data})
        console.log("componentDidMount called!");
    }

    componentDidUpdate(prevProps, prevState){

        // can make DB/HTTP calls and update at backend

        console.log("componentDidUpdate called");
        console.log("Prev props : " + JSON.stringify(prevProps) + " Current props : " + JSON.stringify(this.props));
        console.log("Prev state : " + JSON.stringify(prevState) + " Current state : " + JSON.stringify(this.state));
    }

    /**
     * executed when parent component removes child component or user routing to different compoenent
     */
    componentWillUnmount(){
        // typically for cleanup code, cancel http requests if any
        console.log("componentWillUnmount called");
    }

    componentDidCatch(error, errorInfo){
        console.log("componentDidCatch called");
        console.log(error);
    }

    /**
     * by making this as arrow function, we refer the method to point to component state
     * and not button state while using "this.setState" method
     */
    onClick = () => {
        console.log("clicked");
        this.setState({name: "Rajesh", description: "Mech Engineering"});
    }


    /**
     * iterate over products array, specify the unique key
     * @returns {unknown[]}
     */
    loadProductCard = () => {
        return this.state.products.map((product, index) => (


            <div key={product.id}>
                <Product product={product}
                         index={index}
                         buyProduct={this.buyProduct}
                         removeProduct={this.removeProduct}
                />
            </div>

        ))
    }

    printBasicInfo(){
        return (
            <div>
                <h1>Hi {this.state.name}</h1>
                <h3>Your description is : {this.state.description}</h3>
                <a href="https://www.google.com">{this.state.email}</a>
            </div>)
    }

    /**
     * a function supplied to Product - the child component for add to cart
     * @param product
     */
    buyProduct = (product) => {
        console.log("buy", product);
        let allProducts = this.state.products;
        let idx = allProducts.indexOf(product);

        if (allProducts[idx].quantity > 0) {
            allProducts[idx].quantity--;
            this.setState({products: allProducts});
        }
    }

    /**
     * a function supplied to Product - the child component for delete from cart
     * @param product
     */
    removeProduct = (product) => {
        console.log("remove", product);
        let allProducts = this.state.products;
        let idx = allProducts.indexOf(product);
        if (allProducts[idx].quantity < 10) {
            allProducts[idx].quantity++;
            this.setState({products: allProducts});
        }

    }

}