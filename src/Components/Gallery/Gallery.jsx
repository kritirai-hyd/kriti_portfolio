import styles from '../styles/Gallery.module.css';

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
];

export default function Gallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Gallery</h1>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div key={index} className={styles.card}>
            <img src={src} alt={`Gallery ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
