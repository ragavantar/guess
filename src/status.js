import React, {Component} from 'react';

class Status extends Component{
    render(){
        return(
            <div className='status'>
                <div className='queContainer'>
                    <div className='que'>q1</div>
                    <div className='que'>q2</div>
                    <div className='que'>q3</div>
                    <div className='que'>q4</div>
                    <div className='que'>q5</div>
                </div>
                <div className='line'></div>
            </div>
        )
    }
}

export default Status;