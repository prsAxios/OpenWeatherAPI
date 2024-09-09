import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export default function InfoBox({info}){
    const Init_URL ="https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Hot_URL ="https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.jpg?s=1024x1024&w=is&k=20&c=6VIN3G56kXUaUPMNjv_JH_PasEiY2s4CRx3mmiy-t5Y=";
    const Cold_URL="https://media.istockphoto.com/id/483785638/photo/fallen-leaf-covered-in-winter-frost.jpg?s=2048x2048&w=is&k=20&c=QIXPpo4Zaddr03w5sPNr8QcWTcmu4tcrIhH56aW9rR0=";
  
    return (
    <div>
        <h1 style={{textAlign:"center"}}>   </h1>
        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={(info.temp > 300 )? Hot_URL : Cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {(info.temp > 300 )? <WhatshotIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Temperature: {info.temp}
         <br/>
         feelsLike :{info.feelsLike}
         <br/>
         tempMIN:{info.tempMIN}
         <br/>
        tempMAX:{info.tempMAX}
        <br/>
        weather:{info.weather}
        <br/>
        windSpeed:{info.windSpeed}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    )
}