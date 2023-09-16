import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../../components/ui/LoginInput";
import SubmitButton from "../../components/ui/SubmitButton";
import Title from "../../components/ui/Title";
import Home from "../home/Home";

function Login({data}) {
  let navigate = useNavigate();


    console.log("Login component rendered");
  
    let {token, setToken} = data;

  const userName = useRef('');
  const userPass = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
    
    let obj = {
      userName: userName.current.value,
      password: userPass.current.value
    };
    console.log(obj);
    fetch(`http://localhost:1212/admin/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(data => {
        setToken(data);
        if(data.token){
        localStorage.setItem('token', JSON.stringify(data));
        }
      })
  }

  

  return (
    <>
      <div className="w-[330px] rounded m-auto mt-20 px-7 py-2 border border-slate-400">
        <form onSubmit={handleSubmit} className="rounded w-full m-auto">
          <Title title={"Kirish"} />
          <LoginInput placeholder={"Login"} name={'userName'}  />
          <LoginInput placeholder={"Parol"} name={'userPass'}  />
          <SubmitButton title={"Kirish"} onClick={() => navigate('/')} />
        </form>
      </div>
    </>
  );
}

export default Login;