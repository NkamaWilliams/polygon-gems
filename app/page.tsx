import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'

function Header(){
  return(
    <div className='bg-black-900 relative'>
      <Navbar/>
      <header className='bg-gradient-black-fade'>
        <div className='min-h-screen min-w-full flex justify-center items-center flex-col relative'>
          <div className='w-[260px] sm:w-[500px] xl:w-[700px] relative flex justify-end'>
            <div className='w-[35%] max-w-[260px] aspect-square absolute top-1/4 left-5 sm:left-10 xl:left-16 -translate-y-2/4'>
              <Image className='animate-spin-slow' alt='logo' src='/images/circle.svg' fill style={{objectFit: 'contain'}}/>
            </div>

            <div className='w-4/5 max-w-xl relative aspect-[3.3]'>
              <Image className='animate-pulse-light' alt='logo' src='/images/logo.svg' fill style={{objectFit: 'contain'}}/>
            </div>
          </div>

          <p className='text-lg sm:text-2xl text-white text-glow drop-shadow-purple font-semibold mt-20 w-[90%] max-w-5xl text-center'>Awaken the Legends, Embrace the Future.</p>
        </div>
      </header>
      
      <main>
        <div className='bg-purple-guy bg-no-repeat bg-cover'>
          <div id='about' className='bg-black-transparent min-h-screen min-w-full py-10 flex items-center justify-center'>
            <div>
              <h2  className='text-2xl sm:text-6xl xl:text-5xl text-center w-full text-mid-purple font-bold my-10 uppercase head'>Unveiling the Saga</h2>

              <p className='text-lg sm:text-xl text-white mt-20 w-[90%] max-w-4xl text-center m-auto'>Welcome to Polygon Gems, the ultimate nexus where ancient legacy and cutting-edge technology converge, breathing life into a new dimension of artistic expression and blockchain mastery. Our platform thrives at the crossroads of history, magic, and innovation, creating a haven for NFT collectors, enthusiasts, and seekers of untold power. Behold the mesmerizing collection that is Polygon Gems.</p>
            </div>
          </div>
        </div>

        <div id='roadmap' className='bg-gradient-purple-fade box-border overflow-auto py-10 min-h-screen'>
          <h2  className='text-2xl sm:text-6xl xl:text-5xl text-center w-full text-mid-purple font-bold my-10 uppercase head'>Road Map</h2>

          <div className='flex justify-around flex-wrap'>
            <div className='text-white max-w-md w-full text-xl sm:w-[400px] min-w-[270px] m-auto bg-purple rounded-xl my-4 mx-4 py-5 px-8 border-4 border-blue-300'>
              <h3 className='text-2xl sm:text-4xl xl:text-5xl text-center w-full text-blue-300 font-bold my-5 uppercase head'>Phase 1</h3>
              <ul className='list-image-bluegem text-sm md:text-lg'>
                <li className='my-2 mx-3'>Launch website</li>
                <li className='my-2 mx-3'>Finish artworks</li>
                <li className='my-2 mx-3'>Smart contract development</li>
                <li className='my-2 mx-3'>Magiceden application</li>
                <li className='my-2 mx-3'>Partnership with marketplace</li>
              </ul>
            </div>

            <div className='text-white max-w-md w-full text-xl sm:w-[400px] min-w-[270px] m-auto bg-purple rounded-xl my-4 mx-4 py-5 px-8 border-4 border-red-300'>
              <h3 className='text-2xl sm:text-4xl xl:text-5xl text-center w-full text-red-300 font-bold my-5 uppercase head'>Phase 2</h3>
              <ul className='list-image-redgem text-sm md:text-lg'>
                <li className='my-2 mx-3'>Minting begins</li>
                <li className='my-2 mx-3'>Airdrop $VTC</li>
                <li className='my-2 mx-3'>Airdrop gems to all minters</li>
                <li className='my-2 mx-3'>Polygon Gems NFTs airdrop for all legendary minters</li>
              </ul>
            </div>

            <div className='text-white max-w-md w-full text-xl sm:w-[400px] min-w-[270px] m-auto bg-purple rounded-xl my-4 mx-4 py-5 px-8 border-4 border-yellow-300'>
              <h3 className='text-2xl sm:text-4xl xl:text-5xl text-center w-full text-yellow-300 font-bold my-5 uppercase head'>Phase 3</h3>
              <ul className='list-image-yellowgem text-sm md:text-lg'>
                <li className='my-2 mx-3'>Enovel</li>
                <li className='my-2 mx-3'>Game setup</li>
                <li className='my-2 mx-3'>And more...</li>
              </ul>
            </div>
          </div>
          
        </div>
      </main>
      <Footer/>
    </div>
    
  )
}

export default function Home() {
  return (
    <main>
      <Header/>
    </main>
  )
}
