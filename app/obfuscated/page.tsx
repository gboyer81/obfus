'use client'

import ExplosionControls from '../components/ExplosionControls'
import ExplosionCard from '../components/ExplosionCard'

export default function ObfuscatedDemo() {
	return (
		<main className='min-h-screen flex flex-col items-center justify-center bg-neutral-900'>
			<ExplosionControls />
			<ExplosionCard />
		</main>
	)
}
