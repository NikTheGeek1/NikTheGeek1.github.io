import './SVGIcon.css';

const SVGIcon = ({ onClick, extraClasses, icon }:
    {
        onClick?: () => void,
        extraClasses?: string,
        icon: string
    }) => {
        
    return (
        <img
            onClick={onClick}
            className={"svg-icon " + extraClasses}
            src={icon}
            alt="icon"
            style={{cursor: onClick ? "pointer" : "auto"}}
        />
    );
};

export default SVGIcon;