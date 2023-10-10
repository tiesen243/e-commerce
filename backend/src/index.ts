import app from "./app";

const port: number = Number(process.env.PORT) || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
