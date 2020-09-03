export const ITEM_DESC = {
  sneakers: {
    name: "sneakers",
    url:
      "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt14176d5ded65d322/5e8ca91d5a326f2a9a34571f/browse-headersSneakers.jpg",
    desc:
      "On StockX, every sneaker you want is always available and authentic. Buy and sell new sneakers & shoes from Air Jordan, adidas, Nike, Yeezy and more!",
  },
  "air jordan": {
    name: "Air Jordan",
    url:
      "https://stockx-assets.imgix.net/Core/browse-header-sneakers.jpg?auto=compress,format",
    desc:
      "Buy and sell the greatest retro Air Jordans like the Jordan 1, Jordan 3, and Jordan 11. We’ve got every Jordan colorway in every size. Shop below.",
    series: {
      1: "From being banned by the NBA in 1985 to becoming a symbol of Michael Jordan's greatness, shop Air Jordan 1 shoes in every colorway and size on StockX.",
      2: "The Air Jordan 2 has blended luxury with performance since its debut in 1986. Shop every colorway and collaboration now on StockX.",
      3: "Although you can't dunk from the free throw line, you can be like MJ and rock his signature Air Jordan 3s. Shop the retro look today on StockX.",
      4: "Jordan wore them when he made ''The Shot''. You can wear them today. Shop the Retro Air Jordan 4, in every collab and colorway, on StockX.",
      5: "The icy soles we love wouldn't be possible without the creation of the Air Jordan 5. Buy and sell the Fire Red, Metallic, and every other colorway and collaboration below.",
    },
  },
};

export const FILTERS = {
  categories: ["sneakers", "streetwear", "collectibles", "handbags", "watches"],
  retail: "below retail",
  brands: [
    "adidas",
    "air jordan",
    "nike",
    "other brands",
    "luxury brands",
    "collections",
  ],
  airJordan: ["1", "2", "3", "4", "5"],
  sizeTypes: ["men", "women", "child", "preschool", "infant", "toddler"],
  sizes: [
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    4.5,
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
    11.5,
    12,
    12.5,
    13,
    13.5,
    14,
    14.5,
    15,
    16,
    17,
    18,
  ],
  prices: {
    "lte-100": "under $100",
    "100-200": "$100 - $200",
    "200-300": "$200 - $300",
    "300-400": "$300 - $400",
    "400-500": "$400 - $500",
    "500-600": "$500 - $600",
    "gte-600": "$600 +",
  },
  realeaseYears: [
    "<2001",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ],
};

export const SORT_DESC = {
  most_popular: {
    qString: "Most Popular",
    desc: `The 'Most Popular' are the products with the most sales over the past 72 hours.`,
  },
  recent_asks: {
    qString: "New Lowest Asks",
    desc: `The 'New Lowest Asks' are the products with the most recently listed Lowest Asks. These are the products that people are ready to sell.`,
  },
  recent_bids: {
    qString: "New Highest Bids",
    desc: `The 'New Highest Bids' are the products with the most recently listed Highest Bids. These are the products that people are ready to buy.`,
  },
  average_price: {
    qString: "Average Sale Price",
    desc: `The average sales price over the past twelve months. We've removed fakes, outliers and auctions with multiple listings.`,
  },
  total_sold: {
    qString: "Total Sold",
    desc: `The total number of items sold over the past 12 months. We've removed fakes, outliers and auctions with multiple listings.`,
  },
  volatility: {
    qString: "Volatility",
    desc: `A measure of how much price fluctuates. It is calculated as standard deviation divided by average price. A $200 product with 40% volatility results in an average price range of $120 to $280.`,
  },
  price_premium: {
    qString: "Price Premium",
    desc: `A measure of how much more a new, unworn item currently sells for, as compared to its original retail price. An item with a Price Premium of 100% means that the average price of that item right now sells for twice as much as its original retail price.`,
  },
  last_sale: {
    qString: "Last Sale",
    desc: `The last price this product was sold for.`,
  },
  lowest_ask: {
    qString: "Lowest Ask",
    desc: `The lowest price someone is currently selling this product for.`,
  },
  highest_bid: {
    qString: "Highest Bid",
    desc: `The highest price someone is currently offering to pay for this product.`,
  },
  release_date: {
    qString: "Release Date",
    desc: `The date this product launched.`,
  },
};

