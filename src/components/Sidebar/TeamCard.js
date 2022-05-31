import React from "react";

const TeamCard = ({ team }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <img className="card-img" src={team.image} alt="" srcset="" />
        </div>
        <div className="img-name">
          <h3>{team.name}</h3>
          <p>{team.created_at}</p>
        </div>
      </div>
      <div className="card-desc">
        <p>{team.description}</p>
      </div>
      <div className="card-footer">
        <div className="footer-desc">
          <p>{team.campaigns_count} campaigns</p>
        </div>
        <div className="footer-desc">
          <p>{team.leads_count} leads</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
