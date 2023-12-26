import './Portfolio.css'

import Page from '../Page';

function Portfolio() {
    return (
        <Page>
            <div class="flex justify-center">
                <span class="text-4xl font-bold text-center text-white">
                    <span class="before:block before:absolute before:-inset-1 before:bg-monokai-blue relative inline-block">
                        <span class="relative text-monokai-black">Portfolio</span>
                    </span>
                </span>
            </div> 
            <div class="flex justify-center text-justify text-white font-bold text-lg">
                <div class="basis-5/12">
                <span class="font-bold text-center text-white">
                    <span class="before:block before:absolute before:-inset-1 before:bg-monokai-orange relative inline-block">
                        <span class="relative text-monokai-black">Ergast-Py</span>
                    </span>
                    &nbsp; is a pythonic this that of this that and the other.
                </span>
                </div>
            </div>
        </Page>
    )
}

export default Portfolio;