import { routesTypeDefinition } from 'src/app/utils/types';

const BASE_URL = '/admin';

export const ADMIN_ROUTES = routesTypeDefinition({
  QUESTS: {
    path: 'quests',
    fullPath: `/${BASE_URL}/quests`,
    inNav: true,
    icon: 'search',
    title: 'QUESTS',
  },
  QUEST: {
    path: 'quests/:id',
    fullPath: `/${BASE_URL}/quests/:id`,
  },
  QUEST_ROUND: {
    path: 'quests/:gameId/rounds/:roundId',
    fullPath: `/${BASE_URL}/quests/:gameId/rounds/:roundId`,
  },
  QUIZZES: {
    path: 'quizzes',
    fullPath: `/${BASE_URL}/quizzes`,
    inNav: true,
    icon: 'question_answer',
    title: 'QUIZZES',
  },
  QUIZ: {
    path: 'quizzes/:id',
    fullPath: `/${BASE_URL}/quizzes/:id`,
  },
  QUIZ_ROUND: {
    path: 'quizzes/:gameId/rounds/:roundId',
    fullPath: `/${BASE_URL}/quizzes/:gameId/rounds/:roundId`,
  },
  QUIZ_PLAYER: {
    path: 'quizzes/:gameId/players/:playerId',
    fullPath: `/${BASE_URL}/quizzes/:gameId/players/:playerId`,
  },
});
