import youtubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import themeYouTubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/Theme.module.scss';
import clsx from 'clsx';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Location() {
    const [chooseLocation, setChooseLocation] = useState();
    const { t } = useTranslation();
    const [selectedLocation, setSelectedLocation] = useState(sessionStorage.getItem('location') || 'Việt Nam');

    const handleChooseLocation = () => {
        setChooseLocation((prev) => !prev);
    };

    const handleChangeLocation = (location) => {
        sessionStorage.setItem('location', location);
        setSelectedLocation(location);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setChooseLocation(false);
    };

    const locationList = t('header.headerSettings.headerSettingsLocation.list', { returnObjects: true }) || [];

    return (
        <section
            className={clsx(
                youtubeSettingsStyles.compsYouTubeSettings,
                themeYouTubeSettingsStyles.themeYouTubeSettings,
            )}
        >
            <div onClick={handleChooseLocation}>
                <i>
                    <YouTubeSettingsIcons.location />
                </i>
                <p>{t('header.headerSettings.headerSettingsLocation.current')}</p>
                <i>
                    <YouTubeSettingsIcons.next />
                </i>
            </div>
            {chooseLocation && (
                <div>
                    <section>
                        <i onClick={handleClose}>
                            <YouTubeSettingsIcons.back />
                        </i>
                        <h2>{t('header.headerSettings.headerSettingsLocation.title')}</h2>
                    </section>
                    <ul>
                        {locationList.map(({ code, label }) => (
                            <li key={code} onClick={() => handleChangeLocation(code)}>
                                <p>{label}</p>
                                {selectedLocation === code && <span>✔️</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Location;
