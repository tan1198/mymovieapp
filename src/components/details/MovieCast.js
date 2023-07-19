

const MovieCast = (props)=>{
    return(
        <div data-v-644848e0="">
        <div className="detail-infos__subheading">
            <h3 className="detail-infos__subheading--label"> Cast </h3>
        </div>

        <div item-amount="31" horizontal-scroll-style="basic"
            className="hidden-horizontal-scrollbar title-credits">
            {props.casts?.map(c => {

                return (
                    <div className="hidden-horizontal-scrollbar__items">
                        <div className="title-credits__actor"><a className="title-credit-name" data-v-0712fe68=""> {c.name}
                        </a>
                            <div className="title-credits__actor--role">
                                <div className="title-credits__actor--role--name"><strong title={c.name}>{c.character}</strong>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    </div>
    )
}

export default MovieCast;