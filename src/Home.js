
import profile from './img/profile.png';
import TitleTextLink from './TitleTextLink';
import OutOfSiteLink from './OutOfSiteLink';
import "./Home.css";
import PingAvatar from './PingAvatar';

function Home() {
    return (
        <>
            <div class="visibile">
                <PingAvatar image={profile} ping_color="bg-monokai-purple" />
            </div>
            <div class="flex flex-row">
                <div class="overflow-auto overscroll-contain scrollbar-hide cursor-default w-screen">
                    <div class="flex flex-col text-container text-white font-bold w-1/2 ml-auto">
                        <p>
                            Hi there! I'm&nbsp;
                            <span class="text-monokai-blue">
                                Samuel Roach
                            </span>, a software engineer and <span class="text-monokai-yellow">developer</span>. I'm currently in my
                            third year at&nbsp;
                            <OutOfSiteLink color="decoration-monokai-green" link="https://swansea.ac.uk" text="Swansea University" />
                            &nbsp;studying Computer Science.
                        </p>
                        <p>
                            I have <span class="text-monokai-pink">4 years</span> experience developing in both&nbsp;
                            <TitleTextLink color="decoration-monokai-yellow" link="portfolio" text="personal" />&nbsp;
                            and <span class="text-monokai-orange">professional</span> environments, becoming adept in&nbsp;
                            <TitleTextLink color="decoration-monokai-blue" link="skills" text="many skills" />.
                        </p>
                        {/* <p>
                            As part of&nbsp;
                            <OutOfSiteLink color="decoration-monokai-pink" link="https://www.youtube.com/channel/UC_aVtqAvat6xdUpL2NhKfBA" text="CommandShift" />
                            &nbsp;I have begun releasing videos <span class="text-monokai-purple">teaching</span> basic
                            computer science <span class="text-monokai-green">concepts</span> to new beginners. 
                        </p> */}
                        <p>
                            I also try to&nbsp;
                            <TitleTextLink color="decoration-monokai-orange" link="blog" text="blog" />&nbsp;
                            as much of my <span class="text-monokai-blue">development process</span> as possible when
                            working on new <span class="text-monokai-yellow">projects</span>.
                        </p>
                        <p>
                            If you're <span class="text-monokai-green">interested</span> in working together, feel free to&nbsp;
                            <TitleTextLink color="decoration-monokai-purple" link="contact" text="contact me" />!
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;