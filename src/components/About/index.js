import { useEffect, useState } from 'react'
import {
  faJava,        // Java
  faDocker,      // Docker
  faGitAlt,      // Git
  faPython,      // Python
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Computer science Student in my first year
          </p>
          <p align="LEFT">
            <strong style={{color: '#ffd700', fontSize: '18px'}}>Languages/FrameWorks/Dev Tools</strong>
          </p>
          <div style={{
            marginTop: '20px',
            marginBottom: '15px'
          }}>
            <div style={{
              color: '#fff',
              fontSize: '14px',
              marginBottom: '8px',
              fontFamily: 'sans-serif'
            }}>
              Python: 1 year
            </div>
            <div style={{
              width: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '70%',
                backgroundColor: '#ffd700',
                height: '20px',
                borderRadius: '4px'
              }}></div>
            </div>

            <div style={{
              color: '#fff',
              fontSize: '14px',
              marginBottom: '8px',
              fontFamily: 'sans-serif'
            }}>
              SQL: 9 months
            </div>
            <div style={{
              width: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '55%',
                backgroundColor: '#8e44ad',
                height: '20px',
                borderRadius: '4px'
              }}></div>
            </div>

            <div style={{
              color: '#fff',
              fontSize: '14px',
              marginBottom: '8px',
              fontFamily: 'sans-serif'
            }}>
              GIT: 9 months
            </div>
            <div style={{
              width: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '55%',
                backgroundColor: '#ef5b65',
                height: '20px',
                borderRadius: '4px'
              }}></div>
            </div>

            <div style={{
              color: '#fff',
              fontSize: '14px',
              marginBottom: '8px',
              fontFamily: 'sans-serif'
            }}>
              PostgreSQL: 4 months
            </div>
            <div style={{
              width: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '35%',
                backgroundColor: '#ef5b65',
                height: '20px',
                borderRadius: '4px'
              }}></div>
            </div>

            <div style={{
              color: '#fff',
              fontSize: '14px',
              marginBottom: '8px',
              fontFamily: 'sans-serif'
            }}>
              Docker: 4 months
            </div>
            <div style={{
              width: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '35%',
                backgroundColor: '#7805b2',
                height: '20px',
                borderRadius: '4px'
              }}></div>
            </div>

            <div style={{
              color: '#fff',
              fontSize: '14px',
              marginBottom: '8px',
              fontFamily: 'sans-serif'
            }}>
              Java: 4 months
            </div>
            <div style={{
              width: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '30%',
                backgroundColor: '#FF8C00',
                height: '20px',
                borderRadius: '4px'
              }}></div>
            </div>

            <div style={{
              color: '#fff',
              fontSize: '14px',
              marginBottom: '8px',
              fontFamily: 'sans-serif'
            }}>
              Spring Boot: 1 month
            </div>
            <div style={{
              width: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '15%',
                backgroundColor: '#98FF98',
                height: '20px',
                borderRadius: '4px'
              }}></div>
            </div>
          </div>
          <p>

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#ffd700" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDatabase} color="#8e44ad" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDatabase} color="#ef5b65" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDocker} color="#7805b2" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#FF8C00" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About