import Paragraph from '../../Paragraph/Paragraph';
import './AboutPhotos.css';
import catGif from '../../../../../assets/images/photo-cat-gif.mp4';
import HI from '../../../../HighlightInline/HighlightInline';
import imageResolutionDecreaserFile from '../../../../../blog-files-to-download/photo-gallery-blog/image_resolution_decreaser.py.txt';
import FolderStructureBuilder from '../../../../../utils/FolderStructureBuilder';
import { useState } from 'react';
import { FolderStructureType } from '../../../../../types/folder-structure-types';
import filesToDownload from '../../../../../imports/import-photo-gallery-blog-files';

const AboutPhotos = () => {
    const [srcFolderType, setSrcFolderType] = useState<FolderStructureType>("oppened-folder");
    const [containersFolderType, setContainersFolderType] = useState<FolderStructureType>("closed-folder");
    const [photosGalleryFolderType, setPhotosGalleryFolderType] = useState<FolderStructureType>("closed-folder");
    const [imagesFolderType, setImagesFolderType] = useState<FolderStructureType>(["this", "oppened-folder"]);

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
            <br />
            <Paragraph>
                Now, let's take a moment to think how many versions of an image we need.
                An image is being displayed in 3 places. First, we have an outer thumbnail
                that the user can click and expand the image. We have the epxanded image. And
                finally, we have an inner thumbnail just below the expanded image, depicting
                which image is currently expanded. For optimal performances, we will use
                two versions (lower/normal quality) of the outer thumbnail and the expanded image.
                That is, we need 5 versions of each image.
            </Paragraph>
            <br /><br />
            <Paragraph>
                Let's also lay out some terminology to ease communication. From now on, we will call
                the outer thumbnail as <HI>minimised photo</HI>, the expanded image as <HI>maximised photo</HI>,
                and the inner thumbnail as just <HI>thumbnail</HI>. There will also be
                a <HI>lower quality</HI> and a <HI>normal quality</HI> versions for the minimised and
                maximised images. Visually:
            </Paragraph>
            <br /><br />
            <p className="photo-gallery-blog-post-photo-version-table">
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Lower Quality &emsp;Normal Quality
                <br />
                minimised &emsp;&emsp;&emsp;&emsp;✅ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;✅<br />
                maximised &emsp;&emsp;&emsp;&emsp;✅ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;✅<br />
                thumbnail &emsp;&emsp;&emsp;&emsp;❌ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;✅<br />
            </p>
            <Paragraph>
                To get the different versions of an image I am using a python program I wrote,
                using the <HI>PIL</HI> library. I am not going to explain how it works since that's not the
                purpose of the current tutorial, but you can download the file&nbsp;
                <a className="downloable-link" href={imageResolutionDecreaserFile} download="image_resolution_decreaser.py">here</a>.
                There are also various free online tools which can use to decrease the resolution of an image.
            </Paragraph>
            <br />
            <br />
            <Paragraph>
                I am going to store the images in a folder called <HI>images</HI> in <HI>src</HI>, like so:
            </Paragraph>
            {
                new FolderStructureBuilder("src", srcFolderType, undefined, undefined, setSrcFolderType)
                    .addChild("components", "closed-folder")
                    .addChild("containers", containersFolderType, setContainersFolderType)
                    .switchToChild()
                        .addChild("PhotosGallery", photosGalleryFolderType, setPhotosGalleryFolderType)
                        .switchToChild()
                            .addChild("PhotosGallery.css", "css", undefined, filesToDownload.photosGalleryDotCss)
                            .addChild("PhotosGallery.tsx", "tsx", undefined, filesToDownload.photosGalleryDotTsx)
                            .switchToParent()
                        .switchToParent()
                    .addChild("images", imagesFolderType, setImagesFolderType)
                    .switchToChild()
                        .addChild("cat-lqMAX.jpg", "jpg", undefined, filesToDownload.catLqMax)
                        .addChild("cat-lqMIN.jpg", "jpg", undefined, filesToDownload.catLqMin)
                        .addChild("cat-rMAX.jpg", "jpg", undefined, filesToDownload.catRMax)
                        .addChild("cat-rMIN.jpg", "jpg", undefined, filesToDownload.catRMin)
                        .addChild("cat-thumbnail.jpg", "jpg", undefined, filesToDownload.catThumbnail)

                        .addChild("dog-lqMAX.jpg", "jpg", undefined, filesToDownload.dogLqMax)
                        .addChild("dog-lqMIN.jpg", "jpg", undefined, filesToDownload.dogLqMin)
                        .addChild("dog-rMAX.jpg", "jpg", undefined, filesToDownload.dogRMax)
                        .addChild("dog-rMIN.jpg", "jpg", undefined, filesToDownload.dogRMin)
                        .addChild("dog-thumbnail.jpg", "jpg", undefined, filesToDownload.dogThumbnail)

                        .addChild("fish-lqMAX.jpg", "jpg", undefined, filesToDownload.fishLqMax)
                        .addChild("fish-lqMIN.jpg", "jpg", undefined, filesToDownload.fishLqMin)
                        .addChild("fish-rMAX.jpg", "jpg", undefined, filesToDownload.fishRMax)
                        .addChild("fish-rMIN.jpg", "jpg", undefined, filesToDownload.fishRMin)
                        .addChild("fish-thumbnail.jpg", "jpg", undefined, filesToDownload.fishThumbnail)
                        .switchToParent()
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
        </div>
    );
};

export default AboutPhotos;