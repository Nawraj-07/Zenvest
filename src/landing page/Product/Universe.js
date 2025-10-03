import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <h1>The Zenvest Universe</h1>
        <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>

        <div className='col-4 p-3 mt-5'>
          <img src="\media\smallcaseLogo.png" />
          <p className='text-small text-muted'>Thematic investing platform</p>
        </div>
         <div className='col-4 p-3 mt-5'>
          <img src="media\goldenpiLogo.png" />
          <p className='text-small text-muted'>Our assest management venture</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img src="\media\sensibullLogo.svg" />
          <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <Link to="/signup#login-form-section" className='p-2 btn btn-primary fs-5 mt-2 mb-3' style={{width:"20%", margin: "0 auto", }}>Signup</Link>
      </div>
    </div>
  );
}

export default Universe;
