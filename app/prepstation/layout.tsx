"use client"
import { AppBar,  Box,  Button,  Drawer,  List,  ListItem,  ListItemButton,  ListItemIcon,  ListItemText,  Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import {useRouter} from "next/navigation"

const sidebarMenu = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/prepStation",
    },
    {
        text: "Orders",
        icon: <DeliveryDiningIcon />,
        link: "/prepStation/orders",
    },
{
    text: "Restaurant Profile",
    icon: <StorefrontIcon />,
    link: "/prepStation/restaurantProfile",
},
    {
        text: "Settings",
        icon: <SettingsIcon />,
        link: "/prepStation/settings",
    },

]

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {


    const router = useRouter()

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };

    return (
      <main>
        <AppBar position="static" sx={{
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
          borderBottom: '1px solid #E0E0E0',
        }}>
           <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
          {/* Text-based Logo */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <span style={{ color: '#347928' }}>Prep</span>
            <span style={{ color: '#FCCD2A' }}>Station</span>
          </Typography>
          {/* Menu Icon Button with Drawer */}
          <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
          </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right" sx={{ width: '20%' }}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {sidebarMenu.map((menu) => (
          <ListItem key={menu.text} disablePadding onClick={() => router.push(menu.link)}>
            <ListItemButton>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Box>
      </Drawer>
        </Toolbar>
        </AppBar>
        {children}
      </main>
    );
  }
  