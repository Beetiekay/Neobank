import React, { useEffect, useState } from 'react'
import { BsFillSunFill, BsMoonStars, BsMoonStarsFill } from "react-icons/bs"
import light from "../../assets/light.png";
import dark from "../../assets/dark.png";

const DarkT = () => {

const [theme, setTheme] = useState('light');

// useeffect down here 
 useEffect(() =>{
   if (localStorage.getItem('theme') === null) {
     localStorage.setItem('theme', 'light');
   }
}, [])

useEffect (() => {
  const html = document.querySelector('html');
   if (localStorage.getItem('theme') === 'dark') {
     html.classList.add('dark');
     setTheme('dark'); 
   } else {
     html.classList.remove('dark');
     setTheme('light');
   }
}, [theme]);

// handle theme
const handleThemeSwitch = ()=> {
    if (localStorage.getItem('theme') === 'light') {
     setTheme('dark');
     localStorage.setItem('theme', 'dark');

    } else {
       setTheme('light');
       localStorage.setItem('theme', 'light');
    }
};

  return (
    <div>
        <button onClick={handleThemeSwitch}  className='p-1 outline-none'>
            {
                theme === 'light' ? <img src={light} className='w-8'/> : <img src={dark}  className='w-8'/>
            }
        </button>
    </div>
  )
}

export default DarkT