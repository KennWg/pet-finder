import React from 'react'
import dogImg from '../../assets/images/dog.jpg';

function Home() {
    return (

        <div className="home-class outer-div brand-bg-color">
            <div className="inner-div body-bg-color">
                <h1 className="brand-title">Pet Alert</h1>
                <h2 className="brand-text">Quickly build a community brigade.</h2>
                <div className="dog-img-div">
                <img src={dogImg} alt="a dog sit on the front page" className='homepage-dog' />
                </div>
                <br></br>
            </div>

        </div>
    );
}

export default Home;