import React from 'react'

function Header() {
  return (
    <>
    <div className='flex justify-between mx-4 mt-5'>
      <div>
        <h2>Shoppy Globe</h2>
      </div>
      <div className='flex'>
        <ul className='flex gap-x-6 font-serif font-medium'>
          <li>Home</li>
          <li>Sign in</li>
          <li>Cart</li>
          <li>Place order</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header