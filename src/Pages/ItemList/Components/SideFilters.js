import React from "react";
import styled from "styled-components";
import { FILTERS } from "./data/itemData";

function SideFilters({ queries, setFilter }) {
  const { category, series, sizeTypes, sizes, prices, releaseYears } = queries;

  return (
    <Container>
      <Categories>
        {FILTERS.categories.map((_category) => (
          <CategoryOptions
            key={_category}
            className={`${
              _category === "sneakers"
                ? category === "sneakers"
                  ? "active"
                  : ""
                : ""
            }`}
            onClick={() => {
              if (_category === "sneakers") setFilter("category", _category);
            }}
          >
            <div>{_category}</div>
          </CategoryOptions>
        ))}
      </Categories>
      <Categories>
        <CategoryOptions>
          <div>{FILTERS.retail}</div>
        </CategoryOptions>
      </Categories>
      <Categories>
        {FILTERS.brands.map((brand) => (
          <CategoryOptions
            key={brand}
            className={`${
              brand === "air jordan"
                ? category === "air jordan"
                  ? "active"
                  : ""
                : ""
            }`}
          >
            <div
              onClick={() => {
                if (brand === "air jordan") setFilter("category", brand);
              }}
            >
              {brand}
            </div>
            {brand === "air jordan" && category === "air jordan" && (
              <SubcategoryList>
                {FILTERS.airJordan.map((_series) => (
                  <FormGroup key={`jordan${_series}`}>
                    <Subcategory>
                      <SubcategoryBox
                        id={`jordan${_series}`}
                        type="checkbox"
                        onClick={() => setFilter("series", _series)}
                      />
                      <SubcategoryLabel
                        checked={_series === series}
                        htmlFor={`jordan${_series}`}
                      >
                        {_series}
                      </SubcategoryLabel>
                    </Subcategory>
                  </FormGroup>
                ))}
              </SubcategoryList>
            )}
          </CategoryOptions>
        ))}
      </Categories>
      <Categories>
        <CheckBoxes>
          <CheckboxesTitle>size types</CheckboxesTitle>
          <CheckboxesContainer>
            {FILTERS.sizeTypes.map((_type) => (
              <CheckboxesWrapper key={_type}>
                <CheckboxForm>
                  <CheckBox
                    id={_type}
                    type="checkbox"
                    onClick={() => setFilter("sizeTypes", _type)}
                  />
                  <CheckBoxLabel checked={_type === sizeTypes} htmlFor={_type}>
                    {_type}
                  </CheckBoxLabel>
                </CheckboxForm>
              </CheckboxesWrapper>
            ))}
          </CheckboxesContainer>
        </CheckBoxes>
      </Categories>
      <Categories>
        <SizeBlock>
          <BlockTitle>sizes</BlockTitle>
          <BlockWrapper>
            {FILTERS.sizes.map((_size) => (
              <Sizeblock key={_size}>
                <Size
                  className={`size ${_size === sizes && "active"}`}
                  onClick={() => setFilter("sizes", _size)}
                >
                  <SizeText>{_size}</SizeText>
                </Size>
              </Sizeblock>
            ))}
          </BlockWrapper>
        </SizeBlock>
      </Categories>
      <Categories>
        <CheckBoxes>
          <CheckboxesTitle>prices</CheckboxesTitle>
          <CheckboxesContainer>
            {Object.keys(FILTERS.prices).map((_price) => (
              <CheckboxesWrapper key={_price}>
                <CheckboxForm>
                  <CheckBox
                    id={_price}
                    type="checkbox"
                    onClick={() => setFilter("prices", _price)}
                  />
                  <CheckBoxLabel
                    checked={prices.includes(_price)}
                    htmlFor={_price}
                  >
                    {FILTERS.prices[_price]}
                  </CheckBoxLabel>
                </CheckboxForm>
              </CheckboxesWrapper>
            ))}
          </CheckboxesContainer>
        </CheckBoxes>
      </Categories>
      <Categories>
        <CheckBoxes>
          <CheckboxesTitle>release years</CheckboxesTitle>
          <CheckboxesContainer className="yearWrapper">
            {FILTERS.realeaseYears.map((_year) => (
              <CheckboxesWrapper key={_year}>
                <CheckboxForm className="year">
                  <CheckBox
                    id={_year}
                    type="checkbox"
                    onClick={() => setFilter("releaseYears", _year)}
                  />
                  <CheckBoxLabel
                    checked={releaseYears.includes(_year)}
                    htmlFor={_year}
                  >
                    {_year}
                  </CheckBoxLabel>
                </CheckboxForm>
              </CheckboxesWrapper>
            ))}
          </CheckboxesContainer>
        </CheckBoxes>
      </Categories>
    </Container>
  );
}

