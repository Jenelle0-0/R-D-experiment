import styles from './page.module.css';
import TickerClient from './components/TickerClient';
import GalleryClient from './components/GalleryClient';

export default function Home() {

    return (
        <><main className={styles.page}>
            <header className={styles.hero}>
                <h1 className={styles.title}>
                    R&D Experiment: Pre-rendering
                    <span className={styles.accent}> — Next.js</span>
                </h1>
                <p className={styles.lead}>
                    Exploring pre-rendering vs. client-side rendering — this site is pre-rendered with Next.js.
                    HTML generated at build time for faster initial loads and better SEO. 
                    Client-side rendering, by contrast, builds the UI in the browser using JavaScript after the initial load.
                </p>
                <TickerClient />
            </header><section id="showcase" className={styles.showcase}>
                <div className={styles.card}>
                    <h3>Vibrant Images</h3>
                    <p>Experience the richness of vibrant images that captivate the senses.</p>
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
            <section id="social" className={styles.social} aria-labelledby="social-heading">
                <h2 id="social-heading" className={styles.sectionTitle}>Connect</h2>
                <div className={styles.socialList}>
                    <a href="https://github.com/Jenelle0-0" target="_blank" rel="noopener noreferrer">
                        <span className={styles.socialIcon} aria-hidden>🐙</span>
                        <span>GitHub</span>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <span className={styles.socialIcon} aria-hidden>🐦</span>
                        <span>Twitter</span>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <span className={styles.socialIcon} aria-hidden>🔗</span>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <span className={styles.socialIcon} aria-hidden>📸</span>
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <span className={styles.socialIcon} aria-hidden>📘</span>
                        <span>Facebook</span>
                    </a>
                </div>
            </section>
            <section id="gallery" className={styles.gallery} aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className={styles.sectionTitle}>Gallery</h2>
                <GalleryClient />
            </section>
            <footer className={styles.footer}>
                <p>R-D Experiment · Next.js</p>
            </footer>
        </main >
        </>
    );
}