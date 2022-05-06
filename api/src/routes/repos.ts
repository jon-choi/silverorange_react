import { Router, Request, Response } from 'express';
import axios from 'axios';

import jsonData from '../../data/repos.json'; // importing json repo data

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  const response = await axios.get(
    'https://api.github.com/users/silverorange/repos' // using axios to fetch api data
  );

  const allData = [...jsonData, ...response.data]; // using spread operator and combining both data sources into one

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(allData);
});
