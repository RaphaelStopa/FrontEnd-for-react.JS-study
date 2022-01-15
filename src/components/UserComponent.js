import React from "react";
import { useHistory } from 'react-router-dom';
import UserService from "../services/UserService";

class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        this.addUser = this.addUser.bind(this);
    }
    
    componentDidMount(){
        UserService.getUsers().then((Response) => {
            this.setState({users: Response.data})
        });
    }

    // nao entendi
    addUser(){
        this.props.history.push('/add-users');
    }


    render (){
        return (
            <div>
                <h1 className="text-center">User List</h1>
                <div>
                    <button onClick={this.addUser}>Add User</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>User Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.fistName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent;
