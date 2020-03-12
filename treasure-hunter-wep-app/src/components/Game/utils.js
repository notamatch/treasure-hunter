import { VALUES } from './constants';

const getValue = (value) => {
  if (!value || value === VALUES.COVERED || value === VALUES.TO_PLAY) {
    return VALUES.COVERED;
  }
  return value;
};

const isDisabled = (value) => {
  return value && value !== VALUES.TO_PLAY;
};

const getAppearance = (value) => {
  if (value === VALUES.TO_PLAY) {
    return 'ghost';
  } else if (value) {
    return 'primary'
  }
  return 'default';
};

export const getConfig = (value, win) => {
  return {
    value: getValue(value),
    disabled: win || isDisabled(value),
    appearance: getAppearance(value)
  };
};
