import { WEDDING_CONFIG } from '@/lib/wedding-config';

/**
 * Serviço de Integração com o Google Sheets
 */
export const weddingApi = {
  rsvp: {
    /**
     * Envia os dados de presença para a planilha do Google
     */
    submit: async (data) => {
      const url = WEDDING_CONFIG.links.googleSheetsApi;
      
      if (!url) return;

      try {
        // Enviamos como texto simples para evitar erros de CORS (bloqueio do navegador)
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors', 
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(data),
        });
        
        // Com no-cors o fetch não retorna erro se o Google receber, 
        // então retornamos true por padrão
        return true;
      } catch (error) {
        console.error('Erro na integração:', error);
        throw error;
      }
    },
  },
};
