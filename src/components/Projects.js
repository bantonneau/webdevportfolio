import React from 'react'
import '../styles/Projects.css'
import { projectList } from "../helpers/ProjectList";
import { Link } from 'react-router-dom';
import { GitHub, Launch } from '@mui/icons-material'
import IconGitHub from '../assets/icons/github';
import commonCents from '../assets/projectPics/commonCents.png'
import jobMode from '../assets/projectPics/jobMode.png'


function Circle() {
  return (
    <svg width="40" height="40">
      <circle className='GHprojBorder' cx="20" cy="20.3" r="16" strokeWidth='3px' />
    </svg>
  );
}

function Projects({ projectRefs }) {
  return (
    <section className='projects row'>

      <section className='projectContainer'>
        <div className='projectPicContainer'>
          <img src={commonCents} alt="Featured image of the 'Common Cents' project" className='projectPic' />
        </div>
        <div className='projectContentBlock commonCentsProjectBlock'>
          <div className='projectTitleBlock'>
            <h1><span className='projectTitleNumber'>01.</span> Common Cents</h1>
            <div className='projectSkillsBlock'>
              <div>React.js</div>
              <div>MongoDB</div>
              <div>GraphQL</div>
              <div>Node.js</div>
              <div>Express.js</div>
            </div>
          </div>
          <div className='projectDescriptionBlock'>
            <p>A personal budgeting app utilizing the 50-30-20 principle - a simple approach to budgeting where 50 percent of your income goes to needs, 30 percent goes to wants, and 20 percent goes to debt and taxes.</p>
            <div className='projectIconBlock'>
            <Link to="https://github.com/cbigham25/common-cents" target='_blank'>
                <IconGitHub className='projectIcon' />
              </Link>
              <Link to="https://common-cents-bootcamp-fc6fba95f1fb.herokuapp.com/" target='_blank'>
                <Launch className='projectIcon' />
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className='projectContainer'>
        <div className='projectContentBlock jobModeProjectBlock'>
          <div className='projectTitleBlockB'>
            <h1><span className='projectTitleNumber'>02.</span> Job Mode</h1>
            <div className='projectSkillsBlockB'>
              <div>Handlebars.js</div>
              <div>MySQL</div>
              <div>GraphQL</div>
              <div>Node.js</div>
              <div>Express.js</div>
            </div>
          </div>
          <div className='projectDescriptionBlockB'>
            <p>A full stack job board application that connects job seekers to opportunities. If you aren't ready to apply but find a job you like, you can bookmark listings to come back to later.</p>
            <div className='projectIconBlock'>
              <Link to="https://github.com/bantonneau/jobBoard" target='_blank'>
                <IconGitHub className='projectIcon' />
              </Link>
              <Link to="https://ancient-dusk-05754-ae43192e47d1.herokuapp.com/" target='_blank'>
                <Launch className='projectIcon' />
              </Link>
            </div>
          </div>
        </div>
        <div className='projectPicContainer'>
          <img src={jobMode} alt="Featured image of the 'Job Mode' project" className='projectPic' />
        </div>
      </section>

      {/* <ul>
        {projectList.map((project, index) => (
          <li key={index} ref={projectRefs[index]}>
            <section className='projectTitle'>
              <p className='strongBlue' style={{ textDecoration: 'none' }}><strong>{project.name}</strong></p>
              <div className='projectButtons'>
                <Link to={project.github} target='_blank' className='GHprojIcon'>
                  <GitHub className='githubIcon' />
                  <Circle />
                </Link>
                {project.demo ? <button className='projButton' onClick={() => window.open(project.demo, '_blank')}>DEMO</button> : ""}
                {project.live ? <button className='projButton' onClick={() => window.open(project.live, '_blank')}>LIVE</button> : ""}
              </div>
            </section>
            {project.features.map((skill, index) => (
              <ul key={index} className='projectBullets'>
                <li> &#x2022; &nbsp; &nbsp; &nbsp;{skill} </li>
              </ul>
            ))}
            <p><strong>Technologies: {project.technologies}</strong></p>
          </li>
        ))}
      </ul> */}
    </section>
  )
}

export default Projects