import Timeline from '../Timeline/Timeline';
import { BrowserRouter as _, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import { pathsEnum } from '../../enums/paths';
import About from '../About/About';

import './ProfileBody.css';

const ProfileBody = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={pathsEnum.TIMELINE} />
            </Route>
            <Route path={pathsEnum.TIMELINE}>
                <section className="profile-timeline-container">
                    <Timeline />
                </section>
            </Route>
            <Route path={pathsEnum.ABOUT}>
                <section className="profile-about-container">
                    <About />
                </section>
            </Route>
            <Route path={pathsEnum.EXPERIENCE}>
                <section className="profile-experience-container">
                </section>
            </Route>
            <Route path={pathsEnum.PROJECTS}>
                <section className="profile-projects-container">
                </section>
            </Route>
            <Route path={pathsEnum.CONTACT}>
                <section className="profile-contact-container">
                </section>
            </Route>
        </Switch>
    );
};

export default ProfileBody;