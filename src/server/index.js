import DataFetcher from './controllers/data-fetcher';
import WhoSampled from './clients/who-sampled';

DataFetcher.getDetailsFromQuery('drake hotline bling')
  .then(DataFetcher.getSamplesFromDetailsPage)
  .then((data) => {
    console.log(data);
  })
  .catch(e => console.log(e))


