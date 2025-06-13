import youtubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import languagesYouTubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/Languages.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import clsx from 'clsx';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';
import { IoMdArrowBack } from 'react-icons/io';

function Languages({ expanded, setExpanded }) {
    const { currentLanguage, changeLanguage } = useLanguage();

    const handleClose = (event) => {
        event.stopPropagation();
        setExpanded(false);
    };

    const langList = translations[currentLanguage]?.header?.headerSettings?.headerSettingsLanguagesList || [];

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
            <p>{translations[currentLanguage].header.headerSettings.headerSettingsLanguage}</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>

            {expanded && (
                <div>
                    <div>
                        <i onClick={handleClose}>
                            <IoMdArrowBack />
                        </i>
                        <h2>{translations[currentLanguage].header.headerSettings.headerSettingsLanguagesChoose}</h2>
                    </div>
                    <ul>
                        {langList.map(({ code, label }) => (
                            <li key={code} onClick={() => changeLanguage(code)}>
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Languages;
