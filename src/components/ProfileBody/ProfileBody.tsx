import Timeline from '../Timeline/Timeline';
import { BrowserRouter as _, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import { pathsEnum } from '../../enums/paths';
import Publications from '../Publications/Publications';
import Experience from '../Experience/Experience';
import ExperienceSection from '../Experience/ExperienceSection/ExperienceSection';
import Projects from '../Projects/Projects';

import './ProfileBody.css';

const ProfileBody = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={pathsEnum.TIMELINE} />
            </Route>
            <Route path={pathsEnum.TIMELINE}>
                <section className="profile-timeline-container" key="timeline">
                    <Timeline />
                </section>
            </Route>
            <Route path={pathsEnum.PUBLICATIONS}>
                <section className="profile-publications-container" key="publications">
                    <Publications />
                </section>
            </Route>
            <Route path={pathsEnum.EXPERIENCE}>
                <section className="profile-experience-container" key="experience">
                    <Experience />
                </section>
            </Route>
            <Route path={pathsEnum.PROJECTS}>
                <section className="profile-projects-container">
                    <Projects />
                </section>
            </Route>
            <Route path={pathsEnum.CONTACT}>
                <section className="profile-contact-container">
                    <ExperienceSection
                        title="Under Construction"
                    />
                </section>
            </Route>
        </Switch>
    );
};

export default ProfileBody;