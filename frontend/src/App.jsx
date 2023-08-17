import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import CreatePost from './components/CreatePost'
import SearchResults from './components/SearchResults'
import Navbar from './components/Navbar'
import SubmitPost from './components/SubmitPost'


const user = {
    _id: "64dc7b6d2eadf2acd2e72a84",
    displayName: "Dominic Parolin",
    email: "djp524@lehigh.edu",
    phoneNumber: null,
    photoURL: "https://lh3.googleusercontent.com/a/AAcHTtfFIhznQpCw44Su7SFywg_y8EdUE9lvMhAUVfmLe5LE=s96-c",
    providerId: "firebase",
    uid: "GkO3Bf10WkPIqIAu3EscpjrINoJ2",
    reading_list: [],
    posts: [],
    topics: [],
    following: [],
}

function App() {

    return (
        <>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home user={user} />}
                    />
                    <Route
                        path="/create-post"
                        element={<CreatePost user={user} />}
                    />
                    <Route
                        path="/submit-post"
                        element={<SubmitPost user={user} />}
                    />
                </Routes>


            </div>
        </>
    )
}

export default App
