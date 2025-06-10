import { forwardRef } from 'react';
import styles from '../../../style/components/Header/Search/SearchInput.module.scss';
import { setQuery } from '../../../redux/slices/searchSlice';

const SearchInput = forwardRef(({ handleSearch, query, dispatch }, ref) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.searchinput}>
            <input
                type="text"
                ref={ref}
                placeholder="Tìm kiếm"
                value={query}
                onChange={(e) => dispatch(setQuery(e.target.value))}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                aria-label="Nhập từ khóa tìm kiếm"
            />
        </form>
    );
});

export default SearchInput;
