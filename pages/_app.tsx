import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../src/ts/redux/store';
import Layout from '../src/ts/layout';
// styles
import '../src/styles/layout.scss';

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Provider store={store}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</Container>
		);
	}
}
