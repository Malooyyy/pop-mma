import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFoundPage = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [router])
	return (
		<div>
			<h1>Ой...</h1>
			<h2></h2>
			<p>Такой страницы здесь нет!</p>
			<p>
				перейти на
				<Link href='/'>главную страницу</Link>
			</p>
		</div>
	)
}

export default NotFoundPage
