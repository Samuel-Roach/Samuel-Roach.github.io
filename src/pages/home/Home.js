import './Home.css'
import profile from '../../img/new-profile.png';

import Page from '../Page';

function Home() {
    return (
        <Page>
            <div class="flex justify-center">
                <img class="rounded-full drop-shadow-lg w-48 h-48" src={profile}></img>
            </div>
            <div class="flex justify-center">
                <span class="text-4xl font-bold text-center text-white">
                    👋 &nbsp;Hi, I'm&nbsp;
                    <span class="before:block before:absolute before:-inset-1 before:bg-monokai-orange relative inline-block">
                        <span class="relative text-monokai-black">Samuel Roach</span>
                    </span>
                </span>
            </div>
            <div class="flex justify-center text-justify text-white font-bold text-lg">
                <div class="basis-5/12">
                    I am a <span class="text-monokai-pink">software engineer</span>, writing code professionally for <span class="text-monokai-blue">Sophos</span> since September 2022.
                    I am competent in many areas, including but not limited to <span class="text-monokai-purple">Python</span>, <span class="text-monokai-green">C++</span> and <span class="text-monokai-orange">SQL</span>.
                    <br />
                    I have also undertaken multiple personal projects. I am currently the lead for the open-source python package, <span class="text-monokai-yellow">ergast-py</span>. Concurrently, I am in the process
                    of writing <span class="text-monokai-blue">PerpleXML</span>, a compiler for writing Turing-complete code in XML.
                    <br />
                    I am always looking to expand my skillset, and am always open to <span class="text-monokai-purple">collaboration</span>. Feel free to <span class="text-monokai-orange">contact me</span>!
                </div>
            </div>
        </Page>
    );
}

export default Home;