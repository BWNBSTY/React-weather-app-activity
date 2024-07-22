import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LightModeIcon from "@mui/icons-material/LightMode";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoCard({ info }) {
  let initURL =
    "https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let hotURL =
    "https://images.unsplash.com/photo-1572966101025-e199cab72196?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let coldURL =
    "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rainyURL =
    "https://images.unsplash.com/photo-1563389843516-4a7b39dce10d?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      {/* <h2>Here's the weather info</h2> */}
      <div>
        <br />
        <br />
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 98 ? rainyURL : info.temp > 15 ? hotURL : coldURL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 98 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <LightModeIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>
                <b>Temperature :</b> {info.temp}&deg;C
              </p>
              <p>
                <b>Max-Temperature :</b> {info.tempMax}&deg;C
              </p>
              <p>
                <b>Min-Temperature :</b> {info.tempMin}&deg;C
              </p>
              <p>
                <b>Humidity :</b> {info.humidity}
              </p>
              <p>
                Weather is <b>{info.weather}</b> and it feels like{" "}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
