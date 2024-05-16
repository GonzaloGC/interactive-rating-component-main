import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { CardThankYou } from './components/CardThankYou/CardThankYou';
import { ButtonSubmit } from './components/ButtonSubmit/ButtonSubmit';

function App() {


  const [click, setClick] = useState(false);

  const handleClick = () => {
    // Cambiar el estado al valor opuesto
    setClick(!click);
  }

  let content;
  if ({oncl}) {
    content = <Card />;
  } else {
    content = <CardThankYou/>;
  }

  return (
    <>
      
      {content}
    </>
  )
}

export default App
