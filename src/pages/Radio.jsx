import React from 'react'
import SlideHome from "../components/slidehome/SlideHome";
import Section from "../components/section/Section";
import "../scss/_home.scss"

import { RADIO_1, SECTION_1,SECTION_2,SECTION_3,SECTION_4 } from "../assets/fake-data/db";
import RadioSection from '../components/section/radio-section/RadioSection';
const Radio = () => {
  return (
    <div className='container-main'>
      <RadioSection />
      <Section title={"Khám Phá Podcast"} list={RADIO_1}/>
      <Section title={"Có thể bạn muốn nghe"} list={SECTION_1}/>
    </div>
  )
}

export default Radio