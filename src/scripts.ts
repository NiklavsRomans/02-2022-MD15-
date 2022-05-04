/* eslint-disable no-console */
import shows from './shows';

// Map Functions

console.log('------------------------------------------------------------------------------------');
console.log('Map Methods');
console.log('------------------------------------------------------------------------------------');
// 1) Get an array of all titles
const showTitles = shows.map((show) => show.title);
console.log('Show titles:', showTitles);

// 2) Get an array of ids
const showIds = shows.map((show) => show.id);
console.log('Show Ids:', showIds);

// 3) Get an array of ratings
const showRatings = shows.map((show) => show.ratingDetails.rating);
console.log('Show ratings:', showRatings);

// 4) Get an array of ratings rounded to 2 decimal places
const roundedRating = shows.map((show) => (+show.ratingDetails.rating.toFixed(2)));
console.log('Rounded ratings:', roundedRating);

// 5) Capitalise all genres
const capitalizeGenres = shows.map((show) => ({
  ...show, genres: show.genres.map((genre) => genre.toUpperCase()),
}));
console.log('Capitalized genres:', capitalizeGenres);

// 6) Double all ratingDetails.count

const doubleRatingDetails = shows.map((show) => ({
  ...show, ratingDetails: { ...show.ratingDetails, count: show.ratingDetails.count * 2 },
}));
console.log('Doubled ratings:', doubleRatingDetails);

// 7) Round all ratings to 2 decimal places
const roundAllRatings = shows.map((show) => ({
  ...show, ratingDetails: { ...show.ratingDetails, rating: +show.ratingDetails.rating.toFixed(2) },
}));
console.log('Rounded ratings:', roundAllRatings);

// 8) map() each object to only have id, title, description
const specificKeys = shows.map((show) => ({
  id: show.id,
  title: show.title,
  desciption: show.description,
}));
console.log('Specific keys:', specificKeys);

// 9) If id === 1, change rating to 9.9999
const changeRatingById1 = shows.map((show) => (
  show.id === 1 ? {
    ...show,
    ratingDetails: {
      ...show.ratingDetails, rating: 9.9999,
    },
  } : show
));
console.log('If id 1 then rating 9.9999:', changeRatingById1);

// 10) If id === 2, change rating to 8 and add + 1 to rating count
const changeRatingById2 = shows.map((show) => (
  show.id === 2 ? {
    ...show,
    ratingDetails: {
      ...show.ratingDetails, rating: 8, count: show.ratingDetails.count + 1,
    },
  } : show
));
console.log('If id = 2, then change rating to 8 and add + 1 to count', changeRatingById2);

// 11) If rating > 7, change isPopular value to true
const popularByRating = shows.map((show) => (
  show.ratingDetails.rating > 7 ? {
    ...show, isPopular: true,

  } : show
));
console.log('If shows rating > 7 then popular is set to true:', popularByRating);

// 12) If isPopular === true, change rating to 10
const ifPopularTrue = shows.map((show) => (
  show.isPopular ? {
    ...show,
    ratingDetails: {
      ...show.ratingDetails, rating: 10,
    },
  } : show
));
console.log('If its popular then change rating to 10', ifPopularTrue);

// 13) If genres include 'Science-Fiction', change available to true
const ifIncludesScienceFiction = shows.map((show) => (
  show.genres.includes('Science-Fiction') ? {
    ...show, available: true,
  } : show
));
console.log('Change available to true if it includes "science-fiction":', ifIncludesScienceFiction);

// 14) If isPopular === true, map() episodes,
// to be an array of episode ids, else make episodes an empty []
const mapEpisodesIfPopular = shows.map((show) => (
  show.isPopular ? {
    ...show, episodes: show.episodes.map((episode) => episode.id),
  } : {
    ...show, episodes: [],
  }
));
console.log('map Episode ids in array if show is popular:', mapEpisodesIfPopular);

// 15) Get an array of all possible genres (not [['', ''], ['']] but ['', '', ''])
const allPosibleGenres = shows.flatMap((show) => (show.genres));
console.log('All possible genres:', allPosibleGenres);

// 16) If year > 2016 and isPopular === true, add 'Documentary' to genres
const addNewGenreIfPopular = shows.map((show) => (
  show.isPopular && show.year > 2016 ? {
    ...show, genres: [...show.genres, 'Documentary'],
  } : show
));
console.log('Add new genre ("Documentary") if year > 2016 and is popular:', addNewGenreIfPopular);

// 17 If id === 1 and episode id === 24, change episode releaseDate to '2022-10-12 00:00:00'
const newReleaseDate = shows.map((show) => (
  show.id === 1 ? {
    ...show,
    episodes: show.episodes.map((episode) => (
      episode.id === 24 ? {
        ...episode, released: '2022-10-12 00:00:00',
      } : episode
    )),
  } : show
));
console.log('if episode id = 24, change releaseDate', newReleaseDate);

// Filter methods
console.log('------------------------------------------------------------------------------------');
console.log('Filter Methods');
console.log('------------------------------------------------------------------------------------');

// 18 Get all shows, where rating < 7
const showShowsRatingBelow7 = shows.filter((show) => (show.ratingDetails.rating > 7));
console.log('Show shows who ratings are below 7', showShowsRatingBelow7);

// 19 Get all shows, where description includes "DC"
const descriptionIncludes = shows.filter((show) => (show.description.includes('DC')));
console.log('Show shows who description includes "DC"', descriptionIncludes);

// 20 Get all shows, where isPopular === true
const showPopularShows = shows.filter((show) => show.isPopular);
console.log('Show only popular shows:', showPopularShows);

// 21 Get all shows, where genres include Drama
const genreIncludesDrama = shows.filter((show) => show.genres.includes('Drama'));
console.log('Show shows who genre includes "Drama":', genreIncludesDrama);

// 22 Get all shows, where episode array length >= 2
const episodeArrayLengthAboveTwo = shows.filter((show) => (show.episodes.length >= 2));
console.log('Show shows who episode array length is above or equel to 2:', episodeArrayLengthAboveTwo);

// 23 Get all shows, where episode title is Wendigo
const episodeTitleWendigo = shows.filter((show) => (show.episodes.find((title) => title.title === 'Wendigo')));
console.log('Show episode who title is "Wendigo":', episodeTitleWendigo);

// 24 Get all shows, where year is < 2019
const showYearBelow2019 = shows.filter((show) => show.year < 2019);
console.log('Show shows who year is below 2019:', showYearBelow2019);

// 25 Get all shows, where title starts with Sup
const showTitlesWithSup = shows.filter((show) => (show.title.startsWith('Sup')));
console.log('Show titles who start with "Sup":', showTitlesWithSup);

// 26 Get all shows, where id === 2
const getShowsWithIdTwo = shows.filter((show) => show.id === 2);
console.log('Shows with id 2:', getShowsWithIdTwo);

// 27 Get all shows, where id !== 2
const getShowsWithIdOfNotTwo = shows.filter((show) => show.id !== 2);
console.log('Shows with id 2:', getShowsWithIdOfNotTwo);

// 28 Get all episodes, where genres include "Drama" and rating > 7
const episodesWithGenreDramaAndRatingAboveSeven = shows.filter((show) => (
  show.genres.includes('Drama') && show.ratingDetails.rating > 7
)).flatMap((episode) => (episode.episodes));
console.log('Show episodes with show genre "Drama" and Rating above 7:', episodesWithGenreDramaAndRatingAboveSeven);
