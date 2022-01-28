import './PingAvatar.css'

function PingAvatar(props) {
    return (
        <div class="w-full mx-auto">
            <a href="/"><div class={"w-52 h-52 absolute float rounded-full " + props.ping_color + " ping-div hover:animate-ping"}>
            </div></a>
            <img class="w-56 h-56 absolute float rounded-full profile-hide-pointer drop-shadow-lg" src={ props.image }></img>
        </div>
    );
}

export default PingAvatar;