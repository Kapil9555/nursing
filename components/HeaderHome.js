'use client'
import logo from '@/assests/first-films-high-resolution-logo.png'
import { Box, Grid, IconButton } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CgMenu } from "react-icons/cg"
import RightDrawer from './RightDrawer'

const HeaderHome = () => {
  const router = useRouter()

  const [drawerOpen, setDrawerOpen] = useState({leftSide:false})

    const handleNavigator =()=>{
      setDrawerOpen({...drawerOpen,leftSide:!drawerOpen.leftSide})
        console.log('working20')
    }
  return (
    <>
    <Grid container justifyContent={'center'} sx={{}}>
      <Grid item xs={11.8}>
         <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'90px',p:'5px 0px'}}>
            <Box sx={{position:'relative'}} >
                <Image src={logo} alt='img' style={{height:'auto',width:'170px',cursor:'pointer'}} />
            </Box>
            <Box>
                <IconButton sx={{cursor:'pointer'}} onClick={handleNavigator}>
                    <CgMenu style={{fontSize:'40px',color:'white'}}/>
                </IconButton>
            </Box>
         </Box>
      </Grid>
    </Grid>

    <RightDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
    </>
  )
}

export default HeaderHome
