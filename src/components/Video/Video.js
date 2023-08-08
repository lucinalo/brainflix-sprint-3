import "./_Video.scss"

function Video({data}){
    return(
        <div className="video">
            <video className="video__player" poster={data.image} controls></video>
        </div>
    );
};

export default Video;