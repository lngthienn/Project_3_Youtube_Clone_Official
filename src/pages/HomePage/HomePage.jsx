import styles from '../../styles/pages/HomePage/HomePage.module.scss';
import { HomePagePopularTypesTitle, HomePageMusicContent } from './HomePageImports';
import { toast } from 'react-toastify';

function HomePage() {
    toast.success('🎉 Chào mừng bạn đến với Youtube Clone!');
    return (
        <section className={styles.homePage}>
            <HomePagePopularTypesTitle />
            <HomePageMusicContent />
        </section>
    );
}

export default HomePage;
