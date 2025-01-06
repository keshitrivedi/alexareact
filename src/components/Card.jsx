function Card (video) {
    return (
        <div id="thumbnail">
            <div id="img">
                <img id="photo" src={video.thumbnail}/>
                <div id="duration">{video.duration}</div>
            </div>
            <div id="info">
                <div id="cpic">
                    <img id="pfp" src={video.pfp}/>
                </div>
                <div id="desc">
                    <div id="title">{video.title}</div>
                    <div id="cname">{video.creator}</div>
                    <div id="additional">
                        <div id="views">{video.views}</div>
                        <div id="middot">&#183;</div>
                        <div id="date">{video.posting}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card