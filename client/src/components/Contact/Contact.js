import React from 'react'


const Contact = () => {
  return (
    <div class='content'>
              <h1 className="text-6xl text-teal-600 font-medium dark:text-teal-400">Contact</h1>
              <div class='container'>
                <h2 className="text-2xl py-2"><span className='font-semibold'> Name: </span>Vegas Cruz</h2>
                <h2 className="text-2xl py-2"><span className='font-semibold'> Email: </span><a href="mailto:Vegascruz5@gmail.com" className="text-teal-600">Vegascruz5@gmail.com</a></h2>
                <h2 className="text-2xl py-2"><span className='font-semibold'> Phone Number: </span> (608)633-4602</h2>
                <h2 className="text-2xl py-2"><span className='font-semibold'> GitHub: </span> <a href="https://github.com/vegascruz" target="_blank" className="text-teal-600">https://github.com/vegascruz</a> </h2>
              </div>
      </div>
  )
}

export default Contact