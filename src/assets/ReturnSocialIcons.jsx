// import contact icons

import call from "./svgIcons/cell.svg";
import contact from "./socialLink/contacts.png";
import text from "./svgIcons/text.svg";
import whatsapp from "./svgIcons/whatsapp.svg";
import email from "./svgIcons/email.svg";

// import social icons

import instagram from "./svgIcons/instagram.svg";
import facebook from "./svgIcons/facebook.svg";
import tiktok from "./svgIcons/tiktok.svg";
import twitter from "./svgIcons/x.svg";

import linkedin from "./svgIcons/linkedin.svg";
// import twitch from "./socialLink/twitch.png";
import pinterest from "./svgIcons/pinterest.svg";
import youtube from "./svgIcons/youtube.svg";

import snapchat from "./svgIcons/snapchat.svg";
import Etsy from "./svgIcons/Etsy.svg";
// import telegram from "./socialLink/telegram.png";
// import reddit from "./socialLink/reddit.png";

// import discord from "./socialLink/discord.png";
// import tumblr from "./socialLink/tumblr.png";

// import music icons
import spotify from "./svgIcons/spotify.svg";

// import applemusic from "./socialLink/applemusic.png";
// import soundcloud from "./socialLink/soundcloud.png";

// import payment icons

import cashapp from "./svgIcons/cashapp.svg";
import paypal from "./svgIcons/paypal.svg";

// import payment icons

import website from "./socialLink/link.png";
import venmo from "./svgIcons/venmo.svg";
// import custom from "./socialLink/customlink.png";

// import pinterest from './socialLink/pinterest.png'
// import youtube from './socialLink/twitter.png'

export const contactIcons = [
  {
    name: "Call",
    img: call,
    placeholder: "Phone Number*",
  },
  {
    name: "Text",
    img: text,
    placeholder: "Phone Number*",
  },
  {
    name: "Whatsapp",
    img: whatsapp,
    placeholder: "Phone Number*",
  },
  {
    name: "Email",
    img: email,
    placeholder: "Email*",
  },
];

export const socialIcons = [
  {
    name: "Instagram",
    img: instagram,
    placeholder: "Instagram Username*",
  },
  {
    name: "Facebook",
    img: facebook,
    placeholder: "Facebook Profile Link*",
  },
  {
    name: "Tiktok",
    img: tiktok,
    placeholder: "Tiktok Username*",
  },
  {
    name: "Twitter",
    img: twitter,
    placeholder: "Twitter Username*",
  },

  {
    name: "Linkedin",
    img: linkedin,
    placeholder: "Linkedin Profile Link*",
  },
  //   {
  //     name: "Twitch",
  //     img: twitch,
  //     placeholder: "Twitch Username*",
  //   },
  {
    name: "Pinterest",
    img: pinterest,
    placeholder: "Pinterest Username*",
  },

  {
    name: "Youtube",
    img: youtube,
    placeholder: "Youtube Chanel Url*",
  },
  {
    name: "Snapchat",
    img: snapchat,
    placeholder: "Snapchat Username*",
  },
  //   {
  //     name: "Telegram",
  //     img: telegram,
  //     placeholder: "Telegram Number*",
  //   },

  //   {
  //     name: "Reddit",
  //     img: reddit,
  //     placeholder: "reddit profile Url*",
  //   },
  //   {
  //     name: "Discord",
  //     img: discord,
  //     placeholder: "Discord server link*",
  //   },
  //   {
  //     name: "Tumblr",
  //     img: tumblr,
  //     placeholder: "Telegram Number*",
  //   },
];

export const media = [
  {
    name: "Spotify",
    img: spotify,
    placeholder: "Spotify link*",
  },
  //   {
  //     name: "Apple Music",
  //     img: applemusic,
  //     placeholder: "Link to Apple Music*",
  //   },
  //   {
  //     name: "SoundCloud",
  //     img: soundcloud,
  //     placeholder: "SoundCloud username*",
  //   },
];

