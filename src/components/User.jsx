import { useParams, Link} from "react-router-dom";
import UserService from '../services/UserService';
import {useState, useEffect } from 'react';


function User() {
    let { id } = useParams();
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');


    useEffect(() => {
        if(id !== undefined) {
        async function getUser() {
          try {
            const { data } = await UserService.getUserById(id);
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setEmail(data.email)
          } catch (error) {
            alert("Ocorreu um erro ao buscar o user");
          }
        }
        getUser();
    }}, []);

    function User(e){
        e.preventDefault();
        if(id !== undefined) {
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

    function getTitle(){
        if(id !== undefined) {
            return <h3>Update user</h3>
        } else {
            return <h3>Add user</h3>
        }
    }
        return (
            <div>
                <div>
                    <div>
                        {getTitle()}
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
                                <button onClick={User}>Save</button>
                                <div> <Link to={'/users'}><button>Cancel</button></Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
  }

  export default User;