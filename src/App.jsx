import { BrowserRouter,Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import Words from './components/Words';
import SingleWord from './components/SingleWord';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="words" element={<Words />} />
            <Route path="words/:englishWord" element={<SingleWord />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
