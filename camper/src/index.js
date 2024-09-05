import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesComponent from './routes';
import Navbar from './page/navbar/navbar';
import Footer from './page/footer/footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MotorComponent from './page/motor/motor';
import DocumentsComponent from './page/motor/documents';
import CaravanComponent from './page/caravan/caravan';
import TuningDetailComponent from './page/tuning/details';
import TuningComponent from './page/tuning/tuning';
import UsedCarComponent from './page/usedCar/usedCar';
import UsedCarDetailComponent from './page/usedCar/details';
import CampingComponent from './page/camping/camping';
import CampingDetailComponent from './page/camping/details';
import RegisterComponent from './page/register';
import MainComponent from './page/main.jsx/main';
import CaravanDetailComponent from './page/caravan/details';
import ScrollToTop from './scrollTop';
import CartMotorComponent, { CartCaravanComponent, CartTuningComponent, CartUsedCarComponent } from './page/cart/cart';
import Maping from './maping';
import OverFLow from './overFlow/overFlow';
import NavCart from './page/cart/navCart';
import Login from './login';
import Dashboard from './page/dashboard/dashboard';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/main' element={<MainComponent/>}/>
      <Route path='/motor' element={<MotorComponent/>}/>
      <Route path="/motor/:id" element={<DocumentsComponent/>} />
      <Route path="/caravan" element={<CaravanComponent/>} />
      <Route path="/caravan/:id" element={<CaravanDetailComponent/>} />
      <Route path="/tuning" element={<TuningComponent/>} />
      <Route path="/tuning/:id" element={<TuningDetailComponent />}/>
      <Route path="/usedCar" element={<UsedCarComponent /> }/>
      <Route path="/usedCar/:id" element={<UsedCarDetailComponent />}/>
      <Route path="/camping" element={<CampingComponent />} />
      <Route path="/camping/:id" element={<CampingDetailComponent />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path='/cart/:id' element={<CartMotorComponent/>}/>
      <Route path='/caravan/cart/:id' element={<CartCaravanComponent/>}/>
      <Route path='/tuning/cart/:id' element={<CartTuningComponent/>}/>
      <Route path='/usedCar/cart/:id' element={<CartUsedCarComponent/>}/>
      <Route path='/maping' element={<Maping/>}/>
      <Route path='/overflow' element={<OverFLow/>}/>
      <Route path='/cart' element={<NavCart/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
