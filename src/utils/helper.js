import compass from '../public/images/compass.jpg';
import megawati from '../public/images/megawati.jpg';
import jokowi from '../public/images/jokowi.jpg';
import three from '../public/images/3.jpg';
import four from '../public/images/4.png';
import five from '../public/images/5.jpg';
import * as crypto from 'crypto';

export const encryptBro = (key, val) => {
  var cipher = crypto.createCipher('aes-256-cbc', key);
  var crypted = cipher.update(val, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

export const decryptBro = (key, val) => {
  var decipher = crypto.createDecipher('aes-256-cbc', key);
  var dec = decipher.update(val, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

export const data = [
  {
    title: `Rilisan Terbaru Sepatu Compass \nEdisi Spesial Tahun Baru Cina`,
    date: '08-01-2022',
    image: compass,
    url: '../assets/images/compass.jpg',
    subTitle: 'Lorem ipsum dolor sit amet consectetur.',
    category: 'Fashion',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ipsam tempora officiis ducimus iste libero amet, voluptate tempore maxime?',
  },
  {
    title: 'PDIP, Golkar, PPP Membuat Koalisi\ndan Mencalonkan Donald Trump',
    date: '08-01-2022',
    category: 'Politik',
    image: megawati,
    subTitle: 'Lorem ipsum dolor sit amet.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ipsam tempora officiis ducimus iste libero amet, voluptate tempore maxime?',
    url: '../assets/images/megawati.jpg',
  },
  {
    title: 'Presiden Ucapkan Selamat,\nAtas Dilantiknya Ketua UI',
    date: '08-01-2022',
    category: 'Politik',
    image: jokowi,
    subTitle: 'Lorem, ipsum dolor.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ipsam tempora officiis ducimus iste libero amet, voluptate tempore maxime?',
    url: '../assets/images/jokowi.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.',
    date: '08-01-2022',
    category: 'Gaya Hidup',
    image: three,
    subTitle: 'Lorem ipsum dolor sit.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ipsam tempora officiis ducimus iste libero amet, voluptate tempore maxime?',
    url: '../assets/images/jokowi.jpg',
  },
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, iusto vel.',
    date: '08-01-2022',
    category: 'Teknologi',
    image: four,
    subTitle: 'Lorem, ipsum dolor.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ipsam tempora officiis ducimus iste libero amet, voluptate tempore maxime?',
    url: '../assets/images/jokowi.jpg',
  },
  {
    title:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, obcaecati.',
    date: '08-01-2022',
    category: 'Gaya Hidup',
    image: five,
    subTitle: 'Lorem ipsum dolor sit amet.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ipsam tempora officiis ducimus iste libero amet, voluptate tempore maxime?',
    url: '../assets/images/jokowi.jpg',
  },
];

const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

export const handleSessions = async (ctx, loginPage = false) => {
  let tokenfromcookie = getCookie(process.env.APPNAME, ctx.req);
  if (tokenfromcookie && loginPage) {
    return {
      redirect: {
        destination: '/',
      },
    };
  } else {
    return { props: {} };
  }
};
