import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import PopularTypes from '../HomePage/HomePagePopularTypesTitle';
import fetchVideos from '../../redux/features/search/fetchVideos';
import styles from '../../styles/pages/ResultsPage/ResultsPage.module.scss';
import ResultsPageItem1 from './ResultsPageItem/ResultsPageItem1';
import ResultsPageItem2 from './ResultsPageItem/ResultsPageItem2';

const ResultsPageItem3 = lazy(() => delayLazy(import('./ResultsPageItem/ResultsPageItem3')));
const ResultsPageItem4 = lazy(() => delayLazy(import('./ResultsPageItem/ResultsPageItem4')));

function delayLazy(promise) {
    return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => promise);
}

function ResultsPage() {
    const dispatch = useDispatch();
    const { videos, status } = useSelector((state) => state.search);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const { ref: trigger3, inView: trigger3Visible } = useInView({ threshold: 0.2 });
    const { ref: trigger4, inView: trigger4Visible } = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (query) dispatch(fetchVideos(query));
    }, [dispatch, query]);

    useEffect(() => {
        if (trigger3Visible) setShow3(true);
        if (trigger4Visible) setShow4(true);
    }, [trigger3Visible, trigger4Visible]);

    if (status === 'loading') return <p>🔄 Đang tải...</p>;
    if (status === 'failed') return <p>❌ Có lỗi xảy ra! Vui lòng thử lại sau...</p>;
    if (status === 'succeeded' && videos?.length === 0) return <p>😕 Không tìm thấy kết quả!</p>;

    return (
        <section className={styles.resultsPage}>
            <PopularTypes />
            {query && (
                <h2>
                    Ý bạn là: <i>{query}</i>
                </h2>
            )}
            <div>
                {videos[0] && <ResultsPageItem1 video={videos[0]} />}
                {videos[1] && <ResultsPageItem2 video={videos[1]} />}
                {!show3 && <div ref={trigger3} />}
                {videos[2] && show3 && (
                    <>
                        <Suspense fallback="Loading...">
                            <ResultsPageItem3 video={videos[2]} />
                        </Suspense>
                        {!show4 && <div ref={trigger4} />}
                    </>
                )}
                {videos[3] && show4 && (
                    <Suspense fallback="Loading...">
                        <ResultsPageItem4 video={videos[3]} />
                    </Suspense>
                )}
            </div>
        </section>
    );
}

export default ResultsPage;
