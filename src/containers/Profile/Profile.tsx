import ProfileBody from '../../components/ProfileBody/ProfileBody';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import './Profile.css';

const Profile = () => {

    return (
        <section className="profile-section">
            <div className="profile-transparent-background-container"></div>
            <div className="profile-header-container">
                <ProfileHeader />
            </div>
            <div className="profile-body-container">
                <ProfileBody />
            </div>
        </section>
    );
};

export default Profile;