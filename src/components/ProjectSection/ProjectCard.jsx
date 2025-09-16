import {useState} from 'react'
import styles from "./ProjectCard.module.css";
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css';
import './customLightbox.css';

export const ProjectCard = ({ project: { title, imgSrc, description, techStack, githubLink, liveLink } }) => {
  
    const [isOpen, setIsOpen] = useState(false);
  
    return (
    <div className={styles.projectCard}>
      <h3 className={styles.title}>{title}</h3>
      <img className={`${styles.image} projectImage`} src={imgSrc}
       alt={title} 
       onClick={() => setIsOpen(true)}
      />
        
        
        <Lightbox open = {isOpen} close = {() => setIsOpen(false)} 
        slides = {[{src : imgSrc}]} 
        carousel={{ finite: true }}
        // For closing the image on taping anywhere on the screen
        controller={{
            closeOnBackdropClick : true,
            closeOnBackdropTap : true,
        }}  
        // For removing the default side arrows for the image
        render = {{
            buttonPrev : () => null,
            buttonNext : () => null,
        }}
        />

      <p className={styles.description}>{description}</p>
      <p className={styles.techStack}>Tech Stack: {techStack.join(", ")}</p>
      <div className={styles.links}>
        <a className={styles.btn} href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className={styles.btn} href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
      
    </div>
  )
}