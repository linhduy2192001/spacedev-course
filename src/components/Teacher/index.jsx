import React from "react";

export default function Teacher({ title, description, website, avatar }) {
  return (
    <div className="teacher">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="info">
        <div className="name">{title}</div>
        <p className="intro">{description}</p>
        {website && (
          <p>
            <strong>Website:</strong>{" "}
            <a href={website} target="_blank">
              {website}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
