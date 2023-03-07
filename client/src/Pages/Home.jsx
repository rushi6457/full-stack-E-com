import React, { useEffect, useRef, useState } from 'react';
import  { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "../Styles/Home.module.css";
import 'swiper/css';
import '../Styles/styles.css';
import { Box, Button, Flex, Grid, GridItem, HStack, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data,setData] = useState([])
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const getData = async() =>{
      let res = await axios.get(`https://e-com-78xd.onrender.com/admin/allproducts`)
    return res.data.data
  }

  useEffect(()=>{
    getData()
    .then((res)=>setData(res))
  },[])
    return (
    <div style={{backgroundColor:'#063970',color:'white'}}>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src='https://www.gearbest.com/u_file/2212/12/photo/105254957714338494-195a.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920'></Image>
            <Heading >30% OFF SALE</Heading>
        </SwiperSlide>
        <SwiperSlide>
            <Image src='https://www.gearbest.com/u_file/2302/09/photo/-2-f8a7.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920'></Image>
        </SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper> 

        <Heading textAlign={'justify'} padding={'1.5rem'}>Trending products</Heading>
        <Grid 
            className={styles.products}
            >
            <GridItem  
               borderRadius={'1rem'}
               boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'
            >
                <Image height='100%' w='80%' margin='auto' src='https://imgs.search.brave.com/_iQhlo2ZYGJ26NLVLDbsuod3moVxfHLvMUo9KDAXeFU/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOTVl/MzY1MmItYmY3YS00/NTI5LWFjNjUtOTJh/YjFhYTAzMWVlXzEu/OGIxMTNmNTc2M2U4/MzU1NWFhMTZhMzk3/OWU3NTBhMTguanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY'></Image>
            </GridItem>
            <GridItem  borderRadius={'1rem'}
               boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'>
                <Image height='100%' w='80%' margin='auto' src='https://imgs.search.brave.com/UtOfMd56ku_jnuC3IlKUAzvbUsJStOF8jQJtIL2Zkqk/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNGUw/YTdjYjYtMDUzOC00/ZDVmLTkxZmItZGQz/ZjlhNjY2MGZjLjU3/NjI5YzJkMmE5YTM0/NTdkMjM2YjMyMDU1/Yzc3ZDZhLmpwZWc_/b2RuV2lkdGg9MTAw/MCZvZG5IZWlnaHQ9/MTAwMCZvZG5CZz1m/ZmZmZmY'></Image>
            </GridItem>
            <GridItem  borderRadius={'1rem'}
               boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'>
                <Image height='100%' w='80%' margin='auto' src='https://imgs.search.brave.com/VEHQcOriI51LQUgvspk-4NouMei3ocpjYo7w4zoFXy8/rs:fit:832:486:1/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTEuZmxpeGNh/cnQuY29tL2ltYWdl/LzgzMi84MzIvajMw/Z3ZiazAtMS9jeWNs/ZS9oL2Evdy9hdGxh/cy1pbnRyZXBpZC1p/YmMtMjZ0LXNpbmds/ZS1zcGVlZC1mbG9y/ZWNlbnQtZ3JlZW4t/aW50cmdiMjYtMTgt/b3JpZ2luYWwtaW1h/ZXU5ZmRhcGF6eHd4/eC5qcGVnP3E9NzA'></Image>
            </GridItem>
            <GridItem  borderRadius={'1rem'}
               boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' >
                <Image height='100%' w='80%' margin='auto' src='https://imgs.search.brave.com/DgaIatzCme3mzENZ39vxV65ioe8LmZ7lEUrGKId1TDY/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9iZ3Iu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA5L2Jnci1s/ZW5vdm8teW9nYS0z/LmpwZz9xdWFsaXR5/PTcwJnN0cmlwPWFs/bA'></Image>
            </GridItem>
        </Grid>
        
        <Heading textAlign={'justify'} padding={'1.5rem'}>Products</Heading>
        <Grid
          className={styles.products}
          textAlign={'justify'}
        
        >
          {data?.map((el)=>{
            return (
            <GridItem
               className={styles.container}
               padding={'1rem'}
               borderRadius={'1.2rem'}
               boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'
            >
              <Image className={styles.image} src={el.image}></Image>
              <Text fontSize={'1.5rem'}>{el.title}</Text>
              <Text fontSize={'0.8rem'}>{el.description}</Text>
                <Text fontSize={'1.3rem'}>{`Price: ₹${el.price}`}</Text>
                <Link to={`/cart/${el._id}`}>
                  <Box className={styles.overlay}>
                    <Button colorScheme='red' className={styles.text}>View detail</Button>
                  </Box>
                </Link>
          
            </GridItem>
            )
          })}
        </Grid>
       
    </div>
    );
}

export default Home;
