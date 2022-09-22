
import mongoose from "mongoose";
const catalogSchema = new mongoose.Schema(
  {
    image: "String",
  },
  { timestamps: true }
);

const Catalog = mongoose.model("catalogs", catalogSchema);

export default Catalog ;