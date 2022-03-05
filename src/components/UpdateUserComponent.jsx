import React, { Component } from 'react';
import UserService from '../services/UserService';
import { Link, useParams } from "react-router-dom";

// function BlogPost() {
//     const { id } = useParams();
//   }



class UpdateUserComponent extends Component {
    
    
    constructor(props){
        super(props)
        
        this.state = {
            // TODO AQUI NAO PODE SER ASSIM SO FIZ PARA SER MAIS SIMPLES E RAPIDO
            ID: window.location.href.split("/").pop(),
            // id: this.props.match.params,
            firstName: '',
            lastName: '',
            email: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }


    


    componentDidMount(){


        // https://www.youtube.com/watch?v=XkVpb_8IPUM

        // const {id} = useParams();
        // console.log(id)
        
        UserService.getUserById(this.state.id).then((res) =>{
            
            let user = res.data;
            this.setState({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            })
        })
    }


    updateUser = (e) =>{
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log('employee => ' +  JSON.stringify(user))
        UserService.updateUser(user, this.state.id)
        // Todo fazer um redirect
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value})
    }

    


    render() {
        return (
            <div>
                <div>
                    <div>
                        <h3>Upadate User</h3>
                        <div>
                            <form>
                                <div>
                                    <label>First Name:</label>
                                    <input placeholder='First Name' name="fistName" value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                                </div>
                                <div>
                                    <label>Last Name:</label>
                                    <input placeholder='Last Name' name="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                                </div>
                                <div>
                                    <label>Email Address:</label>
                                    <input placeholder='Email Adress' name="email" value={this.state.email} onChange={this.changeEmailHandler}></input>
                                </div>
                                <button onClick={this.updateUser}>Save</button>
                                <div> <Link to={'/users'}><button>Cancel</button></Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default UpdateUserComponent;