import React from 'react'
import '../FruitContainer.css'
import RowContainer from './RowContainer'
const FruitContainer = () => {
    return (
        <div className='fruit'>
            <div className='fruit-head'>
                <h2>Our Fresh & Healthy Fruits</h2>
                <div className='fruit-btn'>
                    <button>{'<'}</button>
                    <button>{'>'}</button>
                </div>
            </div>
            <RowContainer scroll={ true} />
        </div>
    )
}

export default FruitContainer