import React from 'react'
import SkillsGrid from './SkillsGrid.jsx'
import useInView from '../hooks/useInView'

export default function About() {
  const [aboutLeftRef, aboutLeftVisible] = useInView()
  const [aboutRightRef, aboutRightVisible] = useInView()

  return (
    <section id="about" className="about-main">
      <div className="about-main-container">
        <div className="about-main-grid">
          <div className="about-main-left">
            <div 
              ref={aboutLeftRef}
              className={`about-main-card-left ${aboutLeftVisible ? 'visible' : ''}`}
            >
              <SkillsGrid />
            </div>
          </div>

          <div className="about-main-right">
            <div 
              ref={aboutRightRef}
              className={`about-main-card-right about-main-text ${aboutRightVisible ? 'visible' : ''}`}
            >
              <div className="about-main-title">About Me</div>
              <div className="about-main-name">I am <span className="about-main-accent">Pavan Bhosle</span></div>
              <p className="about-main-paragraph">I’m a Final Year B.Tech student in Artificial Intelligence & Data Science and a passionate Full Stack + AI Developer with a strong interest in web development, machine learning, and modern technologies. I enjoy building real-world projects, exploring new ideas, and creating impactful digital solutions. I’m constantly learning and improving my skills, and currently looking for opportunities in Full Stack and AI roles to grow, contribute, and build innovative products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
