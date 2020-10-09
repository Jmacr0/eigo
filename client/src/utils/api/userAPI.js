import axios from "axios";

export default {
    checkIfLoggedIn: async () => {
        const response = await axios.get('/api/user/current');
        console.log(response);
        return response.data;
    },
    findUser: async () => {
        const response = await axios.get('/api/user/one');
        console.log(response);
        return response.data;
    },
    createUser: async (createUser) => {
        const response = await axios.post('/api/user/one', createUser);
        console.log(response.data)
        return response.data;
    },
    login: async (loginUser) => {
        const response = await axios.post('/api/user/authenticate', loginUser);
        console.log(response.data)
        return response.data;
    },
    logout: async () => {
        const response = await axios.get('/api/user/authenticate');
        console.log(response.data)
        return response.data;
    },
    test: async () => {
        const res = await axios.get('/api/user/test');
        console.log(res);
    }
}
