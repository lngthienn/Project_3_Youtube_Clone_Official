import headerYouTubeMoreComps from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import headerYouTubeMoreTheme from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMoreTheme.module.scss';
import clsx from 'clsx';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function HeaderYouTubeMoreLocation() {
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
                headerYouTubeMoreComps.headerYouTubeMoreComps,
                headerYouTubeMoreTheme.headerYouTubeMoreTheme,
            )}
        >
            <div onClick={handleChooseLocation}>
                <i>
                    <HeaderYouTubeMoreIcons.location />
                </i>
                <p>{t('header.headerSettings.headerSettingsLocation.current')}</p>
                <i>
                    <HeaderYouTubeMoreIcons.next />
                </i>
            </div>
            {chooseLocation && (
                <div>
                    <section>
                        <i onClick={handleClose}>
                            <HeaderYouTubeMoreIcons.back />
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

export default HeaderYouTubeMoreLocation;
