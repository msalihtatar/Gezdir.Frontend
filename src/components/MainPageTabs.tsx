

import React from 'react'

type Props = {}

const MainPageTabs = (props: Props) => {
    return (
        <div>
            <ul className="nav mb-3" id="myTab0" role="tablist" style={{backdropFilter:'blur(10px)',backgroundColor : '#fff3', display: 'inline-flex'}}>
                <li className="nav-item" role="presentation" >
                    <button
                        className="nav-link text-dark active" 
                        style={{padding: '.5rem 4rem'}}
                        id="home-tab0"
                        data-mdb-toggle="tab"
                        data-mdb-target="#home0"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >
                        Places to Visit
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link text-dark"
                        style={{padding: '.5rem 4rem'}}
                        id="profile-tab0"
                        data-mdb-toggle="tab"
                        data-mdb-target="#profile0"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        Activities
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent0">
                <div
                    className="tab-pane fade show active"
                    id="home0"
                    role="tabpanel"
                    aria-labelledby="home-tab0"
                >
                    Tab 1 content.
                </div>
                <div className="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
                    Tab 2 content
                </div>
            </div>
        </div>
    )
}

export default MainPageTabs;