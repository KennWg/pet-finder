import React, { useState } from 'react'
import dogImg from '../../assets/images/dog.jpg';

function Home() {
    return (

        <div className="home-class outer-div">
            <p>
                HOME
            </p>

            <h1>Welcome to the Pet Finder</h1>

            <p><img src={dogImg} alt="a dog sit on the front page" className='homepage-dog'/></p>
        </div>
    );
}

export default Home;