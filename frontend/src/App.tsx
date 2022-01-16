import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";
import SortName from "pages/SortName";
import SortScore from "pages/SortScore";
import SortCount from "pages/SortCount";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
        <Route path="sortCount/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
        <Route path="sortName/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
        <Route path="sortScore/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
        <Route path="/sortCount" element={<SortCount/>}/>
        <Route path="/sortName" element={<SortName/>}/>
        <Route path="/sortScore" element={<SortScore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;