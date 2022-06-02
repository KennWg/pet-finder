import React from 'react'
import dogImg from '../../assets/images/dog.jpg';

function Home() {
    return (

        <div className="home-class outer-div brand-bg-color">
            <div className="inner-div home-inner-div title-body-bg-color">
                <h1 className="brand-title">Pet Alert</h1>
                <h4 className="brand-text">Quickly build a community brigade.</h4>
                <div className="dog-img-div">
                <img src={dogImg} alt="a dog sit on the front page" className='homepage-dog' />
                </div>
                <br></br>
            </div>

        </div>
    );
}

export default Home;