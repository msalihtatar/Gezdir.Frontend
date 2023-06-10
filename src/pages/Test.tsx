import React from "react";
import '../css/test.css'
import '../css/location.css'
import { Badge, Button, Container, Stack } from "react-bootstrap";
interface Item {
    id: number;
    placeName: string;
    isSuggested: boolean;
    scoreSum: number,
    placeTypeId: number,
}

interface ItemListProps {
    items: Item[];
}

const TypeName = (typeId: number) => {
    switch (typeId) {
        case 1:
            return "Historical";
        case 2:
            return "Restaurant";
        default:
            return "Undefined";
    }
}

const TestPage: React.FC = () => {
    const items = [
        { id: 1, placeName: "New York", isSuggested: true, scoreSum: 100, placeTypeId: 1 },
        { id: 2, placeName: "Paris", isSuggested: false, scoreSum: 90, placeTypeId: 1 },
        { id: 3, placeName: "London", isSuggested: true, scoreSum: 80, placeTypeId: 1 },
        { id: 4, placeName: "Tokyo", isSuggested: false, scoreSum: 70, placeTypeId: 3 },
        { id: 5, placeName: "Sydney", isSuggested: true, scoreSum: 60, placeTypeId: 1 },
        { id: 6, placeName: "Berlin", isSuggested: false, scoreSum: 50, placeTypeId: 2 },
        { id: 7, placeName: "Rome", isSuggested: true, scoreSum: 40, placeTypeId: 1 },
        { id: 8, placeName: "Beijing", isSuggested: false, scoreSum: 30, placeTypeId: 1 },
        { id: 9, placeName: "Rio de Janeiro", isSuggested: true, scoreSum: 20, placeTypeId: 2 },
        { id: 10, placeName: "Cape Town", isSuggested: false, scoreSum: 10, placeTypeId: 1 },
    ];

    return (
        <Container>
            <Stack gap={3} style={{ maxHeight: "600px", overflow: "auto" }} className="p-2">
                {items.map((item) => (
                    <div className={"d-flex bd-highlight p-2 paper" + (item.isSuggested?" bg-suggested":" bg-light")}>
                        <div className="text-start  flex-grow-1 bd-highlight">
                            <h5 placeholder="Place Name">{item.placeName}</h5>
                            <p className="text-muted mb-0 ps-2">{TypeName(item.placeTypeId)}</p>
                        </div>
                        {item.isSuggested &&
                            <div className="ps-auto align-self-center pe-2">
                                <Badge className="bg-warning"><i className="bi bi-star-fill pe-1"></i>Suggested</Badge>
                            </div>}
                        <div className="align-self-center">
                            <span className="fw-light text-muted text-8r">Score</span>
                            <h3 placeholder="Score">{item.scoreSum}</h3>
                        </div>
                    </div>
                ))}
            </Stack>
        </Container>
    );
};

export default TestPage;