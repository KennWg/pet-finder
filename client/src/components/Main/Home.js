import React, { useState } from 'react'
import dogImg from '../../assets/images/dog.jpg';

function Home() {
    return (

        <div className="home-class outer-div">

            <h1>Welcome to the Pet Finder</h1>
            <br></br>
            <img src={dogImg} alt="a dog sit on the front page" className='homepage-dog' />
        </div>
    );
}

export default Home;