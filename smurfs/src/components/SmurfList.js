import React from 'react';

const SmurfList = props => {

    const handleDelete = event => {
        console.log(event);
        props.deleteSmurfs(event.target.value);
    }
    return (
    <div>
        {props.smurfs.map(item => {
            return (
                // <form>
                <div className="one-smurf">
                <h3 id={item.id}>{item.name}</h3>
                <p>Age: {item.age} Height: {item.height}</p>
                <button value={item.id} onClick={handleDelete}>Delete</button>
                </div>
            )
        })}
    </div>
    )
}

export default SmurfList;