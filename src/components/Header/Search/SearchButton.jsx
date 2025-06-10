import styles from '../../../style/components/Header/Search/SearchButton.module.scss';
import { SearchButtonIcons } from '../../../assets/Header/Search/SearchButtonIcons';

function SearchButton({ handleSearch }) {
    return (
        <>
            <button className={styles.searchbutton} title="Tìm kiếm nhanh" onClick={handleSearch}>
                <SearchButtonIcons.button style={{ fontSize: '24px', cursor: 'pointer' }} />
            </button>
        </>
    );
}

export default SearchButton;
