import React from 'react';
import c from './App.module.css'
import {Footer, Section, Education, Projects, Skills,Expertise, Intro} from "$components";


function App() {
    return (
        <div className={c.app}>
            <Section/>
            <Intro/>
            <Expertise/>
            <Skills/>
            <Education/>
            <Projects/>
            <Footer/>
        </div>

    );
}

export default App;
