import TagBubble from '../../../../TagBubble/TagBubble';
import Paragraph from '../../Paragraph/Paragraph';
import './Introduction.css';

const Introduction = () => {

    return (
        <div className="photo-gallery-introduction-container section-container">
            <Paragraph>
                Starting from scratch, in this blog-post we will build a <i>Photo 
                Gallery</i> component using just ReactJS (without any 3rd-party library) 
                and TypeScript. At this point I should mention that in this tutorial
                we won't cover every single line of code, since the project is quite big 
                and doing so will result in a huge and perhaps boring tutorial. 
                I will try to cover the most important bits though, while 
                you can find the full code on&nbsp;
            </Paragraph>
            <TagBubble title="GitHub" link="https://github.com/NikTheGeek1/photo-gallery-react-component" />
            <Paragraph>
                and you can also play around with it on this&nbsp;
            </Paragraph>
            <TagBubble title="demo" link="https://photo-gallery-react-component.web.app/" />
            
        </div>
    );
};

export default Introduction;