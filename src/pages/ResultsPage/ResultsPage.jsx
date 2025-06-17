import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import PopularTypes from '../HomePage/HomePagePopularTypesTitle';
import fetchVideos from '../../redux/features/search/fetchVideos';
import styles from '../../styles/pages/ResultsPage/ResultsPage.module.scss';
import { lazy, Suspense } from 'react';

const ResultsPageItem1 = lazy(() => import('./ResultsPageItem/ResultsPageItem1'));
const ResultsPageItem2 = lazy(() => import('./ResultsPageItem/ResultsPageItem2'));
const ResultsPageItem3 = lazy(() => import('./ResultsPageItem/ResultsPageItem3'));
const ResultsPageItem4 = lazy(() => import('./ResultsPageItem/ResultsPageItem4'));

function ResultsPage() {
    const dispatch = useDispatch();
    const { videos, status } = useSelector((state) => state.search);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (query) {
            dispatch(fetchVideos(query));
        }
    }, [dispatch, query]);

    if (status === 'loading') return <p>🔄 Đang tải...</p>;
    if (status === 'failed') return <p>❌ Có lỗi xảy ra! Vui lòng thử lại vào ngày mai...</p>;
    if (status === 'succeeded' && videos?.length === 0) return <p>😕 Không tìm thấy kết quả nào!</p>;

    return (
        <section className={styles.resultspage}>
            <PopularTypes />
            <h2>
                Ý bạn là: <i>{query}</i>
            </h2>
            <div>
                <Suspense fallback={<p>🔄 Đang tải kết quả...</p>}>
                    {videos[0] && <ResultsPageItem1 video={videos[0]} />}
                    {videos[1] && <ResultsPageItem2 video={videos[1]} />}
                    {videos[2] && <ResultsPageItem3 video={videos[2]} />}
                    {videos[3] && <ResultsPageItem4 video={videos[3]} />}
                </Suspense>
            </div>
        </section>
    );
}

export default ResultsPage;
