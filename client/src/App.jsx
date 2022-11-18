import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage"
import Search from "./components/Search";
import MyBookList from "./components/MyBookList"
import Settings from "./components/Settings"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/Login' element={<LoginForm />} /> */}
          {/* <Route path='/CreateAccount' element={<CreateAccount />} /> */}
          <Route path='/' element={<Homepage />} />
          <Route path='/MyBookList' element={<MyBookList />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
