import { Button, Slider } from "@mui/material";
import React, { useState } from "react";

// import icons
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";

const Home = () => {
  let [weight, setWeight] = useState(60);
  let [age, setAge] = useState(20);
  const [height, setHeight] = useState(175  );
  const [gen, setGen] = useState(null);

  const WeightIncrease = () => {
    weight += 1;
    weight >= 200 ? (weight = 199) : setWeight(weight);
  };

  const WeightDecrease = () => {
    weight -= 1;

    weight <= 0 ? (weight = 1) : setWeight(weight);
  };

  const AgeDecrease = () => {
    age -= 1;

    age <= 0 ? (age = 1) : setAge(age);
  };

  const AgeIncrease = () => {
    age += 1;
    age >= 100 ? (age = 99) : setAge(age);
  };

  const Height = (event) => {
    setHeight(event.target.value);
  };

  const GenMale = (event) => {
    setGen((event.target.disabled = true));
    console.log(event.target.disabled);
    console.log(this);
  };

  const GenFemale = (event) => {
    setGen((event.target.disabled = true));
    console.log(event.target.disabled);
    console.log(this);
  };

  return (
    <section id="home-section">
      <div className="home-content container">
        <div className="gen-box">
          <h4 className="gen-title title">Jinsingiz</h4>
          <div className="gen-buttons">
            <Button
              onClick={GenFemale}
              className="gen-button"
              variant="contained"
              color="secondary"
              startIcon={<FemaleIcon></FemaleIcon>}
            >
              Female
            </Button>
            <Button
              onClick={GenMale}
              className="gen-button"
              variant="contained"
              color="primary"
              startIcon={<MaleIcon />}
            >
              Male
            </Button>
          </div>
        </div>
        <div className="height-box">
          <h4 className="height-title title">Bo'yingiz</h4>
          <span className="height-count">{height}</span>
          <Slider
            onChange={Height}
            className="height-input"
            defaultValue={175}
            max={220}
            min={25}
            size="medium"
            sx={{ size: "small", color: "#48CFCB" }}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="weight-age__box ">
          <div className="weight-box">
            <h4 className="weight-title title">Vazningiz</h4>
            <span className="weight-count">{weight}</span>
            <div className="weight-buttons">
              <Button
                onClick={WeightDecrease}
                className="weight-button"
                variant="contained"
                color="warning"
                startIcon={<RemoveIcon />}
              />
              <Button
                onClick={WeightIncrease}
                className="weight-button"
                variant="contained"
                color="warning"
                startIcon={<AddIcon />}
              />
            </div>
          </div>
          <div className="age-box">
            <h4 className="age-title title">Yoshingiz</h4>
            <span className="age-count">{age}</span>
            <div className="age-buttons">
              <Button
                onClick={AgeDecrease}
                className="age-button"
                variant="contained"
                color="warning"
                startIcon={<RemoveIcon />}
              />
              <Button
                onClick={AgeIncrease}
                className="age-button"
                variant="contained"
                color="warning"
                startIcon={<AddIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
