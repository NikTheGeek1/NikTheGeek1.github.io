import './HighlightInline.css';

const HighlightInline = ({children}: {children: string}) => {

    return (
        <code className="highlight-inline">{children}</code>
    );
};

export default HighlightInline;