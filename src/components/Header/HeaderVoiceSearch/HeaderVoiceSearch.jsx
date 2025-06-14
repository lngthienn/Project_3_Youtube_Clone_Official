import styles from '../../../style/components/Header/HeaderVoiceSearch/HeaderVoiceSearch.module.scss';
import { VoiceSearchIcons } from '../../../assets/Header/VoiceSearch/VoiceSearchIcons';

function HeaderVoiceSearch() {
    return (
        <section className={styles.voicesearch} title="Tìm kiếm bằng giọng nói">
            <div>
                <VoiceSearchIcons.button />
            </div>
        </section>
    );
}

export default HeaderVoiceSearch;
