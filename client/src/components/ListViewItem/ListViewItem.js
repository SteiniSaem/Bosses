import React from "react";
import { Link } from "react-router-dom";

const ListViewItem = props => {
  return (
    <li className="card">
      <div className="card-header">
        <Link to={"/bosses/" + props.bossItem.id}>{props.bubbleItem.name}</Link>
      </div>
      <div className="card-body">
        <img src={props.bossItem.img} />
      </div>
    </li>
  );
};

export default ListViewItem;
