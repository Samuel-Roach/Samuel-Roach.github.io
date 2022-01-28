import "./OutOfSiteLink.css";

function OutOfSiteLink (props) {
    return (
        <a href={props.link}>
            <span class={"underline " + props.color + " underline-offset-4 cursor-pointer"}>{ props.text }</span>
        </a>
    );
}

export default OutOfSiteLink;