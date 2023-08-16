import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/create-post">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                    </Switch>
                </BrowserRouter>


            </div>
        </>
    )
}

export default App
