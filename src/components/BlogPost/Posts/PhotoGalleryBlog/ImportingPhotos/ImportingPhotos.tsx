import { useState } from 'react';
import FolderStructureBuilder from '../../../../../utils/FolderStructureBuilder';
import HI from '../../../../HighlightInline/HighlightInline';
import Paragraph from '../../Paragraph/Paragraph';
import './ImportingPhotos.css';
import { FolderStructureType } from '../../../../../types/folder-structure-types';
import filesToDownload from '../../../../../imports/import-photo-gallery-blog-files';
import Code from '../../../../Code/Code';

const ImportingPhotos = () => {
    const [srcFolderType, setSrcFolderType] = useState<FolderStructureType>("oppened-folder");
    const [importsFolderType, setImportsFolderType] = useState<FolderStructureType>("oppened-folder");
    const [typesFolderType, setTypesFolderType] = useState<FolderStructureType>("oppened-folder");

    return (
        <div className="section-container">
            <Paragraph>
                We now need to import the images and pass them as down to the <HI>PhotosGallery</HI> component
                as a property. We have three images, each of which having five versions, resulting in a total of
                15 imports. To keep our components tidy, we are going to import the images in an independent file
                from which they will be exported cleanly. For that, let's create a file within <HI>imports</HI>;
                I will call this file <HI>import-timeline-photos.tsx</HI>. I am also going to create a types definition
                file which will define the photos object passed down as a property to <HI>PhotosGallery</HI>.
            </Paragraph>
            {
                new FolderStructureBuilder("src", srcFolderType, undefined, undefined, setSrcFolderType)
                    .addChild("imports", importsFolderType, setImportsFolderType)
                    .switchToChild()
                    .addChild("import-timeline-photos.tsx", ["this", "tsx"], undefined, filesToDownload.importTimelinePhotosDotTsx)
                    .switchToParent()
                    .addChild("types", typesFolderType, setTypesFolderType)
                    .switchToChild()
                    .addChild("images-versions-interface.tsx", ["this", "tsx"], undefined, filesToDownload.imageVersionsTypesDefinitionsDotTsx)
                    .switchToParent()
                    .build()
            }
            <Paragraph>
                We know that we need five versions of each image, and putting that information
                in the definitions file is straightforward:
            </Paragraph>
            <Code height="170px">
                {`//in images-versions-interface.tsx
export type ImagesVersionsInterface = {
    thumbnail:string[],
    lowerQualityMin: string[],
    lowerQualityMax: string[],
    reducedMin: string[],
    reducedMax: string[],
    }`}
            </Code>
            <Paragraph>
                Then, in the <HI>import-timeline-photos.tsx</HI> file, we are going to import all 15 photos
                and export them as a <HI>ImagesVersionsInterface</HI> interface, like so:
            </Paragraph>
            <Code height="700px">
                {`// in import-timeline-photos.tsx
...
//images imported above
import { ImagesVersionsInterface } from '../types/images-versions-interface';
type allPhotosStructure = {[key: string]: ImagesVersionsInterface}

const allPhotos: allPhotosStructure = {
    animalPhotos: {
        thumbnail: [
            catThumb,
            dogThumb,
            fishThumb,
        ],
        lowerQualityMin: [
            catlqMIN,
            doglqMIN,
            fishlqMIN,
        ],
        lowerQualityMax: [
            catlqMAX,
            doglqMAX,
            fishlqMAX,
        ],
        reducedMin: [
            catrMIN,
            dogrMIN,
            fishrMIN,
        ],
        reducedMax: [
            catrMAX,
            dogrMAX,
            fishrMAX,
        ]
    },

};

export default allPhotos;`}
            </Code>
            <Paragraph>
                Now that we have a way to cleanly import all images, let's go ahead and do it.
                In <HI>App.tsx</HI>, we import both the <HI>PhotosGallery</HI> component and the
                newly created file with all images in it <HI>import-timeline-photos.tsx</HI>, like so:
            </Paragraph>
            <Code height="60px">
                {`// in App.tsx
import PhotosGallery from './containers/PhotosGallery/PhotosGallery';
import photos from './imports/import-timeline-photos';`}
            </Code>
            <Paragraph>
                Then, in the return statement of the <HI>App</HI> component we add 
                the <HI>PhotosGallery</HI> component wrappend in a <HI>div</HI>, like so:
            </Paragraph>
            <Code height="80px">
                {`// in App.tsx
<div className="container">
    <PhotosGallery photos={photos.animalPhotos} />
</div>`}
            </Code>
            <Paragraph>
                Notice that we pass the imported photos <HI>photos.animalPhotos</HI> as 
                a property of the <HI>PhotosGallery</HI> component. 
            </Paragraph>
            <br/>
            <br/>
            <Paragraph>
                So now that we have all the images imported and ready to be used,
                let's start working on the <HI>PhotosGallery</HI> component.
            </Paragraph>
        </div>
    );
};

export default ImportingPhotos;