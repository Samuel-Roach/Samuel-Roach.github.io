import './PingAvatar.css'

function PingAvatar(props) {
    return (
        <div class="w-full mx-auto">
            <a href="/"><div class={"absolute rounded-full " + props.ping_color + " ping-div hover:animate-ping"}>
            </div></a>
            <img class="absolute rounded-full profile-hide-pointer drop-shadow-lg" src={props.image}></img>
        </div>
    );
}

export default PingAvatar;