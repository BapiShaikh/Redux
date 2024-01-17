import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <div className='cart'><img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='Cart icon'/> </div>
      <div className='container'>
       <div className='container1'><img src='https://www.91-img.com/pictures/151039-v4-vivo-t2x-mobile-phone-large-1.jpg' alt=''/></div>
       <div className='container2'>
        <p>sumsung</p>
        <span>price: $ 1000</span>
       </div>
       <div className='container3'>
       <button>Submit</button></div>
      
      </div>
      
    </div>
  )
}

export default Home
