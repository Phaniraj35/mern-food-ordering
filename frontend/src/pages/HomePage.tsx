import LandingImage from '../assets/landing.png';
import MobileAppImg from '../assets/appDownload.png'

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">

        {/* Search */}
        <div className="flex flex-col gap-5 bg-white  shadow-md py-8 rounded-lg text-center -mt-16">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-orange-500">
                Tuck into a takeaway today
            </h1>
            <span className="text-normal md:text-xl tracking-tight">Food is just a click away!</span>
        </div>

        {/* Landing  */}
        <div className="grid md:grid-cols-2 gap-5">
            <img src={LandingImage} />

            <div className="flex flex-col items-center justify-center text-center gap-4">
                <span className='font-bold text-xl md:text-3xl tracking-tighter'>
                    Order takeaway even faster!
                </span>

                <span>
                    Download the mobile app for faster ordering and personalized recommendations
                </span>

                <img src={MobileAppImg} />
            </div>
        </div>
    </div>
  )
}

export default HomePage