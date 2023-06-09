import axios from "axios"

const getTopPlaces = (typeId: number, count: number) => {return axios.get(`https://localhost:5002/api/places/gettopplaces/${typeId}/${count}`);}//en yüksek skorlu mekanları döner

const getAllLocations = () => {return axios.get(`https://localhost:5002/api/locations/getallincludesuggestions`);}//bütün mekanların detaylarını döner discover ekranı için kullanılır

const getPreferencedLocations = () => {return axios.get(`https://localhost:5002/api/userpreferences/getsuggestionsbyapriorialgorithm`);}//önerilen mekanları döner

const getLocationByPlaceId = (placeId: number) => {return axios.get(`https://localhost:5002/api/locations/detail/${placeId}`);}//bir placeId ye ait detayları döner

export {getTopPlaces, getAllLocations, getPreferencedLocations, getLocationByPlaceId};