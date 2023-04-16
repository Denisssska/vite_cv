import React from 'react';
import c from './App.module.css'
import {Footer, Section, SectionFive, SectionForProject, SectionFour, SectionThree, SectionTwo} from "$components";

function App() {
    return (
        <div className={c.app}>
            <Section/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionForProject/>
            <Footer/>
        </div>

    );
}

export default App;
