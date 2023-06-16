import React from 'react';
import './index.css';
import Header from './Component/Header/Header';
import SecondSection from './Component/SecondSection/SecondSection';
import ThiredSection from './Component/ThiredSection/ThiredSection';
import FourSection from './Component/FourSection/FourSection';
import FifthSection from './Component/FifthSection/FifthSection';
import  Blog  from './Component/BlogSection/Blog';
import SixthSection from './Component/SixthSection/SixthSection';
import SevenSection from './Component/SevenSection/SevenSection';
import UpperSection from './Component/UpperSection/UpperSection';
import { Testimonials } from './Component/Testimonials/Testimonials';
import { Success } from './Component/Success/Success';
import { Section9 } from './Component/Section9/Section9';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <SecondSection/>
    <ThiredSection/>
    <FourSection/>
    <FifthSection/>
    <Blog/>
  <SixthSection/>
  <SevenSection/>
  <Testimonials/>
<Section9/>
<Success/>
<UpperSection/>
  <Footer/>
    </div>
  );
}

export default App;
