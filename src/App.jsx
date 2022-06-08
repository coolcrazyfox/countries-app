import {useEffect, useState} from 'react';


import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import {Route, Routes} from "react-router-dom";
import {ALL_COUNTRIES} from "./config";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    axios.get(ALL_COUNTRIES).then(({data})=> setCountries(data))
  },[]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route  path="/" element={<HomePage
            countries={countries}
            setCountries={setCountries} />}/>
          <Route path="/country/:name" element={<Details/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
