import styles from '../../../style/components/Header/VoiceSearch/VoiceSearch.module.scss';
import { VoiceSearchIcons } from '../../../assets/Header/VoiceSearch/VoiceSearchIcons';

function VoiceSearch() {
    return (
        <section className={styles.voicesearch} title="Tìm kiếm bằng giọng nói">
            <div>
                <VoiceSearchIcons.button />
            </div>
        </section>
    );
}

export default VoiceSearch;
