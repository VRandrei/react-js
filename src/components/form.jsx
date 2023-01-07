import { useState } from "react";

function Form() {
    // const [fName, setFName] = useState('');
    // const [lName, setLName] = useState('');
    // const [happy, setHappy] = useState(false);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        isHappy: false,
    });

    const submitVales = (e) => {
        e.preventDefault()
        if (user.isHappy) {
            alert(`${user.firstName} ${user.lastName} счастлив )`)
        } else {
            alert(`${user.firstName} ${user.lastName} НЕ счастлив (`)
        }
    }

    const handleChangeUser = (value, key) => {
        setUser({ ...user, [key]: value})
    }

  return (
    <form>
        <input
            value={user.firstName}
            className='input'
            placeholder='First Name'
            onChange={(e) => handleChangeUser(e.target.value, 'firstName')}
        />
        <input
            value={user.lastName}
            className='input'
            placeholder='Last Name'
            onChange={(e) => handleChangeUser(e.target.value, 'lastName')}
        />
        <div className="check">
            <input
                checked={user.isHappy}
                id='happy'
                type='checkbox'
                onChange={(e) => handleChangeUser(e.target.checked, 'isHappy')}
            />
            <label htmlFor='happy'>Счастлив?</label>
        </div>
          <button type="submit" onClick={(e) => submitVales(e)}>Submit</button>
    </form>
  );
}

export default Form;