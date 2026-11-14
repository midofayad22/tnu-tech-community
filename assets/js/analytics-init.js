/**
 * Vercel Web Analytics Initialization
 * This is the source file that will be bundled
 */
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({
  mode: 'auto', // Automatically detect environment (production/development)
  debug: true,  // Enable debug logging in development
});
