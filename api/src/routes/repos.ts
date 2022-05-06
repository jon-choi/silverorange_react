import { Router, Request, Response } from 'express';
import axios from 'axios';

import jsonData from '../../data/repos.json'; // importing json repo data

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Content-Type', 'application/json'); // step 4 for calls for returning results as json encoded data, change content type to application/json

  res.status(200);

  const response = await axios.get(
    'https://api.github.com/users/silverorange/repos' // using axios to fetch api data
  );

  const allData = [...jsonData, ...response.data]; // using spread operator and combining both data sources into one

  const forkedRepos = allData.filter((repo) => repo.fork === false); // step 3 calls for only returning repos where repository.fork is false

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(forkedRepos);
});
