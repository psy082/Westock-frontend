import React from "react";
import styled from "styled-components";
import SalesChart from "../SalesChart";

export default function ViewAllModal({
  isActive,
  handleModal,
  isLoggedin,
  modalTitle,
  sales,
}) {
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
        <SalesChart sales={sales} />
        <ChartWrapper>
          <SalesTable>
            <thead>
              <tr>
                <th>size</th>
                <th>sale price</th>
                <th>date</th>
                <th>time</th>
              </tr>
            </thead>
            <tbody>
              {sales?.map((i, idx) => (
                <TR key={idx} idx={idx}>
                  <td>{i.size}</td>
                  <td>{`$${i.sale_price}`}</td>
                  <td>{i.date}</td>
                  <td>{`${i.time.split("+")[0].slice(0, 5)} EST`}</td>
                </TR>
              ))}
            </tbody>
          </SalesTable>
        </ChartWrapper>
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
  z-index: 4;

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

const ChartWrapper = styled.div`
  position: relative;
  bottom: -20px;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  z-index: 2;
`;

const SalesTable = styled.table`
  display: table;
  width: 100%;
  margin-bottom: 22px;
  border-spacing: 2px;

  thead {
    tr {
      border-collapse: separate;
      th {
        padding: 5px;
        border-bottom: 2px solid #ddd;
        :center ;
        font: 400 17px "Bebas Neue", cursive;
        letter-spacing: 1px;

        &:nth-of-type(1) {
          width: 16.6%;
        }
        &:nth-of-type(2) {
          width: 25%;
        }
        &:nth-of-type(3) {
          width: 30%;
        }
        &:nth-of-type(4) {
          width: 25%;
        }
      }
    }
  }
`;

const TR = styled.tr`
  background-color: ${({ idx }) => (idx % 2 ? "#f9f9f9" : "#fff")};

  td {
    padding: 5px;
    font: 600 13px;
  }
`;
