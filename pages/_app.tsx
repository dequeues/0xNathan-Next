import App from 'next/app';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
export default MyApp
