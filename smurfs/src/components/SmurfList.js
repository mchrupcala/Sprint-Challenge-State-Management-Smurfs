import React from 'react';

const SmurfList = props => {
    return (
    <div>
        {props.smurfs.map(item => {
            return (
                <h3 id={item.id}>{item.name}</h3>
            )
        })}
    </div>
    )
}

export default SmurfList;