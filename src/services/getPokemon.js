import * as axios from "axios";

export const getPokemons = async () =>{
    try {
        const response = await axios({
            method: "get",
            url: "https://raw.githubusercontent.com/gisellem22/SCL009-data-lovers/master/src/data/pokemon/pokemon.json"
        });
        return response.data
    } catch (error) {
        return {
            error: true,
            data: error,
        };
    }
};