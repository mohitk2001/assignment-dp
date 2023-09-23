import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function DashboardCard({petservice}) {

  return (
   <div style={{marginTop:"5px",marginBottom:"10px",marginLeft:"5px",width:"25%"}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={petservice.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petservice.servicename}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petservice.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {petservice.price}
        </Typography>
      </CardContent>
    </Card>
   </div>
  );
}
