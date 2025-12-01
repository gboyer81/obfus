export default function Home() {
	/* const glitchText = document.querySelector('.glitch');

  if (glitchText) {
    function randomGlitch() {
      const delay = Math.random() * 3000 + 1000;
      setTimeout(() => {
        glitchText.style.animationDuration = '0.1s';
        setTimeout(() => {
          glitchText.style.animationDuration = '0.3s';
        }, 200);
        randomGlitch();
      }, delay);
    }
  
    randomGlitch();
  } */
	/*

  https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=CG-WyNnUDjUa7bVTMFtU5JBxQiw
  
  */
	return (
		<main className='grid place-items-center w-full h-full'>
			<div className='w-full h-full bg-gray-900 flex justify-center items-center'>
				<span className='text-8xl text-gray-950 text-shadow-neon animate-neon-flicker font-bold'>
					The Crib
				</span>
			</div>
			<div className='w-full h-full bg-gray-900 flex justify-center items-center'>
				<span className='text-7xl text-white font-bold text-shadow-fire animate-fire-flicker'>
					¡En Fuego!
				</span>
			</div>
			<div className='w-full h-full flex justify-center items-center'>
				<span className='text-8xl text-gray-950 font-semibold text-shadow-complex'>
					Corporate AF
				</span>
			</div>
			<div className='w-full h-full bg-gray-900 flex justify-center items-center'>
				<span className='text-8xl text-[#1e293b] font-bold text-shadow-chromatic tracking-wide'>
					SPLIT 3Dizzle
				</span>
			</div>

			<div className='w-full h-full bg-gray-900 flex justify-center items-center'>
				<span className='text-8xl text-[#f59e0b] text-shadow-cast font-bold'>Cast</span>
			</div>
		</main>
	)
}
