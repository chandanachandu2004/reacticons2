import React from 'react'
import ReactPlayer from 'react-player'
import Image from './wallpa.jpg';



const Body = () => {
   
  return (
    <div>
        <center><ReactPlayer url={'https://www.youtube.com/watch?v=Si7DovGBDuQ'}height={200} width={200}controls/></center> <br></br>
        <center><img src={Image} height={200} width={200}alt=""className='image'/></center>
        <p>hii</p>
       </div>
  )

    }
    export default Body