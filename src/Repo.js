import React from 'react';

const Repo = (props) => {
  return (
    <a href={props.repo.html_url} className="list-group-item list-group-item-action">
      {props.repo.name}
    </a>
  )
}

export default Repo;