import './PhotoGalleryBlog.css';
import BlogTitle from '../../BlogTitle/BlogTitle';
import BlogLayout from '../../BlogLayout/BlogLayout';
import Section from '../../../../blog-classes/Section';
import Introduction from './Introduction/Introduction';
import Setup from './Setup/Setup';
import Installation from './Installation/Installation';
import FolderStructure from './FolderStructure/FolderStructure';
import { useEffect } from 'react';
import { useStore } from '../../../../hooks-store/store';
import { storeVisitorLocation } from '../../../../utils/visitor-tracker';
import { LOCATIONS_ENUM } from '../../../../hooks-store/stores/visitor-map';

const PhotoGalleryBlog = () => {
    const visitorToken = useStore(false)[0].visitorToken;
    
        useEffect(() => {
            visitorToken && storeVisitorLocation(visitorToken, LOCATIONS_ENUM.PHOTO_GALLERY_BLOG_POST);
        }, []);

    const sections = new Section("Photo Gallery Component", <section key="firstSection"></section>, [
            new Section("Introduction", <Introduction key="intro"/>, []),
            new Section("Setting up the ground", <Setup key="setup"/>, [
                new Section("Installing React/Typescript", <Installation key="installation" />, []),
                new Section("Folder structure", <FolderStructure key="folderStructure" />, [])
            ]),
            new Section("Coming soon...", <div key="comingSoon"></div>, [])
        ]).build();

    return (
        <BlogLayout>
            <div>
                <BlogTitle title="How to build a basic photo gallery component in react"
                    author="Nikos Theodoropoulos"
                    date="2021"
                />
                <iframe title="gallery-iframe" className="photo-gallery-iframe" src="https://photo-gallery-react-component.web.app/" />
                {/* <iframe title="gallery-iframe" className="photo-gallery-iframe" src="http://localhost:3001/" /> */}
            </div>
            <div className="contents-table-container">
                <ul className="contents-table-list">
                    {sections.titleContents}
                </ul>
            </div>
            <div className="blog-body">
                {sections.contents}
            </div>
        </BlogLayout>
    );
};

export default PhotoGalleryBlog;