export const FOOTER_DESC = {
  airJordan: {
    normal:
      "Inspired by NBA superstar Michael Jordan and designed by Peter Moore, the Air Jordan 1s launched the designer shoe craze when they released in 1985.",
    series: {
      1: {
        normal:
          "The Air Jordan 1 is the original outlaw sneaker. Banned by the NBA in 1984, Peter Moore's design for Michael Jordan is one of Nike's greatest shoes. First produced in 1984 for basketball legend Michael Jordan, Peter Moore’s original design for the Air Jordan 1 has itself risen to legendary status in the intervening years. Right out of the gate, the Air Jordan 1 was like forbidden fruit, having been originally banned by the NBA for breaking its “51% rule,” according to which all players’ shoes should be at least 51% white. Ironically, the Air Jordan 1, with its Nike swoosh logo and its high-top.",
        more:
          "First produced in 1984 for basketball legend Michael Jordan, Peter Moore’s original design for the Air Jordan 1 has itself risen to legendary status in the intervening years. Right out of the gate, the Air Jordan 1 was like forbidden fruit, having been originally banned by the NBA for breaking its “51% rule,” according to which all players’ shoes should be at least 51% white. Ironically, the Air Jordan 1, with its Nike swoosh logo and its high-top silhouette, couldn’t be worn by the very player whose name it bore during his rookie year of 1984. The following year, Nike took advantage of this and scored a tremendous marketing coup, introducing additional colorways like Chicago and Black Toe, which had more white in them. Royal Blue and Black/Red were other major colorways introduced during this time. The shoe’s outlaw status remained, making it a constantly and consistently desired item. Indeed, Nike would re-release the Air Jordan 1 in 1994, 2001-2004 and 2014-2019, calling these other versions the Jordan 1 Retro. Like the player who wore them, the Air Jordan 1 is a revered and unforgettable legend.",
      },
      2: {
        normal:
          "The Air Jordan 2 is deceptively simple compared to the Jordan 1. Manufactured in Italy and designed by Bruce Kilgore, the AJ 2 was the first athletic shoe that had high-fashion design cred. ",
        more:
          "The Air Jordan 2 cut a new path for sneakers. These shoes feature many high-fashion touches. The Nike logo is minimized, which helps the clean lines of the design stand out. In 1987, this was revolutionary. It's arguable that the rest of the footwear world took decades to catch up. The original Air Jordan 2 came in both high- and low-top versions, and there were two colorways available. Interestingly, the prototypes for this shoe were lost at some point. In the early 2000s, it seemed like the Air Jordan 2 might be lost to history. Luckily, an original mold was recovered, and new versions were being released again by 2004. Today's Air Jordan 2 releases are known for bold choices. The Air Jordan 2 Retro Black History Month, released in 2019, features captivating monochrome patterns. There are also eye-catching pops of color in the sole, midsole and heel. The Jordan 2 Retro in White/Black-Varsity Red-Cement Grey is very spare and striking by contrast.",
      },
      3: {
        normal:
          "Michael Jordan and Tinker Hatfield joined forces once again for the introduction of the Air Jordan 3s, creating yet another iconic sneaker.",
        more:
          "The Jordan 3 would become synonymous with basketball for athletes everywhere. Most notable for its appearance when Michael Jordan famously wore them during the 1988 Dunk Contest, the Jordan 3 offered a striking new silhouette that hadn't been seen before on the basketball courts. The sneaker also introduced the Jumpman. This symbol would go on to appear on all of Jordan's products. The silhouette and Jumpman are thanks to Tinker Hatfield, who designed the shoe and included Michael Jordan's other request as well: elephant print. Originally released as Jordan 3 White Cement, another version quickly followed called the Jordan 3 Black Cement. Both sneakers showcased elephant print overlays applied towards the toe tips and heels. Other releases and variants like the Jordan 3 Tinker, the Jordan 3 True Blue, and even the Jordan 3 Retro UNC (2020) are just as coveted as the originals.",
      },
      4: {
        normal:
          "First released in 1989, the Jordan 4 was one of the first sneakers to really resonate in pop culture. Designed by Tinker Hatfield, it used new, innovative materials to improve performance.",
        more: `The Jordan 4 is one of the most iconic basketball shoes of all time. This shoe appears in Spike Lee's classic film "Do the Right Thing," where it's remarked on by characters. Lee also appeared in commercials for the Jordan 4. It was also the shoe Jordan was wearing when he hit a buzzer-beating, game-winning shot to knock the Cavaliers out of the NBA playoffs in 1989. The Jordan 4 was designed by Tinker Hatfield with extensive input from Michael Jordan. Lookwise, it prefigures some trends that would get big in the 1990s, using molded plastic pieces and plenty of mesh. It's a very different aesthetic from the Jordan 1. However, this shoe was really built for performance. The first retro versions of the Jordan 4 emerged in 1999. Since then, there have been endless colorways and even collaborations with brands like Levi's. In 2019, the popular Jordan 4 Bred in Black/Fire Red-Cement Grey was released. The year 2020 saw the release of the Black Cat. Another popular colorway is the Retro Jordan 4 Cool Grey, which was released in 2019.`,
      },
      5: {
        normal:
          "Featuring a new silhouette as bold as its predecessors, Nike launched the Jordan 5, designed by Tinker Hatfield, in 1990. The original release of the Jordan 5 included four colorways, including Black Metallic Silver, Fire Red, and Grape and has maintained its popularity through the recent collaboration with Off-White.",
        more:
          "The sneaker was the first Jordan shoe to feature a translucent sole, lace locks, and the midsole “shark-tooth” detail that references World War II fighter planes and Michael Jordan’s “dogfight-like” drive on the court. The original design featured the Nike Air logo on the heel, while later versions switched to the Jordan Jumpman logo. In 2020, Jordan Brand will release several new Jordan 5s that combine a mashup of three popular colorways: Fire Red, Black Metallic, and Grape. Team options, like the green and yellow Oregon Ducks colorway, will also be hitting shelves.",
      },
    },
  },
};

export default {
  ITEM_DESC,
  FILTERS,
  SORT_DESC,
  FOOTER_DESC,
};
