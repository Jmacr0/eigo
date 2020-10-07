import axios from "axios";

export default {
    createUser: async (createUser) => {
        const response = await axios.post('/api/user/create', createUser);
        console.log(response.data)
        return response.data;
    },
    login: async (loginUser) => {
        const response = await axios.post('/api/user/authenticate', loginUser);
        console.log(response.data)
        return response.data;
    },
}
