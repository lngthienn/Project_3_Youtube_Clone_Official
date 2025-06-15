import styles from '../../styles/pages/HomePage/HomePagePopularTypesTitle.module.scss';
import { useTranslation } from 'react-i18next';

function HomePagePopularTypesTitle() {
    const { t } = useTranslation();
    const popularTypesList = t('content.contentPopularTypes', { returnObjects: true }) || [];

    return (
        <ul className={styles.homePagePopularTypesTitle}>
            {popularTypesList.map(({ id, name }) => (
                <li key={id}>
                    <p>{name}</p>
                </li>
            ))}
        </ul>
    );
}

export default HomePagePopularTypesTitle;
