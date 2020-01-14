import React from 'react';
import './Register.css'


    class Register extends React.Component{
        constructor(props){
            super(props);
            this.state = {value:''};
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        handleSubmit(){
            alert('Welcome to Register');
    
        }
        render(){
    return(
        <div>
            <h1 className="reg">Register To Experience A New Way Of Learning!</h1>
            
            <form onSubmit={this.handleSubmit}>
            <input className="bntStart" type="submit" value="Get Start" />
            </form>
    </div>
    );
        }
}
export default Register;