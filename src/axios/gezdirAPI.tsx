import axios from "axios"
import dummyData from "../data/dummyData";
import dummyDetail from "../data/dummyDetail";

const getTopPlaces = (typeId: number, count: number) => {return axios.get(`https://localhost:5002/api/places/gettopplaces/${typeId}/${count}`);}//en yüksek skorlu mekanları döner

const getAllLocations = () => {return axios.get(`https://localhost:5002/api/locations/getallincludesuggestions`);}//bütün mekanların detaylarını döner discover ekranı için kullanılır

const getPreferencedLocations = () => {return axios.get(`https://localhost:5002/api/userpreferences/getsuggestionsbyapriorialgorithm`);}//önerilen mekanları döner

const getLocationByPlaceId = (placeId: number) => {return axios.get(`https://localhost:5002/api/locations/detail/${placeId}`);}//bir placeId ye ait detayları döner

const getAllLocationsDummy = () => {return Promise.resolve({ status : 200, data:dummyData});}//önerilen mekanları döner
const getLocationByPlaceIdDummy = (placeId: number) =>{return Promise.resolve({ status : 200, data:(dummyDetail.filter(x => x.placeId == placeId)[0]??dummyDetail[0])});}//bir placeId ye ait detayları döner

const getImageCaption = (imageName: string) => {return axios.get(`http://127.0.0.1:5999/get_image_caption?image_name=${imageName}`);}//görüntü altyazısı getir

const getObjectDetection = (imageName: string) => {return axios.get(`http://127.0.0.1:5999/get_object_detection?image_name=${imageName}`);}//nesne tanıma socunu getir

export {getTopPlaces, getAllLocations, getPreferencedLocations, getLocationByPlaceId, getAllLocationsDummy, getLocationByPlaceIdDummy, getImageCaption, getObjectDetection};