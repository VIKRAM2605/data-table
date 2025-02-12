import Database from "./components/Database/Database"
import {Routes,Route} from 'react-router-dom'
import Login from "./Login"
import Error from "./Error"
function App() {
  
  return (
    <>
    
<Routes>
  <Route path="/data-table/" element={<Login/>}></Route>
  <Route path="/data-table/data" element={<Database/>}></Route>
  <Route path="/data-table/404" element={<Error/>}></Route>
</Routes>
    </>
  )
}

export default App
