import React, { useEffect, useState } from "react";
import axios from "axios";

import "../css/App.css";
import AsteroidCard from "../components/AsteroidCard";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import LogoNASA from "../assets/nasa-image.jpg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  containerProgress: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  containerGridDate: {
    marginBottom: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    margin: theme.spacing(1),
  },
  textMessageError: {},
}));

const AsteroidsContainer = () => {
  let array = "";
  const classes = useStyles();
  const [dangerousAsteroids, setDangerousAsteroids] = useState([]);
  const [closeApproachData, setCloseApproachData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateStart, setDateStart] = useState("2020-08-24");
  const [dateEnd, setDateEnd] = useState("2020-08-30");
  const [inputDateStart, setInputDateStart] = useState(dateStart);
  const [inputDateEnd, setInputDateEnd] = useState(dateEnd);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    getDAsteroids();
  }, [dateStart, dateEnd]);

  const getDAsteroids = async () => {
    try {
      setLoading(true);
      const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateStart}&end_date=${dateEnd}&api_key=7s0ep6LwhAf8zcd0EIQDjK1TptDPWvNUIRIXF1S8`;
      const response = await axios.get(NASA_URI);
      const NEOArr = Object.values(response.data.near_earth_objects);
      const flatDates = NEOArr.flat();
      const dangerousAsteroids = flatDates.filter(
        (asteroid) => asteroid.is_potentially_hazardous_asteroid
      );
      const closeApproachData = dangerousAsteroids.map(
        (dates) => dates.close_approach_data
      );
      if (dangerousAsteroids.length === 0) {
        setMessageError(
          "No hay Asteroides potencialmente peligrosos en las fechas asignadas"
        );
      }
      console.log(dangerousAsteroids);
      console.log(closeApproachData);
      setLoading(false);
      setDangerousAsteroids(dangerousAsteroids);
      setCloseApproachData(closeApproachData);
    } catch (error) {
      console.log(error.response.data.error_message);
      if (error.response.data.code === 400) {
        setMessageError("El límite de la búsqueda es de solo 7 días");
      }
    }
  };

  const handleInput = (valueDateStart, valueDateEnd) => {
    setDateStart(valueDateStart);
    setDateEnd(valueDateEnd);
    setMessageError("");
  };

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <h1>ASTEROIDS</h1>
        <h2>Asteroides potencialmente peligrosos para la tierra</h2>
        <h3>Las fechas no deben de pasar de 7 días</h3>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <form className={classes.containerGridDate} noValidate>
            <TextField
              id="dateStart"
              label="Fecha de Inicio"
              type="date"
              defaultValue={dateStart}
              className={classes.textField}
              onChange={(e) => {
                console.log("fecha inicio:", e.target.value);
                setInputDateStart(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="dateEnd"
              label="Fecha de Término"
              type="date"
              defaultValue={dateEnd}
              className={classes.textField}
              onChange={(e) => {
                console.log("fecha fin:", e.target.value);
                setInputDateEnd(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<SearchIcon />}
              // disabled="true"
              onClick={(e) => {
                e.preventDefault();
                handleInput(inputDateStart, inputDateEnd);
              }}
            >
              Buscar
            </Button>
          </form>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {messageError !== "" ? (
          <Typography className={classes.textMessageError}>
            {messageError}
          </Typography>
        ) : loading ? (
          <div className={classes.containerProgress}>
            <CircularProgress />
          </div>
        ) : (
          dangerousAsteroids.map((asteroid) => {
            return closeApproachData.map((date) => {
              console.log(asteroid, date);
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <AsteroidCard
                    key={asteroid.id}
                    src={LogoNASA}
                    title={asteroid.name}
                    numberReference={asteroid.nasa_jpl_url}
                    magnitud={asteroid.absolute_magnitude_h}
                    dangerous={asteroid.is_potentially_hazardous_asteroid}
                    closeApproachDate={date[0].close_approach_date}
                  />
                </Grid>
              );
            });
          })

          // (array.map((asteroid) => {
          //     return (
          //       <Grid item xs={12} sm={6} md={4} lg={3}>
          //         <AsteroidCard
          //           key={asteroid.id}
          //           src={LogoNASA}
          //           title={asteroid.name}
          //           numberReference={asteroid.nasa_jpl_url}
          //           magnitud={asteroid.absolute_magnitude_h}
          //           dangerous={asteroid.is_potentially_hazardous_asteroid}
          //           closeApproachDate={date[0].close_approach_date}
          //         />
          //       </Grid>
          //     );
          // }));

          // closeApproachData.map((date) => {
          //   return dangerousAsteroids.map((asteroid) => {
          //     console.log(asteroid, date);
          //     return (
          //       <Grid item xs={12} sm={6} md={4} lg={3}>
          //         <AsteroidCard
          //           key={asteroid.id}
          //           src={LogoNASA}
          //           title={asteroid.name}
          //           numberReference={asteroid.nasa_jpl_url}
          //           magnitud={asteroid.absolute_magnitude_h}
          //           dangerous={asteroid.is_potentially_hazardous_asteroid}
          //           closeApproachDate={date[0].close_approach_date}
          //         />
          //       </Grid>
          //     );
          //   });
          // })
          // (closeApproachData.map((date) => {
          //   console.log(date);
          //   return (array = (
          //     <Typography variant="body2" color="textSecondary" component="p">
          //       Fecha de aproximación cercana: {date[0].close_approach_date}
          //     </Typography>
          //   ));
          // }),
          // dangerousAsteroids.map((asteroid) => {
          //   return (
          //     <Grid item xs={12} sm={6} md={4} lg={3}>
          //       <AsteroidCard
          //         key={asteroid.id}
          //         src={LogoNASA}
          //         title={asteroid.name}
          //         numberReference={asteroid.nasa_jpl_url}
          //         magnitud={asteroid.absolute_magnitude_h}
          //         dangerous={asteroid.is_potentially_hazardous_asteroid}
          //         closeApproachDate={array}
          //       />
          //     </Grid>
          //   );
          // }))
        )}
      </Grid>
    </Grid>
  );
};

export default AsteroidsContainer;
