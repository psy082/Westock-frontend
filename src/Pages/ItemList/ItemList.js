import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import qs from "query-string";
import Nav from "../../Components/Nav/Nav";
import HeadPoster from "./Components/ItemContainer/HeadPoster";
import ItemContainer from "./Components/ItemContainer/ItemContainer";
import SideFilters from "./Components/SideFilters";
import Footer from "../../Components/Footer/Footer";

function ItemList() {
  const history = useHistory();
  const { search } = useLocation();

  const [queries, setQueries] = useState({
    category:
      qs.parse(search).category === "air jordan" ? "air jordan" : "sneakers",
    series: qs.parse(search).series ? qs.parse(search).series : "",
    sizeTypes: qs.parse(search).sizeTypes ? qs.parse(search).sizeTypes : "",
    sizes: qs.parse(search).sizes ? +qs.parse(search).sizes : "",
    prices: qs.parse(search).prices ? qs.parse(search).prices.split(",") : [],
    releaseYears: qs.parse(search).releaseYears
      ? qs.parse(search).releaseYears.split(",")
      : [],
  });

  const [subQueries, setSubQueries] = useState({
    page: qs.parse(search).page ? +qs.parse(search).page : 1,
    sort: qs.parse(search).sort ? qs.parse(search).sort : "most_popular",
  });

  useEffect(() => {
    const newQS = (() => {
      const newQS = { ...queries, ...subQueries };

      newQS.category = newQS.category === "air jordan" ? "air jordan" : "";
      newQS.page = newQS.page > 1 ? newQS.page : "";

      for (const [key, value] of Object.entries(newQS)) {
        if (!value) delete newQS[key];
      }

      return qs.stringify(newQS, { arrayFormat: "comma" });
    })();

    history.push({
      pathname: "sneakers",
      search: newQS,
    });

    if (JSON.stringify(qs.parse(newQS)) !== JSON.stringify(qs.parse(search))) {
      document.documentElement.scrollTop = 0;
      history.go(0);
    }
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
      <Nav type="rest" />
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
      <Footer />
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
  top: -111px;
  min-height: 100vh;
  padding-top: 91px;
  padding-bottom: 60px;
`;

const MainContainer = styled.div`
  width: 1170px;
  padding: 0 15px;
  margin: 40px auto 0;

  &::after {
    content: " ";
    clear: both;
    display: table;
  }
`;

const MainWrapper = styled.div`
  margin: 0 -15px;
`;

export default ItemList;
