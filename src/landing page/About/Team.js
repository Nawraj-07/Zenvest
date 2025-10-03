import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-5 mt-2'>
                <h1 className='text-center'>People</h1>

            </div>
            <div className='row p-5  text-muted fs-6' style={{lineHeight:"1.8", fontSize:"1.2em" }} >
                <div className='col-6 p-5 text-center'>
                    <img src="/media/IMG-20230521-WA0034....jpg" style={{borderRadius:"100%", width:"55%" }} alt="Nawraj Singh" />  
                    <h4 className='mt-5'>Nawraj Singh</h4>                 
                </div>
                <div className='col-6 p-5' style={{fontSize:"1.2em"}} >
                    <p>Nawraj bootstrapped and founded Zenvest in 2025. Today, Zenvest has changed the landscape of the Indian broking industry.</p>
                    <p>Playing basketball is his zen.</p>
                </div>


            </div>
        </div>
    );
}

export default Team;