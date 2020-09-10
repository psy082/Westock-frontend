import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const browse = [
  "Sneakers",
  "Streetwear",
  "Collectibles",
  "Handbags",
  "Watches",
];

const about = ["How it Works", "Press", "Reviews"];

const FirstDropdown = ({ activeTab, firstBrowse, firstAbout }) => {
  const history = useHistory();

  const goToAll = (sort) => {
    history.push(`/sneakers?sort=${sort}`);
  };

  return (
    <>
      {activeTab === 0 && firstBrowse && (
        <DropdownMenu>
          {browse.map((str, idx) => (
            <Dropdown key={idx} onClick={() => goToAll("most_popular")}>
              {" "}
              {str}
            </Dropdown>
          ))}
        </DropdownMenu>
      )}

      {activeTab === 3 && firstAbout && (
        <DropdownMenu>
          {about.map((str, idx) => (
            <Dropdown key={idx}>{str}</Dropdown>
          ))}
        </DropdownMenu>
      )}
    </>
  );
};

const DropdownMenu = styled.ul`
  position: absolute;
  min-width: 160px;
  padding: 5px 0;
  margin-top: 8px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
`;

const Dropdown = styled.li`
  width: 190px;
  height: 38px;
  padding: 8px;
  color: #666;
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 245, 245);
    border-right: 3px solid ${(props) => props.theme.colors.green};
  }
`;

export default FirstDropdown;
