import Header from './Header'
import { FC } from 'react'

const Layout: FC = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout
