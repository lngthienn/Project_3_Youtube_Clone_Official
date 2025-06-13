import styles from '../../style/pages/Home/PopularTypes.module.scss';
import { useTranslation } from 'react-i18next';

function PopularTypes() {
    const { t } = useTranslation();
    const popularTypesList = t('content.contentPopularTypes', { returnObjects: true }) || [];

    return (
        <ul className={styles.populartypes}>
            {popularTypesList.map(({ id, name }) => (
                <li key={id}>
                    <p>{name}</p>
                </li>
            ))}
        </ul>
    );
}

export default PopularTypes;
