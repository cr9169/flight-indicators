import mongoose, { Schema } from "mongoose";
import { Indicators } from "./interface";

const IndicatorsSchema: Schema = new Schema(
  {
    altitude: { type: Number, required: true },
    his: { type: Number, required: true },
    adi: { type: Number, required: true },
  },
  { versionKey: false }
);

export const IndicatorsModel = mongoose.model<Indicators>(
  "Indicator",
  IndicatorsSchema
);
