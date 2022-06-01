import './Portfolio.css';
import PingAvatar from './PingAvatar';
import OutOfSiteLink from './OutOfSiteLink';
import profile from './img/profile.png';
import chessbot from './img/chessbot.png';
import spectrumpy from './img/spectrum-py.png';
import commandshift from './img/commandshift.png';
import ergastpy from './img/ergast.png';

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
                            <div class="flex flex-row portfolio-item">
                                <img src={ chessbot } class="photo drop-shadow" alt="Screenshot of discord showing ChessBot in use."/>
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
                            <div class="flex flex-row-reverse portfolio-item">
                                <img src={ ergastpy } class="photo drop-shadow" alt="A Formula One car"/>
                                <div class="portfolio-item-text flex flex-col text-right">
                                <OutOfSiteLink color="decoration-monokai-blue" link="https://github.com/Samuel-Roach/ergast-py" text="Ergast-py"/>
                                    <p class="portfolio-item-description">
                                        Ergast-py is a comprehensive python wrapper for accessing
                                        the <span class="text-monokai-green">Ergast</span> Formula One API. It is available for download and
                                        use from it's <OutOfSiteLink color="decoration-monokai-orange" link="https://pypi.org/project/ergast-py/" text="PyPi"/> page.
                                    </p>
                                </div>
                            </div>
                        </p>
                        <p>
                            <div class="flex flex-row portfolio-item">
                                <img src={ spectrumpy } class="photo drop-shadow" alt="Part of the output of passing Never Gonna Give You Up into spectrum-py"/>
                                <div class="portfolio-item-text flex flex-col text-right">
                                <OutOfSiteLink color="decoration-monokai-yellow" link="https://github.com/Samuel-Roach/spectrum-py" text="spectrum-py"/>
                                    <p class="portfolio-item-description">
                                        spectrum-py is a tool written to generate&nbsp;
                                        <span class="text-monokai-blue">images</span> based on data from videos.
                                        Inspired by
                                        &nbsp;<OutOfSiteLink color="decoration-monokai-pink" link="https://www.reddit.com/r/DataIsBeautiful" text="/r/DataIsBeautiful"/>
                                        &nbsp;the aim is to allow users to create&nbsp;
                                        <span class="text-monokai-green">data-driven</span> images from videos.
                                    </p>
                                </div>
                            </div>
                        </p>
                        {/* <p>
                            <div class="flex flex-row portfolio-item">
                                <img src={ commandshift } class="photo drop-shadow" alt="The logo for CommandShift"/>
                                <div class="portfolio-item-text flex flex-col">
                                    <OutOfSiteLink color="decoration-monokai-purple" link="https://www.youtube.com/channel/UC_aVtqAvat6xdUpL2NhKfBA" text="CommandShift"/>
                                    <p class="portfolio-item-description">
                                        CommandShift is a <span class="text-monokai-pink">Youtube</span> channel I created aiming to teach the&nbsp;
                                        <span class="text-monokai-yellow">fundamental</span> basics of computer science in a&nbsp;
                                        <span class="text-monokai-orange">beginner</span> friendly manner.
                                    </p>
                                </div>
                            </div>
                        </p> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;