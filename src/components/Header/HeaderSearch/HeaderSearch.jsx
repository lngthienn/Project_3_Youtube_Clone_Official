import headerSearchInput from '../../../styles/components/Header/HeaderSearch/HeaderSearchInput.module.scss';
import { HeaderSearchIcons } from '../../../assets/icons/Header/HeaderSearch/HeaderSearchIcons';
import { setQuery, clearVideos } from '../../../redux/features/search/searchSlice';
import fetchVideos from '../../../redux/features/search/fetchVideos';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import { fetchSuggestions } from '../../../utils/api/youtubeApi';

const HeaderSearchInput = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const debouncedFetchSuggestions = useCallback(
        debounce(async (text) => {
            if (!text.trim()) {
                setSuggestions([]);
                setShowSuggestions(false);
                return;
            }

            try {
                const results = await fetchSuggestions(text);
                console.log('Gợi ý API:', results);
                setSuggestions(results);
                setShowSuggestions(results.length > 0);
            } catch (error) {
                console.error('Lỗi gợi ý:', error);
            }
        }, 300),
        [],
    );

    useEffect(() => {
        debouncedFetchSuggestions(query);
        return () => debouncedFetchSuggestions.cancel();
    }, [query]);

    const handleSuggestionClick = (suggestion) => {
        dispatch(setQuery(suggestion)); // ✅ Cập nhật từ khoá tìm kiếm
        dispatch(clearVideos()); // ✅ Xóa kết quả tìm kiếm cũ
        dispatch(fetchVideos(suggestion)); // ✅ Tìm kiếm video mới
        navigate(`/results?query=${suggestion}`); // ✅ Chuyển hướng đến trang kết quả
        setShowSuggestions(false); // ✅ Ẩn danh sách gợi ý
    };

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
            {showSuggestions && suggestions.length > 0 && (
                <ul className={headerSearchInput.suggestionList}>
                    {suggestions.slice(0, 5).map((s, idx) => (
                        <li
                            key={idx}
                            onMouseDown={() => handleSuggestionClick(s)}
                            className={headerSearchInput.suggestionItem}
                        >
                            {s}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default HeaderSearchInput;
