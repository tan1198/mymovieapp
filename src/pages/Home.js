import MainLayout from "../components/layout/MainLayout";
import MoviesList from "../components/content/MoviesList";
import BannerList from "../components/banner/BannerList";
import { useSelector } from "react-redux";
const HomePage = () => {
const user = useSelector(state=>state.auth)
console.log(user)
    return (
        <MainLayout>


            <div className="Home_wrapper__53Los">
                <BannerList />
                <MoviesList title='Top đánh giá' type='top_rated' link='/toprated' />
                <MoviesList title='Sắp chiếu' type='upcoming' link='/upcoming' />
                <MoviesList title='Phim phổ biến' type='popular' link='/popular' />
                <MoviesList title='Đang chiếu' type='now_playing' link='/nowplaying' />
            </div>

        </MainLayout>
    )
}

export default HomePage;