import './SecondaryHeading.css';

const SecondaryHeading = ({ content }: { content: string}) => {

    return (
        <span className="secondary-heading">
            {content}
        </span>
    );
};

export default SecondaryHeading;