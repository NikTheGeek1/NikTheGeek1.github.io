import './TagBubble.css';

type TagBubbleProps = {
    title: string;
    link?: string;
    tone?: 'light' | 'dark';
}

const TagBubble = ({ title, link, tone = 'dark' }: TagBubbleProps) => {
    const classes = `tag-bubble-container tag-bubble-${tone}`;

    return (
        <div className={classes}>
            {link ? (
                <a
                    className="tag-bubble"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link}
                >
                    {title}
                </a>
            ) : (
                <span className="tag-bubble">
                    {title}
                </span>
            )}
        </div>
    );
};

export default TagBubble;
