import "./Experience.css";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import ExperienceSectionItem from "./ExperienceSectionItem/ExperienceSectionItem";
import educationIcon from "../../assets/svgs/education.svg";
import workIcon from "../../assets/svgs/work-gear.svg";
import DetailsItem from "./DetailsItem/DetailsItem";
import TagBubble from "../TagBubble/TagBubble";
import seminarIcon from "../../assets/svgs/seminars.svg";
import skillsIcon from "../../assets/svgs/skills.svg";
import React, { useEffect } from "react";
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
    <React.Fragment key={1}>

      <ExperienceSection icon={workIcon} title="Working Experience">
        <ExperienceSectionItem
          title="Lead developer"
          subtitle="Edinburgh"
          subsubtitle="Robotical"
          year="2022-present"
          children={[
            <React.Fragment key={1}>
              <DetailsItem>
                Leading the development team and ensuring that projects are completed on time, within budget, and to
                the required quality standards
              </DetailsItem>
              <DetailsItem>
                Extra responsibilities: <TagBubble title="DevOps" />
                <TagBubble title="CI/CD" />
                <TagBubble title="Project Management" />
              </DetailsItem>
            </React.Fragment>,
          ]}
        />
        <ExperienceSectionItem
          title="Fullstack developer"
          subtitle="Edinburgh"
          subsubtitle="Robotical"
          year="2021-2022"
          children={[
            <React.Fragment key={1}>
              <DetailsItem>
                Phone and web applications
              </DetailsItem>
              <DetailsItem>
                Technologies used daily: <TagBubble title="REST APIs" />
                <TagBubble title="Databases" />
                <TagBubble title="React" />
                <TagBubble title="Serverless functions" />
                <TagBubble title="React Native" />
                <TagBubble title="NextJS" />
                <TagBubble title="Typescript" />
              </DetailsItem>
            </React.Fragment>,
          ]}
        />
        <ExperienceSectionItem
          title="Developer Research Assistant"
          subtitle="Edinburgh"
          subsubtitle="The University of Edinburgh - Department of Economics"
          year="2020-2021"
          children={[
            <React.Fragment key={1}>
              <DetailsItem>
                Main duties: Build multiple webscrapping algorithms using
                Selenium and Python
              </DetailsItem>
              <DetailsItem>
                Scrapped more than 1.7 millions (~2.5GB) data instances of
                unemployment in Argentina
              </DetailsItem>
            </React.Fragment>,
          ]}
        />
        <ExperienceSectionItem
          title="Data analyst"
          subtitle="Edinburgh"
          subsubtitle="The Scottish Government - Justice Analytical Services Division"
          year="2019"
          children={[
            <React.Fragment key={1}>

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
            </React.Fragment>,
          ]}
        />
        <ExperienceSectionItem
          title="Data analyst Research Assistant"
          subtitle="Edinburgh"
          subsubtitle="The University of Edinburgh"
          year="2017-2018"
          children={[
            <React.Fragment key={1}>

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
            </React.Fragment>,
          ]}
        />
      </ExperienceSection>

      <ExperienceSection icon={educationIcon} title="Education">
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

      <ExperienceSection icon={seminarIcon} title="Seminars, Courses & Extra-curricular">
        <ExperienceSectionItem
          title="Dreams for Littles"
          subtitle="Freelance"
          subsubtitle="Tech stack: "
          year="2024"
        >
          <DetailsItem>
            <TagBubble title="React Native" />
            <TagBubble title="Firebase" />
            <TagBubble title="Firestore" />
            <TagBubble title="Data visualisation" />
            <TagBubble title="Data analysis" />
          </DetailsItem>
        </ExperienceSectionItem>
        <ExperienceSectionItem
          title="CodeClan"
          subtitle="Software Development"
          subsubtitle="Edinburgh"
          year="2020-2021"
        />
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
            <React.Fragment key={1}>

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
            </React.Fragment>,
          ]}
        />
        <ExperienceSectionItem
          title="Frameworks/Technologies"
          subtitle=""
          subsubtitle=""
          year=""
          children={[
            <React.Fragment key={1}>

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
            </React.Fragment>,
          ]}
        />
        <ExperienceSectionItem
          title="Languages"
          subtitle=""
          subsubtitle=""
          year=""
          children={[
            <React.Fragment key={1}>

              <DetailsItem>
                <TagBubble title="Greek" />
                <TagBubble title="English" />
              </DetailsItem>
            </React.Fragment>,
          ]}
        />
      </ExperienceSection>
    </React.Fragment>
  );
};

export default Experience;
