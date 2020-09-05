import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/App.css";
import GifCard from "../components/CardGif";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Chip from "@material-ui/core/Chip";
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
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  containerInput: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  containerTextSearch: {
    marginTop: "2%",
    marginBottom: "2%",
    minWidth: 250,
    width: "100%",
    maxWidth: 450,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chipElement: {
    marginLeft: "5%",
  },
  textElementsSearch: {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },
}));

const CardsContainer = () => {
  const classes = useStyles();
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState(["Goku"]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Al Montar el componente");
    getGifs();
    return () => {
      console.log("Al borrar el componente");
    };
  }, [query]);

  const getGifs = async () => {
    try {
      setLoading(true);
      const URL = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=28&api_key=7ejd73FIFeDTTXP814G3kYp9UameVcT7`;
      const res = await axios.get(URL);
      setGifs(res.data.data);
      setLoading(false);

      console.log(gifs);
      console.log(res.data.data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleInput = (value) => {
    console.log("escribiendo..", value);
    setQuery(value);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
    setQuery("");
    setInputValue("");
  };

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <h1>GIFS</h1>
        <div className={classes.containerInput}>
          <div>
            <InputBase
              className={classes.input}
              value={inputValue}
              placeholder="¿Qué deseas buscar?"
              inputProps={{ "aria-label": "¿qué deseas buscar?" }}
              onKeyPress={(e) => {
                if (e.charCode === 13) {
                  e.stopPropagation();
                  handleInput(inputValue);
                }
              }}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={(e) => {
                e.preventDefault();
                handleInput(inputValue);
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>

          <div className={classes.containerTextSearch}>
            <Typography className={classes.textElementsSearch}>
              Elemento buscado:
            </Typography>
            {query !== "" ? (
              <Chip
                label={query}
                color="primary"
                variant="outlined"
                size="small"
                className={classes.chipElement}
                onDelete={handleDelete}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </Grid>

      <Grid container spacing={3}>
        {loading ? (
          <div className={classes.containerProgress}>
            <CircularProgress />
          </div>
        ) : (
          gifs.map((gif) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <GifCard
                key={gif.id}
                src={gif.images.original.url}
                title={gif.title}
                date={gif.import_datetime}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default CardsContainer;
