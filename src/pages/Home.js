import React, { Component } from 'react'
import '../css/App.css';
import Navbar from '../components/navbar'
import NewsBlock from '../components/newsblock';
// import { useParams } from 'react-router-dom'
// import PropTypes from 'prop-types'


export default function Home(props) {
  // const { category_param } = useParams()
  // console.log(`cat param is ${category_param}`)
  return (
    <>
    <Navbar currentcategory={props.category} />
    <h1 className='text-center mt-5'>Top Headlines - {props.category}</h1>
    <NewsBlock pageSize={12} category={props.category} country='in'/>
    </>
  )
}

Home.defaultProps = {
  category : 'general'
}



