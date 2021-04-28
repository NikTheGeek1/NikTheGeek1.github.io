import SVGIcon from '../SVGIcon/SVGIcon';
import './SectionTitle.css';

const SectionTitle = ({title, icon}: {title:string, icon?: string}) => {

    return (
        <div className="section-title-container">
            {icon && <SVGIcon icon={icon}/>}
            <span className="section-title">{title}</span>
        </div>
    );
};

export default SectionTitle;