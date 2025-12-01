import ExplosionControls from '../components/ExplosionControls'
import ExplosionCard from '../components/ExplosionCard'
import './obfuscated.css'

export default function ObfuscatedDemo() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center'>
			<ExplosionControls />
			<ExplosionCard />
		</div>
	)
}
