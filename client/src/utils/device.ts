import { EventTypes } from '@interfaces/device';

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

async function getUserIp(): Promise<string> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ipify.org?format=json', true);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        const json = JSON.parse(xhr.responseText);
        resolve(json.ip);
      } else {
        reject(xhr.statusText);
      }
    };
  });
}

export { checkDevice, getUserIp };
