import landingImage from '../assets/landing.png'
import appDownloadImage from '../assets/appDownload.png'

const HomePage = () => {
  return (
     <div className="flex flex-col gap-12">
       <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
         <h1 className="text-5xl font-bold tracking-tight text-red-600">
            Crave it. Click it. BiteStorm.
         </h1>
         <span className="text-xl">Discover restaurants, order fast, and track every bite in real time.</span>
       </div>
       <div className="grid md:grid-cols-2 gap-5">
           <img src={landingImage} /> 
           <div className='flex flex-col items-center justify-center gap-4 text-center'>
             <span className="font-bold text-3xl tracking-tighter">
                Order takeaway faster !  
             </span>
             <span>
                Download the BiteStorm App for faster ordering and personalised reccomendations  
             </span>
             <img src={appDownloadImage} />
          </div>
       </div>
     </div> 
  )
}

export default HomePage