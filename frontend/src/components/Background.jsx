import React from 'react';
import back1 from '../assets/back1.jpg';
import back2 from '../assets/back2.jpg';
import back3 from '../assets/back3.jpg';
import back4 from '../assets/back4.jpg';

function Background({heroCount}) {
  if(heroCount === 0){
    return <img src={back1} alt="image1"  className="w-[100vw] h-[100vh] object-cover absolute " />
  }
  else if(heroCount === 1){
    return <img src={back2} alt="image2" className="w-[100vw] h-[100vh] object-cover absolute"/>
  }
   else if(heroCount === 2){
    return <img src={back3} alt="image3" className="w-[100vw] h-[100vh] object-cover absolute "/>
  }
   else if(heroCount === 3){
    return <img src={back4} alt="image4" className="w-[100vw] h-[100vh] object-cover absolute "/>
  }
}

export default Background 