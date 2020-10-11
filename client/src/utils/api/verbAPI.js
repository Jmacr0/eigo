import axios from "axios";

export default {
	findAll: async () => {
		const response = await axios.get('/api/verb');
		console.log(response);
		return response.data;
	},
}
