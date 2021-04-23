import './ProfileHeader.css';
import profileImg from '../../assets/images/profile.jpeg';
import { useHistory } from 'react-router';
import { pathsEnum } from '../../enums/paths';
import { useEffect, useState } from 'react';

const ProfileHeader = () => {
    const history = useHistory();
    const [, setRefreshTab] = useState('');


    const itemClickHandler = (item: string) => {
        const path = pathsEnum[item.toUpperCase()];
        history.push(path);
        setRefreshTab(item);
    };

    const headerItemsJSX = ["Timeline", "Publications", "Experience", "Projects", "Contact"]
        .map(item => {
            const activeItem = history.location.pathname.slice(1);
            const activeItemClass = activeItem === item.toLowerCase() ? "profile-header-item-active" : "profile-header-item-inactive";
            return (
                <li key={item}
                    className={`profile-header-item ${activeItemClass}`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => itemClickHandler(item)}
                >
                    {item}
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