import React,{useState} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import NavMenu from './NavMenu';
import Product from './Product';
import Home from './Home';

export default function Viewer() {
  
  

  // login Process start here
  const [login,setLogin] = useState('false');
  const AdminLogin = async (event)=>{
      event.preventDefault();
  
      const name = event.target.username.value;
      const pass = event.target.password.value;
      let data = await fetch("http://localhost/API/index_process.php",{
        method : "POST",
        body: JSON.stringify({
          name: name,
          pass: pass,
      }),
  });
        let res = await data.json();
               console.log(res.msg);
                  setLogin(res.msg);
                  console.log(login);
  }

// add product process start here
  const [PrinputValue,setPrinputValue] = useState({pc:'',pn:'',pr:''});

  const ProductDetails = (e)=> {
    setPrinputValue({...PrinputValue, [e.target.name]:e.target.value});
  }

  const addProduct = async (event)=>{
    event.preventDefault();
    
  axios.postForm("http://localhost/API/product_process.php",PrinputValue)
  .then(res=>{
    console.log(res.data);
  })
    
  }

  return (
    <>
      {login==="true" ?
      <Router>
        <Routes>
          <Route  path="/" element={<NavMenu/>}>

          <Route  path="/home" element={<Home/>}/>

          <Route exact path="/products" element={<Product AddProduct={addProduct} AllPrAdvalue={ProductDetails}/>}/>

          
     </Route>
  </Routes>
</Router>
      :<Login AdminLogin={AdminLogin}/>}

      
      

          
    </>
      
  )
}
