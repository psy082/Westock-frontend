import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { SORT_DESC, FILTERS, FOOTER_DESC } from "./data/itemData";

function ItemContainer({
  queries,
  setFilter,
  subQueries,
  setSubFilter,
  resetFilters,
}) {
  const { category, series, sizeTypes, sizes, prices, releaseYears } = queries;
  const { page, sort } = subQueries;
  const history = useHistory();
  const [view, setView] = useState("grid");
  const [filterClicked, setFilterClicked] = useState(false);

  const { singleBadges, multiBadges } = (() => {
    const badges = {
      singleBadges: [],
      multiBadges: [],
    };
    for (const [key, value] of Object.entries(queries)) {
      if (key === "category") {
        if (value === "air jordan") {
          badges.singleBadges.push({
            value,
            clear: () => setFilter(key, "sneakers"),
          });
        }
        continue;
      }
      if (Array.isArray(value)) {
        if (key === "prices") {
          badges.multiBadges.push(
            ...value.map((v) => ({
              value: FILTERS.prices[v],
              clear: () => setFilter(key, v),
            }))
          );
        } else
          badges.multiBadges.push(
            ...value.map((v) => ({ value: v, clear: () => setFilter(key, v) }))
          );
        continue;
      }
      if (value)
        badges.singleBadges.push({ value, clear: () => setFilter(key, "") });
    }
    return badges;
  })();

  return (
    <Container>
      <HeaderFilter>
        <div>
          <BreadcrumbContainer>
            <BreadcrumbWrapper>
              <Breadcrumb>
                <Link
                  to="#"
                  onClick={() =>
                    history.push({
                      pathname: "/",
                    })
                  }
                >
                  home
                </Link>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb">
                <Link to="#" onClick={() => setFilter("category", "sneakers")}>
                  sneakers
                </Link>
              </Breadcrumb>
              {category === "air jordan" && (
                <Breadcrumb className="breadcrumb">
                  <Link
                    to="#"
                    onClick={() => setFilter("category", "air jordan")}
                  >
                    {category}
                  </Link>
                </Breadcrumb>
              )}
              {series && (
                <Breadcrumb className="breadcrumb">
                  <Link to="#">{series}</Link>
                </Breadcrumb>
              )}
            </BreadcrumbWrapper>
          </BreadcrumbContainer>
          <FilterBadgeList>
            {singleBadges.length ? (
              multiBadges.length ? (
                <FilterClear onClick={() => resetFilters()}>
                  clear filters
                </FilterClear>
              ) : (
                <FilterClear onClick={() => resetFilters()}>
                  clear filters
                </FilterClear>
              )
            ) : (
              <></>
            )}
            {singleBadges.length ? (
              singleBadges.map(({ value, clear }) => (
                <FilterBadge key={value} onClick={clear}>
                  {value}
                  <span>x</span>
                </FilterBadge>
              ))
            ) : (
              <></>
            )}
            {multiBadges.length ? (
              multiBadges.map(({ value, clear }) => (
                <FilterBadge key={value} onClick={clear}>
                  {value}
                  <span>x</span>
                </FilterBadge>
              ))
            ) : (
              <></>
            )}
          </FilterBadgeList>
        </div>
        <div>
          <FunctionContainer>
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
                    <img alt="arrowDown" src="/images/chevron_down.svg" />
                  ) : (
                    <img alt="arrowUp" src="/images/chevron_up.svg" />
                  )}
                </span>
              </FilterText>
              {filterClicked && (
                <SortSelectBox>
                  <SortList>
                    {Object.entries(SORT_DESC).map(
                      ([key, { qString, desc }]) => (
                        <SortButton onClick={() => setSubFilter("sort", key)}>
                          <p className="sortTitle">{qString}</p>
                          <p className="sortDesc">{desc}</p>
                        </SortButton>
                      )
                    )}
                  </SortList>
                </SortSelectBox>
              )}
            </FilterWrapper>
            {getViewButton(view, setView)}
          </FunctionContainer>
        </div>
      </HeaderFilter>
    </Container>
  );
}

const Container = styled.div`
  float: left;
  width: calc((100% / 6) * 5);

  &::after {
    content: " ";
    clear: both;
    display: table;
  }
`;

const HeaderFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 25px;
`;

const BreadcrumbContainer = styled.div`
  text-transform: uppercase;
`;

const BreadcrumbWrapper = styled.ul`
  font-size: 12px;
  margin: 10px 0 0;
  padding: 0;
`;

const Breadcrumb = styled.li`
  display: inline-flex;
  a {
    color: #666;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #2e2e2e;
    }
  }

  &.breadcrumb::before {
    content: "/";
    padding: 0 5px;
    color: #ccc;
  }
`;

const FilterBadgeList = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme: { colors } }) => colors.textBlack};
  text-transform: capitalize;
`;

const FilterClear = styled.div`
  margin: auto 10px 10px 0px;
  border: 1px solid rgb(206, 206, 206);
  padding: 10px 25px;
  text-align: center;
  cursor: pointer;
`;

const FilterBadge = styled.div`
  padding: 10px 15px;
  margin: auto 10px 10px;
  background-color: rgb(236, 236, 236);
  cursor: pointer;

  span {
    margin-left: 5px;
  }
`;

const FunctionContainer = styled.div`
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

const ViewButton = styled.button.attrs(({ disabled }) => ({
  disabled,
}))`
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

const MainWrapper = styled.div``;

const Pagination = styled.div``;

const getViewButton = (view, setFunction) => {
  const buttons = {
    grid: (
      <>
        <ViewButton disabled={true}>
          <img alt="grid_active" src="/images/grid_black.svg" />
        </ViewButton>
        <ViewButton onClick={() => setFunction("list")}>
          <img alt="list" src="/images/list_gray.svg" />
        </ViewButton>
      </>
    ),
    list: (
      <>
        <ViewButton onClick={() => setFunction("grid")}>
          <img alt="grid" src="/images/grid_gray.svg" />
        </ViewButton>
        <ViewButton disabled={true}>
          <img alt="list_active" src="/images/list_black.svg" />
        </ViewButton>
      </>
    ),
  };

  return buttons[view];
};

export default ItemContainer;
