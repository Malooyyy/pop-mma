import React, { useState, useEffect, FC } from 'react'
import styles from '../styles/Events.module.scss'

interface Props {
	startTime: number
	endTime: number
	onComplete: () => void
}

const Events: React.FC<Props> = ({ startTime, endTime, onComplete }) => {
	const [timeLeft, setTimeLeft] = useState(endTime - startTime)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft(prevTime => {
				if (prevTime <= 0) {
					clearInterval(intervalId)
					onComplete()
					return 0
				}
				return prevTime - 5000
			})
		}, 1000)
		return () => clearInterval(intervalId)
	}, [])
	return (
		<div className={styles.container}>
			<div className={styles.basic__wrap}>
				<img
					className={styles.wrap__img}
					src='https://cdn.onefc.com/wp-content/uploads/2022/10/230225-BKK-OFN7-1800x1200px.jpeg'
					alt='wrap'
				/>
			</div>
			<div className={styles.basic__event}>
				<div className={styles.basic__timer}>
					Time left: {timeLeft / 1000} seconds
				</div>
				<div className={styles.basic__show}>
					<p>FEB 25 (SAT) 8AM ICT FEB 24 (FRI) 8PM EST</p>
					<h4>Lumpinee Boxing Stadium, Bangkok</h4>
					<h1>ONE Fight Night 7: Lineker vs. Andrade II</h1>
					<a href='https://www.thaiticketmajor.com/sport/one-fight-night-7-2023.html'>
						BUY TICKETS
					</a>
				</div>
			</div>
		</div>
	)
}

export default Events
