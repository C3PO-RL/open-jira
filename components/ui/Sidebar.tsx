import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { InboxOutlined, MailOutlined } from '@mui/icons-material'

const menuItems: string[] = ['Inbox', 'Starred', 'Send emai', 'Drafts']
export const Sidebar = () => {
  return (
    <Drawer
      anchor='left'
      open={true}
      //   onClose={() => {
      //     console.log('closing')
      //   }}
    >
      <Box sx={{ width: '250px' }}>
        <Box sx={{ padding: '5px, 10px' }}>
          <Typography variant='h4'>Menu</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 ? <InboxOutlined /> : <MailOutlined />}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 ? <InboxOutlined /> : <MailOutlined />}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
