"use client";

import styles from './page.module.css';

export default function Home() {

    return (
        <><main className={styles.page}>
            <header className={styles.hero}>
                <h1 className={styles.title}>
                    R&D Experiment: Pre-rendering
                    <span className={styles.accent}> — Next.js</span>
                </h1>
                <p className={styles.lead}>
                    This is the pre-rendered version of the R&D experiment website.
                </p>
                <div className={styles.ticker} aria-hidden>
                    <div className={styles.track}>Next.js • React • Web Animations • Image loading</div>
                </div>
            </header><section id="showcase" className={styles.showcase}>
                <div className={styles.card}>
                    <h3>Realtime Gradient</h3>
                    <p>Watch the background flow with a living gradient and floating shapes.</p>
                </div>
                <div className={styles.card}>
                    <h3>Gradient Panels</h3>
                    <p>Pretty gradients with depth and motion.</p>
                </div>
                <div className={styles.card}>
                    <h3>Micro-interactions</h3>
                    <p>Buttons that pop, headings that glow.</p>
                </div>
            </section>
            <footer className={styles.footer}>
                <p>R-D Experiment · Next.js</p>
            </footer>
        </main >
        </>
    );
}