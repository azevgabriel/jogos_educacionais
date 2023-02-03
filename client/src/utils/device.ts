import { EventTypes } from '../interfaces/device';

function checkDevice(): EventTypes {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return EventTypes.TOUCHABLE;
  } else {
    return EventTypes.MOUSE;
  }
}

export { checkDevice };
