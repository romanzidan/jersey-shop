const mainColors = {
  black: '#1F1D2B',
  black2: '#2B2937',
  black3: '#3E3B4E',
  white: '#F7F7F7',
  blue: '#0082C8',
  blue2: '#B2FEFA',
  white2: '#656565',
  white3: '#B4B4B4',
  white4: '#EAEAEA',
  blue3: '#0082C8',
  blue4: '#667DB6',
  pureWhite: '#ffffff',
  pureBlack: '#000000',
};

export const colors = {
  gradient1: mainColors.blue4,
  gradient2: mainColors.blue3,
  text: {
    white: mainColors.white,
    whiteSecond: mainColors.white2,
    black: mainColors.black,
    blue: mainColors.blue,
    cyan: mainColors.blue2,
  },
  input: {
    black: {
      label: mainColors.white,
      text: mainColors.white3,
      background: mainColors.black2,
      border: mainColors.black3,
    },
    white: {
      label: mainColors.black,
      text: mainColors.black4,
      background: mainColors.pureBlack,
      border: mainColors.white4,
    },
  },
};
