import { WEDDING_CONFIG } from '@/lib/wedding-config';

/**
 * Serviço de Integração com o Google Sheets
 */
export const weddingApi = {
  rsvp: {
    /**
     * Envia os dados de presença para a planilha do Google
     * @param {Object} data - Objeto contendo nome, presença, acompanhantes e recado
     */
    submit: async (data) => {
      const url = WEDDING_CONFIG.links.googleSheetsApi;
      
      if (!url) {
        console.warn('Google Sheets API URL não configurada.');
        return;
      }

      try {
        // Envio usando no-cors para evitar problemas de Preflight
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error('Erro ao enviar RSVP:', error);
        throw error;
      }
    },
  },
};
