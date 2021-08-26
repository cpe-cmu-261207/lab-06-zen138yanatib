import {Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='my-5'>
			<p className='text-center text-3xl italic my-5'>Minimal Bitcoin App</p>
			<div className='flex justify-center text-md space-x-5'>
				<p>Current price</p>	
				<p>|</p>
				<p>Historical price</p>	
				<p>|</p>
				<p>About me</p>	
			</div>
		</div>
	)
}

export default Navbar