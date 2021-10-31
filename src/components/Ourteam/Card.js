import React from "react";
import {
  ProfileCard,
  ProfileImg,
  Name,
  Role,
  CardDescription,
  ProfileDetails,
} from "./TeamComponent";
const Card = ({ src, name, role, description }) => {
  return (
    <ProfileCard>
      <ProfileDetails>
        <ProfileImg src={src} alt="profile-img" />
        <Name>{name}</Name>
        <Role>{role}</Role>
      </ProfileDetails>
      <CardDescription>{description}</CardDescription>
    </ProfileCard>
  );
};

export default Card;
