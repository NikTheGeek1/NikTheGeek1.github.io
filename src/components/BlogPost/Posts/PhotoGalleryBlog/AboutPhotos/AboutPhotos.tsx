import Paragraph from '../../Paragraph/Paragraph';
import './AboutPhotos.css';
import catGif from '../../../../../assets/images/photo-cat-gif.mp4';
import HI from '../../../../HighlightInline/HighlightInline';
import TagBubble from '../../../../TagBubble/TagBubble';
import imageResolutionDecreaserFile from '../../../../../blog-files-to-download/photo-gallery-blog/image_resolution_decreaser.py.txt';

const AboutPhotos = () => {

    return (
        <div className="section-container">
            <Paragraph>
                The idea behind rendering an image is simple. We will first render a
                lower-quality version of the image until the normal-quality image is loaded.
                In that way, the user will expect that "something is about to happen 
                here", instead of just looking at an empty whole. 
                So the outcome we'd like to achieve is something like this:
            </Paragraph>
            <video loop autoPlay className="mp4-gif photo-gallery-blog-post-cat-gif">
                <source src={catGif} type="video/mp4" />
            </video>
            <br/>
            <Paragraph>
                Now, let's take a moment to think how many versions of an image we need. 
                An image is being displayed in 3 places. First, we have an outer thumbnail
                that the user can click and expand the image. We have the epxanded image. And
                finally, we have an inner thumbnail just below the expanded image, depicting
                which image is currently expanded. For optimal performances, we will use 
                two versions (lower/higher quality) of the outer thumbnail and the expanded image.
                That is, we need 5 versions of each image.
            </Paragraph>
            <br/><br/>
            <Paragraph>
                Let's also lay out some terminology to ease communication. From now on, we will call 
                the outer thumbnail as <HI>minimised photo</HI>, the expanded image as <HI>maximised photo</HI>,
                and the inner thumbnail as just <HI>thumbnail</HI>. There will also be
                a <HI>lower quality</HI> and a <HI>normal quality</HI> versions for the minimised and 
                maximised images. That is:
            </Paragraph>
            <br/><br/>
            <p className="photo-gallery-blog-post-photo-version-table">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Lower Quality &emsp;Higher Quality
                <br/>
                minimised &emsp;&emsp;&emsp;&emsp;✅ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;✅<br/>
                maximised &emsp;&emsp;&emsp;&emsp;✅ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;✅<br/>
                thumbnail &emsp;&emsp;&emsp;&emsp;❌ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;✅<br/>
            </p>
            <Paragraph>
                To get the different versions of an image I am using a python program I wrote, 
                using the <HI>PIL</HI> library. I am not going to explain how it works since that's not the 
                purpose of the current tutorial, but you can download the file&nbsp; 
                <a className="downloable-link" href={imageResolutionDecreaserFile} download="image_resolution_decreaser.py">here</a>.
                There are also various free online tools which can use to decrease the resolution of an image.
            </Paragraph>
        </div>
    );
};

export default AboutPhotos;