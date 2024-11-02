'use client'
import { Box, Grid } from '@mui/material';
import Image from 'next/image';

import e1 from "@/assests/e1.png";
import e10 from "@/assests/e10.png";
import e11 from "@/assests/e11.png";
import e12 from "@/assests/e12.png";
import e2 from "@/assests/e2.png";
import e3 from "@/assests/e3.png";
import e4 from "@/assests/e4.png";
import e5 from "@/assests/e5.png";
import e6 from "@/assests/e6.png";
import e7 from "@/assests/e7.png";
import e8 from "@/assests/e8.png";
import e9 from "@/assests/e9.png";
import './master.css';

const Awards = () => {

    const cards = [
        { img: e1 },
        { img: e2 },
        { img: e3 },
        { img: e4 },
        { img: e5 },
        { img: e6 },
        { img: e7 },
        { img: e8 },
        { img: e9 },
        { img: e10 },
        { img: e11 },
        { img: e12 }
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Grid container justifyContent={'center'} sx={{bgcolor:'black',zIndex:90}}>
                <Grid item lg={10} md={10} sm={12} xs={12} sx={{ mb: "25px" }}>
                    <Grid container sx={{ width: '100%'}}>
                        <Box  sx={{ width: '100%',display:'flex',border: '5px solid #bdbdbd',borderRadius:'8px',boxSizing:'border-box',p:'10px'}}>
                            <Box className='scollBar' sx={{display:'flex',overflow:'auto',boxSizing:'border-box'}}>
                                {
                                    cards.map((ele, index) => {
                                        return (
                                            <Box key={index} sx={{boxSizing:'border-box'}}>
                                              <Image src={ele?.img} style={{height:'150px',boxSizing:'border-box',width:'auto'}}/>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Awards
