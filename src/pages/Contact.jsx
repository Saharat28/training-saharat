import React from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom'
const Contact = () => {
    const params = useParams();
  return (
    <Layout>
      <h1 className="text-6xl">ติดต่อ</h1>
        <hr className="h-1 bg-black border-1"/>
        <h2 className='mt-4'>NVC Training Center</h2>
        <p>ที่อยู่: ม.14 ต.เขาขลุง อ.บ้านโป่ง จ.ราชบุรี 70110</p>
        <p>เบอร์โทร: 0646747347</p>
        <p>E-mail: bassaharat123za@gmail.com</p>
    </Layout>
  )
}

export default Contact