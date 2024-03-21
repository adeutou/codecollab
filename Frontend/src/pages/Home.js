import React from 'react'

import Banner from '../components/Banner/Banner';
import Newsletter from '../components/Newsletter/Newsletter';
import Stacks from '../components/Stacks/Stacks';
import About from '../components/About/About';
import Mentor from '../components/Mentor/Mentor';

function Home() {
  return (
    <main>
      <Banner />
      <Stacks />
      <About />
      <Mentor />
      <Newsletter />
    </main>
  );
  
}

export default Home