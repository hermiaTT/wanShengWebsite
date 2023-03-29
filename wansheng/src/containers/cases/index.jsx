import React from 'react'
import Article from '../../components/article';
import { case1, case1After} from '../../assets/imports';
import { Flex, Grid } from '@chakra-ui/react';
import Title from '../../components/field/Title';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Cases = () => {
  
  var angle = 0;
  function galleryspin(sign) { 
    let spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
  }
  return (
    <Flex className='ws_cases' id="cases">
      <Title title={"Project Library"} description={"A lot is happening, We are changing the world."}/>
      <Grid className='ws_cases-container' px={['8', '8', '8', '24', '24']}>
        <FaChevronLeft style={{left:"122px"}} class="ss-icon" onClick = {()=>galleryspin('-')}/>
        <figure className='wrapper ws_cases-spinner' id="spinner" style={{rotateY:'45deg'}}>
          <Article imgBefore={case1After} alt imgAfter = {case1} date="Jan 01, 2022" text="铺设水电，高品质，超环保，绝对优价，让我们成为你的装修材料首选。" />
          <Article imgBefore={case1After} alt imgAfter = {case1} date="Feb 12, 2022" text="北温哥华1964年独立屋全屋翻新， 图纸报批, 地板地毯, 室内设计, 橱柜定制, 油漆粉刷, 瓷砖铺贴" />
          <Article imgBefore={case1After} alt imgAfter = {case1} date="May 30, 2022" text="后向屋建造 温哥华后巷屋是指屋主在自己的地产紧贴后巷的区域，建造第二座住房。对于需要为祖父母，年龄较大的儿童或客人提供额外空间的家庭而言，后巷屋是一个完美的解决方案。 同时业主还可以通过出租后巷屋来增加家庭受入。" />
          <Article imgBefore={case1After} alt imgAfter = {case1} date="May 30, 2022" text="后向屋建造 温哥华后巷屋是指屋主在自己的地产紧贴后巷的区域，建造第二座住房。对于需要为祖父母，年龄较大的儿童或客人提供额外空间的家庭而言，后巷屋是一个完美的解决方案。 同时业主还可以通过出租后巷屋来增加家庭受入。" />
          <Article imgBefore={case1After} alt imgAfter = {case1} date="Jan 01, 2022" text="铺设水电，高品质，超环保，绝对优价，让我们成为你的装修材料首选。" />
          <Article imgBefore={case1After} alt imgAfter = {case1} date="Feb 12, 2022" text="北温哥华1964年独立屋全屋翻新， 图纸报批, 地板地毯, 室内设计, 橱柜定制, 油漆粉刷, 瓷砖铺贴" />
          <Article imgBefore={case1After} alt imgAfter = {case1} date="May 30, 2022" text="后向屋建造 温哥华后巷屋是指屋主在自己的地产紧贴后巷的区域，建造第二座住房。对于需要为祖父母，年龄较大的儿童或客人提供额外空间的家庭而言，后巷屋是一个完美的解决方案。 同时业主还可以通过出租后巷屋来增加家庭受入。" />
          <Article imgBefore={case1} imgAfter = {case1After} date="May 30, 2022" text="后向屋建造 温哥华后巷屋是指屋主在自己的地产紧贴后巷的区域，建造第二座住房。对于需要为祖父母，年龄较大的儿童或客人提供额外空间的家庭而言，后巷屋是一个完美的解决方案。 同时业主还可以通过出租后巷屋来增加家庭受入。" />
        </figure>
        <FaChevronRight style={{right:"122px"}} class="ss-icon" onClick = {()=>galleryspin('')}/>
      </Grid>
  </Flex>
  )
}

export default Cases