import styles from './Gallery.module.css';
import Image from 'next/image';

import a from '../../assets/image/kritirai-6.jpeg';
import b from '../../assets/image/kritirai-4.jpeg';
import c from '../../assets/image/kritirai-3.jpeg';
import d from '../../assets/image/kritirai-7.png';
import e from '../../assets/image/kritirai-5.jpeg';
import f from '../../assets/image/kritirai-8.jpeg';
import g from '../../assets/image/kriitrai.png';
import h from '../../assets/image/kritirai-9.jpeg';
import i from '../../assets/image/kritirai-2.jpeg';
import j from '../../assets/image/kriitrai.jpeg';
import BreadCrumb from '../ui/BreadCrumb/BreadCrumb';

const awardImages = [a, b, c, d, e, f];
const portfolioImages = [g, h, i, j];

export default function Gallery() {
  return (
<div className={styles.bg}>

  <BreadCrumb
        title="Gallery"
        path={[{ name: "Home", link: "/" }, { name: "Gallery" }]}
      />
      <section className={styles.container}>


      <header className={styles.header}>
        <h1 className={styles.title}>
          SafeHer – Safety Alert for Women 
        </h1>
        <p className={styles.subtitle}>
          Best Project Award | Personal Portfolio Gallery
        </p>
      </header>

 
      <div className={styles.awardSection}>
        <div className={styles.grid}>
        {awardImages.map((img, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={img}
              alt="Full Stack Developer | Kriti Rai"
              className={styles.image}
              placeholder="blur"
            />
          </div>
        ))}
      </div>

        <p className={styles.awardText}>
          These images capture the moments I received the <strong>Best Project Award</strong>{' '}
          for <strong>SafeHer – Safety Alert for Women</strong>. This recognition reflects
          the dedication, innovation, and real-world impact of the project, which focuses
          on enhancing women’s safety through technology.
        </p>
      </div>

      {/* Portfolio Info */}
      <div className={styles.galleryInfo}>
        <h2 className={styles.galleryHeading}>Portfolio Gallery</h2>
        <p className={styles.galleryText}>
          The images below are <strong>my personal portfolio and profile images</strong>,
          created to represent my overall work and design experience, and are used solely
          for my professional portfolio and profiles.
        </p>
      </div>

      {/* Portfolio Images */}
      <div className={styles.grid}>
        {portfolioImages.map((img, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={img}
              alt="Kriti Rai | Frontend Developer | Backend Developer"
              className={styles.image}
              placeholder="blur"
            />
          </div>
        ))}
      </div>

    </section>
</div>
  );
}
