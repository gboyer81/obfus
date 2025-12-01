import React from 'react'

export default function ExplosionCard() {
	return (
		<div
			className='
      relative w-full h-screen 
      flex items-center justify-center 
      overflow-hidden 
      perspective-[1000px]
      bg-neutral-900
    '
		>
			{/* The Container
        Rotates and expands when 'data-exploded' is present on body
      */}
			<section
				className='
        explode-container 
        relative w-full max-w-3xl aspect-video
        flex flex-col items-center justify-center
        transform-style-3d 
        transition-transform duration-1000 delay-[2s]
      '
			>
				{/* 1. The Main Target Text ("Obfuscated") 
            Visible in standard view. Drops back in exploded view.
        */}
				<div
					className='
          explode-text
          relative
          font-bold
          text-[clamp(4rem,10vw,12rem)] 
          tracking-tight
          text-transparent bg-clip-text 
          bg-linear-to-b from-neutral-400 to-neutral-700
          transition-transform duration-500 delay-1000
          z-10
        '
				>
					Obfuscated
				</div>

				{/* 2. The Lens (Blur + Gradient Border)
            Visible in standard view. Lifts up in exploded view.
        */}
				<div
					className='
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-dynamic h-dynamic 
          z-20
        '
				>
					<div
						className='
              relative w-full h-full
              translate-dynamic
              transform-style-3d
          '
					>
						{/* Layer A: Blur Pane */}
						<div
							className='
              absolute inset-0
              backdrop-blur-dynamic
              rounded-dynamic
              overflow-hidden
              transform-style-3d
            '
						/>

						{/* Layer B: Gradient Border */}
						<div
							className='
              explode-border
              gradient-border-mask
              absolute inset-0 
              pointer-events-none
              rounded-dynamic
              border-[calc(var(--border)*1px)] border-transparent
              bg-[image:--image-gradient-conic] bg-center bg-[var(--bg-size)_var(--bg-size)]
              transition-transform duration-500 delay-1000
            '
						/>
					</div>
				</div>

				{/* 3. The Labels ("Masked Pseudo" / "Element") 
            INVISIBLE in standard view (opacity-0).
            Fades in ONLY during explosion.
        */}
				<div
					className='
          explode-label 
          absolute left-full top-1/2 -translate-y-1/2 pl-8
          flex flex-col gap-4
          text-left
          opacity-0 
          transition-opacity duration-1000
        '
				>
					<span className='text-3xl font-bold text-neutral-500 whitespace-nowrap'>
						Masked Pseudo
					</span>
					<span className='text-xl text-neutral-600 whitespace-nowrap'>Element</span>
				</div>
			</section>
		</div>
	)
}
