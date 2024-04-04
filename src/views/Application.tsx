import Image from 'next/image'

export const Application = () => {
    return (
        
    <div id="application" className="flex flex-col justify-center items-center pt-20 gap-16">

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold pt-10" style={{ color: '#0F516F' }}>
            Apply for Hackathon
        </h1>
        <h1 className="text-4xl font-bold pt-5" style={{ color: '#7275B6' }}>
            April 20th - 21st, 2024
        </h1>
      </div>

      <div className="flex-shrink-0"  style={{ transform: 'translateX(15px)'}}>
          <Image
            src="/images/mermaid.png" // Replace with the correct path to your mermaid image
            alt="Mermaid"
            width={400} // Set the desired width
            height={400} // Set the desired height
            className="opacity-75" // Apply the transparency
          />
        </div>

        <div className="flex justify-center items-center gap-24">
        <div className="flex flex-col w-[650px] justify-center items-center p-10 rounded-2xl" style={{backgroundColor: '#C2BBFF'}}>
            <h1 className="text-3xl pb-6 font-bold" style={{ color: '#0F516F' }}>
            Become a Participant
            </h1>
            <div className="h-4"></div>
            <p className="text-white font-bold">Apply so that you can join a team and compete with other hackers.</p>
            <div className="h-4"></div>
            <div className="h-4"></div>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLSc4r0qtlzA3Kip3WVEgyN_RnBzBUq3TvY_GOkCQCCFPiEXJeQ/viewform?usp=sf_link'>
            <button className="btn btn-primary rounded-full text-xl border-none" style={{ backgroundColor: '#7275B6' }}>
                Apply Now
            </button>
            </a>
        </div>

        <div className="flex flex-col w-[650px] justify-center items-center p-10 rounded-2xl" style={{backgroundColor: '#C2BBFF'}}>

            <h1 className="text-3xl pb-6 font-bold" style={{ color: '#0F516F' }}>
            Become a Judge
            </h1>
            <div className="h-4"></div>
            <p className="text-white font-bold">Apply to be a judge that will rate and rank the work of all hackers.</p>
            <div className="h-4"></div>
            <div className="h-4"></div>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSc4r0qtlzA3Kip3WVEgyN_RnBzBUq3TvY_GOkCQCCFPiEXJeQ/viewform?usp=sf_link'>
            <button className="btn btn-primary rounded-full text-xl border-none" style={{ backgroundColor: '#7275B6' }}>
                Apply Now
            </button>
            </a>
        </div>
        </div>

        
    </div>
    )
}