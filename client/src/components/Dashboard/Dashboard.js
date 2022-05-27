import React, { useState } from 'react'
import dogImg from '../../assets/images/dog.jpg';

function Dashboard() {

    const highlightStyle = {
        color:'red',
        fontWeight: 'bold'
    };

    const imgStyle = {
        height:'200px'
    }

    return (
        <div className="dashboard">
            <p>
                <section>
                    <h2 class="row">
                        <button className="btn btn-primary" data-testid="button" type="submit">Create a Report<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" data-testid="button" type="submit">All Reports<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" data-testid="button" type="submit">Logout<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" data-testid="button" type="submit" style={highlightStyle}>Delete Account<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </h2>
                </section>

                <section class="new-pet-report">
                    <div class="row">
                        <img class="col-md-4 col-12" style={imgStyle} src={dogImg} alt="dog_img" />
                        <h3 class="col-md-8 col-12">Some text</h3>
                    </div>

                    <div class="row">
                        <button className="btn btn-primary" data-testid="button" type="submit">Edit Report<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" data-testid="button" type="submit">Delete Report<i class="fa fa-paper-plane" aria-hidden="true"></i></button>                       
                    </div>
                </section>

                <section class="my-report">
                    <div>
                        <h4>Reports I have commented on</h4>
                    </div>
                
                    <div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </section>
            </p>
        </div>
    );
}

export default Dashboard;