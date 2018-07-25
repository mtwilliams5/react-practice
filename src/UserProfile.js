import React from 'react';
import ReposList from './ReposList';

const UserProfile = (props) => {
  return (
    <div className="card bg-light mb-3 w-50 mx-auto">
      <div className="card-header">
        <h5 className="card-title">{props.user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.user.login}</h6>
      </div>
      <div className="card-body">
        <img className="rounded float-left w-25 mr-2" src={props.user.avatar_url} alt="avatar" />
        <ReposList user={props.user.login} />
      </div>
    </div>
  );
};

export default UserProfile;