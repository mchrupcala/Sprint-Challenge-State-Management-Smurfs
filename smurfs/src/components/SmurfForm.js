import React, {useState} from 'react';

const SmurfForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameHandler = event => {
        setName(event.target.value);
        // console.log('NameHandler', event.target.value)
    }

    const ageHandler = event => {
        setAge(event.target.value);
        // console.log('AgeHandler', event.target.value)
    }

    const heightHandler = event => {
        setHeight(event.target.value);
        // console.log('HeightHandler', event.target.value)
    }

    const handleSubmit = event => {
        // event.preventDefault();
        props.addSmurf({age, height, id: Date.now(), name})
        // console.log('Handle Submit', {name, age, height})
    }

    return (
        <form
        onSubmit={handleSubmit} >
            <input
            type="text"
            name="name"
            placeholder="Enter smurf name"
            onChange={nameHandler}
            >
            </input>
    
            <input
            type="text"
            name="age"
            placeholder="Enter smurf age"
            onChange={ageHandler}
            >
            </input>
    
            <input
            type="text"
            name="height"
            placeholder="Enter smurf height"
            onChange={heightHandler}
            >
            </input>
    
            <button
            type="submit"
            >
                Submit
            </button>
        </form>
    )
}

export default SmurfForm;