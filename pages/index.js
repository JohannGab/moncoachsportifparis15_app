import Head from 'next/head';
import AboutUs from '../src/Components/aboutUs';
import Citation from '../src/Components/citation';
import Contact from '../src/Components/contact';
import Footer from '../src/Components/footer';
import Header from '../src/Components/header'
import Product from '../src/Components/product';
import Quality from '../src/Components/quality';
import Slide from '../src/Components/slide';
import Testimonials from '../src/Components/testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon coach sportif Paris 15</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Ne limite pas tes défis, défie tes limites"
        />
      </Head>
      <Header />
      <Product />
      <AboutUs />
      <Slide />
      <Quality />
      <Citation />
      <Testimonials />
      <Contact url='contact'/>
      <Footer />
    </>
  )
}
