import React from 'react'
import './cases.css';
import Article from '../../components/article/article';

import { case1, case2, case3 ,case1After,case2After,case3After} from './imports';
const Cases = () => {
  return (
    <div className="ws_cases section__padding" id="cases">
    <div className="ws_cases-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are changing the world.</h1>
    </div>
    <div className="ws_cases-container">
      <div className="ws_cases-container_groupA">
        <Article imgBefore={case1After} imgAfter = {case1} date="Nov 11, 2021" text="全屋翻新，房子不仅仅是一个生活空间，它也可以是一项有益的长期投资。装修提供了实施变更的绝佳机会，如果操作合适，这些变化无疑将提高您房产的价值，并提高您日常生活的舒适度。" />
      </div>
      <div className="ws_cases-container_groupB">
        <Article imgBefore={case1After} imgAfter = {case1} date="Jan 01, 2022" text="铺设水电，高品质，超环保，绝对优价，让我们成为你的装修材料首选。" />
        <Article imgBefore={case2After} imgAfter = {case2} date="Feb 12, 2022" text="北温哥华1964年独立屋全屋翻新， 图纸报批, 地板地毯, 室内设计, 橱柜定制, 油漆粉刷, 瓷砖铺贴" />
        <Article imgBefore={case3After} imgAfter = {case3} date="May 30, 2022" text="后向屋建造 温哥华后巷屋是指屋主在自己的地产紧贴后巷的区域，建造第二座住房。对于需要为祖父母，年龄较大的儿童或客人提供额外空间的家庭而言，后巷屋是一个完美的解决方案。 同时业主还可以通过出租后巷屋来增加家庭受入。" />
      </div>
    </div>
  </div>
  )
}

export default Cases