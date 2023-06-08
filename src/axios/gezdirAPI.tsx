import axios from "axios"

const getTopPlaces = (typeId: number, count: number) => {return axios.get(`https://localhost:5002/api/places/gettopplaces/${typeId}/${count}`);}//en yüksek skorlu mekanları döner

const getAllLocations = () => {return axios.get(`https://localhost:5002/api/locations/getalllocationdetail`);}//bütün mekanların detaylarını döner harita için kullanılır

const getPreferencedLocations = () => {return axios.get(`https://localhost:5002/api/userpreferences/getsuggestionsbyapriorialgorithm`);}//önerilen mekanları döner

export {getTopPlaces, getAllLocations, getPreferencedLocations};