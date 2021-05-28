import './Paragraph.css';

const Paragraph = ({children}: {children: string|React.ReactNode}) => {

    return (
        <p className="blog-post-paragraph">
            {children}
        </p>
    );
};

export default Paragraph;