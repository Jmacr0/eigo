import axios from "axios";

export default {
    createFavourite: async (newFavouriteName) => {
        const response = await axios.post('/api/favourite/one', { name: newFavouriteName });
        console.log(response);
        return response.data;
    },
    findFavouriteVerbs: async (favouriteAndVerbIdToFind) => {
        const response = await axios.post('/api/favourite/verb', favouriteAndVerbIdToFind);
        console.log(response.data.data.Favourites);
        return response.data;
    },
}
