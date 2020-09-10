import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ViewAllModal({
  isActive,
  handleModal,
  isLoggedin,
  modalTitle,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Data/ViewAllBidsData.json")
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, []);

  const closeModal = () => {
    handleModal();
  };

  return (
    <Modal isActive={isActive} isLoggedin={isLoggedin}>
      <BackDrop isActive={isActive} onClick={closeModal} />
      <Body isActive={isActive}>
        <Header>
          <h1>{modalTitle}</h1>
          <CloseBtn onClick={closeModal}>X</CloseBtn>
        </Header>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>size</th>
                <th>ask price</th>
                <th># available</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, idx) => (
                <TR key={idx} idx={idx}>
                  <td>{i.size}</td>
                  <td>{`$${i.price.split(".")[0]}`}</td>
                  <td>{i.count}</td>
                </TR>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </Body>
    </Modal>
  );
}

const Modal = styled.div`
  visibility: ${({ isActive, isLoggedin }) =>
    isLoggedin && isActive ? "visible" : "hidden"};
  position: relative;
  ${({ theme }) => theme.flexColumnCenter};
  transition: visibility 0s ease ${({ isActive }) => (isActive ? "0s" : "0.2s")};
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: ${({ isActive }) => (isActive ? "0.5" : "0")};
  z-index: 3;
  transition: opacity 0.3s ease 0s;
`;

const Body = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  position: fixed;
  top: 30%;
  left: 30%;
  width: 700px;
  height: 400px;
  min-height: 175px;
  border-radius: 8px;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 3;
  transform: ${({ isActive }) =>
    isActive ? "translate(0);" : "translateY(-25%);"};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  ${({ theme }) => theme.flexRowCenter};
  justify-content: space-between;
  width: 100%;
  padding: 17px 15px 10px;
  background-color: #2e2e2e;

  h1 {
    color: #fff;
    text-transform: uppercase;
    font: 400 30px "Bebas Neue", cursive;
    letter-spacing: 2px;
  }
`;

const CloseBtn = styled.button`
  position: relative;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 30px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const TableWrapper = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  width: 100%;
  padding: 15px;

  table {
    display: table;
    width: 100%;
    border-spacing: 2px;

    thead {
      tr {
        border-collapse: separate;
        th {
          padding: 5px;
          border-bottom: 2px solid #ddd;
          :center ;
          font: 400 20px "Bebas Neue", cursive;
          letter-spacing: 1px;
          width:33%;
          }
        }
      }
    }
  }
`;

const TR = styled.tr`
  background-color: ${({ idx }) => (idx % 2 ? "#f9f9f9" : "#fff")};
  height: 33px;

  td {
    padding: 5px;
    font: 600 13px;
  }
`;
