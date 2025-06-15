import headerYouTubeMoreCompsStyles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeMoreShortcut() {
    const { t } = useTranslation();

    return (
        <section className={headerYouTubeMoreCompsStyles.headerYouTubeMoreComps}>
            <div>
                <i>
                    <HeaderYouTubeMoreIcons.shortcut />
                </i>
                <p>{t('header.headerSettings.headerSettingsKeyboardShortcuts')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeMoreShortcut;
