import React, {Component} from 'react';

class Prod extends Component{
    render(){
        return(
            <div className="prod">
                <div className='imgContainer'>
                    <img src='https://assets.myntassets.com/h_960,q_80,w_720/v1/assets/images/5126565/2019/3/7/dd6aae16-f9df-47be-bc25-4fa72a49818c1551943426701-Vishudh-Women-Mustard-Printed-Maxi-Dress-5271551943425373-1.jpg' alt='product image'/>
                    <span>W</span>
                </div>
                <div className='title'>GUESS THE PRICE</div>
                <div className='sub-title'>fitted dress</div>
                <div className='buttons'>
                    {/* <div>
                    <button>Rs1599</button>
                    <button>Rs1599</button>
                    <button>Rs1599</button>
                    <button>Rs1599</button>
                    </div> */}
                    <div className='wrong'>
                        <div className='text'>THE RIGHT PRICE IS</div>
                        <div className='price'>Rs1699</div>
                        <div className='wish'>+ADD THIS PRODUCT TO THE WISHLIST</div>
                    </div>
                    <div className='border-top' />
                    <div className='border-col-left' />
                    <div className='border-col-right' />
                </div>
                <div className='box' />
            </div>
        )
    }
}

export default Prod;