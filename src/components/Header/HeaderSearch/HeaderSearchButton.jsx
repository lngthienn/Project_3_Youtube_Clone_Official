import styles from '../../../style/components/Header/HeaderSearch/SearchButton.module.scss';
import { HeaderSearchIcons } from '../../../assets/Header/HeaderSearch/HeaderSearchIcons.js';

function SearchButton() {
    return (
        <section className={styles.searchbutton} title="Tìm kiếm nhanh">
            <button>
                {/* <HeaderSearchIcons.rightSearchButton /> */}
                <p>Đang bảo trì</p>
            </button>
        </section>
    );
}

export default SearchButton;
