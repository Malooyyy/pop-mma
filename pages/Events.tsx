import React, { useState, useEffect, FC } from 'react'
import styles from '../styles/Events.module.scss'

interface Props {
	targetDate: number
}

const Events: React.FC<Props> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState<number>(
		new Date(targetDate).getTime() - Date.now()
	)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft(new Date(targetDate).getTime() - Date.now())
		}, 1000)

		return () => {
			clearInterval(intervalId)
		}
	}, [targetDate])

	const seconds = Math.floor((timeLeft / 1000) % 60)
	const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
	const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
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
					<div className={styles.basic__title}>COMING SOON</div>
					<div className={styles.timer__time}>
						<div>{days}</div>:<div>{hours}</div>:<div>{minutes}</div>:
						<div>{seconds}</div>
					</div>
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
