import styles from '../styles/Main.module.scss'
import { FC } from 'react'

const Main: FC = () => {
	return (
		<>
			<h1 className={styles.main_title}>
				Последние актуальные новости
				<br />в мире энергии
			</h1>
			<div className={styles.main_container}>
				<div className={styles.main_one}>
					<div className={styles.main_one__body}>
						<p>ATHLETES</p>
						<h2>ISLAM MAKHACHEV | 2022 RÉSUMÉ</h2>
					</div>
				</div>

				<div className={styles.main_bottom}>
					<div className={styles.main_top}>
						{/* <!-- 1 --> */}
						<div className={styles.main_left__one}>
							<div className={styles.main_two}>
								<p>ATHLETES</p>
								<h2>A HISTORY OF UFC CHAMPION VS CHAMPION FIGHTS</h2>
							</div>
							<div className={styles.main_thre}>
								<p>Previous Next UFC 30TH ANNIVERSARY</p>
								<h2>THE BEST 30 UNDER 30 | THE HONORABLE MENTIONS</h2>
							</div>
						</div>
						{/* <!-- 2 --> */}
						<div className={styles.main_left__two}>
							<div className={styles.main_foo}>
								<p>Previous Next RESULTS</p>
								<h2>UFC 283: TEIXEIRA VS HILL RESULTS</h2>
							</div>
							<div className={styles.main_five}>
								<p>HALL OF FAME</p>
								<h2>JOSÉ ALDO NAMED TO UFC HALL OF FAME CLASS OF 2023</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Main
