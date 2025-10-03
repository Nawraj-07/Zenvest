
import React from 'react';


function  Award() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'/>
                </div>
                <div className='col-6 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5' >2+ million Zenvest clients contribute to over 15% of al retail order volumes in India daily by trading and investing in : </p>
                    <div className='row'>
                        <div className='col-6 p-5'>
                            <ul>
                        <li>
                            <p>Future and Options </p>
                        </li>

                        <li>
                            <p>Commodity Derivatives</p>
                        </li>

                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                           </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>

                        <li>
                            <p>Direct mutual funds</p>
                        </li>

                        <li>
                            <p>Bonds and Government security</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                        <img src='media\pressLogos.png' style={{width:"90%"}} alt="Press logos"/>      
                </div>             
            </div> 
        </div>
     );
}

export default Award;