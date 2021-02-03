import React from 'react';
import Header from '../components/blogpage/Header.js'
import NavMenu from '../components/blogpage/NavMenu.js'
import MainContent from '../components/blogpage/MainContent.js'
import Footer from '../components/blogpage/Footer.js'
import styles from '../styles/blogstyle.module.css'
function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <MainContent/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}

export default App;
