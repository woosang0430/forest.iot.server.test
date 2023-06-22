const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 8090;

const fireData = {
  type: "fire",
  sensor_data: {
    temperature: 23.4,
    humidity: 67,
    co2: 550,
    tvoc: 12,
    time: "2022-11-11 09:27:35",
  },
  sensor_area: {
    position: [37.10069, 127.991871, 2.5],
    type: "circle",
    value: {
      x: 30,
      y: 30,
      angle: 60,
    },
  },
};

const firesData = [
  {
    type: "fire",
    sensor_data: {
      temperature: 23.4,
      humidity: 67,
      co2: 550,
      tvoc: 12,
      time: "2022-11-11 09:27:35",
    },
    sensor_area: {
      position: [37.10069, 127.991871, 2.5],
      type: "circle",
      value: {
        x: 30,
        y: 30,
        angle: 60,
      },
    },
  },
  {
    type: "fire",
    sensor_data: {
      temperature: 23.4,
      humidity: 67,
      co2: 550,
      tvoc: 12,
      time: "2022-11-11 09:27:35",
    },
    sensor_area: {
      position: [37.10069, 127.991871, 2.5],
      type: "circle",
      value: {
        x: 30,
        y: 30,
        angle: 60,
      },
    },
  },
  {
    type: "fire",
    sensor_data: {
      temperature: 23.4,
      humidity: 67,
      co2: 550,
      tvoc: 12,
      time: "2022-11-11 09:27:35",
    },
    sensor_area: {
      position: [37.10069, 127.991871, 2.5],
      type: "circle",
      value: {
        x: 30,
        y: 30,
        angle: 60,
      },
    },
  },
];

const soilData = {
  type: "soil",
  sensor_data: {
    soil_temperature: 2.3,
    soil_humidity: 20,
    soil_temperature_aux: 2.5,
    soil_humidity_aux: 21,
    co2: 550,
    tvoc: 12,
    time: "2022-11-11 09:27:35",
  },
  sensor_area: {
    position: [37.100946, 127.987054, 2.5],
    type: "circle",
    value: {
      x: 18,
      y: 30,
      angle: 180,
    },
  },
};

const inclData = {
  type: "incl",
  sensor_data: {
    incl_x: 2.3,
    incl_y: 20,
    geophone: 2.4,
    time: "2022-11-11 09:27:35",
  },
  sensor_area: {
    // position: [37.094294, 127.991893, 2.5], // <-- 확정
    position: [37.097774, 127.990051, 2.5],
    type: "circle",
    value: {
      x: 10,
      y: 20,
      angle: 240,
    },
  },
};

const testData = {
  type: "incl",
  sensor_data: {
    incl_x: 2.3,
    incl_y: 20,
    geophone: 2.4,
    time: "2022-11-11 09:27:35",
  },
  sensor_area: {
    // position: [37.097774, 127.990051, 2.5],
    position: [37.094594, 127.986893, 2.5],
    type: "circle",
    value: {
      x: 30,
      y: 30,
      angle: 0,
    },
  },
};

app.get("/", (req, res) => {
  res.json("OK");
});

app.get("/fire", (req, res) => {
  res.json(firesData);
});
app.get("/soil", (req, res) => {
  res.json(soilData);
});
app.get("/incline", (req, res) => {
  res.json(inclData);
});
app.get("/test", (req, res) => {
  res.json(testData);
});

app.listen(port, () => {
  console.log(
    `Eample app listening on port ${port} : http://localhost:${port}`
  );
});
