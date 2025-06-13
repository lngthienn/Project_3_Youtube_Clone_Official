import { forwardRef, useState } from 'react';
import styles from '../../../style/components/Header/Search/SearchInput.module.scss';
import { setQuery } from '../../../redux/slices/searchSlice';
import { useTranslation } from 'react-i18next';

const SearchInput = forwardRef(({ handleSearch, query, dispatch }, ref) => {
    const [suggestions, setSuggestions] = useState(false);
    const { t } = useTranslation();

    return (
        <section className={styles.searchinput}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    ref={ref}
                    placeholder={t('header.inputPlaceholder')}
                    value={query}
                    onChange={(e) => {
                        dispatch(setQuery(e.target.value));
                        setSuggestions((prev) => !prev);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
            </form>
            {suggestions && (
                <ul>
                    <li>hehe</li>
                </ul>
            )}
        </section>
    );
});

export default SearchInput;
