import {
    Headphones,
    ShieldCheck,
    Sparkles,
    Tag,
  } from 'lucide-react';
  
  import { trustFeatures } from '../../data/home.data';
  import styles from './TrustFeatures.module.scss';
  
  const icons = {
    shield: ShieldCheck,
    tag: Tag,
    headphones: Headphones,
    badge: Sparkles,
  };
  
  export function TrustFeatures() {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          {trustFeatures.map((feature) => {
            const Icon = icons[feature.icon];
  
            return (
              <article key={feature.id} className={styles.feature}>
                <div className={styles.icon}>
                  <Icon size={25} />
                </div>
  
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }