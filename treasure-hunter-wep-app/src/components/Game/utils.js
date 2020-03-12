import { VALUES } from './constants';

const getValue = () => {
  return VALUES.COVERED;
};

const isDisabled = (value) => {
  return value && value !== VALUES.TO_PLAY;
};

const getAppearance = (value) => {
  if (value === VALUES.TO_PLAY) {
    return 'ghost';
  }
  return 'default';
};

export const getConfig = (value) => {
  return {
    value: getValue(value),
    disabled: isDisabled(value),
    appearance: getAppearance(value)
  };
};
