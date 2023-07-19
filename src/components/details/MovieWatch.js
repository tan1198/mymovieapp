import { useDispatch } from "react-redux";
import { userAction } from "../../store/user-slice";
const MovieWatch = (props) => {
    const videoUrl = 'https://www.2embed.to/embed/tmdb/movie?id=' + props.videoId;
    console.log(videoUrl)
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(userAction.addToHistoryList({ movieId: props.videoId, userEmail: 'email3' }))
    }
    return (

        <div className="youtube-player__video-container jw-info-box" data-v-8d9eb75c="" data-v-71d7d6d7="" style={{ minHeight: 0, marginTop: '-25px' }}>
            <iframe
                id="youtube-player-N_jx4BcZB6c-titledetail" frameborder="0" allowfullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                height="600"
                width="100%"
                src={videoUrl} 
                onClick={handleOnClick}
                >

            </iframe>
        </div>
    )
}

export default MovieWatch;