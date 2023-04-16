import React from 'react';
import c from './section.module.css';
import img from '../../img/news.png';
import {ReactComponent as Linkedin} from "@/img/linkedin.svg";
import {ReactComponent as Instagram} from "@/img/instagram2.svg";
import {ReactComponent as Telegram} from "@/img/telegram.svg";


export const Section = () => {

    return (
        <div className={c.border}>

            <div className={c.img}>

                <img src={img}
                     alt="avatar"/>
            </div>
            <div className={c.text}>
                <h1 className={c.name}>Denis</h1>
                <h1 className={c.surname}>YARMOSHKO</h1>

                <div className={c.profile}>
                    <h3>Web Developer & Frontend Expert</h3>
                    <div className={c.soc}>
                        <Linkedin className={c.soc}/>
                        <Instagram className={c.soc}/>
                        <Telegram className={c.soc}/>
                    </div>

                </div>
                <hr className={c.hr}/>

                <div className={c.navigation}>
                    <div className={c.contacts}>
                        <div>
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
                            <p>yarmoshkoden18m@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

