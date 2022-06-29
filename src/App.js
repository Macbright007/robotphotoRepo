// import './App.css';
import PhotoLists from './components/photolist/PhotoLists';
import Search from './components/Search';
import Navbar from './components/nav/Navbar';
import Uploads from './components/uploads/Uploads';
import {
  // BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
    <Navbar />
    <Search />
      <Routes>
        <Route path="/" element={<PhotoLists />} />
        <Route path="/upload-image" element={<Uploads />} />
      </Routes>
    </div>
    // </Router>
  );
}

export default App;
