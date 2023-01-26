import cors from "cors";
import dotenv from "dotenv";
import express from "express";
const port = process.env.PORT || 5000;

// -------------main function-----------

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  dotenv.config();
  // app.use(
  //   "/graphql",
  //   graphqlHTTP({
  //     schema,
  //     graphiql: true,
  //   })
  // );

  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
};

main().catch((error) => {
  console.log(error);
});
