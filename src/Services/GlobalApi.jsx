import axios from "axios"

const key='b775a3aabd2d43c78633293f68fa07b0'

const axiosCreate = axios.create({
    baseURL : 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}