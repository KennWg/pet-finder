import React from 'react'
import dogImg from '../../assets/images/dog.jpg';

function Home() {
    return (

        <div className="home-class outer-div brand-bg-color">

            <h1 className="brand-title">Welcome to the Pet Finder</h1>
            <h2 className="brand-text">We'll help you spread the word.</h2>
            <img src={dogImg} alt="a dog sit on the front page" className='homepage-dog' />
            <br></br>
        </div>
    );
}

export default Home;