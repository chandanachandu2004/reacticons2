// // // import React from 'react'
// // // import ReactPlayer from 'react-player'
// // // import Body from './Components/Body'
// // // import Header from './Components/Header'
// // // import Footer from './Components/Footer' 
// // // const App = () => {
// // //   return (
// // //     <div> <Header></Header><br/><Body/><br/><Footer></Footer></div>
// // //   )
// // // }

// // // export default App

 import React from 'react'
 import Navigation from './Components/Navigation'
 import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
 import Home from './Components/Home'
 import Contact from './Components/Contact'
 import TodoList from './Components/TodoList'
 import Footer from './Components/Footer'
 
 const App = () => {
   return (
    <div>
      <Router>
 <div>
    
      <Navigation/>
       </div>
      <Routes>
         <Route  path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Todolist' element={<TodoList/>}/>
       </Routes>
     </Router>
    
    <div>
      <Footer/>
    </div>
    </div>
  )
 }

 export default App