import React,{useState} from 'react';
import Login from './Login';
import NavMenu from './NavMenu';

export default function Viewer() {
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


  return (
    <>
      {login==="true" ?<NavMenu/>
      :<Login AdminLogin={AdminLogin}/>}
    </>
      
  )
}
