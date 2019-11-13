const express = require("express");
const app = express();
const PORT = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Model
// View
// Controller <------
app.get("/hello", (req, res) => {
  const student = {
    name: "Soni :)",
    salary: parseInt(Math.random() * 50000),
    htmlPiece: "<script>malicious code here</script>",
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"],
    citiesWithObjs: [
      {
        name: "Valencia",
        code: "5dca8e5545b84480e22b665d"
      },
      {
        name: "Valencia de Venezuela",
        code: "5dca8e5545b84480e22b6666"
      }
    ],
    address: {
      street: "1 canada square",
      city: "london"
    }
  };

  if (student.hasOwnProperty("name")) {
    student.nameExists = true;
  } else {
    student.nameExists = false;
  }

  if (student.citiesWithObjs.length === 0) {
    student.citiesWithObjsExists = false;
  } else {
    student.citiesWithObjsExists = true;
  }

  res.render("helloView", student);
});

// if you wanted to retrieve periodically this data from the front end
// you could implement a script like this in your front
/*setInterval(() => {
    fetch("http://localhost:3000/getLatestData")
    .then(data => data.json())
    .then(data => console.log(data))
}, 1000)*/
app.get("/getLatestData", (req, res) => {
  res.json({
    apple: Math.round(Math.random() * 100),
    google: Math.round(Math.random() * 100),
    canarias: Math.round(Math.random() * 100)
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
