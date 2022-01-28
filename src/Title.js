import profile from './profile.png';

function Title() {
    return (
        <div class="flex flex-row">
            <img class="w-36 h-36 rounded-full" src={profile}></img>
            <h1 class="bg-red-300 my-auto font-bold text-6xl">👋 Hi there!</h1>
        </div>
    );
}

export default Title;