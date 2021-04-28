import './Experience.css';
import ExperienceSection from './ExperienceSection/ExperienceSection';
import ExperienceSectionItem from './ExperienceSectionItem/ExperienceSectionItem';
import educationIcon from '../../assets/svgs/education.svg';

const Experience = () => {

    return (
        <ExperienceSection icon={educationIcon} title="Education">
            <ExperienceSectionItem 
                title="CodeClan"
                subtitle="Software Development"
                subsubtitle="Edinburgh"
                year="2020-2021"
            />
            <ExperienceSectionItem 
                title="The University of Edinburgh"
                subtitle="PhD in Cognitive Neuroscience"
                subsubtitle="School of Philosophy, Psychology and Language Sciences"
                year="2017-2021"
            />
        </ExperienceSection>
    );
};

export default Experience;