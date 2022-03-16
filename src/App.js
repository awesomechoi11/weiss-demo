import React from 'react';
import './styles/_index.scss';
import FancyImage from './components/FancyImage';
import { useSetScroll } from './components/Scroll';
import { RecoilRoot } from 'recoil';
import RevealOnScroll from './components/Reveal';

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
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <FancyImage
        revealOnScroll={true}
        src={
          'https://images.unsplash.com/photo-1587304631786-b880ac55571b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
        alt="leaves"
        className="owo"
      /> */}

      <RevealOnScroll>hello</RevealOnScroll>
    </div>
  );
}
