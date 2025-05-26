import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Lightweight general-purpose programming language with a focus on simplicity and readability.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
          >
            Get Started with NIKL 🚀
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://github.com/Neko-Nik/NIKL-Core"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const features = [
  {
    title: 'Simple & Expressive',
    description: 'Clean syntax that is easy to learn and use.',
  },
  {
    title: 'Module System',
    description: 'Organize your code into reusable modules.',
  },
  {
    title: 'Package Management',
    description: 'Easily manage dependencies with NIKL packages.',
  },
];

export default function Home() {
  return (
    <Layout
      title="NIKL - Lightweight, General-Purpose Programming Language"
      description="Official homepage for NIKL programming language"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Ready to dive in?</h2>
            <p>Explore the documentation, try the examples, and join our community.</p>
            <Link
              className={clsx("button button--primary button--lg", styles['button--primary'])}
              to="/docs/introduction"
            >
              Start Learning NIKL
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
