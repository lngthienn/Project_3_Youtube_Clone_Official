import styles from '../../../style/components/Header/VoiceSearch/VoiceSearch.module.scss';
import { VoiceSearchIcons } from '../../../assets/Header/VoiceSearch/VoiceSearchIcons';

function VoiceSearch() {
    return (
        <div className={styles.voicesearch} title="Tìm kiếm bằng giọng nói">
            <VoiceSearchIcons.button />
        </div>
    );
}

export default VoiceSearch;
