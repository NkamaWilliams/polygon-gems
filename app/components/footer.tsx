import Image from "next/image"

export default function Footer(){
    return(
        <footer className='pt-10 pb-5 px-5 flex flex-col sm:flex-row items-center justify-around border-t-2 border-mid-purple bg-black-900'>
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
    )
}