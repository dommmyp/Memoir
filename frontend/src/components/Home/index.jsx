import React from 'react';
import MainPage from './MainPage';
import SideBar from './SideBar';
import './css/index.css'

function Index() {


    return (
        <>
            <div className="main-container">
                <MainPage />
                <SideBar />
            </div>
        </>
    )


}

export default Index;
