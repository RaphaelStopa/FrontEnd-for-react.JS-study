import { useParams, Link } from "react-router-dom";
import UserService from '../services/UserService';
import {useState } from 'react';


function User() {

    // colocar os dois metodos e aparar o updae e create
    let { id } = useParams();
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    
    UserService.getUserById(id).firstName

    function updateUser(e){
        e.preventDefault();
        if(id != -1) {
        let user = {firstName: firstName, lastName: lastName, email: email};
        console.log('employee => ' +  JSON.stringify(user))
        UserService.updateUser(user, id)
    } else {
        let user = {firstName: firstName, lastName: lastName, email: email};
                console.log('employee => ' +  JSON.stringify(user))
                UserService.createUser(user).then(res => {
                            // Todo fazer um redirect 
                        })
                    }

    }

    
        return (
            <div>
                <div>
                    <div>
                        <h3>Upadate User</h3>
                        <div>
                            <form>
                                <div>
                                    <label>First Name:</label>
                                    <input placeholder='First Name' name="fistName" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                                </div>
                                <div>
                                    <label>Last Name:</label>
                                    <input placeholder='Last Name' name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                                </div>
                                <div>
                                    <label>Email Address:</label>
                                    <input placeholder='Email Adress' name="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                                </div>
                                <button onClick={updateUser}>Save</button>
                                <div> <Link to={'/users'}><button>Cancel</button></Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
  }

  export default User;