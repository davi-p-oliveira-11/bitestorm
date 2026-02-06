import heroimg from "../assets/heroimg.png"

const Hero = () => {
   return (
      <div>
       <img src={heroimg} className="w-full max-h-[600px] object-cover"/>
      </div>
   )   
}

export default Hero;