const Container = styled.div`
  float: left;
  position: relative;
  width: calc(100% / 6);
  padding-right: 15px;
  padding-left: 15px;
`;

const Categories = styled.div`
  margin-bottom: 40px;

  .active {
    color: ${({ theme: { colors } }) => colors.lightRed};
  }
`;

const CategoryOptions = styled.div`
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 13px;
  letter-spacing: 1px;
  cursor: pointer;
`;

const SubcategoryList = styled.div`
  color: ${({ theme: { colors } }) => colors.textBlack};
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Subcategory = styled.div`
  position: relative;
  padding-left: 20px;
  margin-top: 7px;
  margin-bottom: 0 !important;
  text-transform: none;
  font-weight: 400;
`;

const SubcategoryBox = styled.input.attrs(({ id, type }) => ({
  id,
  type: type || "checkbox",
}))`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0 !important;
  outline: none;
  cursor: pointer;
`;

const SubcategoryLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  position: relative;
  display: inline-block;
  max-width: 100%;
  min-height: 22px;
  padding-left: 5px;
  margin-top: 5px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: 400;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 11px;
    height: 11px;
    border: 1px solid ${({ theme: { colors } }) => colors.textBlack};
    border-radius: 2px;
    margin-left: -20px;
    background: #fff;
    transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease;
  }

  ${({ checked }) =>
    checked &&
    `&::after {
      content: "\f00c";
      position: absolute;
      left: 0;
      top: 0;
      display: inline-block;
      width: 11px;
      height: 11px;
      border-radius: 2px;
      padding-left: 2px;
      padding-top: 2px;
      margin-left: -20px;
      color: white;
      font-family: "Font Awesome 5 Free";
      font-weight: 600;
      font-size: 5px;
      text-align: center;
      background: #1E90FF;
      transition: border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease;

      &:hover {
        background: #025dc8;
      }
    }`}
`;

const CheckBoxes = styled.div`
  max-width: 100%;
  margin: 40px 0;

  .yearWrapper {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const CheckboxesTitle = styled.div`
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 7px;
  letter-spacing: 1px;
`;

const CheckboxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const CheckboxesWrapper = styled.div`
  position: relative;
  left: 5px;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 0;
`;

const CheckboxForm = styled.div`
  position: relative;
  display: inline-block;
  min-width: 17px;
  min-height: 17px;
  margin-top: 7px;
  backface-visibility: hidden;
  vertical-align: baseline;
  font-style: normal;
  font-size: 1rem;
  line-height: 17px;
  outline: none;

  &.year {
    width: 70px;
  }

  &:hover {
    label::before {
      background: #fff;
      border-color: rgba(34, 36, 38, 0.35);
    }
  }
`;

const CheckBox = styled.input.attrs(({ id, type }) => ({
  id,
  type: type || "checkbox",
}))`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0 !important;
  outline: none;
  cursor: pointer;

  &:checked ~ label::before {
    background: #fff;
    border-color: rgba(34, 36, 38, 0.35);
  }
`;

const CheckBoxLabel = styled.label.attrs(({ htmlFor }) => ({ htmlFor }))`
  position: relative;
  display: block;
  max-width: 100%;
  min-height: 22px;
  padding-top: 2px;
  padding-left: 8px;
  margin-top: 2px;
  margin-bottom: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.87);
  text-transform: capitalize;
  user-select: none;
  cursor: pointer;
  outline: none;
  transition: color 0.1s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 17px;
    height: 17px;
    border: 1px solid #d4d4d5;
    margin-left: -20px;
    background: #fff;
    transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease;
  }

  ${({ checked }) =>
    checked &&
    `&::after {
        content: "\f00c";
        position: absolute;
        left: -1px;
        top: 0;
        display: inline-block;
        width: 17px;
        height: 17px;
        padding-left: 3px;
        padding-top: 1px;
        margin-left: -20px;
        color: rgba(0, 0, 0, .95);
        font-family: "Font Awesome 5 Free";
        font-weight: bold;
        font-size: 13px;
        text-align: center;
        transition: border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease;
      }`}
`;

const SizeBlock = styled.div`
  max-width: 100%;
  margin-top: 40px;
  font-family: sans-serif;
`;

const BlockTitle = styled.div`
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const BlockWrapper = styled.div`
  margin: 0 -15px;

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Sizeblock = styled.div`
  float: left;
  position: relative;
  width: 25%;
  min-height: 1px;
  padding: 0 15px;
  cursor: pointer;
`;

const Size = styled.div`
  width: 32px;
  height: 32px;
  padding-top: 2px;
  margin-bottom: 10px;
  font-weight: 400;
  font-family: "Bebas Neue", cursive;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
  background-color: ${({ theme: { colors } }) => colors.mediumGrey};
`;

const SizeText = styled.div`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
  user-select: none;
`;

export default SideFilters;
