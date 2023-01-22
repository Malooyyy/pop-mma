import Image from 'next/image'
import styles from '../Slider/Slider.module.scss'

const Slider = () => {
	return (
		<div>
			<img
				className={styles.slider}
				src='https://i.ibb.co/FK2gWP2/ufc270.jpg'
				alt=''
			/>
		</div>
	)
}

export default Slider
