import { initStore } from '../store';
import { State } from '../store';

export const LOCATIONS_ENUM = {
    TIMELINE: "TIMELINE",
    PUBLICATIONS: "PUBLICATIONS",
    EXPERIENCE: "EXPERIENCE",
    PROJECTS: "PROJECTS",
    CONTACTS: "CONTACTS"
};


export const STORE_VISITOR_TOKEN = "STORE_VISITOR_TOKEN";

const configureStore = () => {
    const actions = {
        [STORE_VISITOR_TOKEN]: (curState: State, visitorToken: string) => {
            return { visitorToken };
        }
    }
    initStore(actions, { visitorToken: '' });
}


export default configureStore;