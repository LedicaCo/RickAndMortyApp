import { useRef, useState } from "react";
import getRandomNumber from "../utils/getRandomNumber";
import '../components/css/formSearchLocation.css'
import './css/formSearch.css'

const FormSearch = ({ setIdLocation }) => {
  
  const idLocationValue = useRef();

  const [inputIsEmpty, setInputIsEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = idLocationValue.current.value.trim();

    if (inputValue === "") {
      setInputIsEmpty(true)
      setTimeout(() =>{
        setInputIsEmpty(false)        
      }, 5000)
    } else {
      setIdLocation(inputValue);
    }
  };
  
  return (
    <>
      <form className="form__location" onSubmit={handleSubmit}>
        <input className="input__location"
          placeholder="Write id location"
          type="text"
          ref={idLocationValue}
        />
        <button className="btn__search--location">Search</button>
      </form>
      {
        inputIsEmpty &&
        <div className="msg__inputEmpty">
          <i className='bx bxs-error'></i>
          <h3 className="msg__empty">The field cannot be empty</h3>
        </div> 
      }      
    </>
  );
};

export default FormSearch;
