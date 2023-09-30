import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Form from './page/Form';
import Hashese from './page/Hashese';
import Cooke from "./page/Cooke"
import Nav from "./page/Nav"
import Login from './page/Login';


function App() {
  return (
    <div>
  <Nav/>
<Routes>

<Route path="/" element={<Home />} />
<Route path="/form/:id" element={<Form />} />
<Route path="/hash/:id" element={<Hashese></Hashese>}/>
<Route path="/profile/:id" element={<Cooke></Cooke>}/>
<Route path="/Login/:id" element={<Login></Login>}/>
</Routes>

    </div>
  )
}

export default App