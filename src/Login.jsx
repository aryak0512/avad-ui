import {Component} from "react";

export class Login extends Component {

    constructor(props){
        super(props);
        this.state = {email: "", password: "", message: ""};
    }


    render(){
        return <div>

            <form>

                <div>
                    <label htmlFor="email" className="form-label mt-4">Email address</label>
                    <input type="email" className="form-control" id="email"
                           aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email}
                           onChange={(event) => this.setState({email: event.target.value})}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           placeholder="Password" value={this.state.password}
                           onChange={(event) => this.setState({password: event.target.value})}/>
                </div>

                <div className="form-group">{this.state.message}</div>

                <div className="d-grid gap-2">
                    <br/>
                    <button className="btn btn-lg btn-primary" type="button"
                            onClick={() => this.validateCredentials()}>Login
                    </button>
                </div>
            </form>

        </div>
    }

    /**
     * some basic validations & send to server for authentication
     */
    validateCredentials = () => {
        if (this.state.email.length < 3) {
            this.setState({message: "Please enter a valid email address"});
            return;
        }
        console.log(this.state.email);
        console.log(this.state.password);
    }
}