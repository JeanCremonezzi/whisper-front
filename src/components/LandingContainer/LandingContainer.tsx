import React, { PropsWithChildren } from 'react'

import Styles from './LandingContainer.module.scss'

import Banner from "../../assets/landing-banner.svg"

interface LandingContainerProps {
    title: string
}

export const LandingContainer = ({children, title}: PropsWithChildren<LandingContainerProps>) => {
    return (
        <div className={Styles.container}>
            <h1 className={Styles["app-name"]}>Whisper</h1>

            <main>
                <div className={Styles.banner}>
                    <img src={Banner} alt="Phone with a chat"/>
                </div>

                <div className={Styles.content}>
                    <h2>{title}</h2>

                    <div className={Styles.form}>{children}</div>
                </div>
            </main>
        </div>
    )
}
