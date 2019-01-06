import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import 'inform-css-theme/index.css';
import "react-datepicker/dist/react-datepicker.css"

import './App.css';
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Footer from './components/footer/footer'

import AppRouter from './appRouter'
import { translate, Trans } from "react-i18next";

class App extends Component {
  
  render() {
    const { t, i18n } = this.props; 
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    console.log('props',this.props);
    return (
      <div className="flex--cont--def app--container">
       {/* <h2>{t("Welcome to React")}</h2>
       <p>
        <span onClick={() => changeLanguage("de")}>de</span>
        <span onClick={() => changeLanguage("en")}>en</span>  
        </p>  */}
        <Header />
        
        <div className="flex--cont--def app-middle--container">
          <Sidebar />
          <div id="maincontent" className="flex--cont--def app-grid--container">
            <AppRouter />
          </div>
        </div>
        <Footer />
      </div>
    )
    
  }
}

export default translate("translations")(App);