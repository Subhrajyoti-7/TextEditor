import React from 'react'
import fruits from './images/fruits.jpg'
import flowers from './images/flowers.webp'
import nature from './images/nature.avif'
export default function Card(props) {
    return (
        <div className='box' style={{ color: props.mode }}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={fruits} className="card-img-top" alt="..." />
                <div className="card-body" style={{ color: props.mode }}>
                    <h5 className="card-title">Fruits</h5>
                    <p className="card-text">Fruits are a good source of vitamins and minerals, recognized for their role in preventing vitamin C and vitamin A deficiencies.</p>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&psig=AOvVaw1VgDctZNA1wgzLVloPXzAG&ust=1705751591192000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi7pf2x6YMDFQAAAAAdAAAAABAD" className="btn btn-primary">Fruits</a>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={flowers} className="card-img-top" alt="..." />
                <div className="card-body" style={{ color: props.mode }}>
                    <h5 className="card-title">Flowers</h5>
                    <p className="card-text">When you see a flower, what is the first thing you notice is its color.A flower's color is one of many factors that makes nature so beautiful.</p>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.1800flowers.com%2Fblog%2Fflower-facts%2Fflower-color-meanings%2F&psig=AOvVaw3ZY0Aq3UqnohTFhDq4LmDy&ust=1705753118875000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDEv9a36YMDFQAAAAAdAAAAABAD" className="btn btn-primary">Flowers</a>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={nature} className="card-img-top" alt="..." />
                <div className="card-body" style={{ color: props.mode }}>
                    <h5 className="card-title">Nature</h5>
                    <p className="card-text">Experience the world like never before with these stunning nature pictures. Enjoy this incredible images.</p>
                    <a href="https://pixabay.com/images/search/nature/" className="btn btn-primary">Nature</a>
                </div>
            </div>
        </div>
    )
}
