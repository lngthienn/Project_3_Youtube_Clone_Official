import headerSearchInput from '../../../styles/components/Header/HeaderSearch/HeaderSearchInput.module.scss';
import { HeaderSearchIcons } from '../../../assets/icons/Header/HeaderSearch/HeaderSearchIcons';
import { setQuery, clearVideos } from '../../../redux/features/search/searchSlice';
import fetchVideos from '../../../redux/features/search/fetchVideosIds';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const HeaderSearchInput = () => {
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
        <section className={headerSearchInput.headerSearchInput} onFocus={handleClickSearchInput} tabIndex={0}>
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
            <div>
                <button onClick={handleSearch}>
                    <HeaderSearchIcons.rightSearchButton />
                </button>
            </div>
        </section>
    );
};

export default HeaderSearchInput;
