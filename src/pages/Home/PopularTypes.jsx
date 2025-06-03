import styles from '../../style/pages//Home/PopularTypes.module.scss';

function PopularTypes() {
    const popularTypes = [
        { id: 1, name: 'Tất cả' },
        { id: 2, name: 'Âm nhạc' },
        { id: 3, name: 'Podcast' },
        { id: 4, name: 'Trò chơi' },
        { id: 5, name: 'Trực tiếp' },
        { id: 6, name: 'Tin tức' },
        { id: 7, name: 'Hài kịch tình huống' },
        { id: 8, name: 'Hoạt hoạ' },
        { id: 9, name: 'Du lịch' },
        { id: 10, name: 'Thiên nhiên' },
        { id: 11, name: 'Đọc rap' },
        { id: 12, name: 'Mới tải lên gần đây' },
    ];

    return (
        <section className={styles.populartypes}>
            {popularTypes.map((popularType) => (
                <div key={popularType.id}>
                    <p>{popularType.name}</p>
                </div>
            ))}
        </section>
    );
}

export default PopularTypes;
