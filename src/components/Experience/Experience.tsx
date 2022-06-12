import "./Experience.css";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import ExperienceSectionItem from "./ExperienceSectionItem/ExperienceSectionItem";
import educationIcon from "../../assets/svgs/education.svg";
import workIcon from "../../assets/svgs/work-gear.svg";
import DetailsItem from "./DetailsItem/DetailsItem";
import TagBubble from "../TagBubble/TagBubble";
import seminarIcon from "../../assets/svgs/seminars.svg";
import skillsIcon from "../../assets/svgs/skills.svg";
import { useEffect } from "react";
import { useStore } from "../../hooks-store/store";
import { storeVisitorLocation } from "../../utils/visitor-tracker";
import { LOCATIONS_ENUM } from "../../hooks-store/stores/visitor-map";

const Experience = () => {
  const visitorToken = useStore(false)[0].visitorToken;

  useEffect(() => {
    visitorToken &&
      storeVisitorLocation(visitorToken, LOCATIONS_ENUM.EXPERIENCE);
  }, []);

  return (
    <>
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
          subsubtitle="School of Informatics, PPLS"
          year="2017-2021"
        />
        <ExperienceSectionItem
          title="The University of Edinburgh"
          subtitle="MSc Human Cognitive Neuropsychology"
          subsubtitle="School of Philosophy, Psychology and Language Sciences"
          year="2016-2017"
        />
        <ExperienceSectionItem
          title="Athens Metropolitan University"
          subtitle="BSc Psychology"
          subsubtitle="Department of psychology, in collaboration with University of East London"
          year="2013-2016"
        />
      </ExperienceSection>

      <ExperienceSection icon={workIcon} title="Working Experience">
        <ExperienceSectionItem
          title="Fullstack developer"
          subtitle="Edinburgh"
          subsubtitle="Robotical"
          year="2021-present"
          children={[
            <>
              <DetailsItem>
                Main duties include the development of phone and web
                applications using mainly react and react native with
                Typescript.
              </DetailsItem>
              <DetailsItem>
                Responsible for adopting and installing CI/CD techniques using
                github actions and Docker.
              </DetailsItem>
              <DetailsItem>
                The management framework we are using is Agile with Scrum. Daily
                stand-ups, 2 week-period sprints, and other agile events like
                sprint plannings and sprint retrospectives.
              </DetailsItem>
              <DetailsItem>
                Technologies used so far: <TagBubble title="Docker" />
                <TagBubble title="Firebase" />
                <TagBubble title="Sanity" />
                <TagBubble title="React" />
                <TagBubble title="React Native" />
                <TagBubble title="Typescript" />
                <TagBubble title="NextJS" />
                <TagBubble title="Gatsby" />
                <TagBubble title="DokuWiki" />
                <TagBubble title="GitHub Actions" />
                <TagBubble title="CI/CD tools" />
              </DetailsItem>
            </>,
          ]}
        />
        <ExperienceSectionItem
          title="Research assistant - Software engineer"
          subtitle="Edinburgh"
          subsubtitle="The University of Edinburgh - Department of Economics"
          year="2020-2021"
          children={[
            <>
              <DetailsItem>
                Main duties: Build multiple webscrapping algorithms using
                Selenium and Python
              </DetailsItem>
              <DetailsItem>
                Scrapped more than 1.7 millions (~2.5GB) data instances of
                unemployment in Argentina
              </DetailsItem>
              <DetailsItem>
                Github repository private: ask for permission
              </DetailsItem>
            </>,
          ]}
        />
        <ExperienceSectionItem
          title="Data analyst"
          subtitle="Edinburgh"
          subsubtitle="The Scottish Government - Justice Analytical Services Division"
          year="2019"
          children={[
            <>
              <DetailsItem>
                Main duties: Analysis of Scottish cybercrime data and
                identification of commonalities between offenders
              </DetailsItem>
              <DetailsItem>Inform and update relevant policies</DetailsItem>
              <DetailsItem>
                <TagBubble
                  title="Placement"
                  link="https://www.ed.ac.uk/ppls/news/phd-student-awarded-cybercrime-internship"
                />{" "}
              </DetailsItem>
            </>,
          ]}
        />
        <ExperienceSectionItem
          title="Teaching assistant - Statistics"
          subtitle="Edinburgh"
          subsubtitle="The University of Edinburgh - Univariate and Multivariate statistics using R"
          year="2018-2021"
        />
        <ExperienceSectionItem
          title="Teaching assistant - Programming"
          subtitle="Edinburgh"
          subsubtitle="The University of Edinburgh - Beginners and Intermediate Python programming"
          year="2018-2021"
        />
        <ExperienceSectionItem
          title="Personal tutor"
          subtitle="Edinburgh"
          subsubtitle="The University of Edinburgh - Writing center"
          year="2018-2020"
          children={[
            <DetailsItem>
              One-to-one sessions with undergaduate students having problems
              with stats/assignments
            </DetailsItem>,
          ]}
        />
        <ExperienceSectionItem
          title="Research assistant - data analyst"
          subtitle="Edinburgh"
          subsubtitle="The University of Edinburgh"
          year="2017-2018"
          children={[
            <>
              <DetailsItem>
                Main duties: Analysis and writing up the results of 4
                experiments on exploring which reference frames are being used
                in the automatic spatial coding of touch to fingers
              </DetailsItem>
              <DetailsItem>
                Two conferences:
                <ol style={{ marginLeft: "3rem" }}>
                  <li>
                    The multifaceted body: updates into Body Representation and
                    Embodiment, Edinburgh June 29
                  </li>
                  <li>
                    International Multisensory Research Forum (IMRF), Toronto,
                    June 14-17
                  </li>
                </ol>
              </DetailsItem>
              <DetailsItem>
                <TagBubble
                  title="Article"
                  link="https://doi.org/10.1016/j.actpsy.2019.102874"
                />
              </DetailsItem>
            </>,
          ]}
        />
        <ExperienceSectionItem
          title="Intern"
          subtitle="Greece"
          subsubtitle="Aktios Alzheimer Unit"
          year="4-6/2015"
        />
        <ExperienceSectionItem
          title="Intern"
          subtitle="Sismanoglio General Hospital, Greece"
          subsubtitle="Child and Adolescent Psychiatry"
          year="3-4/2015"
        />
      </ExperienceSection>

      <ExperienceSection icon={seminarIcon} title="Seminars & online courses">
        <ExperienceSectionItem
          title="Google Project Management"
          subtitle="Coursera"
          subsubtitle="Courses: "
          year="6 months in 2021"
        >
          <DetailsItem>
            <TagBubble title="Agile Project Management" />
            <TagBubble title="Foundations of Project Management" />
            <TagBubble title="Project Initiation: Starting a Successful Project" />
            <TagBubble title="Project Execution: Running the Project" />
            <TagBubble title="Capstone: Applying Project Management in the Real World" />
            <TagBubble title="Project Planning: Putting It All Together" />
          </DetailsItem>
        </ExperienceSectionItem>
        <ExperienceSectionItem
          title="Probabilistic Graphical Models specialisation"
          subtitle="Stanford Online"
          subsubtitle="Graduated with honours in 2 out of 3 courses"
          year="6 months in 2018"
        />
        <ExperienceSectionItem
          title="Neural Networks and Deep Learning specialisation"
          subtitle="Stanford Online"
          subsubtitle="So far 2/5 courses"
          year="4 months in 2019"
        />
        <ExperienceSectionItem
          title="Bayesian Stats Club"
          subtitle="The University of Edinburgh"
          subsubtitle="Optional reading group focusing on Kruschke's: Doing Bayesian Data Analysis "
          year="2017-2018"
        />
        <ExperienceSectionItem
          title="Research workshop in NLP & Machine Learning"
          subtitle="The University of Edinburgh"
          subsubtitle=""
          year="04/2017"
        />
      </ExperienceSection>

      <ExperienceSection icon={skillsIcon} title="Skills">
        <ExperienceSectionItem
          title="Programming and Markup Languages"
          subtitle=""
          subsubtitle=""
          year=""
          children={[
            <>
              <DetailsItem>
                Confident with:
                <TagBubble title="JavaScript/Typescript" />
                <TagBubble title="Java" />
                <TagBubble title="Python" />
                <TagBubble title="R" />
                <TagBubble title="MATLAB" />
                <TagBubble title="HTML/CSS/SASS" />
                <TagBubble title="Latex" />
                <TagBubble title="C++" />
              </DetailsItem>
            </>,
          ]}
        />
        <ExperienceSectionItem
          title="Frameworks/Technologies"
          subtitle=""
          subsubtitle=""
          year=""
          children={[
            <>
              <DetailsItem>
                Worked with:
                <TagBubble title="Node.js" />
                <TagBubble title="React" />
                <TagBubble title="Redux" />
                <TagBubble title="Redux-Thunk" />
                <TagBubble title="Reac Native" />
                <TagBubble title="Node.js" />
                <TagBubble title="Flask" />
                <TagBubble title="WebGL" />
                <TagBubble title="Socket.io" />
                <TagBubble title="STOMP" />
                <TagBubble title="Spring" />
                <TagBubble title="Hibernate" />
                <TagBubble title="GitHub" />
                <TagBubble title="Relational databases (PostgreSQL, SQLite...)" />
                <TagBubble title="Non-relational databases (Firebase, MongoDB)" />
                <TagBubble title="Visualisation (matplotlib, plotly...)" />
                <TagBubble title="Data handling/analysis (numpy, scipy, pandas, tensorflow...)" />
              </DetailsItem>
            </>,
          ]}
        />
        <ExperienceSectionItem
          title="Languages"
          subtitle=""
          subsubtitle=""
          year=""
          children={[
            <>
              <DetailsItem>
                <TagBubble title="Greek" />
                <TagBubble title="English" />
              </DetailsItem>
            </>,
          ]}
        />
      </ExperienceSection>
    </>
  );
};

export default Experience;
