import styles from '../../../style/components/Header/HeaderSearch/HeaderSearchButton.module.scss';
import { HeaderSearchIcons } from '../../../assets/Header/HeaderSearch/HeaderSearchIcons.js';

function HeaderSearchButton() {
    return (
        <section className={styles.Header} title="Tìm kiếm nhanh">
            <button>
                <HeaderSearchIcons.rightHeader />
            </button>
        </section>
    );
}

export default HeaderSearchButton;
