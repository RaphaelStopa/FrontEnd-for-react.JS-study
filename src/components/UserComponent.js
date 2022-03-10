import React from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    

    editUser(id){
        <Link to={`/update-employee/${id}` }></Link>
    }

    componentDidMount(){
        UserService.getUsers().then((Response) => {
            this.setState({users: Response.data})
        });
    }




    render (){
        return (
            <div>
                <h1 className="text-center">User List</h1>
                <div>
                        <Link to={'/user/'}>
                            <button >Add User</button>
                        </Link>
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
                                    <td>
                                    <Link to={`/user/${user.id}` }>
                                                 <button>update</button>
                                        </Link>
                                    </td>
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

