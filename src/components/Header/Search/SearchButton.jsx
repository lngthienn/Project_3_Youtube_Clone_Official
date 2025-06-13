import styles from '../../../style/components/Header/Search/SearchButton.module.scss';
import { SearchButtonIcons } from '../../../assets/Header/Search/SearchButtonIcons';

function SearchButton({ handleSearch }) {
    return (
        <section className={styles.searchbutton} title="Tìm kiếm nhanh" onClick={handleSearch}>
            <button>
                <SearchButtonIcons.button />
            </button>
        </section>
    );
}

export default SearchButton;
