import './PrimaryHeading.css';

const PrimaryHeading = ({ content }: { content: string}) => {

    return (
        <span className="primary-heading">
            {content}
        </span>
    );
};

export default PrimaryHeading;