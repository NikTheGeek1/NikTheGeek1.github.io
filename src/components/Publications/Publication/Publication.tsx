import FourHeading from '../../Headings/FourHeading/FourHeading';
import BoxText from '../../Texts/BoxText';
import './Publication.css';

const Publication = ({ title, authorString, year, journal, tags }:
    {
        title: string,
        authorString: string,
        year: string,
        journal: string,
        tags?: JSX.Element|JSX.Element[]
    }) => {

    return (
        <div className="publication-container">
            <BoxText extraClasses="publications-year big-font-size">{year}</BoxText>
            <FourHeading content={title} extraClasses="publications-title" />
            <FourHeading content={authorString} extraClasses="publications-authors" />
            <FourHeading content={journal} extraClasses="publications-journal" />
            <div className="publications-tags">
                {tags}
            </div>
        </div>
    );
};

export default Publication;