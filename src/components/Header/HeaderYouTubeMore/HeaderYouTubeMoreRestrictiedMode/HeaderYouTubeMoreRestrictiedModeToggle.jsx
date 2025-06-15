import Switch from 'react-switch';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import headerYouTubeMoreRestrictedModeToggle from '../../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMoreRestrictedMode/HeaderYouTubeMoreRestrictedModeToggle.module.scss';

function HeaderYouTubeMoreRestrictedModeToggle({ handleRestrictedToggle }) {
    const [checked, setChecked] = useState(() => {
        const stored = localStorage.getItem('RestrictiedModeStatus');
        return stored === null ? false : stored === 'true';
    });
    const { t } = useTranslation();

    const handleChange = () => {
        const nextChecked = !checked;
        setChecked(nextChecked);
        localStorage.setItem('RestrictiedModeStatus', String(nextChecked));
        handleRestrictedToggle?.(nextChecked);
    };

    return (
        <div className={headerYouTubeMoreRestrictedModeToggle.headerYouTubeMoreRestrictedModeToggle}>
            <label>{t('header.headerSettings.headerSettingsRestrictedMode.toggleAction')}</label>
            <Switch
                onChange={handleChange}
                checked={checked}
                onColor="#4CAF50"
                offColor="#ccc"
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
            />
        </div>
    );
}

export default HeaderYouTubeMoreRestrictedModeToggle;
