import styles from '../Main/Main.module.scss'

const Main = () => {
	return (
		<>
			<h1 className={styles.main_title}>
				Последние актуальные новости
				<br />в мире энергии
			</h1>
			<div className={styles.main_container}>
				<div className={styles.main_one}>
					<div className={styles.main_one__body}>
						<p>08.04.03 18:34</p>
						<h2>
							Встреча министра образования с учителями школы Гимназии №70 города
							бишкекка
						</h2>
					</div>
				</div>

				<div className={styles.main_bottom}>
					<div className={styles.main_top}>
						{/* <!-- 1 --> */}
						<div className={styles.main_left__one}>
							<div className={styles.main_two}>
								<p>08.04.03 18:34</p>
								<h2>Встреча министра образования с учителями школы...</h2>
							</div>
							<div className={styles.main_thre}>
								<p>08.04.03 18:34</p>
								<h2>Встреча министра образования с учителями школы...</h2>
							</div>
						</div>
						{/* <!-- 2 --> */}
						<div className={styles.main_left__two}>
							<div className={styles.main_foo}>
								<p>08.04.03 18:34</p>
								<h2>Встреча министра образования с учителями школы...</h2>
							</div>
							<div className={styles.main_five}>
								<p>08.04.03 18:34</p>
								<h2>Встреча министра образования с учителями школы...</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Main
