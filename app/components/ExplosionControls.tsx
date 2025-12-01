'use client'

import { useEffect } from 'react'
import GUI from 'lil-gui'

interface ConfigState {
	explode: boolean
	border: number
	radius: number
	width: number
	height: number
	x: number
	y: number
	alpha: number
	blur: number
	[key: string]: number | boolean
}

const ExplosionControls = () => {
	useEffect(() => {
		const CONFIG: ConfigState = {
			explode: false,
			border: 4,
			radius: 12,
			width: 50,
			height: 40,
			x: 0,
			y: 0,
			alpha: 0,
			blur: 14,
		}

		// Initialize GUI inside useEffect so it only runs on the client
		const gui = new GUI({ width: 220 })

		// Define Handlers
		const updateCSS = () => {
			for (const key of Object.keys(CONFIG)) {
				if (key !== 'explode') {
					document.documentElement.style.setProperty(`--${key}`, CONFIG[key].toString())
				}
			}
		}

		const toggleExplode = () => {
			const exploded = CONFIG.explode
			document.body.toggleAttribute('data-exploded', exploded)

			if (!exploded) {
				document.body.toggleAttribute('data-imploding', true)

				const animations = document.getAnimations()

				Promise.all(animations.map((t) => t.finished)).then(() => {
					document.body.toggleAttribute('data-imploding', false)
				})
			}
		}

		// 4. GUI Controls
		const folder = gui.addFolder('Controls')

		folder.add(CONFIG, 'explode').name('Explode?').onChange(toggleExplode)

		folder.add(CONFIG, 'border', 1, 30, 1).name('Border width (px)').onChange(updateCSS)
		folder.add(CONFIG, 'radius', 1, 500, 1).name('Border radius (px)').onChange(updateCSS)
		folder.add(CONFIG, 'width', 10, 100, 1).name('Width (vmin)').onChange(updateCSS)
		folder.add(CONFIG, 'height', 10, 100, 1).name('Height (vmin)').onChange(updateCSS)
		folder.add(CONFIG, 'alpha', 0, 1, 0.01).name('Mask Alpha').onChange(updateCSS)
		folder.add(CONFIG, 'blur', 0, 50, 1).name('Backdrop Blur').onChange(updateCSS)
		folder.add(CONFIG, 'x', -100, 100, 1).name('Translate X (%)').onChange(updateCSS)
		folder.add(CONFIG, 'y', -100, 100, 1).name('Translate Y (%)').onChange(updateCSS)

		// Initial Call
		updateCSS()

		// Cleanup
		return () => {
			gui.destroy()
		}
	}, [])

	// The library handles its own rendering overlay.
	return null
}

export default ExplosionControls
