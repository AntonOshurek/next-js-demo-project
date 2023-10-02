import type { Metadata } from 'next'
/* COMPONENTS */
import { AppHeader, AppFooter } from '@/components/';
/* FONTS */
import { PT_Sans } from 'next/font/google';
/* STYLES */
import style from './styles/styles.module.css';
import '@/styles/global-styles/globals.css';
import '@/styles/style-variables/color-variables.css';
import '@/styles/style-variables/width-variables.css';
import '@/styles/style-variables/font-variables.css';

const ptSans = PT_Sans({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700'],
	fallback: ['Arial'],
	style: 'normal',
	variable: '--basic-font',
});

export const metadata: Metadata = {
	title: 'TopFilms',
	description: 'App for showing for you top fils from all of the world!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={ptSans.className}>
			<body className={`${style['body']}`}>
				<AppHeader />
				<main className={`${style['main']}`}>
					{children}
				</main>
				<AppFooter />
			</body>
		</html>
	)
}
