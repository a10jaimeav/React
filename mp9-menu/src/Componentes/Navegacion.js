import React from 'react'
import {NavLink} from 'react-router-dom' //A diferencia de Link, tiene una función que es IsActive

export default function Navegacion() {
  const estilo = {
    padding:"2em",
    width:"10%",
    color:"white",
    textDecoration:"none"
  }
  const estiloact = {
    padding:"2em",
    width:"10%",
    color:"yellow",
    fontWeight:"bold",
    textDecoration:"none"
  }
  return (
    //Doble llave en backgroundColor porque una avisa de que va a recibir javascript y la otra de las características
    <nav style={{backgroundColor:"red", color:"white", textDecoration:"none"}}>
        <NavLink to="/" style={({isActive}) => 
          isActive
          ? estiloact
          : estilo}>Inicio</NavLink>
        <NavLink to="/about" style={({isActive}) => 
          isActive
          ? estiloact
          : estilo}>Sobre nosotros</NavLink>
        <NavLink to="/posts" style={({isActive}) => 
          isActive
          ? estiloact
          : estilo}>Posts</NavLink>
    </nav>
  )
}
