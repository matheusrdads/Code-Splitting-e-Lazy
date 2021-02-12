import React from 'react'
import { useState, useEffect } from 'react'

function Register() {

  const [register, setRegister] = useState([]);

  function getUser() {
    async function ShowMyUser() {
      const url = "http://localhost:4444/usuarios";
      const resposta = await fetch(url);
      const resultado = await resposta.json();
      setRegister(resultado)
    }
    ShowMyUser()
  }

  useEffect(()=> {getUser()}, [])

  useEffect(()=> { }, [register])


  return (
    <div>
      <p>Em construção</p>
    </div>

  )
}

export default Register
