import styles from '../style';
import { discount, robot, Cvideo } from '../assets'

const Hero = () => (
    <section id ='home' className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col relative xl:px-0 sm:px-0`}>
        <div className='relative'>
          <video autoPlay loop muted className="object-cover bg-black opacity-50 w-full h-full">
            <source src={Cvideo} type="video/mp4" alt="conatixvideo" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300 mr-20">Watch Video</button>
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300 ml-20">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )


export default Hero