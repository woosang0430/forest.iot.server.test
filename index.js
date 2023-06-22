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
      time: "2023-06-22 09:27:35",
    },
    sensor_area: {
      position: [37.093563, 127.97742, 2.5],
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
      co2: 330,
      tvoc: 12,
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.094202, 127.978965, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.09566, 127.981575, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.095951, 127.983447, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.095654, 127.984691, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.095947, 127.989691, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.095007, 127.98858, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.095163, 127.987827, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.095131, 127.987621, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.09511, 127.985937, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.095059, 127.985278, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.094187, 127.985098, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.093788, 127.986911, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.09348, 127.98713, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.092455, 127.988694, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.0921, 127.9873, 2.5],
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
      time: "2023-06-11 11:27:35",
    },
    sensor_area: {
      position: [37.091969, 127.988271, 2.5],
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
      time: "2023-06-11 08:44:35",
    },
    sensor_area: {
      position: [37.09196, 127.989146, 2.5],
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
      time: "2023-06-14 01:27:35",
    },
    sensor_area: {
      position: [37.090859, 127.988058, 2.5],
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
      time: "2023-06-21 11:25:35",
    },
    sensor_area: {
      position: [37.090052, 127.986123, 2.5],
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