export const payment = [
  //   {
  //     name: "Cash App",
  //     img: cashapp,
  //     placeholder: "Cash App username*",
  //   },
  //   {
  //     name: "PayPal",
  //     img: paypal,
  //     placeholder: "paypal.me link*",
  //   },
];

export const more = [
  //   {
  //     name: "Website",
  //     img: website,
  //     placeholder: "Website link*",
  //   },
  //   {
  //     name: "Calendly",
  //     img: calendly,
  //     placeholder: "Calendly link*",
  //   },
  //   {
  //     name: "Custom link",
  //     img: custom,
  //     placeholder: "Custom link*",
  //   },
];

export let returnIcons = (id) => {
  if (id === 2) {
    return call;
  } else if (id === 5) {
    return whatsapp;
  } else if (id === 4) {
    return text;
  } else if (id === 3) {
    return email;
  } else if (id === 15) {
    return snapchat;
  } else if (id === 14) {
    return facebook;
  } else if (id === 11) {
    return instagram;
  } else if (id === 17) {
    return twitter;
  }
  //   else if (id === "Twitch") {
  //     return twitch;
  //   }
  else if (id === 16) {
    return youtube;
  } else if (id === 42) {
    return Etsy;
  }
  // else if (id === "Pinterest") {
  //   return pinterest;
  // }
  else if (id === 13) {
    return tiktok;
  } else if (id === 12) {
    return linkedin;
  } else if (id === 1) {
    return contact;
  }
  //    else if (id === "Discord") {
  //     return discord;
  //   }
  //   else if (id === "Tumblr") {
  //     return tumblr;
  //   }
  else if (id === 22) {
    return spotify;
  }
  //   else if (id === "Apple Music") {
  //     return applemusic;
  //   } else if (id === "SoundCloud") {
  //     return soundcloud;
  //   }
  else if (id === 31) {
    return cashapp;
    // cashapp
  } else if (id === 32) {
    return paypal;
  }
  // else if (id === "Calendly") {
  //     return calendly;
  //   }
  else if (id === 21) {
    return website;
  } else if (id === 33) {
    return venmo;
  }
  // else if (id === "CashApp") {
  //     return cashapp;
  //   } else if (id === "AppleMusic") {
  //     return applemusic;
  //   }
  // venmo 16
};

export let returnSocialUrl = (name, url) => {
  if (name === "Instagram") {
    return `https://www.instagram.com/${url}/`;
  } else if (name === "LinkedIn") {
    return url;
  } else if (name === "Email") {
    return `mailto:${url}`;
  } else if (name === "Whatsapp") {
    return `https://wa.me/${url}`;
  } else if (name === "Text") {
    return `sms:${url}`;
  } else if (name === "Call") {
    return `tel:${url}`;
  } else if (name === "Snapchat") {
    return `https://www.snapchat.com/add/${url}`;
  } else if (name === "Youtube") {
    return url;
  } else if (name === "Pinterest") {
    return `https://www.pinterest.com/${url}`;
  } else if (name === "CashApp") {
    return `https://cash.app/$${url}`;
  } else if (name === "PayPal") {
    return `https://www.paypal.com/paypalme/${url}`;
  } else if (name === "SoundCloud") {
    return `https://soundcloud.com/${url}`;
  } else if (name === "Reddit") {
    return `https://www.reddit.com/user/${url}`;
  }

  //   else if (name === "Reddit") {
  //     return `https://www.reddit.com/user/${url}`
  //   }
  else if (name === "Twitch") {
    return `https://www.twitch.tv/${url}`;
  } else if (name === "Twitter") {
    return `https://www.Twitter.com/${url}`;
  } else if (name === "TikTok") {
    return `https://tiktok.com/@${url}`;
  } else {
    if (url?.includes("https://")) {
      return url;
    } else {
      return `https://${url}`;
    }
  }
};
