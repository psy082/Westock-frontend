import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectView } from "../../../../../Store/actions/viewActions";
import { SORT_DESC } from "../../../itemData";

function FunctionBlock({ sort, setSubFilter }) {
  const [filterClicked, setFilterClicked] = useState(false);
  const dispatch = useDispatch();
  const view = useSelector((store) => store.viewReducer);

  const _selectView = (view) => {
    dispatch(selectView(view));
  };

  console.log(view);
  return (
    <FunctionContainer>
      <FunctionWrapper>
        <FilterWrapper onClick={() => setFilterClicked(!filterClicked)}>
          <FilterText>
            <span className="stress">Sort By:</span>
            <span className="light">
              {sort
                ? SORT_DESC[sort].qString
                : SORT_DESC["most_popular"].qString}
            </span>
            <span className="filterArrow">
              {!filterClicked ? (
                <img alt="arrowDown" src="/Images/chevron_down.svg" />
              ) : (
                <img alt="arrowUp" src="/Images/chevron_up.svg" />
              )}
            </span>
          </FilterText>
          {filterClicked && (
            <SortSelectBox>
              <SortList>
                {Object.entries(SORT_DESC).map(([key, { qString, desc }]) => (
                  <SortButton onClick={() => setSubFilter("sort", key)}>
                    <p className="sortTitle">{qString}</p>
                    <p className="sortDesc">{desc}</p>
                  </SortButton>
                ))}
              </SortList>
            </SortSelectBox>
          )}
        </FilterWrapper>
        {getViewButton(view, _selectView)}
      </FunctionWrapper>
    </FunctionContainer>
  );
}

const FunctionContainer = styled.div``;

const FunctionWrapper = styled.div`
  display: flex;
`;

const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 48px;
  padding: 15px;
  border: solid 1px #cecece;
  margin: 0 20px;
  font-size: 14px;
  cursor: pointer;
`;

const FilterText = styled.div`
  margin: 0 4px;

  .stress {
    margin-right: 4px;
    font-weight: bold;
  }

  .light {
    font-weight: lighter;
  }

  .filterArrow {
    display: inline-block;
    padding-left: 15px;

    img {
      display: inline-block;
      width: 0.875em;
      height: 1em;
      font-size: inherit;
      vertical-align: -0.125em;
      overflow: visible;
    }
  }
`;

const SortSelectBox = styled.div`
  position: absolute;
  top: 46px;
  left: -1px;
  width: 254px;
  height: 239px;
  border: 1px solid rgb(199, 199, 199);
  overflow-y: scroll;
  z-index: 1000;
`;

const SortList = styled.ul`
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  margin: 0px;
  list-style-type: none;
`;

const SortButton = styled.li`
  padding: 16px 16px 6px;
  border-bottom: 1px solid rgb(224, 224, 224);
  background-color: rgb(255, 255, 255);
  cursor: pointer;

  .sortTitle {
    margin: 0 0 11px;
    font-weight: bold;
  }

  .sortDesc {
    margin: 0 0 11px;
    font-size: 12px;
  }

  &:nth-child(2n) {
    background-color: rgb(250, 250, 250);
  }
`;

const ViewButton = styled.button`
  padding: 0;
  border: none;
  margin-right: 10px;
  background-color: transparent;
  outline: none;

  &:disabled {
    cursor: default;
  }

  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
`;

const getViewButton = (view, setFunction) => {
  const buttons = {
    grid: (
      <>
        <ViewButton disabled={true}>
          <img alt="grid_active" src="/Images/grid_black.svg" />
        </ViewButton>
        <ViewButton onClick={() => setFunction("list")}>
          <img alt="list" src="/Images/list_gray.svg" />
        </ViewButton>
      </>
    ),
    list: (
      <>
        <ViewButton onClick={() => setFunction("grid")}>
          <img alt="grid" src="/Images/grid_gray.svg" />
        </ViewButton>
        <ViewButton disabled={true}>
          <img alt="list_active" src="/Images/list_black.svg" />
        </ViewButton>
      </>
    ),
  };

  return buttons[view];
};

export default FunctionBlock;
