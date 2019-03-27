import React from "react";
import ListViewItem from "../ListViewItem/ListViewItem";

const ListView = props => {
  return (
    <ul className="list-view">
      {props.list.map(item => (
        <ListViewItem key={item.id} bossItem={item} />
      ))}
    </ul>
  );
};

export default ListView;
