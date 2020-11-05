import axios from "axios";

export default {
	createFavourite: async (newFavouriteName) => {
		const response = await axios.post('/api/favourite/one', { name: newFavouriteName });
		console.log(response);
		return response.data;
	},
	updateFavouriteVerb: async (favouriteAndVerbIdToUpdate) => {
		const response = await axios.patch('/api/favourite/verb', favouriteAndVerbIdToUpdate);
		console.log(response.data);
		return response.data;
	},
	updateFavouriteAdjective: async (favouriteAndAdjectiveIdToUpdate) => {
		const response = await axios.patch('/api/favourite/adjective', favouriteAndAdjectiveIdToUpdate);
		console.log(response.data);
		return response.data;
	},
	findFavouriteVerbs: async (favouriteAndVerbIdToFind) => {
		const response = await axios.post('/api/favourite/verb', favouriteAndVerbIdToFind);
		console.log(response.data.data.Favourites);
		return response.data;
	},
	findFavouriteAdjectives: async (favouriteAndAdjectiveIdToFind) => {
		const response = await axios.post('/api/favourite/adjective', favouriteAndAdjectiveIdToFind);
		console.log(response.data.data.Favourites);
		return response.data;
	},
}
