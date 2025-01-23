import React from "react";

const NotDetay = ({ not }) => {
  return (
    <div>
      <h4>{not.baslık}</h4>
      <p>{not.aciklama}</p>
      <p>{not.createdAt}</p>
    </div>
  );
};

export default NotDetay;
