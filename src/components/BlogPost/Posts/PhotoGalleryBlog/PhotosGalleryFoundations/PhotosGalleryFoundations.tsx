import Highlight from 'react-highlight';
import Code from '../../../../Code/Code';
import HI from '../../../../HighlightInline/HighlightInline';
import Paragraph from '../../Paragraph/Paragraph';
import './PhotosGalleryFoundations.css';

const PhotosGalleryFoundations = () => {
    return (
        <div className="section-container">
            <Paragraph>
                As we discussed above, this component will act as the coordinator
                between the lower-level components of our the photo gallery.
                In other words, this component will be the parent of 
                the <HI>PhotosMinimisedGallery</HI> and <HI>
                PhotosMaximisedGallery</HI> components, and it will also
                know which photo is being currently rendered and pass that information around.
                Therefore, in this component we will need to implement four main things:<br/>
                1) receive the photos sent from above;<br/>
                2) state management which will hold the id of the rendered photo, if any;<br/>
                3) JSX for the minimised and maximised galleries;<br/>
                4) a toggler which will switch between minimised and maximised galleries;<br/>
            </Paragraph>
            <br/>
            <br/>
            <Paragraph>
                We can receive the photos as a property by simply defining the component function as:
            </Paragraph>
            <Code height="100px">
                {`//in PhotosGallery.tsx
...
const PhotosGallery = ({ photos }: {
    photos: ImagesVersionsInterface,
}) => {...`}
            </Code>
            <Paragraph>
                Where we are using <a className="downloable-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring" target="_blank">object destructuring</a> to
                get <HI>photos</HI> from the <HI>properties</HI> object inherent in every React component.
                We are also letting javascript know that <HI>photos</HI> should be of type <HI>ImagesVersionsInterface</HI> (which we defined previously).
            </Paragraph>
            <br/>
            <br/>
            <Paragraph>
                Then, we use the <HI>useState</HI> hook to store rendered photo's id:
            </Paragraph>
            <Code height="80px">
                {`//in PhotosGallery.tsx
...
const [selectedPhoto, setSelectedPhoto] = useState<false | number>(false);
...`}
            </Code>
            <Paragraph>
                At any point, this state should either be <HI>false</HI> or of type <HI>number</HI>: the id
                of the expanded photo.
            </Paragraph>
        </div>

    );
};

export default PhotosGalleryFoundations;