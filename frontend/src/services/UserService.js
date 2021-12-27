import axios from "axios";
import AuthService from "./AuthService";

const API_URL = process.env.REACT_APP_API_URL;

const fetchUsers = async () => {
    const { data, status } = await axios
        .get(`${API_URL}users`
    ).catch(function (error) {
        if (error.response) {
            if(error.response.status === 401){
                AuthService.logout();
            }
        }
    });
    if (data)
        return data
    else
        return status
};

const fetchUser = async (id) => {
    const { data, status } = await axios
        .get(`${API_URL}users/${id}`
        ).catch(function (error) {
            console.log(error)
        });
    if (data)
        return data
    else
        return status
}

const createUser = async (body) => {
    const { data, status } = await axios
        .post(`${API_URL}users`, body
        ).catch(function (error) {
            console.log(error)
        });
    if (data)
        return data
    else
        return status
}

const updateUser = async (id, body) => {
    const { data, status } = await axios
        .put(`${API_URL}users/${id}`, body
        ).catch(function (error) {
            console.log(error)
        });
    if (data)
        return data
    else
        return status
}

const deleteUser = async (id) => {
    const { data, status } = await axios
        .delete(`${API_URL}users/${id}`
        ).catch(function (error) {
            console.log(error)
        });
    if (data)
        return data
    else
        return status
}

export default {
    fetchUsers,
    deleteUser,
    createUser,
    updateUser,
    fetchUser
};
