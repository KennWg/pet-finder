import React, { useState } from 'react'
import dogImg from '../../assets/images/dog.jpg';

import { useStoreContext } from '../../utils/GlobalStore';
import { UPDATE_VIEW } from '../../utils/actions';

function Dashboard() {

    const { users } = useStoreContext();
    const [state, dispatch] = useStoreContext();

    const highlightStyle = {
        color:'red',
        fontWeight: 'bold'
    };

    const imgStyle = {
        height:'200px'
    }

    const handleClick = async ({target}) => {
        console.log(target.value)
        await dispatch({
            type: UPDATE_VIEW,
            currentView: target.value
        })
    };

    return (
        <div className="dashboard">
            <p>
                <section>
                    <form className="row">
                        
                        {/* {users.map((user) => (
                            <h3 key={user.username}>
                                Welcome, {user.username}
                            </h3>
                        ))} */}

                        <button className="btn btn-primary" data-testid="button" type="submit">Create a Report<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" data-testid="button" type="submit" value="ALL REPORTS" onClick={handleClick}>All Reports<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" data-testid="button" type="submit" value="VIEW REPORT" onClick={handleClick}>SingleReport<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" data-testid="button" type="submit">Logout<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" data-testid="button" type="submit" style={highlightStyle}>Delete Account<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>
                </section>

                <section className="new-pet-report">
                    <div className="row">
                        <img className="col-md-4 col-12" style={imgStyle} src={dogImg} alt="dog_img" />
                        <h3 className="col-md-8 col-12">Some text</h3>
                    </div>

                </section>

                <section className="my-report">
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