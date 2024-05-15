import './ButtonSubmit.css';

export const ButtonSubmit = ({nameButton}: {nameButton:string}) => {
  return(
    <button className='btn-submit'>{nameButton}</button>
  )
}