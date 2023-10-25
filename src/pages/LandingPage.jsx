import '../styles/landingpage.css'
import balls from '../assets/balls.png'

const LandingPage = () => {
  const cvPdfUrl = 'src/assets/CV_VanessaOliveros.pdf';

  return (
    <div className="section">
      <div className='landing-section'>
        <div className='hello-section'>
          <h1>Hello, I&apos;m Vanessa,<br /><span>software developer.</span></h1>
          <p>I can help you build a product, feature, or website. Check out some of my work and experience. If you like what you see and have a project that needs coding, do not hesitate to contact me.</p>
        </div>
        <img src={balls} alt="balls" className='balls' />
        <a 
          href={cvPdfUrl}
          download="CV_VanessaOliveros.pdf"
          className='cv-btn btns'
        >
          Download CV
        </a>
      </div>
    </div>
  )
}

export default LandingPage