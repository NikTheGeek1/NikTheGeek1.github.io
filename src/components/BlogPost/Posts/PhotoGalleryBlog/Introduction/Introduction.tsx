import TagBubble from '../../../../TagBubble/TagBubble';
import './Introduction.css';

const Introduction = () => {

    return (
        <div className="photo-gallery-introduction-container section-container">
            <p>
                Starting from scratch, in this blog-post we will build a <i>Photo Gallery</i>
                component using just ReactJS (without any 3rd-party library) and TypeScript.
                You can find the full code on&nbsp;
            </p>
            <TagBubble title="GitHub" link="https://github.com/NikTheGeek1/photo-gallery-react-component" />
            <p>
                and you can also play around with it on this&nbsp;
            </p>
            <TagBubble title="demo" link="https://photo-gallery-react-component.web.app/" />
            
        </div>
    );
};

export default Introduction;