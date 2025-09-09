import { Routes, Route} from "react-router-dom";
import AdminPage from "./pages/Admin";


const App = () =>{

  return (
    <>
    <Routes>
      <Route path="/admin" element = {<AdminPage/>}/>
    </Routes>
    </>
  ) 
};

export default App;