import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./views/home/Home";
import { Detail } from "./views/details/Detail";



function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detalles/:id" element={<Detail/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App