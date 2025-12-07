import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Navbar from './components/Navbar'
import './App.css'
import infiniteScroll from "./components/initeScroll"


function App() {



  // Track scroll progress of the entire page
  const { scrollYProgress } = useScroll()

  // Move background slightly for parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0px", "200px"])

  return (
    <div>
      <motion.div

        className='min-h-screen w-full bg-cover bg-center'
        style={{
          backgroundImage: 'url("/planets-wallpaper-3840x2160-mountains-planetary-geology-25662.jpg")',
          backgroundPositionY: bgY
        }}
      >
        <Navbar />

        <div className="h-[200vh] flex flex-col items-center justify-center text-white text-4xl relative ">
          <img src="./rocket_1-removebg-preview.png" className="z-1" alt="" />
          <img src="./output-onlinegiftools (1).gif" width={'500px'} height={'600px'} className="rotate-180 z-3 absolute bottom-70  " alt="" />
        </div>







      </motion.div>


      <div className="bg-black py-20">
        <infiniteScroll
          images={[
            "https://images.pexels.com/photos/19210730/pexels-photo-19210730.jpeg",
            "https://tse4.mm.bing.net/th/id/OIP.JlOZVfNiFX2WKUsTfvUBvAHaLH",
            "https://images.pexels.com/photos/31299772/pexels-photo-31299772.jpeg",
            "https://static.vecteezy.com/system/resources/previews/038/092/016/non_2x/ai-generated-giraffe-high-quality-image-free-photo.jpg",
            "https://tse2.mm.bing.net/th/id/OIP.n5P8JThHx6Yn3LuVrxxkWQHaD5"
          ]}
         
        />
      </div>








    </div>
  )
}

export default App
