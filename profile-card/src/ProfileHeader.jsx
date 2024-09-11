import './ProfileHeader.css';

function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="background-img"></div>
      <img
        className="profile-img"
        src="/img/Augusto.PNG"
        alt="Profile"
      />
    </div>
  );
}

export default ProfileHeader;
