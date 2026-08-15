import {
    Heart,
    SlidersHorizontal,
    ShieldCheck,
    Sparkles,
  } from 'lucide-react';
  
  import styles from './WhyChooseUs.module.scss';
  
  const benefits = [
    {
      id: 'experiences',
      title: 'Curated Experiences',
      description:
        'Handpicked destinations and packages for unforgettable journeys.',
      icon: Sparkles,
    },
    {
      id: 'safe',
      title: 'Safe & Secure',
      description:
        'Your safety is our priority. Travel with peace of mind.',
      icon: ShieldCheck,
    },
    {
      id: 'flexible',
      title: 'Flexible Plans',
      description:
        'Customizable packages to match your travel style and budget.',
      icon: SlidersHorizontal,
    },
    {
      id: 'memorable',
      title: 'Memorable Journeys',
      description:
        'Creating memories that last a lifetime.',
      icon: Heart,
    },
  ];
  
  export function WhyChooseUs() {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Why Choose TravelGo?</h2>
  
          <div className={styles.list}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
  
              return (
                <article key={benefit.id} className={styles.item}>
                  <div className={styles.icon}>
                    <Icon size={19} />
                  </div>
  
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }