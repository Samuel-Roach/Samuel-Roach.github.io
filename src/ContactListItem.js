import './ContactListItem.css';

function ContactListItem(props) {
    return (
        <div class="contact-list-item">
            { props.children }
            <a href={ props.link } class="flex"><span class={"contact-details my-auto underline underline-offset " + props.color }>{ props.text }</span></a>
        </div>
    );
}

export default ContactListItem;