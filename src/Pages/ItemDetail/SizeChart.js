import React from "react";
import styled from "styled-components";

export default function GlobalSizeChart() {
  return (
    <Chart>
      <Sizes>
        <UnorderedList>
          <li>US</li>
          <li>3.5</li>
          <li>4</li>
          <li>4.5</li>
          <li>5</li>
          <li>5.5</li>
          <li>6</li>
          <li>6.5</li>
          <li>7</li>
          <li>7.5</li>
          <li>8</li>
          <li>8.5</li>
          <li>9</li>
          <li>9.5</li>
          <li>10</li>
          <li>10.5</li>
          <li>11</li>
          <li>11.5</li>
          <li>12</li>
          <li>12.5</li>
          <li>13</li>
          <li>13.5</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
        </UnorderedList>
        <UnorderedList>
          <li>UK</li>
          <li>2.5</li>
          <li>3</li>
          <li>3.5</li>
          <li>4</li>
          <li>4.5</li>
          <li>5.5</li>
          <li>6</li>
          <li>6</li>
          <li>6.5</li>
          <li>7</li>
          <li>7.5</li>
          <li>8</li>
          <li>8.5</li>
          <li>9</li>
          <li>9.5</li>
          <li>10</li>
          <li>10.5</li>
          <li>11</li>
          <li>11.5</li>
          <li>12</li>
          <li>12.5</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
        </UnorderedList>
        <UnorderedList>
          <li>EU</li>
          <li>35.5</li>
          <li>36</li>
          <li>36.5</li>
          <li>37.5</li>
          <li>38</li>
          <li>38.5</li>
          <li>39</li>
          <li>40</li>
          <li>40.5</li>
          <li>41</li>
          <li>42</li>
          <li>42.5</li>
          <li>43</li>
          <li>44</li>
          <li>44.5</li>
          <li>45</li>
          <li>45.5</li>
          <li>46</li>
          <li>47</li>
          <li>47.5</li>
          <li>48</li>
          <li>48.5</li>
          <li>49.5</li>
          <li>50.5</li>
          <li>51.5</li>
          <li>52.5</li>
        </UnorderedList>
        <UnorderedList>
          <li>CM</li>
          <li>22.5</li>
          <li>23</li>
          <li>23.5</li>
          <li>23.5</li>
          <li>24</li>
          <li>24</li>
          <li>24.5</li>
          <li>25</li>
          <li>25.5</li>
          <li>26</li>
          <li>26.5</li>
          <li>27</li>
          <li>27.5</li>
          <li>28</li>
          <li>28.5</li>
          <li>29</li>
          <li>29.5</li>
          <li>30</li>
          <li>30.5</li>
          <li>31</li>
          <li>31.5</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
        </UnorderedList>
        <UnorderedList>
          <li>
            <div>W</div>
            <div>WOMEN</div>
          </li>
          <li>5</li>
          <li>5.5</li>
          <li>6</li>
          <li>6.5</li>
          <li>7</li>
          <li>7.5</li>
          <li>8</li>
          <li>8.5</li>
          <li>9</li>
          <li>9.5</li>
          <li>10</li>
          <li>10.5</li>
          <li>11</li>
          <li>11.5</li>
          <li>12</li>
          <li>12.5</li>
          <li>13</li>
          <li>13.5</li>
          <li>14</li>
          <li>14.5</li>
          <li>15</li>
          <li>15.5</li>
          <li>16</li>
          <li>16.5</li>
          <li>17</li>
          <li>17.5</li>
        </UnorderedList>
      </Sizes>
    </Chart>
  );
}

const Chart = styled.div`
  height: 346px;
  overflow: auto;
`;

const Sizes = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 0px;
  width: 100%;
  height: 100%;
`;

const UnorderedList = styled.ul`
  ${(props) => props.theme.flexColumn}
  justify-content:space-around;
  width: calc(100%/5);  

  li {
    scp${(props) => props.theme.flexColumnCenter}
    text-align: center;
    width: 100%;
    padding: 7px 0 8px;
  }
`;
