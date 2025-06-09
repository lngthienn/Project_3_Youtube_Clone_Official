import styles from '../../../style/components/Header/Search/HiddenSearchInput.module.scss';
import { HiddenSearchInputIcons } from '../../../assets/Header/Search/HiddenSearchInputIcons';

function HiddenSearchInput() {
    return (
        <button className={styles.hiddensearchinput} title="Nút nhấn ẩn bên trong Input">
            <HiddenSearchInputIcons.button className={styles.searchheader} />
        </button>
    );
}

export default HiddenSearchInput;
