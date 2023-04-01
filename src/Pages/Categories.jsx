import React from 'react'
import Top from '../components/Top'
import FetchData from '../components/FetchData'
import Footer from '../components/Footer'

const Categories = ({cat}) => {
  return (
    <div>
        <FetchData cate={cat} />
        <Footer />
    </div>

  )
}

export default Categories
