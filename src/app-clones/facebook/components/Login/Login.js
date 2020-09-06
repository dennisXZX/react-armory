import React from 'react';
import './Login.scss'
import logo from '../../assets/fb-logo.png'
import Button from '@material-ui/core/Button';
import { auth, provider } from '../../firebase/firebase';
import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/reducer';

const Login = () => {
    const [, dispatch] = useStateValue();

    const signIn = async () => {
        try {
            const result = await auth.signInWithPopup(provider);

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        } catch (e) {
            console.log('error: ', e);
        }
    };

    return (
        <div className='login'>
            <div className="login__logo">
                <img src={logo} alt="facebook logo" />
            </div>

            <h2>facebook</h2>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
};

export default Login;
