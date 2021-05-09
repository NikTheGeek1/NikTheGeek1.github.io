import ContactDetail from '../ContactDetail/ContactDetail';
import GenericBox from '../ProfileBoxes/GenericBox/GenericBox';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import mobilePhoneIcon from '../../assets/svgs/mobile-phone.svg';
import email1 from '../../assets/svgs/email-1.svg';

import './Contact.css';

const Contact = () => {

    return (
        <>
            <GenericBox title="Get in touch!" rowSpan={1} columnSpan={4} titleType="title">
            </GenericBox>
            <GenericBox title="Contact details" rowSpan={3} columnSpan={3} titleType="subtitle">
                <ContactDetail value="+44 7425 744062" icon={mobilePhoneIcon}/>
                <ContactDetail type="1" value="ntheodoropoulos@outlook.com" icon={email1} href="mailto:ntheodoropoulos@outlook.com"/>
                <ContactDetail type="2" value="nik.theodoropoulos@ed.ac.uk" icon={email1} href="mailto:nik.theodoropoulos@ed.ac.uk"/>
            </GenericBox>
            <GenericBox title="Social networks" rowSpan={1} columnSpan={1} titleType="subtitle">
                <SocialNetworks />
            </GenericBox>
        </>
    );
};

export default Contact;