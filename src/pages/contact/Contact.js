import './Contact.css'

import Page from '../Page';

function Contact() {
    return (
        <Page>
            <div class="flex justify-center">
                <span class="text-4xl font-bold text-center text-white">
                    <span class="before:block before:absolute before:-inset-1 before:bg-monokai-green relative inline-block">
                        <span class="relative text-monokai-black">Contact</span>
                    </span>
                </span>
            </div>
        </Page>
    )
}

export default Contact;