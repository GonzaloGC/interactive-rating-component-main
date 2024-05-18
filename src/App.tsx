import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { ButtonSubmit } from './components/ButtonSubmit/ButtonSubmit';
import { CardThankYou } from './components/CardThankYou/CardThankYou';

function App() {

  const [condition, setCondition] = useState('<Card />');
  
  const ele = condition == '<Card />' ? <Card />:<CardThankYou selectMessage='You selected 4 out ot 5'/>

  const handleChange = () => {
    setCondition(!condition)
  }


  return (
    <>
      {ele}
      <ButtonSubmit nameButton='press' handleClick={handleChange}/>
    </>
  )
}

export default App
