import React from "react";
import styled from "styled-components";

const banner = {
  0: "https://stockx-assets.imgix.net/CSAssets/banner/1.ROWSNEAKERSREDUCEDSHIPPINGSET1/Reduced-Intl-Shipping_WebBanner-EN.png?auto=compress,format",
  1: "https://stockx-assets.imgix.net/CSAssets/banner/4USStreetwearBrainDeadTNF/BrainDead_TNF_Internal_Banners_WebBanner_1.jpg?auto=compress,format",
  2: "https://stockx-assets.imgix.net/CSAssets/banner/1USCollectiblesKAWSParty/083120_SX_Kaws_Party_Promo_Internal_BannersWebBanner.jpg?auto=compress,format",
  3: "https://stockx-assets.imgix.net/CSAssets/banner/1USHBTelfarNew/Telfair_7.31_BannersWebBanner_copy.jpg?auto=compress,format",
  4: "https://stockx-assets.imgix.net/CSAssets/banner/2USWatchesSwatchBape/Bape_Swatch_8.13WebBanner_copy_4.jpg?auto=compress,format",
};

const backgroundColor = {
  0: "#DCDDE1",
  1: "#185CA9",
  2: "#D4E14B",
  3: "#FEFEFE",
  4: "#85BCE0",
};

const Banner = ({ activeTab }) => {
  return (
    <Slick color={backgroundColor[activeTab]}>
      <Image alt="" height="190px" src={banner[activeTab]} />
    </Slick>
  );
};

const Slick = styled.div`
  ${(props) => props.theme.flexCenter};
  background-color: ${(props) => props.color};
`;

const Image = styled.img`
  cursor: pointer;
`;

export default Banner;
