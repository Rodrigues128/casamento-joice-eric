import { WEDDING_CONFIG } from '@/lib/wedding-config';

export const weddingApi = {
  rsvp: {
    submit: async (data) => {
      const url = WEDDING_CONFIG.links.googleSheetsApi;
      
      if (!url) return;

      try {
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors', 
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(data),
        });

        return true;
      } catch (error) {
        console.error('Erro na integração:', error);
        throw error;
      }
    },
  },
};
