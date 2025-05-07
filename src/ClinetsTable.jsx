import React from 'react';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';

const clients = [
  {
    name: 'mironma...',
    orders: 648,
    amount: '$5500',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'tahmina...',
    orders: 590,
    amount: '$4400',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'labonno...',
    orders: 408,
    amount: '$3300',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'sheikha...',
    orders: 357,
    amount: '$2200',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    name: 'joharakh...',
    orders: 289,
    amount: '$1100',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    name: 'kuruluso...',
    orders: 194,
    amount: '$789',
    avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
];

function ClientsTable() {
  return (
    <TableContainer component={Paper} sx={{ width:"100%", margin: 'auto',boxShadow:"none",scrollbarWidth:"0px",backgroundColor:"transparent"}}>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell style={{padding:"15px"}}><strong >CLIENTS</strong></TableCell>
            <TableCell style={{padding:"15px"}}><strong>ORDERS</strong></TableCell>
            <TableCell style={{padding:"15px"}}><strong>AMOUNT</strong></TableCell>
            <TableCell style={{padding:"15px"}}><strong>ACTION</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow key={index}>
              <TableCell style={{ padding: "15px" }}>
                <Box display="flex" gap={1} alignItems="center">
                  <img style={{width:"23px",height:"24px",margin:"0",borderRadius:"50%",objectFit:"cover"}} src={client.avatar} alt={client.name} sx={{ mr: 2 }} />
                  <p style={{fontSize:"14px", margin:"0"}}>{client.name}</p>
                </Box>
              </TableCell>
              <TableCell>{client.orders}</TableCell>
              <TableCell>{client.amount}</TableCell>
              <TableCell style={{display:"flex",gap:"5px"}}>
                <IconButton style={{ backgroundColor: '#d2f8e5',padding:"6px",borderRadius:"6px" }}>
                  <ChatIcon style={{ color: '#1d9a6c',fontSize:"16px", }} />
                </IconButton>
                <IconButton style={{ backgroundColor: '#f3d9fb',padding:"6px",borderRadius:"6px"}}>
                  <VisibilityIcon style={{ color: '#b416d0',fontSize:"16px"}} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClientsTable;
