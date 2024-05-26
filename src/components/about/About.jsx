import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p> RentUp is a group of professionals from all walks of life - sharing a common passion for wealth creation and a deep understanding of investments and commercial real estate.</p>
            <p> RentUp utilizes data-driven insights and in-depth experience to help clients make safe, calculated investment choices with the aim of building a stable, long-term portfolio.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.png' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
