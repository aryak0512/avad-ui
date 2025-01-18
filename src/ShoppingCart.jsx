import React from "react";
import {Product} from "./Product";


export class ShoppingCart extends React.Component {

    state = {
        "name": "aryak",
        "description": "Software Engineering",
        "email": "aryak@gmail.com",
        "products": [
            {id: 1, name: null, price: 200, quantity: 10, photo: "https://picsum.photos/id/1001/60"},
            {id: 2, name: "car", price: 20000, quantity: 3, photo: "https://picsum.photos/id/1002/60"},
            {id: 3, name: "laptop", price: 1200, quantity: 10, photo: "https://picsum.photos/id/1003/60"},
            {id: 4, name: "Tea", price: 23, quantity: 0, photo: "https://picsum.photos/id/1000/60"},
        ]
    };

    render(){

        return (<React.Fragment>

            {this.printBasicInfo()}

            {this.loadProductCard()}

        </React.Fragment>)
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
                         index = {index}
                />
            </div>

        ))
    }

    printBasicInfo(){
        return (
            <div>
                <h1>Hi {this.state.name}</h1>
                <h3>Your description is : {this.state.description}</h3>
                <a href="#">{this.state.email}</a>
            </div>)
    }


}