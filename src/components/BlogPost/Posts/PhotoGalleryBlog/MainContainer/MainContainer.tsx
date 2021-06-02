import { useState } from 'react';
import FolderStructureBuilder from '../../../../../utils/FolderStructureBuilder';
import HI from '../../../../HighlightInline/HighlightInline';
import Paragraph from '../../Paragraph/Paragraph';
import './MainContainer.css';
import { FolderStructureType } from '../../../../../types/folder-structure-types';
import filesToDownload from '../../../../../imports/import-photo-gallery-blog-files';

const MainContainer = () => {
    const [containersFolderType, setContainersFolderType] = useState<FolderStructureType>("oppened-folder");
    const [photosGalleryFolderType, setPhotosGalleryFolderType] = useState<FolderStructureType>("oppened-folder");

    return (
        <div className="section-container">
            <Paragraph>
                The first component we will be working with is the <HI>PhotosGallery</HI> component.
                Since this component will act as the orchestrator between the lower level components,
                we will store it in the <HI>containers</HI> folder. So let's do that, let's create
                a <HI>PhotosGallery</HI> folder within <HI>containers</HI> and in it create two
                more files: <HI>PhotosGallery.tsx</HI> and <HI>PhotosGallery.css</HI>. 
                The <HI>containers</HI> folder should now be:
            </Paragraph>
            {
                new FolderStructureBuilder("containers", containersFolderType, undefined, undefined, setContainersFolderType)
                .addChild("PhotosGallery", photosGalleryFolderType, setPhotosGalleryFolderType)
                .switchToChild()
                    .addChild("PhotosGallery.css", "css", undefined, filesToDownload.photosGalleryDotCss)
                    .addChild("PhotosGallery.tsx", "tsx", undefined, filesToDownload.photosGalleryDotTsx)
                    .switchToParent()
                .build()
            }
        </div>
    );
};

export default MainContainer;