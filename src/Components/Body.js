import React, { useState } from 'react'
import Image from './wallpa.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [cartoon, setcartoon] = useState([
        { cartoon: <b>'Tom and Jerry' </b>},
        { cartoon: 'Motu Patlu' },
        {cartoon:'Doremon'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % cartoon.length
        setIndex(newIndex)
    }
    
        <div>
            <p>i like this {cartoon[index].cartoon}</p>
            <button onClick={change}>Change me</button>
        </div>
    

    return (
        <div>
            <div>
                <center>
               <center><img src={Image} alt="images" height={200} width={200}/></center>
                <p><b><u>river</u></b></p> <br/>
                <p><b>likes: {likes}</b></p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
                </center>
            </div><br/>
            <br/>
            <div style={{ paddingTop: '50px' }}>
                <center><label htmlFor="Name"><b>Name : </b></label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} /><br/><br/>
               
                <center><label htmlFor='Email'><b>Email :</b></label>
                <input type="text"  value={text} />
                <p>output : {text}</p>
                <button onClick={reset}>Reset</button></center></center>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=t0Q2otsqC4Inpm'} controls />
                <div>
                    <p><b>Tom and Jerry </b></p>
                    <div>
            <p>i like this {cartoon[index].cartoon}</p>
            <button onClick={change}>Change me</button>
        </div>
    
                </div>
            </div>
        </div>
    )
}
export default Body