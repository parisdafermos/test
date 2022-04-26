import "./App.css";
import {
  AppBar,
  Card,
  CardContent,
  Grid,
  Link,
  TextField,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        console.log(data.locations[0].consumers[0]);
        //console logs for testing purposes
        const locationConsumers = data.locations.map((location) => {
          return {
            consumers: location.consumers,
          };
        });
        const individualConsumer = locationConsumers.map((consumer) => {
          console.log({
            name: consumer.name,
            // I get undefined here
          });
        });
      });
  }, []);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Search consumer</Typography>
        </Toolbar>
      </AppBar>
      <Box mt={1}>
        <Grid
          alignItems="center"
          container
          direction="column"
          justify="center"
          spacing={3}
        >
          <Grid item md={6} sm={9} xs={12}>
            <TextField label="Search" />
          </Grid>

          <Grid item md={6} sm={9} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  2020-05-22(Occupation date)
                  {/* hardcoded currently */}
                </Typography>
                <Typography variant="h5" component="h2">
                  FirstName LastName(name)
                  {/* hardcoded currently */}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  <Link href="http://google.com" rel="noopener" target="_blank">
                    http://test12@gmail.com(email)
                    {/* hardcoded currently */}
                  </Link>
                </Typography>
                <Typography variant="h6" component="h2">
                  07546983574(phone)
                  {/* hardcoded currently */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
