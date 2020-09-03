import React from "react";
import styled from "styled-components";
import BreadCrumb from "./BreadCrumb";
import FilterBadge from "./FilterBadge";
import FunctionBlock from "./FunctionBlock";

function HeaderFilter({
  queries,
  setFilter,
  sort,
  setSubFilter,
  resetFilters,
  view,
  setView,
}) {
  const { category, series } = queries;

  return (
    <Container>
      <div>
        <BreadCrumb category={category} series={series} setFilter={setFilter} />
        <FilterBadge
          queries={queries}
          setFilter={setFilter}
          resetFilters={resetFilters}
        />
      </div>
      <FunctionBlock
        sort={sort}
        setSubFilter={setSubFilter}
        view={view}
        setView={setView}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 25px;
`;

export default HeaderFilter;
