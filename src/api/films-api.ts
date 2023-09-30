import { API } from "@/variables/api";

class FilmsApi {
    
    constructor() {
        
    };

    async moviePopular(lang: string, page: number) {
        const options = {
            method: 'GET',
        };

        const res = await fetch(API.movie.popular, options)
        return res.json();
    };
};

const filmsApi = new FilmsApi();

export default filmsApi;
