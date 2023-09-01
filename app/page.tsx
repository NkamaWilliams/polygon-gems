import Image from 'next/image'
import Navbar from './components/navbar'

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

          <p className='text-lg pl-20 sm:text-2xl text-white text-glow drop-shadow-purple font-semibold mt-20 w-[90%] max-w-5xl text-center'>Awaken the Legends, Embrace the Future.</p>
        </div>
      </header>
      
      <main>
        <div className='bg-purple-guy bg-no-repeat bg-cover'>
          <div id='about' className='bg-black-transparent min-h-screen min-w-full py-10 flex items-center justify-center'>
            <div>
              <h1  className='text-2xl sm:text-6xl xl:text-5xl text-center w-full text-mid-purple font-bold my-10 uppercase head'>Unveiling the Saga</h1>

              <p className='text-lg sm:text-xl text-white mt-20 w-[90%] max-w-4xl text-center m-auto'>Welcome to Polygon Gems, the ultimate nexus where ancient legacy and cutting-edge technology converge, breathing life into a new dimension of artistic expression and blockchain mastery. Our platform thrives at the crossroads of history, magic, and innovation, creating a haven for NFT collectors, enthusiasts, and seekers of untold power. Behold the mesmerizing collection that is Polygon Gems.</p>
            </div>
          </div>
        </div>

        <div id='roadmap' className='bg-gradient-purple-fade box-border overflow-auto py-10 min-h-screen'>
          <h1  className='text-2xl sm:text-6xl xl:text-5xl text-center w-full text-mid-purple font-bold my-10 uppercase head'>Road Map</h1>

          <div className='flex justify-around flex-wrap'>
            <div className='text-white max-w-md w-full text-xl sm:w-[400px] min-w-[270px] m-auto bg-purple rounded-xl my-4 mx-4 py-5 px-8 border-4 border-blue-300'>
              <h2 className='text-2xl sm:text-4xl xl:text-5xl text-center w-full text-blue-300 font-bold my-5 uppercase head'>Phase 1</h2>
              <ul className='list-image-bluegem'>
                <li className='my-2 mx-3'>Launch website</li>
                <li className='my-2 mx-3'>Finish artworks</li>
                <li className='my-2 mx-3'>Smart contract development</li>
                <li className='my-2 mx-3'>Magiceden application</li>
                <li className='my-2 mx-3'>Partnership with marketplace</li>
              </ul>
            </div>

            <div className='text-white max-w-md w-full text-xl sm:w-[400px] min-w-[270px] m-auto bg-purple rounded-xl my-4 mx-4 py-5 px-8 border-4 border-red-300'>
              <h2 className='text-2xl sm:text-4xl xl:text-5xl text-center w-full text-red-300 font-bold my-5 uppercase head'>Phase 2</h2>
              <ul className='list-image-redgem'>
                <li className='my-2 mx-3'>Minting begins</li>
                <li className='my-2 mx-3'>Airdrop $VTC</li>
                <li className='my-2 mx-3'>Airdrop gems to all minters</li>
                <li className='my-2 mx-3'>Polygon Gems NFTs airdrop for all legendary minters</li>
              </ul>
            </div>

            <div className='text-white max-w-md w-full text-xl sm:w-[400px] min-w-[270px] m-auto bg-purple rounded-xl my-4 mx-4 py-5 px-8 border-4 border-yellow-300'>
              <h2 className='text-2xl sm:text-4xl xl:text-5xl text-center w-full text-yellow-300 font-bold my-5 uppercase head'>Phase 3</h2>
              <ul className='list-image-yellowgem'>
                <li className='my-2 mx-3'>Enovel</li>
                <li className='my-2 mx-3'>Game setup</li>
                <li className='my-2 mx-3'>And more...</li>
              </ul>
            </div>
          </div>
          
        </div>
      </main>

      <footer className='pt-10 pb-5 px-5 flex flex-col sm:flex-row items-center justify-around border-t-2 border-mid-purple'>
        <div className='w-[260px] relative flex justify-end my-4'>
          <div className='w-[35%] aspect-square absolute top-1/4 left-5 -translate-y-2/4'>
            <Image className='animate-spin-slow' alt='logo' src='/images/circle.svg' fill style={{objectFit: 'contain'}}/>
          </div>

          <div className='w-4/5 relative aspect-[3.3]'>
            <Image className='' alt='logo' src='/images/logo.svg' fill style={{objectFit: 'contain'}}/>
          </div>
        </div>

        <div className='text-white text-center px-5 my-4'>© POLYGON GEMS. ALL RIGHTS RESERVED.</div>

        <div className='flex justify-between w-60 my-4'>
          <a href='#' target='_blank' className='hover:cursor-pointer w-14 aspect-square flex justify-center items-center'>
            <div className='w-[35px] hover:w-[30px] aspect-square relative rounded-full'>
              <Image alt='picture' src="/images/twitter.png" fill style={{objectFit:'cover'}} />
            </div>
          </a>

          <a href='#' target='_blank' className='hover:cursor-pointer w-14 aspect-square flex justify-center items-center'>
            <div className='w-[35px] hover:w-[30px] aspect-square relative rounded-full'>
              <Image alt='picture' src="/images/discord.png" fill style={{objectFit:'cover'}} />
            </div>
          </a>

          <a href='#' target='_blank' className='hover:cursor-pointer w-14 aspect-square flex justify-center items-center'>
            <div className='w-[35px] hover:w-[30px] aspect-square relative rounded-full'>
              <Image alt='picture' src="/images/instagram.png" fill style={{objectFit:'cover'}} />
            </div>
          </a>
        </div>
      </footer>
    </div>
    
  )
}

export default function Home() {
  return (
    <main>
      <Header/>
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
