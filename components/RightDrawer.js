'use client'
import logo from '@/assests/first-films-high-resolution-logo.png';
import { Box, Drawer, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



const RightDrawer = ({drawerOpen, setDrawerOpen }) => {
    const router = useRouter();
    const [showBorder,setShowBorder]=useState('');
    const [shareModal ,setShareModal]=useState({open:false})
    const listArr = [{title:'Home',link:"/"},{title:'About',link:"/about"},{title:'Work',link:"/work"},{title:'Contact',link:"/contactus"}]
    
   const handleSideBarMenu =(item)=>{
    setShowBorder(item.title);
    router.push(item.link)
   }

   const handleLogout =()=>{
    setDrawerOpen({...drawerOpen,leftSide:false})
    loggedInVerify();
    localStorage.clear()
   }
   return (
    <>
        <Drawer anchor={'right'} open={drawerOpen.leftSide} onClose={() => {setDrawerOpen({...drawerOpen,leftSide:false}) }}
           sx={{background:"unset",height:'100vh' }} 
           PaperProps={{
                sx: { width: { lg: '25%', md: '35%', sm: '45%', xs: '75%' },bgcolor:'black', margin: 'auto'}
            }}>
            <Grid container sx={{ color: 'white',height:'80vh'}} >
               <Grid item xs={12}>
                <Grid container sx={{justifyContent:"space-between",alignItems:"center"}}>
                <Grid item xs={12}>
                <Box sx={{position:'relative',display:'flex',justifyContent:'center',mt:'40px'}}>
                  <Image src={logo} alt='img' style={{height:'auto',width:'170px',cursor:'pointer'}} onClick={()=>{router.push('/')}}/>
                </Box>
                </Grid>
                <Grid item xs={6}>
                 {/* <Typography  sx={{ fontSize:{lg:"24px",md:"22px",sm:"18px",xs:"15px"}, fontWeight: "600", color:"#5d646d", cursor: "pointer", m: "10px" }}>Menu Bar</Typography> */}
                </Grid>
              
                </Grid>
               </Grid>
               <Grid item container alignItems={'center'} justifyContent={'center'} sx={{height:'fit-content'}}>
               <Grid item xs={12} sx={{p:" 0px 15px"}}>
               {
                listArr.map((ele,index)=>{
                    return(
                       <Typography align='center' key={index} sx={{mb:"10px",userSelect:"none",fontWeight:600,fontSize:"20px",cursor:"pointer",mt:"5px",p:"2px 3px",borderRadius:"8px",color:ele.title==showBorder ?"#007bff":"white"}} onClick={()=>{handleSideBarMenu(ele)}}>  {ele.title} </Typography>
                    )
                })
               }
               </Grid>
               </Grid>      
            </Grid>
        </Drawer>
    </>
    )
}

export default RightDrawer