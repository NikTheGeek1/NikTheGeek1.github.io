import './ProfileHeader.css';
import profileImg from '../../assets/images/profile-rMAX.jpg';
import { useHistory } from 'react-router';
import { pathsEnum } from '../../enums/paths';
import { useEffect, useState } from 'react';
import { useStore } from '../../hooks-store/store';

const ProfileHeader = () => {
    const history = useHistory();
    const [, setRefreshTab] = useState('');
    const scrDims = useStore()[0].scrDims;
    const [showMoreBox, setShowMoreBox] = useState(false);

    useEffect(() => {
        window.addEventListener("click", closeMoreBoxHandler);
        return () => window.removeEventListener("click", closeMoreBoxHandler);
    }, [showMoreBox]);

    const itemClickHandler = (item: string) => {
        if (item === "More") {
            console.log(showMoreBox, 'ProfileHeader.tsx', 'line: ', '21');
            setShowMoreBox(oldState => !oldState);
        } else {
            const path = pathsEnum[item.toUpperCase()];
            history.push(path);
            setRefreshTab(item);
        }
    };

    const closeMoreBoxHandler = () => {
        if (showMoreBox)
            setShowMoreBox(false);
    };

    let headerItems: string[] = ["Timeline", "Publications", "Experience", "Projects", "Contact"];
    let moreItems: string[] = [];
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
            const activeItem = history.location.pathname.slice(1);
            const activeItemClass = activeItem === item.toLowerCase() ? "profile-header-item-active" : "profile-header-item-inactive";
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