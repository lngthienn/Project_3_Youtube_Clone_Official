import styles from '../../../style/components/Header/Search/HeaderSearchInput.module.scss';
import { HeaderSearchIcons } from '../../../assets/Header/HeaderSearch/HeaderSearchIcons';
import { setQuery } from '../../../redux/slices/searchSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../../../redux/slices/searchSlice';
import fetchVideos from '../../../redux/thunks/fetchVideos';
import { useRef } from 'react';

const SearchInput = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const handleSearch = () => {
        if (query.trim()) {
            dispatch(clearVideos());
            dispatch(fetchVideos(query));
            navigate(`/results?query=${query}`);
        }
    };

    const handleClickSearchInput = (event) => {
        if (event.target.tagName !== 'INPUT') {
            event.currentTarget.querySelector('input')?.focus();
        }
        inputRef.current.focus();
    };

    return (
        <section className={styles.searchinput} onFocus={handleClickSearchInput} tabIndex={0}>
            <div>
                <button>
                    <HeaderSearchIcons.hiddenLeftSearchButton />
                </button>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        ref={inputRef}
                        placeholder={t('header.inputPlaceholder')}
                        value={query}
                        onChange={(e) => {
                            dispatch(setQuery(e.target.value));
                        }}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </form>
                <button>
                    <HeaderSearchIcons.oskInput />
                </button>
            </div>
            {query && (
                <ul>
                    <li>hehe</li>
                </ul>
            )}
        </section>
    );
};

export default SearchInput;
