import { useState } from 'react';
import FolderStructureBuilder from '../../../../../utils/FolderStructureBuilder';
import HI from '../../../../HighlightInline/HighlightInline';
import Paragraph from '../../Paragraph/Paragraph';
import './ImportingPhotos.css';
import { FolderStructureType } from '../../../../../types/folder-structure-types';
import filesToDownload from '../../../../../imports/import-photo-gallery-blog-files';
import Highlight from 'react-highlight';

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
            <Highlight className="typescript">
                {`export type ImagesVersionsInterface = {
                    thumbnail:string[],
                    lowerQualityMin: string[],
                    lowerQualityMax: string[],
                    reducedMin: string[],
                    reducedMax: string[],
                    }`}
            </Highlight>
            <Paragraph>
                Then, in the <HI>import-timeline-photos.tsx</HI> file, we are going to import all 15 photos
                and export them as a <HI>ImagesVersionsInterface</HI> interface, like so:
            </Paragraph>
            <Highlight className="typescript">
                {`
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
            </Highlight>
        </div>
    );
};

export default ImportingPhotos;