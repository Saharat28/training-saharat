import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom'
const NotFount = () => {
  return (
    <Layout>
        <h1 className='text-5xl text-center'>404</h1>
        <div>
        <li>กลับสู่ <NavLink to="/" className=" hover:text-lavender">หน้าหลัก</NavLink></li>
        </div>
    </Layout>
  )
}

export default NotFount
