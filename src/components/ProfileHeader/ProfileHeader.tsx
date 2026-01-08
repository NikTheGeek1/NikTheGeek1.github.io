import './ProfileHeader.css';
import profileImg from '../../assets/images/profile-rMAX.jpg';
import { useHistory, useLocation } from 'react-router-dom';
import { pathsEnum } from '../../enums/paths';
import { useEffect, useState } from 'react';
import { useStore } from '../../hooks-store/store';

type Tab = "Timeline" | "Publications" | "Experience" | "Projects" | "Contact" | "More";

const ProfileHeader = () => {
    const [currentTab, setCurrentTab] = useState<Tab | undefined>(undefined);
    const history = useHistory();
    const location = useLocation();
    const [, setRefreshTab] = useState('');
    const scrDims = useStore()[0].scrDims;
    const [showMoreBox, setShowMoreBox] = useState(false);
    const validTabs: Tab[] = ["Timeline", "Publications", "Experience", "Projects", "Contact"];
    const pathToTab: Record<string, Tab> = {
        [pathsEnum.TIMELINE]: "Timeline",
        [pathsEnum.PUBLICATIONS]: "Publications",
        [pathsEnum.EXPERIENCE]: "Experience",
        [pathsEnum.PROJECTS]: "Projects",
        [pathsEnum.CONTACT]: "Contact",
    };

    useEffect(() => {
        // get path parameter from the URL
        const params = new URLSearchParams(location.search);
        const path = params.get("path");
        const tabFromParam = path && validTabs.includes(path as Tab) ? (path as Tab) : undefined;
        const tabFromPath = pathToTab[location.pathname];
        if (tabFromParam) {
            setCurrentTab(tabFromParam);
            setRefreshTab(tabFromParam);
            return;
        }
        if (tabFromPath) {
            setCurrentTab(tabFromPath);
            setRefreshTab(tabFromPath);
            return;
        }
        itemClickHandler("Timeline");
    }, []);

    useEffect(() => {
        window.addEventListener("click", closeMoreBoxHandler);
        return () => window.removeEventListener("click", closeMoreBoxHandler);
    }, [showMoreBox]);

    const itemClickHandler = (item: string) => {
        if (item === "More") {
            setShowMoreBox(oldState => !oldState);
        } else {
            const path = pathsEnum[item.toUpperCase()];
            const params = new URLSearchParams(location.search);
            params.set("path", item);
            history.push(`${path}?${params.toString()}`);
            setRefreshTab(item);
            setCurrentTab(item as Tab);
        }
    };

    const closeMoreBoxHandler = () => {
        if (showMoreBox)
            setShowMoreBox(false);
    };

    let headerItems: Tab[] = ["Timeline", "Publications", "Experience", "Projects", "Contact"];
    let moreItems: Tab[] = [];
    if (scrDims && scrDims.width < 500) {
        headerItems = ["Timeline", "Publications", "Experience", "Projects", "More"];
        moreItems = ["Contact"];
    }
    if (scrDims && scrDims.width < 450) {
        headerItems = ["Timeline", "Publications", "Experience", "More"];
        moreItems = ["Projects", "Contact"];
    }
    if (scrDims && scrDims.width < 360) {
        headerItems = ["Timeline", "Publications", "More"];
        moreItems = ["Experience", "Projects", "Contact"];
    }
    if (scrDims && scrDims.width < 260) {
        headerItems = ["Timeline", "More"];
        moreItems = ["Publications", "Experience", "Projects", "Contact"];
    }

    const moreItemsJSX = moreItems
        .map(item => {
            return (
                <li key={item}
                    className={`profile-header-item`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => itemClickHandler(item)}
                >
                    {item}
                </li>
            );
        });

    const headerItemsJSX = headerItems
        .map(item => {
            const activeItem = currentTab;
            const activeItemClass = activeItem?.toLowerCase() === item.toLowerCase() ? "profile-header-item-active" : "profile-header-item-inactive";
            let moreItem;
            if (item === "More") {
                moreItem = (
                    <ul className="profile-inner-header-more-container">
                        {moreItemsJSX}
                    </ul>
                );
            }
            return (
                <li key={item}
                    className={`profile-header-item ${activeItemClass}`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => itemClickHandler(item)}
                >
                    {item}
                    {showMoreBox && moreItem}
                </li>
            );
        });

    return (
        <>
            <div className="profile-header-profile-img-container">
                <div className="profile-header-profile-img-inner-container">
                    <img className="profile-img" src={profileImg} />
                </div>
            </div>
            <div className="profile-header-my-name">
                <div className="profile-header-my-name-inner-container">
                    <p>Nikos Theodoropoulos</p>
                </div>
            </div>
            <ul className="profile-inner-header-container">
                {headerItemsJSX}
            </ul>
        </>
    );
};

export default ProfileHeader;
