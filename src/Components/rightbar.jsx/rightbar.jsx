import "./rightbar.css"
import { Users } from '../../dummydata'
import Online from "../online/online";

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src='./assets/gift.png' alt='gift' />
          <span className='birthdayTxt'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAds' src='./assets/ad.png' alt='ads' />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFrndsList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className='rightbarInfo'>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="profile" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Oshi</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="profile" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Oshi</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="profile" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Oshi</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="profile" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Oshi</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="profile" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Oshi</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="profile" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Oshi</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
