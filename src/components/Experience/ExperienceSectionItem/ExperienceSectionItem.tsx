import './ExperienceSectionItem.css';

const ExperienceSectionItem = ({year, title, subtitle, subsubtitle, children}: {
    year: string,
    title: string,
    subtitle: string,
    subsubtitle: string,
    children?: JSX.Element | JSX.Element[]
}) => {

    return (
        <div className="experience-section-item" >
            <div className="experience-section-item-year">{year}</div>
            <div className="experience-section-item-title">{title}</div>
            <div className="experience-section-item-subtitle">{subtitle}</div>
            <div className="experience-section-item-subsubtitle">{subsubtitle}</div>
            <ul className="experience-section-item-details">{children}</ul>
        </div>
    );
};

export default ExperienceSectionItem;