import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/About';
import NavBar from "../components/NavBar";
import Skills from '../components/Skills';
import Project from '../components/Project';

const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
      <About/>
      <Skills/>
      <Project/>
    </>
  )
}

export default Home
