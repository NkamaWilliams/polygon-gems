import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Utilities(){
    const utilities = [
        {
            title: 'Airdrop gems for all minters', 
            content: 'By retaining your tokens for a period of one month, you will be eligible to receive an airdrop of one gem directly to your wallet. Consequently, if you hold your tokens for six months, you will receive a total of six gems. These gems can be utilized to trade for Polygon Gems NFTs, providing an excellent incentive for long-term holding and creating opportunities for trading.',
            index:'01'
        },
        {
            title: 'Airdrop gems for all minters', 
            content: 'By retaining your tokens for a period of one month, you will be eligible to receive an airdrop of one gem directly to your wallet. Consequently, if you hold your tokens for six months, you will receive a total of six gems. These gems can be utilized to trade for Polygon Gems NFTs, providing an excellent incentive for long-term holding and creating opportunities for trading.',
            index:'02'
        },
        {
            title: 'Airdrop gems for all minters', 
            content: 'By retaining your tokens for a period of one month, you will be eligible to receive an airdrop of one gem directly to your wallet. Consequently, if you hold your tokens for six months, you will receive a total of six gems. These gems can be utilized to trade for Polygon Gems NFTs, providing an excellent incentive for long-term holding and creating opportunities for trading.',
            index:'03'
        },
        {
            title: '$VTC Token', 
            content: 'By retaining your tokens for a period of one month, you will be eligible to receive an airdrop of one gem directly to your wallet. Consequently, if you hold your tokens for six months, you will receive a total of six gems. These gems can be utilized to trade for Polygon Gems NFTs, providing an excellent incentive for long-term holding and creating opportunities for trading.',
            index:'04'
        },
    ]
    return (
        <main className="bg-black-900">
            <div className="relative bg-gold-guy bg-no-repeat bg-cover">
                <div className="relative bg-black-transparent min-h-screen h-full">
                    <Navbar/>
                    <h1  className='text-2xl sm:text-4xl xl:text-6xl text-center w-full text-gold font-bold my-10 uppercase head'>Polygon Gems Utilities</h1>
                    
                    <article className="relat max-w-4xl m-auto">
                        {utilities.map(utility => 
                            <section key={utility.index} className="flex text-white mb-20">
                                <div className="text-mid-purple w-40 aspect-square flex items-start justify-center">
                                    <h2 className="font-bold text-7xl">{utility.index}</h2>
                                </div>
                                <div className="px-10 box-border">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-5">{utility.title}</h3>

                                    <p className="text-base sm:text-lg">
                                        {utility.content}
                                    </p>
                                </div>
                            </section>
                        )}
                    </article>
                </div>
            </div>
            <Footer/>
        </main>
    )
}