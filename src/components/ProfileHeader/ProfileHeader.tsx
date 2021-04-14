import './ProfileHeader.css';
import profileImg from '../../assets/images/profile.jpeg';

const ProfileHeader = () => {

    return (
        <>
            <div className="profile-header-profile-img-container">
                <img className="profile-img" src={profileImg}/>
            </div>
            <div className="profile-inner-header-container">

            </div>
        </>
    );
};

export default ProfileHeader;