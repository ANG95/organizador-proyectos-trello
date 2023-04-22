export type NavigationPropsType = {
  navigation: NavigationType;
  route?: {
    params: any;
    key: string;
    name: string;
  };
};

export type NavigationType = {
  navigate: Function;
  goBack: Function;
  dispatch: Function;
  popToTop: Function;
  push: Function;
};
