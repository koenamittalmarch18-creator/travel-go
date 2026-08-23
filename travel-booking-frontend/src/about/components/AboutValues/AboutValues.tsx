import {
    Headphones,
    Heart,
    ShieldCheck,
    Sparkles,
  } from 'lucide-react';
  
  import { aboutValues } from '../../data/about.data';
  
  import styles from './AboutValues.module.scss';
  
  const icons = {
    experience: Sparkles,
    secure: ShieldCheck,
    support: Headphones,
    custom: Heart,
  };
  
  export function AboutValues() {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p>WHY TRAVELGO</p>
  
            <h2>Travel With Confidence</h2>
  
            <span>
              We take care of the details so you can focus on
              creating memories.
            </span>
          </div>
  
          <div className={styles.grid}>
            {aboutValues.map((value) => {
              const Icon = icons[value.icon];
  
              return (
                <article
                  key={value.title}
                  className={styles.card}
                >
                  <div className={styles.icon}>
                    <Icon size={21} />
                  </div>
  
                  <h3>{value.title}</h3>
  
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }