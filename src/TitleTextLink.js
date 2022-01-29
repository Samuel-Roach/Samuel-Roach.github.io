import './TitleTextLink.css'
import { Link } from "react-router-dom";

function TitleTextLink(props) {
    return (
        <Link to={props.link}>
            <span class={"underline " + props.color + " cursor-pointer underline-offset"}>{ props.text }</span>
        </Link>
    );
}

export default TitleTextLink;