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
                    This is the pre-rendered version of the R&D experiment website.
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