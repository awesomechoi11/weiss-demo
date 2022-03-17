import React from 'react';
import './styles/_index.scss';
import { useSetScroll } from './components/Scroll';
import { RecoilRoot } from 'recoil';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

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
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
