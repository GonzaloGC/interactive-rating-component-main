import './ButtonSubmit.css';

export const ButtonSubmit = ({ nameButton}: { nameButton: string}) => {
  
  const handleClick = ()=>{
    console.log(Boolean)
  }

  return(
    <button className='btn-submit' onClick={handleClick}>{nameButton}</button>
  )
}