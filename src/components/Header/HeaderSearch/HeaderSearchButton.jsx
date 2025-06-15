import headerSearchButton from '../../../styles/components/Header/HeaderSearch/HeaderSearchButton.module.scss';
import { HeaderSearchIcons } from '../../../assets/icons/Header/HeaderSearch/HeaderSearchIcons.js';

function HeaderSearchButton() {
    return (
        <section className={headerSearchButton.headerSearchButton} title="Tìm kiếm nhanh">
            <button>
                <HeaderSearchIcons.rightSearchButton />
            </button>
        </section>
    );
}

export default HeaderSearchButton;
