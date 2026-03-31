// Local API using localStorage
const storage = window.localStorage;

const getItems = (key) => {
  const items = storage.getItem(key);
  return items ? JSON.parse(items) : [];
};

const saveItem = (key, item) => {
  const items = getItems(key);
  const newItem = { 
    id: Math.random().toString(36).substr(2, 9), 
    ...item,
    created_date: new Date().toISOString() 
  };
  storage.setItem(key, JSON.stringify([newItem, ...items]));
  return newItem;
};

export const weddingApi = {
  auth: {
    me: async () => ({ id: 'guest', name: 'Convidado' }),
    logout: () => {},
    redirectToLogin: () => {},
  },
  entities: {
    GuestMessage: {
      list: async () => getItems('guest_messages'),
      create: async (data) => saveItem('guest_messages', data),
    },
    RSVP: {
      create: async (data) => saveItem('rsvp_list', data),
    },
  },
};
