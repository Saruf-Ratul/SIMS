import mongoose, { Document, Schema } from 'mongoose';

export interface IData extends Document {
  date: string;
  vehicleRegNo: string;
  billNumber: string;
  customerOrCompanyName: string;
  driverOrTransportName: string;
  driverOrTransportPhone: string;
  serviceCharge: number;
  partsAmount: number;
  incentiveAmount: number;
  saName: string;
}

const DataSchema: Schema = new Schema({
  date: { type: String, required: true },
  vehicleRegNo: { type: String, required: true },
  billNumber: { type: String, required: true },
  customerOrCompanyName: { type: String, required: true },
  driverOrTransportName: { type: String, required: true },
  driverOrTransportPhone: { type: String, required: true },
  serviceCharge: { type: Number, required: true },
  partsAmount: { type: Number, required: true },
  incentiveAmount: { type: Number, required: true },
  saName: { type: String, required: true },
});

export default mongoose.model<IData>('Data', DataSchema);
