import { CLOSE } from './close';
import { USER_INPUT } from './userInput';
import { OPEN_EYE } from './openEye';
import { CLOSED_EYE } from './closedEye';
import { CLOSE_CIRCLE } from './closeCircle';
import { PERSONAL_INFO_FILL } from './personalInfoFill';
import { ARROW_LEFT } from './arrowLeft';
import { NUMERAL } from './numeral';
import { CHECK_RIGHT } from './checkRight';
import { ARROW_BOTTOM } from './arrowButton'
import { CHECK_CIRCLE } from './checkCircle'
import { CAMERA } from './camera';
import { WARNING } from './warning';
import { PADLOCK } from './padlock';
import { PENCIL } from './pencil'
import { SEARCH } from './search'
import { ADD_USER } from './addUser'
import { LOCATION } from './location'
import { SEND_MESSAGE } from './arrowSendMessage'
import { PERU_FLAG } from './peruFlag'
import { LOGOUT } from './logout'
import { BELL } from './bell';
import { EDIT } from './edit';
import { CHECKED } from './checked';
import { SAVE } from './save';
import { TRASH } from './trash';
import { MAP } from './map';
import { MAP_FILL } from './mapFill';
import { VERTICAL_POINTS } from './verticalPoints';
import { ADDRESS_POSITION } from './addressPosition';
import { CIRCLE_PLUS } from './circlePlus';

export const icons = {
  userInput: USER_INPUT,
  close: CLOSE,
  openEye: OPEN_EYE,
  closedEye: CLOSED_EYE,
  closeCircle: CLOSE_CIRCLE,
  personalInfoFill: PERSONAL_INFO_FILL,
  arrowLeft: ARROW_LEFT,
  numeral: NUMERAL,
  checkRight: CHECK_RIGHT,
  arrowBottom: ARROW_BOTTOM,
  checkCircle: CHECK_CIRCLE,
  camera: CAMERA,
  warning: WARNING,
  padlock: PADLOCK,
  pencil: PENCIL,
  search: SEARCH,
  addUser: ADD_USER,
  location: LOCATION,
  sendMessage: SEND_MESSAGE,
  peruFlag: PERU_FLAG,
  logout: LOGOUT,
  bell: BELL,
  edit: EDIT,
  checked: CHECKED,
  save: SAVE,
  trash: TRASH,
  map: MAP,
  mapFill: MAP_FILL,
  options: VERTICAL_POINTS,
  newAddress: ADDRESS_POSITION,
  circlePlus: CIRCLE_PLUS
};

export type SvgIconTypes = keyof typeof icons;
