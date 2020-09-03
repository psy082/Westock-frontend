import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FILTERS } from "../../../itemData";

function FilterBadge({ queries, setFilter, resetFilters }) {
  const [singleBadges, setSingleBadges] = useState([]);
  const [multiBadges, setMultiBadges] = useState([]);

  useEffect(() => {
    const { singleBadges, multiBadges } = (() => {
      const badges = {
        singleBadges: [],
        multiBadges: [],
      };
      for (const [key, value] of Object.entries(queries)) {
        const isAirJordan = key === "category" && value === "air jordan";
        const isArray = Array.isArray(value);

        if (!isArray && value) {
          badges.singleBadges.push({
            value,
            clear: () => setFilter(key, isAirJordan ? "sneakers" : ""),
          });
        }
        if (isArray) {
          badges.multiBadges.push(
            ...value.map((v) => ({
              value: key === "prices" ? FILTERS.prices[v] : v,
              clear: () => setFilter(key, v),
            }))
          );
        }
      }
      return badges;
    })();

    setSingleBadges(singleBadges);
    setMultiBadges(multiBadges);
  }, [queries, setFilter]);

  return (
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
          <Badge key={value} onClick={clear}>
            {value}
            <span>x</span>
          </Badge>
        ))
      ) : (
        <></>
      )}
      {multiBadges.length ? (
        multiBadges.map(({ value, clear }) => (
          <Badge key={value} onClick={clear}>
            {value}
            <span>x</span>
          </Badge>
        ))
      ) : (
        <></>
      )}
    </FilterBadgeList>
  );
}

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

const Badge = styled.div`
  padding: 10px 15px;
  margin: auto 10px 10px;
  background-color: rgb(236, 236, 236);
  cursor: pointer;

  span {
    margin-left: 5px;
  }
`;

export default FilterBadge;
