'use client'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import food5 from "@/assests/card.jpg";
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useRouter } from 'next/navigation';

const Contact = () => {
    const router = useRouter()



    return (
        <>
                <Grid container justifyContent={'center'} sx={{ p: "10px", bgcolor: 'black',minHeight:{lg:'100vh',md:'100vh',sm:'fit-content',xs:'fit-content'} }}>
                    <Grid item lg={10} md={10} sm={10} xs={11.5} sx={{ mb: "25px" }}>
                        <Grid container sx={{ mt:{lg:"40px",md:'40px',sm:'20px',xs:'0px'} }}>

                            <Grid item xs={12} sx={{ mt: {lg:"20px",md:'20px',sm:'20px',xs:'0px'} }}>
                                <Grid container>

                                <Grid item xs={12}>
                                        <Box sx={{ pr: "15px" }}>
                                            <Typography align='center' variant='h2' sx={{ color: "#E8E8E8", fontSize:{lg:40,md:40,sm:35,xs:30}, fontWeight: 600 }}>
                                               Contact Us
                                            </Typography>
                                            
                                        </Box>
                                    </Grid>


                                <Grid item xs={12} sx={{ mt: '20px',display:'flex',justifyContent:'center' }}>
                                                <Box sx={{ position: "relative",height: { lg: "300px", md: "350px", sm: "300px", xs: "230px" }, width: 'fit-content' }}>
                                                    <Image src={food5} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "auto", }} />
                                                </Box>
                                            </Grid>
                                </Grid>

                                <Grid container sx={{ mt:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', bgcolor:'black', borderRadius:'10px'}} >
                            
                               
                                        <Grid item xs={12} sm={12} md={5.6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px 8px',  borderRadius:'10px'}} >
                                            <Box sx={{height:'180px',display:'flex',justifyContent:'center',alignItems:'center', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                <MailOutlineIcon sx={{ color: "white", fontSize: "50px" }} />
                                                <Typography align='center' sx={{ fontSize: "18px", color: 'white' }}>Email</Typography>
                                                    <Typography align='center' sx={{ fontSize: "18px",wordBreak:'break-word', fontWeight: "800", color: 'white' }}>rohitsharma078674@gmail.com</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={5.6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px 8px',  borderRadius:'10px'}} >
                                            <Box sx={{height:'180px',display:'flex',justifyContent:'center',alignItems:'center', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                    <CallIcon sx={{ color: "white", fontSize: "50px" }} />
                                                    <Typography align='center' sx={{ fontSize: "18px", color: 'white' }}>Contact no.</Typography>
                                                    <Typography align='center' sx={{ fontSize: "18px", fontWeight: "800", color: 'white' }}>7065832449</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={5.6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px 8px',  borderRadius:'10px'}} >
                                            <Box sx={{height:'180px',display:'flex',justifyContent:'center',alignItems:'center', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                <InstagramIcon sx={{ color: "white", fontSize: "50px" }} />
                                                    <Typography align='center' sx={{ fontSize: "18px", color: 'white' }}>Instagram</Typography>
                                                    <Typography align='center' sx={{ fontSize: "18px", fontWeight: "800", color: 'white' }}>@maa_nursing_services</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={5.6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px 8px',  borderRadius:'10px'}} >
                                            <Box sx={{height:'180px',display:'flex',justifyContent:'center',alignItems:'center', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                <FacebookIcon sx={{ color: "white", fontSize: "50px" }} />
                                                <Typography align='center' sx={{ fontSize: "18px", color: 'white' }}>Facebook</Typography>
                                                    <Typography align='center' sx={{ fontSize: "18px", fontWeight: "800", color: 'white' }}>@maa_nursing_services</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                    
                        </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                  
                </Grid>
        </>
    )
}

export default Contact