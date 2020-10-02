import axios from "axios";

export default {
    createUser: async function (createUser) {
        const response = await axios.post('/api/user/create', createUser);
        console.log(response.data)
        return response.data;
    },
}
