import { CommentDto } from "./CommentDto"
import { CommunicationDto } from "./CommunicationDto"
import { TransportationDto } from "./TransportationDto"

export type LocationDto = {
    locationId: number,
    xcoordinate : number,
    ycoordinate : number,
    placeTypeId: number,
    placeId: number,
    placeName: string,
    explanation: string,
    scoreNum: number,
    address: string,
    comments: CommentDto[],
    communication: CommunicationDto,
    transportations: TransportationDto[]
}