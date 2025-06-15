import styles from '../../../styles/components/Header/HeaderSearch/HeaderSearchButton.module.scss';
import { HeaderSearchIcons } from '../../../assets/icons/Header/HeaderSearch/HeaderSearchIcons.js';

function HeaderSearchButton() {
    return (
        <section className={styles.Header} title="Tìm kiếm nhanh">
            <button>
                <HeaderSearchIcons.rightSearchButton />
            </button>
        </section>
    );
}

export default HeaderSearchButton;
