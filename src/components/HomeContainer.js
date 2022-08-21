import React from 'react'
import '../HomeContainer.css'
import Bike from '../img/delivery.png'
import I1 from '../img/i1.png'
const HomeContainer = () => {
    return (
        <div className='main'>
            <div className='left'>
                <div className='bike'>
                    Bike Delivery
                    <div className='bike-img'>
                        <img src={Bike} alt="bike" width={25} height={25} />
                    </div>
                </div>
                <div className='hero'>
                    <h1>The Fastest Delivery in <span>Your City</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellat perspiciatis aut quos voluptatum, enim eum itaque dicta praesentium doloribus!</p>
                    <button>Order Now</button>
                </div>
            </div>
            <div className='right'>
                <div className='card'>
                    <img src={I1} alt="i1" width={100} />
                    <h5>Icecreams</h5>
                    <h6>Chocolate & vanilla</h6>
                    <p><span style={{ fontWeight: 'bold' }}>$ </span>5.52</p>
                </div>
                <div className='card'>
                    <img src={I1} alt="i1" width={100} />
                    <h5>Icecreams</h5>
                    <h6>Chocolate & vanilla</h6>
                    <p><span style={{ fontWeight: 'bold' }}>$ </span>5.52</p>
                </div><div className='card'>
                    <img src={I1} alt="i1" width={100} />
                    <h5>Icecreams</h5>
                    <h6>Chocolate & vanilla</h6>
                    <p><span style={{ fontWeight: 'bold' }}>$ </span>5.52</p>
                </div><div className='card'>
                    <img src={I1} alt="i1" width={100} />
                    <h5>Icecreams</h5>
                    <h6>Chocolate & vanilla</h6>
                    <p><span style={{ fontWeight: 'bold' }}>$ </span>5.52</p>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer