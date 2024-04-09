import './App.scss'
import logo from './assets/logo.svg'
import img from './assets/illustration-mockups.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function App() {

  const socials = [
    {
      icon: <FaFacebookF/>,
    },
    {
      icon: <FaTwitter/>,
    },
    {
      icon: <FaInstagram/>,
    }]


  return (
    <div className='div'>
      <header>
        <div className='c_container'>
          <nav className='h-[9vh] flex items-center justify-between '>
            <div className='w-[300px] '>
              <img src={logo} className='w-[200px]' alt="logo" />
            </div>
          </nav>
        </div>
      </header>
      <main className='md:py-14 py-3'>
        <div className='c_container'>
          <div className='md:grid md:grid-cols-2 gap-4'>
            <div>
              <img className='w-[600px] h-[470px]' width={709} height={506} src={img} alt="new-img"  />
            </div>
            <div className='flex flex-col gap-4 justify-center'>
              <h1 className='font-bold text-white capitalize md:text-5xl text-2xl text-center md:text-start mb-4 ff-p'>Build the community your fans will love</h1>
              <div>
                <p className='font-medium text-white md:text-lg text-sm mb-4 text-center md:text-justify'>Huddle re-imagines the way we build communities. You have a voice,but so dose your audience. Create connections with your users as you engage in genuine discussion.</p>
                <div className='flex items-center gap-4 justify-center md:justify-start'>
                  <button className='bg-white  px-9 py-2 rounded-3xl mt-4 hover:bg-[Violet] btn  hover:text-white text-[Soft_Magenta] flex items-center justify-center text-base md:text-lg gap-2'>Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='py-3'>

        <div className='c_container'>
          <ul className='flex gap-3 items-center md:justify-end justify-center'>
            {socials.map((social, index) => (
              <li key={index} className='flex text-white hover:text-[#e882e8] cursor-pointer items-center justify-center hover:border-[#e882e8] gap-2 mb-4 border-2 border-white rounded-full w-10 h-10'>
                {social.icon} 
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
