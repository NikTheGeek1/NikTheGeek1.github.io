import './TagBubble.css';

const TagBubble = ({title, link}: {title:string, link?: string}) => {

    return (
        <div className="tag-bubble-container">
            <a className="tag-bubble" target="_blank" href={link}>{title}</a>
        </div>
    );
};

export default TagBubble;