import {api} from '../../api';
import {showService} from '../showService';

const mockReturnedSeasons = [
  {
    id: 1,
    url: 'string',
    name: 'string',
    season: 1,
    number: 1,
    type: 'string',
    airdate: 'string',
    airtime: 'string',
    airstamp: 'string',
    runtime: 'number',
    rating: {
      average: 'number',
    },
    image: {
      medium: 'string',
      original: 'string',
    },
    summary: 'string',
    _links: {
      self: {
        href: 'string',
      },
    },
  },
  {
    id: 2,
    url: 'string',
    name: 'string',
    season: 2,
    number: 2,
    type: 'string',
    airdate: 'string',
    airtime: 'string',
    airstamp: 'string',
    runtime: 'number',
    rating: {
      average: 'number',
    },
    image: {
      medium: 'string',
      original: 'string',
    },
    summary: 'string',
    _links: {
      self: {
        href: 'string',
      },
    },
  },
  {
    id: 3,
    url: 'string',
    name: 'string',
    season: 3,
    number: 3,
    type: 'string',
    airdate: 'string',
    airtime: 'string',
    airstamp: 'string',
    runtime: 'number',
    rating: {
      average: 'number',
    },
    image: {
      medium: 'string',
      original: 'string',
    },
    summary: 'string',
    _links: {
      self: {
        href: 'string',
      },
    },
  },
];

describe('ShowService', () => {
  beforeAll(() => {});
  test('retrieve all the seasons', async () => {
    const jestfn = jest
      .spyOn(api, 'get')
      .mockResolvedValue({data: mockReturnedSeasons});

    const groupedEpisodes = await showService.getEpisodes('250');

    expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
    expect(jestfn).toBeCalledTimes(1);
  });
});
