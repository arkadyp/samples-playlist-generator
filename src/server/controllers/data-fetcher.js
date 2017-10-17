/*

methods I need
- given query, return details page

- given link to details page, return list of samples


 */

import cheerio from 'cheerio';
import request from 'request-promise-native';

const BASE_PATH = 'https://www.whosampled.com';

function getDetailsFromQuery(query) {
  query = query.replace(/ /g, '+')
  const url = `${BASE_PATH}/search/?q=${query}`;
  return request(url)
    .then(html => {
      const $ = cheerio.load(html);
      const detailsLink = $('.topHit .trackTitle')[0].attribs.href;
      console.log(detailsLink);
      console.log(`${BASE_PATH}${detailsLink}samples`);
      return `${BASE_PATH}${detailsLink}samples`;
    })
    .catch(e => console.log(e))

}

function getSamplesFromDetailsPage(url) {
  return request(url)
    .then(html => {
      const $ = cheerio.load(html);
      const result = [];
      $('.trackName').each((i, el) => {
        result.push(el.children[0].data);
      });
      return result;
    })
}

export default {
  getDetailsFromQuery,
  getSamplesFromDetailsPage,
}