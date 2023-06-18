import React from 'react'
import ActivitySlider from '../components/ActivitySlider';

type Props = {}

const Activities = (props: Props) => {
  return (
    <div>
        <div style={{ backgroundColor: "#fff9" }}>
            <h2 className="pt-5 pb-3" style={{fontWeight: 700, letterSpacing: 1, fontSize: 49}}>Activities Nearby</h2>
            <div>
                <ActivitySlider></ActivitySlider>
            </div>
        </div>
    </div>
  )
}

export default Activities;