import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero' >
            <div className='p-3'  id='supportWrapper' >
                <h4 className='mt-4'>Support Portal</h4>
                <a href=''className='mt-4'>Track Tickets</a>
            </div>
            <div className="row p-5 ">
                 <div className='col-6 p-5' >
                    <h1 className='fs-3' >Search for an answer or browse help topics to create a ticket</h1><br/>
                    <input placeholder='Eg. how do I activate F&O'/><br/><br/>
                     <a href=''className='p-3 '> Track account opening</a>
                     <a href=''className='p-3'> Track segment activation</a>
                     <a href=''className='p-3'> Intraday margins </a><br/>
                     <a href=''className='p-3'> Kite user manual</a>
                 </div>
                  <div className='col-6 p-5 ' >
                    <h1 className='fs-3' >Featured</h1>
                    <a href=''> 1. Quarterly Settlement of Funds - July 2025</a><br/><br/>
                     <a href=''> 2. Exclusion of F&O contracts on 8 securities from<br/> August 29, 2025</a>
                  </div>
            </div>
    

        </section>
    );
}

export default Hero;
