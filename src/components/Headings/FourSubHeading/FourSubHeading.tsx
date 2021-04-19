import './FourSubHeading.css';

const FourSubHeading = ({ content }: { content: string}) => {

    return (
        <span className="four-sub-heading">
            {content}
        </span>
    );
};

export default FourSubHeading;