const STORAGE_KEY = "youtube_user";

export const loadUserFromStorage = () => {
  try {
    const user = localStorage.getItem(STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("failed to load user from storage");
  }
};

export const saveUserToStorage = (user) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch (e) {
    console.error("failed to save user to storage");
  }
};

export const clearUserFromStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("failed to clear user from storage");
  }
};
