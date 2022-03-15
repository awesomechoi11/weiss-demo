import React from 'react';
import './styles/_index.scss';
import FancyImage from './components/FancyImage';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FancyImage
        src={
          'https://images.unsplash.com/photo-1587304631786-b880ac55571b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
        alt="leaves"
      />
    </div>
  );
}
