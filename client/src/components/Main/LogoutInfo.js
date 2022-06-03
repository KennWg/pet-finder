import React from 'react'
import sadDogImg from '../../assets/images/cry_dog.jpg'

function LogoutInfo(){
    return(
        <div className='logout-info-class outer-div'>
            <h2>Thank you for using PetFinder</h2>
            <img src={sadDogImg} alt='a cry dog' className='homepage-dog'/>
            <h3>Please keep helping us find the loves</h3>
        </div>        
    )
}

export default LogoutInfo;