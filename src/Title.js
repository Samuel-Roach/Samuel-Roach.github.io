
import profile from './img/profile.png';
import "./Title.css";

function Title() {
    return (
        <div class="flex flex-row gap-12 mx-auto w-2/3 title-margin">
            <div class="w-full">
            <div class="w-52 h-52 absolute float rounded-full bg-[#AB9DF2] ping-div hover:animate-ping"></div>
            <img class="w-56 h-56 absolute float rounded-full profile-hide-pointer" src={profile}></img>
            </div>
            <div class="">
                <span class="text-white my-auto font-bold text-7xl">
                    Hi there! I'm <span class="transition ease-in-out stroke-blue text-transparent hover:text-[#78DCE8]">Samuel Roach</span>, a software engineer and developer from. I'm currently in my
                    third year at <a class="underline decoration-[#A9DC76] underline-offset-4" href="https://www.swansea.ac.uk/">Swansea University</a> studying Computer Science.
                    <br></br>
                    <br></br>
                    I've spent a year Lorum Ipsum and some more content purely so I'm going
                </span>
                <span class="font-bold text-white text-3xl"></span>
            </div>
        </div>
    );
}

// Pink - #FF6188
// Orange - #FC9867
// Yellow - #FFD866
// Green - #A9DC76
// Blue - #78DCE8
// Purple - #AB9DF2

export default Title;