import styles from '../../../style/components/Header/Search/HiddenSearchInput.module.scss';
import { HiddenSearchInputIcons } from '../../../assets/Header/Search/HiddenSearchInputIcons';

function HiddenSearchInput() {
    return (
        <section className={styles.hiddenSearchInput}>
            <button title="Nút Search ẩn bên trong Input">
                <HiddenSearchInputIcons.button />
            </button>
        </section>
    );
}

export default HiddenSearchInput;
