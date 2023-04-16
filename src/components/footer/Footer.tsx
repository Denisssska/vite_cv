import React from 'react';
import c from './footer.module.css';
import {ReactComponent as Linkedin} from "@/img/linkedin.svg";
import {ReactComponent as Instagram} from "@/img/instagram2.svg";
import {ReactComponent as Telegram} from "@/img/telegram.svg";


export const Footer = () => {
    return (

        <div className={c.border}>
            <div className={c.intro}>
                <h1>contact</h1>
                <p>Call me,maybe</p>
            </div>
            <div className={c.text}>
                <div className={c.RightContainer}>

                    <div className={c.navigation}>
                        <div className={c.contacts}>
                            <div className={c.location}>
                                <h4>Location</h4>
                                <address>Minsk, BLR</address>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>+375 29 574-39-21</p></div>
                        </div>
                        <div className={c.contacts}>
                            <div>
                                <h4>Contact me</h4>
                                <p><a target={"_blank"}  href="https://form.jotform.com/231055600416040">Click:)</a></p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href="#">
                                    <p>yarmoshkoden18m@gmail.com</p>
                                </a>
                            </div>

                        </div>
                    </div>
                    <hr className={c.hr}/>
                    <div className={c.personContainer}>
                        <div className={c.personName}>
                            <h1 className={c.name}>Denis</h1>
                            <h1 className={c.surname}>YARMOSHKO</h1>
                        </div>
                        <div className={c.soc}>
                            <Linkedin className={c.soc}/>
                            <Instagram className={c.soc}/>
                            <Telegram className={c.soc}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

