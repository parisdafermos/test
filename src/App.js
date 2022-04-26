import "./App.css";
import {
  AppBar,
  Card,
  CardContent,
  Grid,
  Link,
  Toolbar,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useEffect, useState } from "react";
function App() {
  const [consumer, setConsumer] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data.locations);
        // console.log(data.locations[0].consumers[0]);
        //console logs for testing purposes\
        // for (let i = 0; i < data.locations.length; i++) {
        const locationConsumers = data.locations.map((location) => {
          return {
            name: location.consumers[0].name,
            date: location.consumers[0].occupationDate,
            phone: location.consumers[0].phoneNumber,
            email: location.consumers[0].email,
          };
          //could not figure out how to do it for all 4 strings in the array
        });

        console.log(locationConsumers);
        setConsumer(locationConsumers);
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
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Phone Number filter
              </InputLabel>
              <Select
                // onChange={handleChange}
                autoWidth
              >
                <MenuItem value={true}>isPhoneNumber</MenuItem>
                <MenuItem value={false}>isNotPhoneNumber</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={6} sm={9} xs={12}>
            {consumer.map((individual) => (
              <Card key={individual.name} sx={{ m: 2 }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {individual.date}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {individual.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    <Link
                      href={`mailto:${individual.email}`}
                      rel="noopener"
                      target="_blank"
                    >
                      {individual.email}
                    </Link>
                  </Typography>
                  <Typography variant="h6" component="h2">
                    {individual.phone}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
