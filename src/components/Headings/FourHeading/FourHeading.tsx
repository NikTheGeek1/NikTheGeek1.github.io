import './FourHeading.css';

const FourHeading = ({ content }: { content: string}) => {

    return (
        <span className="four-heading">
            {content}
        </span>
    );
};

export default FourHeading;