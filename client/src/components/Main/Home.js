import React from 'react'
import { Link } from 'react-router-dom';

import dogImg from '../../assets/images/dog.jpg';

function Home() {
    return (
        <Link to="/create_report" >

        <div className="home-class">
            <div className="outer-div brand-bg-color">
                <div className="inner-div home-inner-div title-body-bg-color">
                    <h1 className="brand-title">Pet Alert</h1>
                    <h4 className="brand-text">Quickly build a community brigade.</h4>
                    <div className="dog-img-div">
                        <img src={dogImg} alt="a dog sit on the front page" className='homepage-dog' />
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        </Link>
    );
}

export default Home;