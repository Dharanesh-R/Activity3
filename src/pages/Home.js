import React from 'react'
import Service from '../Service'
import Footer from '../Footer'
import Reducer from '../Reducer'
import ExampleComponent from '../Effect'
export default function Home() {
  return (
    <div> Home <Service/> 
    <Service/> 
    <Service/> 
    <ExampleComponent/>
    <div><Footer/></div>
    <div><Reducer/></div>
    </div>
  )
}