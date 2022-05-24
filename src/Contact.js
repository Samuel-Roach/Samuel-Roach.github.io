import './Contact.css';
import './OutOfSiteLink';
import PingAvatar from './PingAvatar';
import profile from './img/profile.png';
import { RiMailFill } from 'react-icons/ri';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import ContactListItem from './ContactListItem';

function Contact() {
    return (
        <>
            <div class="visibile">
                <PingAvatar image={profile} ping_color="bg-monokai-purple" />
            </div>
            <div class="flex flex-row">
                <div class="overflow-auto overscroll-contain scrollbar-hide cursor-default w-screen">
                    <div class="flex flex-col text-container text-white font-bold w-1/2 ml-auto">
                        <p>
                            These are the best ways to&nbsp;
                            <span class="text-monokai-blue">
                                contact
                            </span> me.
                        </p>
                        <p>
                            <ContactListItem text="samuelroach.2000@gmail.com" color="decoration-monokai-pink" link="mailto:samuelroach.2000@gmail.com">
                                <RiMailFill />
                            </ContactListItem>
                            <ContactListItem text="Samuel Roach" color="decoration-monokai-purple" link="https://www.linkedin.com/in/samuel-roach-08710b183/">
                                <FaLinkedin />
                            </ContactListItem>
                            <ContactListItem text="@obelistics" color="decoration-monokai-blue" link="https://twitter.com/obelistics">
                                <FaTwitterSquare />
                            </ContactListItem>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
