import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import About from '../components/About';
import NavBar from "../components/NavBar";
import Skills from '../components/Skills';
import Project from '../components/Project';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>yonghee&apos;Portfolio</title>
    </Head>
      <NavBar/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </>
  )
}

export default Home
