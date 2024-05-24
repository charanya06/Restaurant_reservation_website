//import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading" style={{fontSize:60}}>We Serve<br/></h1>
                <p>It isn’t just coffee. We serve a variety of refreshments, snacks and delicacies to satisfy your taste buds <br/> and make sure you get the best experience with us.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                {/* <button>{element.category}</button> */}
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
