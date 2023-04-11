/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import path from "path";

import { registerPokemonRoutes } from "./pokemons/infrastructure/apirest/routes";
import { registerUserRoutes } from "./users/infrastructure/apirest/routes";
import createMQConsumer from "./pokemons/infrastructure/events/consumer";

const AMQP_URL = 'amqp://rabbitmquser:rabbitmqpassword@localhost'
const QUEUE_NAME = "test-queue"

// Create Express server
export const app = express();
let server: any;

const consumer = createMQConsumer(AMQP_URL, QUEUE_NAME);
consumer();

// Express configuration
app.set("port", process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }));

registerPokemonRoutes(app);
registerUserRoutes(app);

if (process.env.NODE_ENV !== "TEST") {
	server = app.listen(app.get("port"), () => {
		console.log(
			"  App is running at http://localhost:%d in %s mode",
			app.get("port"),
			app.get("env")
		);
		console.log("  Press CTRL-C to stop\n");
	});
}

export default server;