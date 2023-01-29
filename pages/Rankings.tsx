import React from 'react'
import styles from '../styles/Rankings.module.scss'

const Rankings = () => {
	return (
		<div className={styles.container}>
			<h1>ATHLETE RANKINGS</h1>
			<div className={styles.wrapper}>
				<div className={styles.one_table}>
					<h4>
						Men's Pound-for-Pound <span>Top Rank</span>
					</h4>
					<div className={styles.info}>
						<a>Alexander Volkanovski</a>
						<img
							src='https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-04/98fc7c50-3d1d-4d2e-805f-9b7045edb917%252FVOLKANOVSKI_ALEXANDER_BELT_04-09.png?itok=YV2-kWJL'
							alt='people'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Rankings
