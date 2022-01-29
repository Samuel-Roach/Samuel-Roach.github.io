import './Home.css';
import OutOfSiteLink from './OutOfSiteLink';
import TitleTextLink from './TitleTextLink';
import PingAvatar from './PingAvatar';
import profile from './img/profile.png';

function Skills() {
    return (
        <>
            <div class="visibile">
                <PingAvatar image={profile} ping_color="bg-monokai-purple" />
            </div>
            <div class="flex flex-row">
                <div class="overflow-auto overscroll-contain scrollbar-hide cursor-default w-full">
                    <div class="flex flex-col text-container text-white font-bold w-1/2 ml-auto">
                        <p>
                            These are the various&nbsp;
                            <span class="text-monokai-blue">
                                skills
                            </span> I've developed and tools I've worked within.
                        </p>
                        <p>
                            <span class="text-monokai-orange">Java</span> &&nbsp;
                            <span class="text-monokai-pink">Kotlin</span>
                            &nbsp;working within mobile apps and basic programs at&nbsp;
                            <OutOfSiteLink color="decoration-monokai-green" link="https://swansea.ac.uk" text="University" />.
                        </p>
                        <p>
                            <span class="text-monokai-purple">C++</span> &&nbsp;
                            <span class="text-monokai-green">SQL</span> whilst working at&nbsp;
                            <OutOfSiteLink color="decoration-monokai-blue" link="https://www.sophos.com/en-us" text="Sophos" /> during my year in industry.
                        </p>
                        <p>
                            Whilst creating a web application I developed skills in&nbsp;
                            <span class="text-monokai-pink">Laravel</span>,&nbsp;
                            <span class="text-monokai-purple">Docker</span> <span> and </span>
                            <span class="text-monokai-blue">TailwindCSS</span>.
                        </p>
                        <p>
                            <span class="text-monokai-blue">React</span>,&nbsp;
                            <span class="text-monokai-green">Electron</span>,&nbsp;
                            <span class="text-monokai-yellow">Python</span> &&nbsp;
                            <span class="text-monokai-orange">git</span> skills developed continuously across many projects in both&nbsp;
                            <span class="text-monokai-purple">professional</span><span> and </span>
                            <TitleTextLink color="decoration-monokai-pink" link="/portfolio" text="personal" /> environments.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;