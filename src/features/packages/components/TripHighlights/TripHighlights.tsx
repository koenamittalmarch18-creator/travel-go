import {
    Camera,
    Landmark,
    Mountain,
    Waves,
  } from 'lucide-react';
  
  import styles from './TripHighlights.module.scss';
  
  interface TripHighlightsProps {
    highlights: string[];
  }
  
  const icons = [
    Mountain,
    Waves,
    Landmark,
    Camera,
  ];
  
  export function TripHighlights({
    highlights,
  }: TripHighlightsProps) {
    return (
      <section className={styles.section}>
        <h2>Trip Highlights</h2>
  
        <div className={styles.list}>
          {highlights.map((highlight, index) => {
            const Icon = icons[index % icons.length];
  
            return (
              <div
                key={highlight}
                className={styles.item}
              >
                <span className={styles.icon}>
                  <Icon size={18} />
                </span>
  
                <span>{highlight}</span>
              </div>
            );
          })}
        </div>
      </section>
    );
  }