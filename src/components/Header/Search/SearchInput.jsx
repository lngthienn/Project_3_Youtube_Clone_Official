import { forwardRef } from 'react';
import styles from '../../../style/components/Header/Search/SearchInput.module.scss';
import { setQuery } from '../../../redux/slices/searchSlice';
import { useTranslation } from 'react-i18next';

const SearchInput = forwardRef(({ handleSearch, query, dispatch }, ref) => {
    const { t } = useTranslation();

    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.searchinput}>
            <input
                type="text"
                ref={ref}
                placeholder={t('header.inputPlaceholder')}
                value={query}
                onChange={(e) => dispatch(setQuery(e.target.value))}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
        </form>
    );
});

export default SearchInput;
