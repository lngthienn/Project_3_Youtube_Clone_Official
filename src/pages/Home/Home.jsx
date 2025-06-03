import styles from '../../style/pages/Home/Home.module.scss';
import PopularTypes from './PopularTypes';
import PopularMusic from './PopularMusic';

function Home() {
    return (
        <section className={styles.home}>
            <PopularTypes />
            <PopularMusic />
        </section>
    );
}

export default Home;
