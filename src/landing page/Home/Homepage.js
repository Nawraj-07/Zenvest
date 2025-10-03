//homepage.js
/*import React from 'react';

import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Homepage() {
    return <div>
            <Navbar />
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </div>
}

export default Homepage;*/

// Homepage.js
/*import React from 'react';


function HomePage() {
  return (
    <div>
      <h1>Hello from HomePage</h1>
      
    </div>
  );
}

export default HomePage; // ✅ IMPORTANT*/

import React from 'react';

import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
//import Navbar from '../Navbar';
//import Footer from '../Footer';

function Homepage() {
    return (
        <div>
            
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
        </div>
    );
}

export default Homepage;

