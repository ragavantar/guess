import React, {Component} from 'react'

class Home extends Component{
render(){
    return(
        <div className='home'>
            <img 
            src='https://www.logolynx.com/images/logolynx/a6/a6c850fec9618417b27d4cbaa62c6425.jpeg'
            alt='logo'
            />
            <p>Guess the right price of 5 products & win an exciting launch coupon</p>
            <div className='dotborder'>CHOOSE A CATEGORY</div>
            <div className='buttons'>
                <button className='button'>Women</button>
                <button className='button'>Men</button>
                <button className='button'>Kids</button>
                <div className="border"></div>
            </div>
            <div>
                <span>icon</span>
                <p>you can also wishlist your fav styles</p>
            </div>
        </div>
    )
}
}

export default Home;