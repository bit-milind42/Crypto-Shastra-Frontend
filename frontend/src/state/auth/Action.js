import axios from 'axios';

import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './ActionTypes';
import { Navigate } from 'react-router-dom';

export const register=(userData) => async(dispatch)=> {  
    dispatch({type: REGISTER_REQUEST})
        const baseUrl ="http://localhost:5454"  
        try{  
            const respose=await axios.post(`${baseUrl}/auth/signup`, userData);
                const user=respose.data;  
                console.log(user);  
                dispatch({type: REGISTER_SUCCESS, payload: user.jwt});  
                localStorage.setItem("jwt", user.jwt);
            }
            catch (error) {  
                dispatch({type: REGISTER_FAILURE, payload: error.response.data.message});
                console.log(error);
            }
        }

// export const register = (userData) => async (dispatch) => {
//   dispatch({ type: REGISTER_REQUEST });
//   const baseUrl = "http://localhost:5454";
//   try {
//     const response = await axios.post(
//       `${baseUrl}/auth/signup`,
//       userData,
//       {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       }
//     );
//     const user = response.data;
//     console.log(user);
//     dispatch({ type: REGISTER_SUCCESS, payload: user.jwt });
//     localStorage.setItem("jwt", user.jwt);
//   } catch (error) {
//     dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || "Registration failed" });
//     console.log(error);
//   }
// };


// export const login=(userData) => async(dispatch)=> {  
//     dispatch({type: LOGIN_REQUEST})
//         const baseUrl ="http://localhost:5454"  
//         try{  
//             const respose=await axios.post(`${baseUrl}/auth/signin`, userData.data);
//                 const user=respose.data;  
//                 console.log(user);  
//                 dispatch({type: LOGIN_SUCCESS, payload: user.jwt});  
//                 localStorage.setItem("jwt", user.jwt);
//                 userData.navigate("/")
//             }
//             catch (error) {  
//                 dispatch({type: LOGIN_FAILURE, payload: error.response.data.message});
//                 console.log(error);
//             }
//         }



export const login = ({email, password, navigate}) => async(dispatch)=> {
    dispatch({type: LOGIN_REQUEST})
    const baseUrl ="http://localhost:5454"  
    try{  
        const response = await axios.post(`${baseUrl}/auth/signin`, {email, password});
        const user = response.data;  
        console.log("LOGIN USER:", user);  
        dispatch({type: LOGIN_SUCCESS, payload: user.jwt});  
        localStorage.setItem("jwt", user.jwt);
        navigate("/")
    } catch (error) {  
        dispatch({type: LOGIN_FAILURE, payload: error.response?.data?.message || "Login failed"});
        console.log(error);
    }
}





// export const getUser=(jwt) => async(dispatch)=> {  
//     dispatch({type: GET_USER_REQUEST})
//         const baseUrl ="http://localhost:5454"  
//         try{  
//             const respose=await axios.get(`${baseUrl}/api/users/profile`,
//                 {
//                     headers:{
//                         Authorization:`Bearer ${jwt}`
//                     }

//                 }
//             );
//                 const user=respose.data;  
//                 console.log(user);  
//                 dispatch({type: GET_USER_SUCCESS, payload: user});  
//             }
//             catch (error) {  
//                 dispatch({type: GET_USER_FAILURE, payload: error.response.data.message});
//                 console.log(error);
//             }
//         }    
        

export const getUser = (jwt) => async(dispatch) => {  
    dispatch({type: GET_USER_REQUEST});
    const baseUrl = "http://localhost:5454";  
    try {  
        const response = await axios.get(`${baseUrl}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const user = response.data;  
        console.log("FETCHED USER:", user);  
        dispatch({type: GET_USER_SUCCESS, payload: user});
    } catch (error) {  
        dispatch({type: GET_USER_FAILURE, payload: error.response?.data?.message || "Failed to get user"});
        console.log(error);
    }
}



export const logout = () => (dispatch) => {
    localStorage.clear();
    dispatch({type: LOGOUT});
}        