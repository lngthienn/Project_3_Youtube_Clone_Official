import styles from '../../style/pages/HomePage/HomePage.module.scss';
import { HomePagePopularTypesTitle, HomePageMusicContent } from './HomePageImports';

function HomePage() {
    return (
        <section className={styles.home}>
            <HomePagePopularTypesTitle />
            <HomePageMusicContent />
        </section>
    );
}

export default HomePage;
