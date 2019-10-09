// jshint esversion:6
import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { socket } from '../../assets/socketIO/socketIO.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            alert(error);
            console.log(error);
        }
        socket.emit('playerLogin', socket.id);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name='email' handleChange={this.handleChange} type='email' value={this.state.email} required/>
                    <FormInput label="password" name='password' handleChange={this.handleChange} type='password' value={this.state.password} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In With Google{' '}</CustomButton>
                    </div>   
                </form>
            </div>
        );
    }
};

export default SignIn;