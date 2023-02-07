import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '../styles/Rankings.module.scss'
const src = 'https://63d62e2ae60d57436974495c.mockapi.io/ufc'

interface User {
	name: string
	number: number
}

const Rankings = (): unknown => {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		axios.get<User>(src).then(data => {
			setArticles(data.data)
		})
	}, [])
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
						<div className={styles.br}></div>
					</div>
					{/* 2 */}
					<div className={styles.table}>
						{articles.map(article => {
							return (
								<>
									<p className={styles.table__people}>
										<a href=''>{article.number}</a>
										{article.name}
									</p>
								</>
							)
						})}
					</div>
				</div>
				{/* 2 */}
				<div className={styles.one_table}>
					<h4>FLYWEIGHT</h4>
					<div className={styles.info}>
						<a>BRANDON MORENO</a>
						<img
							src='https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2023-01/MORENO_BRANDON_BELT.png?itok=t9Xb0B4G'
							alt='people'
						/>
						<div className={styles.br}></div>
					</div>
					<div className={styles.table}>
						{articles.map(article => {
							return (
								<>
									<p className={styles.table__people}>
										<a href=''>{article.number}</a>
										{article.name}
									</p>
								</>
							)
						})}
					</div>
				</div>
				{/* 3 */}
				<div className={styles.one_table}>
					<h4>BANTAMWEIGHT</h4>
					<div className={styles.info}>
						<a>ALJAMAIN STERLING</a>
						<img
							src='https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-10/STERLING_ALJAMAIN_BELT_10-22.png?itok=TnJ1WPJu'
							alt='people'
						/>
						<div className={styles.br}></div>
					</div>
					<div className={styles.table}>
						{articles.map(article => {
							return (
								<>
									<p className={styles.table__people}>
										<a href=''>{article.number}</a>
										{article.name}
									</p>
								</>
							)
						})}
					</div>
				</div>
				{/* 4 */}
				<div className={styles.one_table}>
					<h4>LIGHTWEIGHT</h4>
					<div className={styles.info}>
						<a>ISLAM MAKHACHEV</a>
						<img
							src='https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/2022-10/MAKHACHEV_ISLAM_BELTMOCK.png?itok=2C8J7eta'
							alt='people'
						/>
						<div className={styles.br}></div>
					</div>
					<div className={styles.table}>
						{articles.map(article => {
							return (
								<>
									<p className={styles.table__people}>
										<a href=''>{article.number}</a>
										{article.name}
									</p>
								</>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Rankings
