import { startServer } from "./server";

const app = startServer();
const port = process.env.PORT || 8044;
const server = app.listen(port, () => {
  console.log("server started..port => ", port);
});
