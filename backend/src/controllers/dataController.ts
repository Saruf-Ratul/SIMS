import { Request, Response } from 'express';
import Data from '../models/Data';

export const saveData = async (req: Request, res: Response) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const fetchData = async (_req: Request, res: Response) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
