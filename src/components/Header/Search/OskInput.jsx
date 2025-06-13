import styles from '../../../style/components/Header/Search/OskInput.module.scss';
import { OskInputIcons } from '../../../assets/Header/Search/OskInputIcons';

function OskInput() {
    return (
        <section className={styles.oskinput}>
            <button title="Tìm kiếm">
                <OskInputIcons.button />
            </button>
        </section>
    );
}

export default OskInput;
