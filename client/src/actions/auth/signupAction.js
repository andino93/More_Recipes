import axios from 'axios';
import actionTypes from '../actionTypes';
import { decodeToken, baseUrl } from '../../utils/helpers';


const signupAction = userDetails => dispatch =>
  axios.post(`${baseUrl}/users/signup`, userDetails)
    .then((res) => {
      const token = res.data.token;
      if (decodeToken(token)) {
        window.localStorage.setItem('token', token);
      }
      dispatch({ type: actionTypes.SIGNUP_SUCCESSFUL });
      dispatch({ type: actionTypes.SIGNIN_SUCCESSFUL });
    })
    .catch((err) => {
      if (err.response.data.message === 'A validation error occurred') {
        return dispatch({ type: actionTypes.SIGNUP_VALIDATION_ERROR,
          payload: err.response.data.errors
        });
      }
      return dispatch({
        type: actionTypes.SIGNUP_UNSUCCESSFUL, 
        payload: 'Registration Failed'
      });
    });

export default signupAction;
