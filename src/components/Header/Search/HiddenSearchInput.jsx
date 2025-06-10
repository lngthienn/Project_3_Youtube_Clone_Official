import styles from '../../../style/components/Header/Search/HiddenSearchInput.module.scss';
import { HiddenSearchInputIcons } from '../../../assets/Header/Search/HiddenSearchInputIcons';

function HiddenSearchInput() {
    return (
        <button title="Nút Search ẩn bên trong Input" className={styles.hiddenSearchInput}>
            <HiddenSearchInputIcons.button style={{ fontSize: '20px' }} />
        </button>
    );
}

export default HiddenSearchInput;
