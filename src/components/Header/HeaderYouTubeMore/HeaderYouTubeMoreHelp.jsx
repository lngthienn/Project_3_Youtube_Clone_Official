import headerYouTubeMoreCompsStyles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeMoreHelp() {
    const { t } = useTranslation();

    return (
        <section className={headerYouTubeMoreCompsStyles.headerYouTubeMoreComps}>
            <div>
                <i>
                    <HeaderYouTubeMoreIcons.help />
                </i>
                <p>{t('header.headerSettings.headerSettingsHelp')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeMoreHelp;
