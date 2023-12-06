import { atom } from "recoil";

const localStorageEffect = (key) => ({ onSet, setSelf }) => {
  if (typeof localStorage !== `undefined`) {
    const savedState = localStorage.getItem(key);
    if (savedState) {
      setSelf(JSON.parse(savedState));
    }
    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  } else {
    console.error(`localStorage is not available in this environment.`);
  }
};

export const cartItems = atom({
  key: "cartItem",
  default: [],
  effects: [
    localStorageEffect('item_saved'),
  ]
});

export const recentActivity = atom({
  key: "recentActivity",
  default: '',
  effects: [
    localStorageEffect('recent-activity'),
  ]
});

export const isOpening = atom({
  key: "isOpening",
  default: '',
  effects: [
    localStorageEffect('is-opening'),
  ]
});

export const isAuth = atom({
  key: "isAuthenticated",
  default: false,
  effects: [
    localStorageEffect('isAuthenticated'),
  ]
});


