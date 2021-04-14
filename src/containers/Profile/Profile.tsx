import ProfileBody from '../../components/ProfileBody/ProfileBody';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import './Profile.css';

const Profile = () => {

    return (
        <>
            <div className="profile-transparent-background-container"></div>
            <div className="profile-header-container">
                <ProfileHeader />
            </div>
            <div className="profile-body-container">
                <ProfileBody />
            </div>
        </>
    );
};

export default Profile;