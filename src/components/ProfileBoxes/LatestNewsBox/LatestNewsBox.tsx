import FourHeading from '../../Headings/FourHeading/FourHeading';
import FourSubHeading from '../../Headings/FourSubHeading/FourSubHeading';
import './LatestNewsBox.css';
import BoxPlainText from '../../Texts/BoxText';
import DateUtils from '../../../utils/DateUtils';

const LatestNewsBox = ({ title, date, children, icon }:
    { title: string, date: Date, children: string, icon?: string }) => {

    return (
        <div className="profile-latest-news-box">
            <div className="profile-latest-news-box-icon-container">
                <img src={icon} alt="latest-news-icon" className="profile-latest-news-box-icon"/>
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
        </div>
    );
};

export default LatestNewsBox;