export const QUEST_FORM = ['name'];
export const QUIZ_FORM = ['name'];

export const QUEST_SETTINGS_FORM = [
  'name',
  {
    key: 'private',
    type: 'app-checkbox',
  },
];

export const QUEST_MESSAGES_FORM = {
  hi: {
    label: 'Приветсвие',
    group: ['title', 'description'],
  },
  bye: {
    label: 'Прощание',
    group: ['title', 'description'],
  },
  wrongs: {
    label: 'Ошибки',
    array: 'title',
  },
};

export const QUEST_ROUND_HINTS = {
  hints: {
    array: 'title',
  },
};
export const QUEST_ROUND_SETTINGS = [
  'name',
  {
    key: 'active',
    type: 'app-checkbox',
  },
];

export const QUIZ_ROUND_SETTINGS = ['name'];

export const QUEST_ROUND_ANSWER = {
  correctAnswer: {
    label: 'FORM.ANSWER',
    placeholder: 'FORM.ANSWER_PLACEHOLDER',
  },
};

export const QUIZ_ROUND_QUESTION = {
  questions: {
    array: {
      key: 'questions',
      group: [
        {
          key: 'id',
          hideTemplate: true,
        },
        {
          key: 'title',
          label: 'FORM.QUESTION',
          placeholder: 'FORM.QUESTION_PLACEHOLDER',
        },
      ],
    },
  },
};

export const QUEST_ROUND_QUESTION = {
  question: {
    key: 'title',
    type: 'textarea',
  },
  medias: {
    defaultValue: [],
  },
};
