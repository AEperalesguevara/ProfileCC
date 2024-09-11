import ProfileHeader from './ProfileHeader.jsx';
import ProfileInfo from './ProfileInfo';
import ProfileStats from './ProfileStats';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="profile-card">
      <ProfileHeader />
      <ProfileInfo />
      <hr />
      <ProfileStats />
    </div>
  );
}

export default ProfileCard;
