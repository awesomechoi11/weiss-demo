import React from 'react';
import './styles/_index.scss';
import { useSetScroll } from './components/Scroll';
import { RecoilRoot } from 'recoil';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Band1 from './components/Band1';
import Band2 from './components/Band2';
import Footer from './components/Footer';

export default function App() {
  return (
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
}

function Page() {
  useSetScroll();

  return (
    <>
      <Navbar />
      <Hero />
      <Band1 />
      <Band2 />
      <Footer />
    </>
  );
}
