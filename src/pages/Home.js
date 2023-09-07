import React from 'react'
import HomeButton from '../components/HomeButton'
import image1 from '../assets/designer_1.png'

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
            <div className='homeh1'>
                <h1>Introduce Your Product </h1>
                <h1>Quickly & Effectively</h1>
            </div>
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
            </div>
            <div className='home-button-container' >
                <HomeButton title={'Purchase UI Kit'} />
                <HomeButton title={'Learn more'}/>
            </div>
            <img className='image1' src={image1} alt='pic1'/>
            </div>
            <div className='home-container'>
                

            </div>
        </div>
    )
}

export default Home