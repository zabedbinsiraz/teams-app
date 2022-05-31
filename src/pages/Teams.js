import MockData from "../Api/MockData.json";
import { useState } from "react";
import TeamCard from "../components/Sidebar/TeamCard";

const teams = MockData.teams;
const activities = MockData.activities;

const Teams = () => {
  const [archived, setArchived] = useState(false);
  const [all, setAll] = useState(true);
  const [favorite, setFavorite] = useState(false);

  console.log(all);

  const allArchives = teams.filter((team) => team.is_archived);
  const allFavorites = teams.filter((team) => team.is_favorited);

  const archiveHandler = () => {
    setAll(false);
    setArchived(true);
    setFavorite(false);
  };

  const favoriteHandler = () => {
    setAll(false);
    setArchived(false);
    setFavorite(true);
  };

  const allHandler = () => {
    setAll(true);
    setArchived(false);
    setFavorite(false);
  };

  return (
    <>
      <div className="heading">
        <div className="heading-top">
          <div className="title"> Teams</div>
          <div>
            <button className="btn btn-top"> + CREATE NEW TEAM</button>
          </div>
        </div>
        <div className="heading-top">
          <div className="category">
            <button className="btn" onClick={allHandler}>
              All
            </button>
            <button className="btn" onClick={favoriteHandler}>
              Favourite
            </button>
            <button className="btn" onClick={archiveHandler}>
              Archieved
            </button>
          </div>
          <div>
            <form action="">
              <input className="btn" type="text" placeholder="search" />
            </form>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="teams">
          <div className="card-title">
            <h4>{all ? "All" : archived ? "Archived" : "Favorite"} teams</h4>
          </div>

          {all ? (
            teams.map((team) => <TeamCard team={team} />)
          ) : archived ? (
            allArchives.map((team) => <TeamCard team={team} />)
          ) : favorite ? (
            allFavorites.map((team) => <TeamCard team={team} />)
          ) : (
            <TeamCard />
          )}
        </div>
        <div className="active-users">
          <h3 className="card-desc">Activity</h3>
          {activities.map((user) => {
            return (
              <div className="user">
                <div>
                  <img
                    className="user-img"
                    src={user.person.avatar}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="user-desc">
                  <p>
                    <span className="bolder">{user.person.name}</span>{" "}
                    {user.action} <span className="bolder">{user.target}</span>
                  </p>
                  <small>{user.created_at}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Teams;
