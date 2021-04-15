import { initStore } from '../store';
import { State } from '../store';

export const PAGES_ENUM = {
    TIMELINE: "TIMELINE",
    ABOUT: "ABOUT",
    EXPERIENCE: "EXPERIENCE",
    PROJECTS: "PROJECTS",
    CONTACTS: "CONTACTS"
};

export const STORE_CURRENT_PAGE = "STORE_CURRENT_PAGE";

const configureStore = () => {
    const actions = {
        [STORE_CURRENT_PAGE]: (curState: State, currentPage: string) => {
            return { currentPage };
        }
    }
    initStore(actions, { currentPage: PAGES_ENUM.TIMELINE });
}


export default configureStore;