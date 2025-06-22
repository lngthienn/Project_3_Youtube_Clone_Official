import styles from '../../styles/pages/HomePage/HomePage.module.scss';
import { HomePagePopularTypesTitle, HomePageMusicContent } from './HomePageImports';

function HomePage() {
    return (
        <section className={styles.homePage}>
            <HomePagePopularTypesTitle />
            <HomePageMusicContent />
        </section>
    );
}

export default HomePage;
