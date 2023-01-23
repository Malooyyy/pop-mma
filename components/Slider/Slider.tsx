import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import styles from '../Slider/Slider.module.scss'

const Slider = () => {
	return (
		<div>
			<Carousel>
				<div>
					<img
						className={styles.slider}
						src='https://i.ibb.co/FK2gWP2/ufc270.jpg'
						alt=''
					/>
					<p className='legend'>Legend 1</p>
				</div>
				<div>
					<img
						className={styles.slider}
						src='https://i.ibb.co/FK2gWP2/ufc270.jpg'
						alt=''
					/>
					<p className='legend'>Legend 2</p>
				</div>
				<div>
					<img
						className={styles.slider}
						src='https://i.ibb.co/FK2gWP2/ufc270.jpg'
						alt=''
					/>
					<p className='legend'>Legend 3</p>
				</div>
			</Carousel>
		</div>
	)
}

export default Slider
