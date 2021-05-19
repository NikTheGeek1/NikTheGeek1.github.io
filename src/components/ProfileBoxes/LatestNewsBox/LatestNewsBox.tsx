import FourHeading from '../../Headings/FourHeading/FourHeading';
import FourSubHeading from '../../Headings/FourSubHeading/FourSubHeading';
import './LatestNewsBox.css';
import BoxPlainText from '../../Texts/BoxText';
import DateUtils from '../../../utils/DateUtils';
import PhotosGallery from '../../../components/PhotosGallery/PhotosGallery';
import { ImagesVersionsInterface } from '../../../types/images-versions-interface';
const LatestNewsBox = ({ title, date, children, icon, photos }:
    {
        title: string,
        date: Date,
        children: string,
        icon?: string,
        photos?: ImagesVersionsInterface,
        reducedPhotos?: string[]
        thumbnailPhotos?: string[]
    }) => {
    console.log(photos, 'LatestNewsBox.tsx', 'line: ', '17');

    return (
        <div className={`profile-latest-news-box${photos ? "-with-photos" : ""}`}>
            <div className="profile-latest-news-box-icon-container">
                <img src={icon} alt="latest-news-icon" className="profile-latest-news-box-icon" />
            </div>
            <div className="profile-latest-news-box-title-container">
                <FourHeading content={title} />
            </div>
            <div className="profile-latest-news-box-date-container">
                <FourSubHeading content={DateUtils.dateToString(date)} />
            </div>
            <div className="profile-latest-news-box-description-container">
                <BoxPlainText>
                    {children}
                </BoxPlainText>
            </div>
            <div className="profile-latest-news-box-photos-container">
                {photos && <PhotosGallery photos={photos} />}
            </div>
        </div>
    );
};

export default LatestNewsBox;