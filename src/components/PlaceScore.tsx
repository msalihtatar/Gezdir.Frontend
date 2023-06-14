import React from 'react'
import { PlaceDetail } from '../model/PlaceDetail'
import { useNavigate } from 'react-router-dom';

const PlaceScore = ({p}: {p: PlaceDetail}) => {
    const navigate = useNavigate();
    return (
    <div className='d-flex justify-content-between pb-2 clickableArea-div' >
        <div>{p.placeName}</div><div className='text-warning'>{p.scoreNum}</div>
    </div>
  )
}

export default PlaceScore
