import { useState } from 'react';
import { FolderStructureType } from 'src/types/folder-structure-types';
import FolderStructureBuilder from '../../../../../utils/FolderStructureBuilder';
import HI from '../../../../HighlightInline/HighlightInline';
import Paragraph from '../../Paragraph/Paragraph';
import './FolderStructure.css';

const FolderStructure = () => {
    const [srcFolderType, setSrcFolderType] = useState<FolderStructureType>("oppened-folder");

    return (
        <div className="section-container">
            <Paragraph>
                One last thing before the action starts is to deal with the folder structure of the application.
                First of all we need a <HI>components</HI> folder within
                the <HI>src</HI> folder. We will also need
                a <HI>utils</HI>, a <HI>types</HI>, and
                an <HI>images</HI> folders in <HI>src</HI>.
                The folder structure should look like this:
            </Paragraph>
            {
                new FolderStructureBuilder("src", srcFolderType, undefined, undefined, setSrcFolderType)
                    .addChild("components", "closed-folder")
                    .addChild("images", "closed-folder")
                    .addChild("types", "closed-folder")
                    .addChild("utils", "closed-folder")
                    .addChild("App.css", "css")
                    .addChild("App.tsx", "tsx")
                    .addChild("Index.css", "css")
                    .addChild("Index.tsx", "tsx")
                    .addChild("react-app-env.d.ts", "tsx")
                    .build()
            }
            <Paragraph>
                You can safely remove the files such as <HI>logo.png</HI>, &nbsp; 
                <HI>AppTest.tsx</HI> etc that come with react installation.
                In <HI>utils</HI> we will define some utility functions, while
                in <HI>types</HI> we will have some definitions files
                which will help us define some usefule types we will need. 
            </Paragraph>
        </div>
    );
};

export default FolderStructure;