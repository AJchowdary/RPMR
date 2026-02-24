/**
 * Web3Forms Configuration
 * Service: https://web3forms.com/
 * Set REACT_APP_WEB3FORMS_ACCESS_KEY in .env for production.
 */

const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'e13efa0d-5b3b-43c5-a019-e3ec0bef261a';

export const WEB3FORMS_CONFIG = {
  accessKey,
  apiEndpoint: 'https://api.web3forms.com/submit',
};

/**
 * Honey pot/spam protection field
 * This field should be hidden from users but visible to bots
 */
export const SPAM_PROTECTION_FIELD = 'website';

/**
 * Submit form to Web3Forms
 * @param {object} formData - Form data object
 * @returns {Promise} Submission result
 */
export const submitFormToWeb3Forms = async (formData) => {
  const payload = {
    ...formData,
    access_key: WEB3FORMS_CONFIG.accessKey,
    [SPAM_PROTECTION_FIELD]: '', // Honeypot field - must be empty
  };

  try {
    const response = await fetch(WEB3FORMS_CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Web3Forms submission error:', error);
    throw error;
  }
};
