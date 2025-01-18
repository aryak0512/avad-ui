import React from "react";


export class MainContent extends React.Component {

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
        return this.state.products.map((product, index) => (

            <div className="card border-secondary mb-3" key={product.id}>
                <div className="card-header">{product.id}</div>
                <div className="card-body">
                    <h4 className="card-title">{this.getProductName(product.name)}</h4>
                    <p className="card-text">Price : $ {(product.price == null) ? "No price" : product.price}</p>
                    <p className="card-text">Quantity available
                        : {(product.quantity === 0) ? "Out of stock!" : product.quantity}</p>
                    <p className="card-text"><img src={product.photo} alt={product.name}/></p>
                    <button type="button" className="btn btn-primary" onClick={() => this.buyProduct(product, index)}>BUY</button>
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

    buyProduct(product, index){
        console.log("buying product : ", product);
        let products = this.state.products;
        products[index].quantity = products[index].quantity - 1;
        this.setState({products: products});
    }
}