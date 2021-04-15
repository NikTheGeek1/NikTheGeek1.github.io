import './TertiaryHeading.css';

const TertiaryHeading = ({ content }: { content: string }) => {

    return (
        <span className="tertiary-heading">
            {content}
        </span>
    );
};

export default TertiaryHeading;