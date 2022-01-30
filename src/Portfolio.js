import './Portfolio.css';
import PingAvatar from './PingAvatar';
import OutOfSiteLink from './OutOfSiteLink';
import TitleTextLink from './TitleTextLink';
import profile from './img/profile.png';
import chessbot from './img/chessbot.png';

function Portfolio() {
    return (
        <>
            <div class="visibile">
                <PingAvatar image={profile} ping_color="bg-monokai-purple" />
            </div>
            <div class="flex flex-row">
                <div class="overflow-auto overscroll-contain scrollbar-hide cursor-default w-screen">
                    <div class="flex flex-col text-container text-white font-bold w-1/2 ml-auto">
                        <p>
                            Here are some of the <span class="text-monokai-orange">projects</span> that I have 
                            created and worked on.
                        </p>
                        <p>
                            {/* I have <span class="text-monokai-pink">4 years</span> experience developing in both&nbsp;
                            <TitleTextLink color="decoration-monokai-yellow" link="portfolio" text="personal" />&nbsp;
                            and <span class="text-monokai-orange">professional</span> environments, becoming adept in&nbsp;
                            <TitleTextLink color="decoration-monokai-blue" link="skills" text="many skills" />. */}
                            <div class="flex flex-row portfolio-item">
                                <img src={ chessbot } class="photo drop-shadow"/>
                                <div class="portfolio-item-text flex flex-col">
                                    <OutOfSiteLink color="decoration-monokai-green" link="https://github.com/Samuel-Roach/ChessBot" text="ChessBot"/>
                                    <p class="portfolio-item-description">ChessBot is
                                    a <span class="text-monokai-purple">discord</span> bot written to allow players to
                                    challenge and play <span class="text-monokai-orange">chess</span> against each other.
                                    As a challenge it's written <span class="text-monokai-pink">without</span> the use of any chess libraries.</p>
                                </div>
                            </div>
                        </p>
                        <p>
                            As part of&nbsp;
                            <OutOfSiteLink color="decoration-monokai-pink" link="https://www.youtube.com/channel/UC_aVtqAvat6xdUpL2NhKfBA" text="CommandShift" />
                            &nbsp;I have begun releasing videos <span class="text-monokai-purple">teaching</span> basic
                            computer science <span class="text-monokai-green">concepts</span> to new beginners.
                        </p>
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

export default Portfolio;