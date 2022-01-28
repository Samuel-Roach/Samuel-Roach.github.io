import './TitleTextLink.css'
import { Link } from "react-router-dom";

function TitleTextLink(props) {
    return (
        <Link to={props.link}>
            <span class={"underline " + props.color + " underline-offset-4 cursor-pointer"}>{ props.text }</span>
        </Link>
    );
}

export default TitleTextLink;