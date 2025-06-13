import { memo } from 'react';
import styles from '../../../style/components/Header/Location/Location.module.scss';

function Location() {
    const location = sessionStorage.getItem('location') ?? '';

    return (
        <section className={styles.location}>
            <span>{location}</span>
        </section>
    );
}

export default memo(Location);
