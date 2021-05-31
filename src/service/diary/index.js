import adders from './adders';
// import deleters from './deleters';
import getters from './getters';
//import updaters from './updaters';

const diaryService = (apiRequest) => {
  return {
    ...adders(apiRequest),
    ...getters(apiRequest),
    //...updaters(apiRequest),
    // ...deleters(axios),
  };
};

export default diaryService;
