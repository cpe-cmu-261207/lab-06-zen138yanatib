import {Link } from 'react-router-dom'

const Navbar = () => {
 return (
  <div className='my-5'>
   <p className='text-center text-3xl italic my-5'>Minimal Bitcoin App</p>
   <div className='flex justify-center text-md space-x-5'>
    <Link to='/current'>
     <p>Current price</p> 
    </Link>
    <p>|</p>
    <Link to='/history/select'>
     <p>Historical price</p> 
    </Link>
    <p>|</p>
    <Link to='/about'>
     <p>About me</p> 
    </Link>
   </div>
  </div>
 )
}

export default Navbar