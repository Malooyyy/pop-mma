import Link from 'next/link'

const NotFoundPage = () => {
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
