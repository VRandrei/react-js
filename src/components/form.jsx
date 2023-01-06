import { useState } from "react";

function Form() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [happy, setHappy] = useState(false);

    const submitVales = () => {
        const person = {
            firstName: fName,
            lastName: lName,
            isHappy: happy,
        }

        if (person.isHappy) {
            alert(`${person.firstName} ${person.lastName} счастлив )`)
        } else {
            alert(`${person.firstName} ${person.lastName} НЕ счастлив (`)
        }
    }

  return (
    <form>
        <input className='input' placeholder='First Name' onChange={(e) => setFName(e.target.value)} />
        <input className='input' placeholder='Last Name' onChange={(e) => setLName(e.target.value)} />
        <div className="check">
            <input id='happy' type='checkbox' onChange={(e) => setHappy(e.target.checked)} />
            <label htmlFor='happy'>Счастлив?</label>
        </div>
          <button type='button' onClick={submitVales}>Submit</button>
    </form>
  );
}

export default Form;