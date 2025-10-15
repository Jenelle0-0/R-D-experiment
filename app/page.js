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
            <section id="gallery" className={styles.gallery} aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className={styles.sectionTitle}>Gallery</h2>
                <div className={styles.galleryGrid}>
                    {(() => {
                        const images = [
                            { src: '/images/nextjs1.webp', alt: 'Next.js 1' },
                            { src: '/images/nextjs2.webp', alt: 'Next.js 2' },
                            { src: '/images/nextjs3.avif', alt: 'Next.js 3' },
                            { src: '/images/nextjs4.webp', alt: 'Next.js 4' },
                            { src: '/images/nextjs5.png', alt: 'Next.js 5' },
                        ];

                        const repeats = 100;
                        const nodes = [];
                        for (let r = 0; r < repeats; r++) {
                            for (let i = 0; i < images.length; i++) {
                                const img = images[i];
                                const key = `img-${r}-${i}`;
                                nodes.push(
                                    <figure className={styles.galleryItem} key={key}>
                                        <img src={img.src} alt={img.alt} />
                                    </figure>
                                );
                            }
                        }
                        return nodes;
                    })()}
                </div>
            </section>
            <footer className={styles.footer}>
                <p>R-D Experiment · Next.js</p>
            </footer>
        </main >
        </>
    );
}