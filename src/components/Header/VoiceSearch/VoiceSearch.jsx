import styles from '../../../style/components/Header/VoiceSearch/VoiceSearch.module.scss';
import { VoiceSearchIcon } from '../../../assets/Header/VoiceSearch/VoiceSearchIcon';

function VoiceSearch() {
    return (
        <div className={styles.voicesearch} title="Tìm kiếm bằng giọng nói">
            <VoiceSearchIcon.button />
        </div>
    );
}

export default VoiceSearch;
