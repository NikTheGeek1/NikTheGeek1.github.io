import './PhotoGalleryBlog.css';
import BlogTitle from '../../BlogTitle/BlogTitle';
import BlogLayout from '../../BlogLayout/BlogLayout';
import PhotosGallery from '../../../PhotosGallery/PhotosGallery';
import photos from '../../../../imports/import-project-photos';

const PhotoGalleryBlog = () => {

    return (
        <BlogLayout>
            <div>
                <BlogTitle title="How to build a basic photo gallery component in react"
                    author="Nikos Theodoropoulos"
                    date="20/05/2021"
                />
                {/* <iframe src="https://photo-gallery-react-component.web.app/" /> */}
                {/* <iframe className="photo-gallery-iframe" src="http://localhost:3001/" /> */}
            </div>
        </BlogLayout>
    );
};

export default PhotoGalleryBlog;