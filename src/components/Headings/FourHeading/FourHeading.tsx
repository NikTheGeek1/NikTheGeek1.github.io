import './FourHeading.css';

const FourHeading = ({ content, extraClasses }: { content: string, extraClasses?:string}) => {

    return (
        <span className={"four-heading " + extraClasses}>
            {content}
        </span>
    );
};

export default FourHeading;