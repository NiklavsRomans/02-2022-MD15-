type RaitingDetails = {
  rating: number
  count: number
}

type Episodes = {
  id: number
  title: string
  season: number
  episode: number
  released: string

}

type Shows = {
  id: number
  title: string
  description: string
  year: number
  isPopular: boolean
  available: boolean
  ratingDetails: RaitingDetails
  genres: string[]
  episodes: Episodes[]
}

const shows: Shows[] = [
  {
    id: 1,
    title: 'Arrow',
    description: 'It is based on the DC Comics character Green Arrow, a costumed crime-fighter',
    year: 2012,
    isPopular: false,
    available: false,
    ratingDetails: {
      rating: 8.1137,
      count: 642,
    },
    genres: ['Drama', 'Action', 'Science-Fiction'],
    episodes: [
      {
        id: 1,
        title: 'Pilot',
        season: 1,
        episode: 1,
        released: '2012-10-11 00:00:00',
      },
      {
        id: 24,
        title: 'City of Heroes',
        season: 2,
        episode: 1,
        released: '2012-10-11 00:00:00',
      },
    ],
  },
  {
    id: 2,
    title: 'Bouncers',
    description: 'Series following the brave people who keep the peace at night.',
    year: 2019,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 6.532,
      count: 583,
    },
    genres: ['Lifestyle', 'Drama'],
    episodes: [
      {
        id: 1,
        title: 'Episode 5',
        season: 1,
        episode: 5,
        released: '2019-08-28 23:00:00',
      },
      {
        id: 6,
        title: 'Episode 6',
        season: 1,
        episode: 6,
        released: '2019-08-28 23:00:00',
      },
    ],
  },
  {
    id: 3,
    title: 'Supernatural',
    description: 'Two brothers follow their father\'s footsteps as hunters, fighting evil supernatural beings',
    year: 2005,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 9.995,
      count: 50,
    },
    genres: ['Fantasy', 'Drama'],
    episodes: [
      {
        id: 2,
        title: 'Wendigo',
        season: 1,
        episode: 2,
        released: '2005-09-20 23:00:00',
      },
    ],
  },
];

export default shows;
