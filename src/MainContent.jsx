import React from "react";


export class MainContent extends React.Component {

    state = {
        "name": "aryak",
        "description": "Software Engineering",
        "email": "aryak@gmail.com",
        "products": [
            {id: 1, name: null, price: 200, quantity: 10},
            {id: 2, name: "car", price: 20000, quantity: 3},
            {id: 3, name: "laptop", price: 1200, quantity: 10},
            {id: 4, name: "Tea", price: 23, quantity: 0},
        ]
    };

    render(){

        return (<React.Fragment>

            {this.printBasicInfo()}

            <button type="button" className="btn btn-primary" onClick={this.onClick}>CLICK ME</button>

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
     * can hold any complex validation logic here
     * @param name
     * @returns {*|string}
     */
    getProductName = (name) => {

        if (name)
            return name;
        else
            return "Unknown Product";
    }

    /**
     * iterate over products array, specify the unique key
     * @returns {unknown[]}
     */
    loadProductCard = () => {
        return this.state.products.map((item, index) => (

            <div className="card border-secondary mb-3" key={item.id}>
                <div className="card-header">{item.id}</div>
                <div className="card-body">
                    <h4 className="card-title">{this.getProductName(item.name)}</h4>
                    <p className="card-text">Price : $ {(item.price == null) ? "No price" : item.price}</p>
                    <p className="card-text">Quantity available
                        : {(item.quantity === 0) ? "Out of stock!" : item.quantity}</p>
                </div>
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