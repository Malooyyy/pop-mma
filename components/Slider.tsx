import Image from 'next/image'
import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../styles/Slider.module.scss'

const Slider: FC = () => {
	return (
		<div className={styles.slider_wrapper}>
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<img
						loading='lazy'
						className={styles.slider}
						src='https://i.ibb.co/FK2gWP2/ufc270.jpg'
						alt=''
					/>
					<p className={styles.slider_title}>Legend 1</p>
				</div>
				<div>
					<img
						loading='lazy'
						className={styles.slider}
						src='https://i.ibb.co/TMHPsW1/54a2bb42b0e275b05db0.jpg'
						alt=''
					/>
					<p className={styles.slider_title}>Legend 2</p>
				</div>
				<div>
					<img
						loading='lazy'
						className={styles.slider}
						src='https://i.ibb.co/x1gwwNp/2551921-52937130-2560-1440.jpg'
						alt=''
					/>
					<p className={styles.slider_title}>Legend 3</p>
				</div>
			</Carousel>
		</div>
	)
}

export default Slider
