import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        { !isClicked &&
          <button className='button-50' onClick={() =>setIsClicked(true)}>Click me !</button>
        }
        { isClicked &&
        <>
         <TypeAnimation
         sequence={[
           `Hey Iza, Happy Women's Day! Entire Wizdo team wish You:`, // Types 'One'
           1000, // Waits 1s
           () => {
             console.log('Done typing!'); // Place optional callbacks anywhere in the array
           }
         ]}
         wrapper="div"
         cursor={false}
         repeat={0}
         style={{ fontSize: '1.5em' }}
       />
       <TypeAnimation
         sequence={[
          ``, // Types 'One'
           2700, // Waits 1s
           1000, // Waits 1s
           'Eslint throws no warnings.', // Deletes 'One' and types 'Two'
           2000, // Waits 2s
           'That recoil remembers that we sometimes are tired.',
           2000, // Waits 2s
           'Good documentation on that framework your implenting.',
           2000, // Waits 2s
           `Clients that don't make changes during development.`,
           2000, // Waits 2s
           `Lot of fun with coding.`,
           2000, // Waits 2s
           `Pizza day everyday!`,
           2000, // Waits 2s
           () => {
             console.log('Done typing!'); // Place optional callbacks anywhere in the array
           }
         ]}
         wrapper="div"
         cursor={false}
         repeat={Infinity}
         style={{ fontSize: '1.5em' }}
       />
       </>
        }
      </header>
    </div>
  );
}

export default App;
