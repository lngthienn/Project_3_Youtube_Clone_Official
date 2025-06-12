import youtubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import languagesYouTubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/Languages.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import clsx from 'clsx';
import languages from '../../../locales/languages';
import { useLanguage } from '../../../context/useLanguage';
import { IoMdArrowBack } from 'react-icons/io';

function Languages({ expanded, setExpanded }) {
    const { currentLanguage, changeLanguage } = useLanguage();

    const handleExpanded = (event) => {
        event.stopPropagation();
        setExpanded(false);
    };

    return (
        <div
            className={clsx(
                youtubeSettingsStyles.compsYouTubeSettings,
                languagesYouTubeSettingsStyles.languagesYouTubeSettings,
            )}
            onClick={() => setExpanded(true)}
        >
            <i>
                <YouTubeSettingsIcons.languages />
            </i>
            <p>Ngôn ngữ: Tiếng Việt</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>
            {expanded && (
                <div>
                    <div>
                        <i onClick={handleExpanded}>
                            <IoMdArrowBack />
                        </i>
                        <h2>Chọn ngôn ngữ của bạn</h2>
                    </div>
                    <ul>
                        {languages.map((lang) => (
                            <li
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={lang.code === currentLanguage ? 'active' : ''}
                            >
                                {lang.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Languages;
