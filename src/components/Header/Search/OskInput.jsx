import styles from '../../../style/components/Header/Search/OskInput.module.scss';
import { OskInputIcons } from '../../../assets/Header/Search/OskInputIcons';

function OskInput() {
    return (
        <button className={styles.oskinput} title="Tìm kiếm">
            <OskInputIcons.button
                style={{ fontSize: '18px', background: '#fff', color: '#7b7b7b', cursor: 'pointer' }}
            />
        </button>
    );
}

export default OskInput;
