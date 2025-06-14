import styles from '../../../style/components/Header/Search/SearchButton.module.scss';
import { HeaderSearchIcons } from '../../../assets/Header/HeaderSearch/HeaderSearchIcons.js';

function SearchButton({ handleSearch }) {
    return (
        <section className={styles.searchbutton} title="Tìm kiếm nhanh" onClick={handleSearch}>
            <button>
                <HeaderSearchIcons.rightSearchButton />
            </button>
        </section>
    );
}

export default SearchButton;
