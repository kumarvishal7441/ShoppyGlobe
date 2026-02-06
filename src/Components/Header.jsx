import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div className='flex justify-between mx-4 mt-5'>
      <div>
        <h2> <Link to='/'>Shoppy Globe</Link></h2>
      </div>
      <div className='flex'>
        <ul className='flex gap-x-6 font-serif font-medium'>
          <li><Link to='/'>Home</Link></li>
          <li>Sign in</li>
          <li><Link to='/cart'>Cart</Link></li>
          <li>Place order</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header