import Constants from 'expo-constants';

// Environment variables setup
interface ExpoConstants {
  expoConfig?: {
    extra?: {
      apiUrl?: string;
      stripePublishableKey?: string;
      firebaseConfig?: Record<string, string>;
    };
  };
}

const expoConstants = Constants as ExpoConstants;

// Default configurations across all environments
export const config = {
  // API endpoints
  apiUrl:
    expoConstants.expoConfig?.extra?.apiUrl || 'https://api.queroficha.com',

  // Domain configuration
  domain: {
    main: 'https://queroficha.com.br',
    emailVerification: 'https://queroficha.com.br/verify-email',
  },

  // Auth settings
  auth: {
    tokenStorageKey: '@QueroFicha:token',
    refreshTokenStorageKey: '@QueroFicha:refreshToken',
    userStorageKey: '@QueroFicha:user',
  },

  // App settings
  app: {
    name: 'QueroFicha',
    version: Constants.expoConfig?.version || '1.0.0',
    buildNumber:
      Constants.expoConfig?.android?.versionCode ||
      Constants.expoConfig?.ios?.buildNumber ||
      '1',
    adminFeePercentage: 5, // 5% fee on each transaction
  },

  // Firebase config
  firebase: expoConstants.expoConfig?.extra?.firebaseConfig || {
    // Default development configuration, override in app.config.js
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  },

  // Payment settings
  payment: {
    stripePublishableKey:
      expoConstants.expoConfig?.extra?.stripePublishableKey || '',
    supportedMethods: ['credit_card', 'debit_card', 'pix', 'account_balance'],
  },

  // Cache settings
  cache: {
    eventsStorageKey: '@QueroFicha:events',
    purchasesStorageKey: '@QueroFicha:purchases',
    cacheExpirationTime: 1000 * 60 * 60 * 24, // 24 hours
  },

  // Offline mode settings
  offline: {
    enableOfflineMode: true,
    syncInterval: 1000 * 60 * 5, // 5 minutes
  },
} as const;
