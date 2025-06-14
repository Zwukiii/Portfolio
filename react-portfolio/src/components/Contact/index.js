import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_ue2we5e', // ← Replace with your EmailJS service ID
                'template_mc578yk', // ← Replace with your EmailJS template ID
                refForm.current,
                'zEaFgg2ZXCCVIkBPu' // ← Your actual public key
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    window.location.reload(false)
                }, 
                () => { 
                    alert("Failed to send the message, please try again.")
                }
            )
    }

    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <table>
                        <tbody>
                        <tr>
                            <td className="left-side">
                                <h1>
                                    <AnimatedLetters letterClass={letterClass} strArray={"Contact me".split("")} idx={15} />
                                </h1>
                                <p>
                                    <br />
                                    Thank you for your interest in getting in touch!
                                    <br /><br />
                                    I'm currently looking for internship opportunities to gain hands-on experience — feel free to get in touch!
                                    <br /><br />
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alen-smlatic-227333315/">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon" color="#4d4d4e" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="mailto:alen.smlatic2002@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} className="icon" color="#4d4d4e" />
                                    </a>
                                </p>
                            </td>
                            <td className="right-side">
                                <div className="contact-form">
                                    <form ref={refForm} onSubmit={sendEmail}>
                                        <ul>
                                            <li className="half">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </li>
                                            <li className="half">
                                                <input type="email" name="email" placeholder="Email" required />
                                            </li>
                                            <li>
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </li>
                                            <li>
                                                <textarea name="message" placeholder="Message" required></textarea>
                                            </li>
                                            <li>
                                                <input type="submit" className="flat-button" value="SEND" />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
