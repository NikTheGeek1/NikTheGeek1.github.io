import './ExperienceSection.css';
import SectionTitle from '../../SectionTitle/SectionTitle';

const ExperienceSection = ({ children, icon, title }:
    { 
        children?: JSX.Element | JSX.Element[], 
        icon?: string,
        title: string
    }) => {

    return (
        <div className="experience-section">
            <SectionTitle title={title} icon={icon}/>
            <div className="experience-section-items-container">
                {children}
            </div>
        </div>
    );
};

export default ExperienceSection;