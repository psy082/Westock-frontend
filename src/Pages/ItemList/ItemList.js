import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import qs from "query-string";
import HeadPoster from "./Components/HeadPoster";
import ItemContainer from "./Components/ItemContainer";
import SideFilters from "./Components/SideFilters";

function ItemList() {
  const history = useHistory();
  const { search } = useLocation();

  const [queries, setQueries] = useState({
    category:
      qs.parse(search).category === "air jordan" ? "air jordan" : "sneakers",
    series: qs.parse(search).series ? qs.parse(search).series : "",
    sizeTypes: qs.parse(search).sizeTypes ? qs.parse(search).sizeTypes : "",
    sizes: qs.parse(search).sizes ? Number(qs.parse(search).sizes) : "",
    prices: qs.parse(search).prices ? qs.parse(search).prices.split(",") : [],
    releaseYears: qs.parse(search).releaseYears
      ? qs.parse(search).releaseYears.split(",")
      : [],
  });

  const [subQueries, setSubQueries] = useState({
    page: qs.parse(search).page ? qs.parse(search).page : 1,
    sort: qs.parse(search).sort ? qs.parse(search).sort : "most_popular",
  });

  useEffect(() => {
    const makeNewLink = () => {
      const {
        category,
        series,
        sizeTypes,
        sizes,
        prices,
        releaseYears,
      } = queries;
      const { page, sort } = subQueries;
      let newLink = "";
      newLink =
        newLink + (category === "air jordan" ? `?category=air%20jordan` : "");
      newLink =
        newLink +
        (series ? (newLink ? `&&series=${series}` : `?series=${series}`) : "");
      newLink =
        newLink +
        (sizeTypes
          ? newLink
            ? `&&sizeTypes=${sizeTypes}`
            : `?sizeTypes=${sizeTypes}`
          : "");
      newLink =
        newLink +
        (sizes ? (newLink ? `&&sizes=${sizes}` : `?sizes=${sizes}`) : "");
      newLink =
        newLink +
        (prices.length
          ? newLink
            ? `&&prices=${prices.join(",")}`
            : `?prices=${prices.join(",")}`
          : "");
      newLink =
        newLink +
        (releaseYears.length
          ? newLink
            ? `&&releaseYears=${releaseYears.join(",")}`
            : `?releaseYears=${releaseYears.join(",")}`
          : "");
      newLink =
        newLink + (sort ? (newLink ? `&&sort=${sort}` : `?sort=${sort}`) : "");
      newLink =
        newLink +
        (page > 1 ? (newLink ? `&&page=${page}` : `?page=${page}`) : "");
      return newLink;
    };

    const newLink = makeNewLink();
    history.push({
      pathname: "sneakers",
      search: newLink,
    });
  }, [history, queries, search, subQueries]);

  const setFilter = (key, value) => {
    if (key === "category") {
      _resetCategory(value);
      return;
    }

    const newQueries = { ...queries };
    if (Array.isArray(newQueries[key])) {
      let index;
      if ((index = newQueries[key].indexOf(value)) !== -1) {
        newQueries[key].splice(index, 1);
      } else {
        newQueries[key].push(value);
        newQueries[key].sort();
      }
    } else {
      if (newQueries[key] === value) newQueries[key] = "";
      else newQueries[key] = value;
    }

    setQueries(newQueries);
  };

  const _resetCategory = (category) => {
    const resetQueries = { ...queries };

    resetQueries.category = category;
    resetQueries.series = "";

    const resetSubQuries = { ...subQueries };
    resetSubQuries.page = 1;
    setQueries(resetQueries);
    setSubQueries(resetSubQuries);
  };

  const resetFilters = () => {
    const resetQueries = {
      category: "sneakers",
      series: "",
      sizeTypes: "",
      sizes: "",
      prices: [],
      releaseYears: [],
    };

    const resetSubQuries = { sort: "most_popular", page: 1 };
    setQueries(resetQueries);
    setSubQueries(resetSubQuries);
  };

  const setSubFilter = (key, value) => {
    const newSubQueries = { ...subQueries };
    newSubQueries[key] = value;
    setSubQueries(newSubQueries);
  };

  return (
    <Container>
      <PageContainer>
        <HeadPoster category={queries.category} series={queries.series} />
        <MainContainer>
          <MainWrapper>
            <SideFilters queries={queries} setFilter={setFilter} />
            <ItemContainer
              queries={queries}
              setFilter={setFilter}
              subQueries={subQueries}
              setSubFilter={setSubFilter}
              resetFilters={resetFilters}
            />
          </MainWrapper>
        </MainContainer>
      </PageContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 91px;
  padding-bottom: 60px;
`;

const MainContainer = styled.div`
  width: 1170px;
  padding: 0 15px;
  margin: 40px auto 0;
`;

const MainWrapper = styled.div`
  margin: 0 -15px;
`;

export default ItemList;
