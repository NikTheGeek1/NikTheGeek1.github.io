import { useState } from 'react';
import { FolderStructureType } from '../../../../../types/folder-structure-types';
import FolderStructureBuilder from '../../../../../utils/FolderStructureBuilder';
import HI from '../../../../HighlightInline/HighlightInline';
import Paragraph from '../../Paragraph/Paragraph';
import './FolderStructure.css';
import filesToDownload from '../../../../../imports/import-photo-gallery-blog-files';

const FolderStructure = () => {
    const [srcFolderType, setSrcFolderType] = useState<FolderStructureType>("oppened-folder");
    return (
        <div className="section-container">
            <Paragraph>
                One last thing before the action starts is to deal with the folder structure of the application.
                First of all we need a <HI>containers</HI> and a <HI>components</HI> folders within
                the <HI>src</HI> folder. We will also need an <HI>imports</HI>,
                a <HI>utils</HI>, a <HI>types</HI>, and
                an <HI>images</HI> folders in <HI>src</HI>. 
                We will use <HI>imports</HI> to cleanly import files,
                in <HI>utils</HI> we will define some utility functions, while
                in <HI>types</HI> we will have some definitions files
                which will help us define some usefule types we will need.
                The folder structure should look like this:
            </Paragraph>
            {
                new FolderStructureBuilder("src", srcFolderType, undefined, undefined, setSrcFolderType)
                    .addChild("components", "closed-folder")
                    .addChild("containers", "closed-folder")
                    .addChild("images", "closed-folder")
                    .addChild("imports", "closed-folder")
                    .addChild("types", "closed-folder")
                    .addChild("utils", "closed-folder")
                    .addChild("App.css", "css", undefined, filesToDownload.appDotCss)
                    .addChild("App.tsx", "tsx", undefined, filesToDownload.appDotTsx)
                    .addChild("Index.css", "css", undefined, filesToDownload.indexDotCss)
                    .addChild("Index.tsx", "tsx", undefined, filesToDownload.indexDotTsx)
                    .addChild("react-app-env.d.ts", "tsx", undefined, filesToDownload.reactAppEnvDotTsx)
                    .build()
            }
            <Paragraph>
                You can safely remove the files such as <HI>logo.png</HI>, &nbsp; 
                <HI>AppTest.tsx</HI> etc that come with react installation. 
            </Paragraph>
        </div>
    );
};

export default FolderStructure;