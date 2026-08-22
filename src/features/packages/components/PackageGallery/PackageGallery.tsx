import { useState } from 'react';

import styles from './PackageGallery.module.scss';

interface PackageGalleryProps {
  images: string[];
  packageName: string;
}

export function PackageGallery({
  images,
  packageName,
}: PackageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <img
          src={images[activeIndex]}
          alt={`${packageName} - ${activeIndex + 1}`}
        />
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={
              index === activeIndex
                ? styles.activeThumbnail
                : styles.thumbnail
            }
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}