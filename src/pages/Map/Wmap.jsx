import React from 'react'

const Wmap = () => {
  return (
    <div className='w-full'>
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2si"
      width="450"
      height="660"
      style={{ border: "2" }}
      loading="lazy"
>   </iframe>
    </div>
  )
}

export default Wmap