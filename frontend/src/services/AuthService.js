import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const login = async (email, password) => {
    try{
        const { data, status } = await axios
            .post(API_URL + 'login', {
                email,
                password,
            }
            ).catch(function (error) {
                //console.log(error)
        });
        if (data) {
            if (data.apiKey) {
                localStorage.setItem('apiKey', data.apiKey);
                localStorage.setItem('firstName', data.firstName);
                localStorage.setItem('lastName', data.lastName);
                localStorage.setItem('id', data.id);
                localStorage.setItem('email', data.email);
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.apiKey}`;
                axios.defaults.headers.common.Accept = 'application/json';
                //window.location.href = "/home";
            }
            return data;
        }
        else
            return {error: 'Something went wrong'}
    } catch { };
}

const logout = () => {
    localStorage.removeItem('apiKey');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    window.location.href = '/login';
};

const register = async (firstName, lastName, email, password)  => {
    try {
            const { data, status } = await axios
                .post(API_URL + 'register', {
                    email,
                    password,
                    firstName,
                    lastName,
                }
                ).catch(function (error) {
                    return status
                }); 
            if (data) {
                if (!data.error) {
                    window.location.href = "/login";
                }
                return data;
            }
            else
                return status
        } catch { };
    }

const getCurrentToken = () => {
    return localStorage.getItem('refresh_token');
};

export default {
    login,
    logout,
    register,
    getCurrentToken
};