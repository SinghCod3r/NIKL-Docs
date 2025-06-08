import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Nik-Lang (NIKL)</h1>
            <p className={styles.heroSubtitle}>
              Lightweight general-purpose programming language with a focus on simplicity and readability.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx("button button--primary button--lg", styles.getStartedButton)}
                to="/docs/introduction"
              >
                Get Started
              </Link>
              <Link
                className={clsx("button button--outline button--lg", styles.githubButton)}
                href="https://github.com/Neko-Nik-Org/NIKL-Core"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className={styles.heroGraphic}>
            <div className={styles.codeExampleContainer}>
              <CodeBlock
                language="rust"
                title="neko.nk"
                className={styles.codeExample}
              >
                {`// Simple greeting for a list of users
let greeting: String = "Welcome to Nik-Lang!"
let users: Array = ["Neko", "Nik", "Nyan"]

fn greet_user(user: String) -> None {
    print(greeting)
    print("Hello,", user, "!", "\\n")
}

for user in users {
    greet_user(user)
}`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import FeatherIcon from '../components/FeatherIcon';

function FeatureIcon({icon}) {
  return (
    <div className={styles.featureIcon}>
      <FeatherIcon name={icon} size={24} />
    </div>
  );
}

function Feature({ title, description, icon }) {
  return (
    <div className={styles.feature}>
      <FeatureIcon icon={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const features = [
  {
    title: 'Declarative',
    description: 'Write code that describes what you want to achieve, not how to achieve it. NIKL\'s declarative syntax makes your code more readable and maintainable.',
    icon: 'code',
  },
  {
    title: 'Simple & Expressive',
    description: 'Clean, modern syntax that is easy to learn and use. NIKL makes complex tasks straightforward with its intuitive design.',
    icon: 'feather',
  },
  {
    title: 'Module System',
    description: 'Organize your code into reusable modules. NIKL\'s powerful module system helps you maintain clean architecture.',
    icon: 'package',
  },
  {
    title: 'Fast Execution',
    description: 'Optimized runtime performance for efficient execution of your applications, even in resource-constrained environments.',
    icon: 'zap',
  },
  {
    title: 'Cross-Platform',
    description: 'Write once, run everywhere. NIKL works across multiple operating systems and environments seamlessly.',
    icon: 'layers',
  },
  {
    title: 'Active Development',
    description: 'Continuously improved with new features and optimizations based on community feedback and modern programming concepts.',
    icon: 'git-branch',
  },
];

function CodeShowcase() {
  return (
    <section className={styles.codeShowcase}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Simple, Yet Powerful Syntax</h2>
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseText}>
            <h3>NIKL combines modern language features with clarity and elegance</h3>
            <p>Whether you're building a simple script or a complex application, NIKL's design philosophy ensures your code remains readable, maintainable, and expressive.</p>
            <ul className={styles.codeFeaturesList}>
              <li>
                <FeatherIcon name="check-circle" size={20} className={styles.checkIcon} />
                <span>Type inference for cleaner code</span>
              </li>
              <li>
                <FeatherIcon name="check-circle" size={20} className={styles.checkIcon} />
                <span>First-class functions and closures</span>
              </li>
              <li>
                <FeatherIcon name="check-circle" size={20} className={styles.checkIcon} />
                <span>Pattern matching for elegant control flow</span>
              </li>
              <li>
                <FeatherIcon name="check-circle" size={20} className={styles.checkIcon} />
                <span>Modern error handling with Result types</span>
              </li>
            </ul>
          </div>
          <div className={styles.showcaseCode}>
            <CodeBlock
              language="rust"
              title="advanced.nk"
              showLineNumbers
            >
{`// Advanced NIKL example
fn analyze_user(
    skills: Array, profile: HashMap, stats: Tuple,
    on_analyze: callback_fn
) -> None {
    print("Data:", skills, profile, stats)

    print("Skill Count:", len(skills))
    print("Profile Fields:", len(profile))
    print("Stats Elements:", len(stats))

    on_analyze()
}

fn callback_fn() -> None {
    let temp_flag = True
    print("Callback: Data has been analyzed.")
    del temp_flag
}

let skill_set: Array = ["Nik", "Lang", "Design"]
let user_profile: HashMap = {
    "email": "neko@example.com",
    "role": "Admin"
}
let user_stats: Tuple = (250, 4.9, "Gold")

analyze_user(skill_set, user_profile, user_stats, callback_fn)`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

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
            <h2 className={styles.sectionTitle}>Why Choose NIKL?</h2>
            <div className={styles.featuresGrid}>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        
        <CodeShowcase />
        
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaWrapper}>
              <div className={styles.ctaContent}>
                <h2>Ready to dive in?</h2>
                <p>Start building with NIKL today. Explore the documentation, try out examples, and join our growing community of developers.</p>
                <div className={styles.ctaButtons}>
                  <Link
                    className={clsx("button button--primary button--lg", styles.mainCtaButton)}
                    to="/docs/introduction"
                  >
                    <FeatherIcon name="book-open" size={18} /> Start Learning NIKL
                  </Link>
                  <Link
                    className={clsx("button button--secondary button--lg", styles.secondaryCtaButton)}
                    to="/docs/tutorial/basics"
                  >
                    <FeatherIcon name="code" size={18} /> View Tutorials
                  </Link>
                </div>
              </div>
              <div className={styles.ctaGraphic}>
                <img 
                  src="/img/logo.svg" 
                  alt="NIKL Logo" 
                  className={styles.ctaLogo}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
