import React from 'react';

const SmurfList = props => {
    return (
    <div>
        {props.smurfs.map(item => {
            return (
                <div className="one-smurf">
                <h3 id={item.id}>{item.name}</h3>
                <p>Age: {item.age} Height: {item.height}</p>
                </div>
            )
        })}
    </div>
    )
}

export default SmurfList;