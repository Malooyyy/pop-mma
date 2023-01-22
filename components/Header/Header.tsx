import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from '../Header/Header.module.scss'

const Header = () => {
	const [nav, setNav] = useState<boolean>()
	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.header_logo}>
						<h1>Hype Fighting</h1>
					</div>
					<ul
						className={
							nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
						}
					>
						<li>
							<a href='##'>ТУРНИРЫ</a>
						</li>
						<li>
							<a href='##'>РЕЙТИНГ</a>
						</li>
						<li>
							<a href='##'>БОЙЦЫ</a>
						</li>
						<li>
							<a href='##'>НОВОСТИ</a>
						</li>
					</ul>
					<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
						{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
