const DIFFICULTY_LEVEL = [
  { value: 'easy', label: 'EASY' },
  { value: 'medium', label: 'MEDIUM' },
  { value: 'hard', label: 'HARD' },
];

const DIFFICULTY_LEVEL_VALUE = {
  easy: 1,
  medium: 1.5,
  hard: 2,
};

const ROUTES = {
  HOME: '/',
  GAME: '/game',
};

const SUCCESS_INCREASE_DIFFICULTY_FACTOR = 0.01;

export {
  DIFFICULTY_LEVEL,
  DIFFICULTY_LEVEL_VALUE,
  ROUTES,
  SUCCESS_INCREASE_DIFFICULTY_FACTOR,
};