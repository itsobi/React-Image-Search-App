import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    headers: {
        Authorization: "Client-ID B3E5UfW55uJe6wi74R8nVucF8eP9JO_818DQkrDNDSY"
    }
});