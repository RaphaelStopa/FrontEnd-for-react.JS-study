// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import UserService from '../services/UserService';

// class CreateUserComponent extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             firstName: '',
//             lastName: '',
//             email: ''
//         }

//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         this.changeEmailHandler = this.changeEmailHandler.bind(this);
//         this.saveUser = this.saveUser.bind(this);
//     }

//     saveUser = (e) =>{
//         e.preventDefault();
//         let user = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
//         console.log('employee => ' +  JSON.stringify(user))

//         UserService.createUser(user).then(res => {
//                     // Todo fazer um redirect

//         })
//     }

//     changeFirstNameHandler= (event) => {
//         this.setState({firstName: event.target.value})
//     }

//     changeLastNameHandler= (event) => {
//         this.setState({lastName: event.target.value})
//     }

//     changeEmailHandler= (event) => {
//         this.setState({email: event.target.value})
//     }



//     render() {
//         return (
//             <div>
//                 <div>
//                     <div>
//                         <h3>Add User</h3>
//                         <div>
//                             <form>
//                                 <div>
//                                     <label>First Name:</label>
//                                     <input placeholder='First Name' name="fistName" value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
//                                 </div>
//                                 <div>
//                                     <label>Last Name:</label>
//                                     <input placeholder='Last Name' name="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
//                                 </div>
//                                 <div>
//                                     <label>Email Address:</label>
//                                     <input placeholder='Email Adress' name="email" value={this.state.email} onChange={this.changeEmailHandler}></input>
//                                 </div>
//                                 <button onClick={this.saveUser}>Save</button>
//                                 <div> <Link to={'/users'}><button>Cancel</button></Link></div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default CreateUserComponent;