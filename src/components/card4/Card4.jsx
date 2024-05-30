import React from 'react';
import demo1 from '../../assets/person.gif'

const Card4 = () => {
    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'black',
            color: 'white'
        }}>
            <h1>For Future Updations</h1>
            <img src={demo1} alt="img" />
        </div>
    );
};

export default Card4;
