
function Navbar() {
    return (
        <div class="w-full flex flex-row justify-center h-20">
            <div class="w-32 transition ease-in-out delay-50 hover:scale-110 hover:text-monokai-purple duration-200 flex flex-col text-center justify-center text-white font-bold cursor-pointer my-3 mx-12 w-auto">
                <a href="/">
                    // home
                </a>
            </div>
            <div class="w-32 transition ease-in-out delay-50 hover:scale-110 hover:text-monokai-blue duration-200 flex flex-col text-center justify-center text-white font-bold cursor-pointer my-3 mx-12 w-auto">
                <a href="portfolio">
                    // portfolio
                </a>
            </div>
            <div class="w-32 transition ease-in-out delay-50 hover:scale-110 hover:text-monokai-green duration-200 flex flex-col text-center justify-center text-white font-bold cursor-pointer my-3 mx-12 w-auto">
                <a href="contact">
                    // contact
                </a>
            </div>
        </div>
    )
}

export default Navbar;