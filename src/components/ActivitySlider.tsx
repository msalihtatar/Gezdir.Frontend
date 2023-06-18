import React from 'react'

type Props = {}

export default function ActivitySlider(props: Props) {
    return (
        <div id="carouselactivity" className="carousel slide p-0 m-0" style={{height:'30rem', width:'100%', boxShadow:'5px 5px 2px #0009',overflow:'clip' }}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/saatkulesiizmir.jpg" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src="/img/izmir_new.jpg" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src="/img/saatkulesiizmir.jpg" className="d-block w-100" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselactivity" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselactivity" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}