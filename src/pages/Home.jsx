import React from 'react'
import Section from '../components/section/Section'
import SlideHome from '../components/slidehome/SlideHome'

const Home = () => {
  return (
    <div className='container-main'>
      <SlideHome />
      <Section title={"Có thể bạn muốn nghe"}/>
      <Section title={"Nhạc mới mỗi ngày"}/>
      <Section title={"Top 100"}/>
      <Section title={"XONE's CORNER"}/>
      <Section title={"Radio Nổi Bật"}/>
    </div>
  )
}

export default Home