  require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  authCtrl = require("./controllers/authController"),
  productCtrl = require("./controllers/productController"),
  checkUser = require('./middlewares/checkUser'),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
  
const app = express();

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 },
    secret: SESSION_SECRET
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db);
  console.log("DB Connected");
});

//AUTH ENDPOINTS
app.post("/api/login", checkUser, authCtrl.login);
app.post("/api/register", checkUser, authCtrl.register);
app.post("/api/logout", authCtrl.logout);
app.get("/api/user", checkUser);

//PRODUCT ENDPOINTS
app.get('/api/products', productCtrl.getProducts)


app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));

