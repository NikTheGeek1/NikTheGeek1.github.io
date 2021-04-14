import './ProfileHeader.css';
import profileImg from '../../assets/images/profile.jpeg';

const ProfileHeader = () => {

    return (
        <>
            <div className="profile-header-profile-img-container">
                <img className="profile-img" src={profileImg}/>
            </div>
            <ul className="profile-inner-header-container">
              <li className="profile-header-item">Timeline</li>  
              <li className="profile-header-item">Experience</li>  
              <li className="profile-header-item profile-header-item-name">Nikos Theodoropoulos</li>  
              <li className="profile-header-item">Projects</li>  
              <li className="profile-header-item">Contact</li>  
            </ul>
        </>
    );
};

export default ProfileHeader;