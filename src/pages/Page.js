import './Page.css'
import Navbar from '../components/navbar/Navbar';

function Page({ children }) {
    return (
        <div class="columns-1 w-full content-center space-y-8">
            <Navbar />
            { children }
        </div>
    );
}

export default Page;