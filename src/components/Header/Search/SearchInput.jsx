import { forwardRef } from 'react';
import styles from '../../../style/components/Header/Search/SearchInput.module.scss';
import { setQuery } from '../../../redux/slices/searchSlice';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

const SearchInput = forwardRef(({ handleSearch, query, dispatch }, ref) => {
    const { currentLanguage } = useLanguage();

    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.searchinput}>
            <input
                type="text"
                ref={ref}
                placeholder={translations[currentLanguage].header.inputPlaceholder}
                value={query}
                onChange={(e) => dispatch(setQuery(e.target.value))}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
        </form>
    );
});

export default SearchInput;
