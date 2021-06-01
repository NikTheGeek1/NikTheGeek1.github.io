import Paragraph from '../../Paragraph/Paragraph';
import './Installation.css';
import Highlight from 'react-highlight';
import "highlight.js/styles/dark.css";
const Installation = () => {

    return (
        <section className="section-container">
            <Paragraph>
                Assuming you have Node.js and React.js installed,
                we just need to navigate to the working directory of interest, and type:
            </Paragraph>
            <Highlight className="python">
                npx create-react-app <i>{'<NAME-OF-PROJECT>'}</i> --template typescript
            </Highlight>
            <Paragraph>
                replacing <i>{'<NAME-OF-PROJECT>'}</i> with whatever name you want to give to
                the project. That should already be enough to get us going with React and Typescript.
            </Paragraph>
        </section>
    );
};

export default Installation;