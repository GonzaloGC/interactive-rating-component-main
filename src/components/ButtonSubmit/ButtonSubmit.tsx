import './ButtonSubmit.css';

interface ButtonSubmitProps {
  nameButton : string;
  handleClick?: ()=>void;
}

export const ButtonSubmit = (props: ButtonSubmitProps ) => {
  
  const { nameButton, handleClick } = props;

  // const handleClick = ()=>{
  //   console.log('soy el click de un boton')
  // }

  return(
    <button className='btn-submit' onClick={handleClick}>{nameButton}</button>
  )
}