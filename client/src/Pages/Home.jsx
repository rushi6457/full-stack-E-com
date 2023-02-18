import React, { useRef } from 'react';
import  { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import '../Styles/styles.css';
import { Grid, GridItem, HStack, Heading, Image } from '@chakra-ui/react';


const Home = () => {

     const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
    <div>
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
            width='95%'
            margin='auto'
            templateColumns={'repeat(4,1fr)'}
            border={'1px solid'} 
            gap={'30'}>
            <GridItem border='1px solid' >
                <Image height='100%' w='100%' src='https://imgs.search.brave.com/_iQhlo2ZYGJ26NLVLDbsuod3moVxfHLvMUo9KDAXeFU/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOTVl/MzY1MmItYmY3YS00/NTI5LWFjNjUtOTJh/YjFhYTAzMWVlXzEu/OGIxMTNmNTc2M2U4/MzU1NWFhMTZhMzk3/OWU3NTBhMTguanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY'></Image>
            </GridItem>
            <GridItem border='1px solid' >
                <Image height='100%' w='100%' src='https://imgs.search.brave.com/UtOfMd56ku_jnuC3IlKUAzvbUsJStOF8jQJtIL2Zkqk/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNGUw/YTdjYjYtMDUzOC00/ZDVmLTkxZmItZGQz/ZjlhNjY2MGZjLjU3/NjI5YzJkMmE5YTM0/NTdkMjM2YjMyMDU1/Yzc3ZDZhLmpwZWc_/b2RuV2lkdGg9MTAw/MCZvZG5IZWlnaHQ9/MTAwMCZvZG5CZz1m/ZmZmZmY'></Image>
            </GridItem>
            <GridItem border='1px solid' >
                <Image height='100%' w='100%' src='https://imgs.search.brave.com/VEHQcOriI51LQUgvspk-4NouMei3ocpjYo7w4zoFXy8/rs:fit:832:486:1/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTEuZmxpeGNh/cnQuY29tL2ltYWdl/LzgzMi84MzIvajMw/Z3ZiazAtMS9jeWNs/ZS9oL2Evdy9hdGxh/cy1pbnRyZXBpZC1p/YmMtMjZ0LXNpbmds/ZS1zcGVlZC1mbG9y/ZWNlbnQtZ3JlZW4t/aW50cmdiMjYtMTgt/b3JpZ2luYWwtaW1h/ZXU5ZmRhcGF6eHd4/eC5qcGVnP3E9NzA'></Image>
            </GridItem>
            <GridItem border='1px solid' >
                <Image height='100%' w='100%' src='https://imgs.search.brave.com/DgaIatzCme3mzENZ39vxV65ioe8LmZ7lEUrGKId1TDY/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9iZ3Iu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA5L2Jnci1s/ZW5vdm8teW9nYS0z/LmpwZz9xdWFsaXR5/PTcwJnN0cmlwPWFs/bA'></Image>
            </GridItem>
        </Grid>
    </div>
    );
}

export default Home;
