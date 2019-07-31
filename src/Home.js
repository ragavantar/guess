import React, {Component} from 'react';

//pages
import Product from './Product';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            cat : ''
        }
    }

    goProd = (cat)=>{
        console.log('going to cat : ', cat);
        this.setState({cat: 'cat'});
    }

    render(){
        const {cat} = this.state;

        if(cat === '')
        return(
            <div className='home'>
                <img 
                src='https://www.logolynx.com/images/logolynx/a6/a6c850fec9618417b27d4cbaa62c6425.jpeg'
                alt='logo'
                />
                <p>Guess the right price of 5 products & win an exciting launch coupon</p>
                <div className='dotborder'>CHOOSE A CATEGORY</div>
                <div className='buttons'>
                    <button onClick={()=>this.goProd('women')}>Women</button>
                    <button onClick={()=>this.goProd('men')}>Men</button>
                    <button onClick={()=>this.goProd('kids')}>Kids</button>
                    <div className="border"></div>
                </div>
                <div>
                    <span>icon</span>
                    <p>you can also wishlist your fav styles</p>
                </div>
            </div>
        )
        else
        return <Product cat={cat} />
    }
}

export default Home;