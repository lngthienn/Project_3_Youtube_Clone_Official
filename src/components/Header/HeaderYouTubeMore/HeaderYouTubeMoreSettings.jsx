import headerYouTubeMoreCompsStyles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeMoreSettings() {
    const { t } = useTranslation();

    return (
        <section className={headerYouTubeMoreCompsStyles.headerYouTubeMoreComps}>
            <div>
                <i>
                    <HeaderYouTubeMoreIcons.settings />
                </i>
                <p>{t('header.headerSettings.headerSettingsSettings')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeMoreSettings;
