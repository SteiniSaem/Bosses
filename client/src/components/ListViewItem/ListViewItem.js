import React from "react";
import { Link } from "react-router-dom";

const ListViewItem = props => {
  return (
    <li className="card">
      <Link to={"/bosses/" + props.bossItem.id}>
        <div className="card-header">
          <span className="boss-name">{props.bossItem.name}</span>
        </div>
        <div className="card-body">
          <img className="boss-img" src={props.bossItem.img} />
        </div>
      </Link>
    </li>
  );
};

export default ListViewItem;
