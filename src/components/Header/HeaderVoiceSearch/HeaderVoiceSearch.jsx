import styles from '../../../styles/components/Header/HeaderVoiceSearch/HeaderVoiceSearch.module.scss';
import { HeaderVoiceSearchIcons } from '../../../assets/icons/Header/HeaderVoiceSearch/HeaderVoiceSearchIcons';

function HeaderVoiceSearch() {
    return (
        <section className={styles.voicesearch} title="Tìm kiếm bằng giọng nói">
            <div>
                <HeaderVoiceSearchIcons.button />
            </div>
        </section>
    );
}

export default HeaderVoiceSearch;
