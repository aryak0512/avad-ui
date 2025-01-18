import React, {Component} from "react";

export class Product extends Component {

    state = {product: this.props.product, index : this.props.index};

    render(){
        return <React.Fragment>

            <div className="card border-secondary mb-3" key={this.state.product.id}>
                <div className="card-header">{this.state.product.id}</div>
                <div className="card-body">
                    <h4 className="card-title">{this.getProductName(this.state.product.name)}</h4>
                    <p className="card-text">Price : $ {(this.state.product.price == null) ? "No price" : this.state.product.price}</p>
                    <p className="card-text">Quantity available : {(this.state.product.quantity <= 0) ? "Out of stock!" : this.state.product.quantity}</p>
                    <p className="card-text"><img src={this.state.product.photo} alt={this.state.product.name}/></p>
                    <button type="button" className="btn btn-primary"
                            onClick={() => this.buyProduct(this.state.product, this.state.index)}>BUY
                    </button>
                </div>
            </div>

        </React.Fragment>
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

    buyProduct(product, index){
        console.log("buying product : ", product);
        let p = this.state.product;
        p.quantity--;
        this.setState({product: p});
    }
}