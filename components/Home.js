'use client'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
// import img1 from '@/assests/img1.png'
import food5 from "@/assests/card.jpg";


const Home = () => {
    return (
        <>
            <Grid container sx={{position:'relative',minHeight:{lg:'80vh',md:'80vh',sm:300,xs:300}}}>
                <Grid item xs={12} sx={{height:'100%'}}>
                  <Box sx={{ overflow: 'hidden',position:'relative',height:{lg:'100%',md:'100%',sm:'300px',xs:'300px'},width:'100%', margin: 0, padding: 0}}>
                    <Image src={food5} style={{position:'absolute',height:'100%',width:'100%'}}/>
                  </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
