
const MovieTrailer=(props)=>{
    console.log('trailer',props.videoId)

    const videoUrl = 'https://www.youtube.com/embed/'+props.videoId
    return(
        <div className="youtube-player__video-container jw-info-box" data-v-8d9eb75c="" data-v-71d7d6d7="" style={{minHeight:0,marginTop:'-25px'}}>
                <iframe
                    id="youtube-player-N_jx4BcZB6c-titledetail" frameborder="0" allowfullscreen="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title={props.movieTitle} width="100%"
                    height="600"
                    src={videoUrl} >

                </iframe>
            </div>
    )
}

export default MovieTrailer;