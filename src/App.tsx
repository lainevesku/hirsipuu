import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy } from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';

const Etusivu = lazy(() => import('./Etusivu'))
const Kaupunki = lazy(() => import('./Kaupunki'))
const Capital = lazy(() => import('./Capital'))
const Pelit = lazy(() => import('./Pelit'))

function App(){
    return (
        <BrowserRouter>
            <div style={{
                backgroundColor: "red",
                height: "50px",
                width: "100%"
            }}></div>
            <Header />
            <Suspense fallback={<h1>Odota hetki, lataamme sivua...</h1>}>
                <Routes>
                    <Route path="/" element={<Etusivu />} />
                    <Route path="/kaupunki" element={ <Kaupunki />} />
                    <Route path="/capital" element={<Capital />} />
                    <Route path="/pelit" element={<Pelit />} />
                </Routes>   
            </Suspense>
        </BrowserRouter>
    )

}

export default App