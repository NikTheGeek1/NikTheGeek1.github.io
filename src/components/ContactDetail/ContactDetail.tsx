import './ContactDetail.css';
import SVGIcon from '../SVGIcon/SVGIcon';

const ContactDetail = ({ type, value, icon, href }: {
    type?: string,
    value: string,
    icon?: string,
    href?: string
}) => {

    return (
        <div className="contact-detail-container">
            {
                href ?
                    <a href={href} target="_blank" className="contact-detail-link">
                        {icon && <SVGIcon icon={icon} />}
                        {type && <span className="contact-detail-type">{type}: </span>}<span className="contact-detail-value">{value}</span>
                    </a>
                    :
                    <>
                        {icon && <SVGIcon icon={icon} />}
                        {type && <span className="contact-detail-type">{type}: </span>}<span className="contact-detail-value">{value}</span>
                    </>
            }
        </div>
    );
};

export default ContactDetail;