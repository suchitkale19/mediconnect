import express from "express";
import cors from "cors";
import helmet from "helmet";
import doctorRouter from "./routes/doctorRoutes.js";
import userRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import { globalErrorHandler } from "./controllers/errorController.js";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admin", adminRouter);

app.all("/*splat", (req, res, next) => {
  next(new AppError(`Can't find the ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

export default app;
