import axios from "axios"

const getTopPlaces = (typeId: number, count: number) => {return axios.get(`https://localhost:5002/api/places/gettopplaces/${typeId}/${count}`);}

export {getTopPlaces};