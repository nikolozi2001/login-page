// This file contains code to suppress specific React Router warnings

// Override console.warn to filter out specific React Router warnings
const originalConsoleWarn = console.warn;
console.warn = function(...args) {
  // Skip React Router future flag warnings
  const warningText = args.join(' ');
  if (warningText.includes('React Router Future Flag Warning')) {
    return;
  }
  
  // Call the original console.warn with the arguments
  originalConsoleWarn.apply(console, args);
};

export default function installWarningSuppressions() {
  // This function is called to ensure the overrides are applied
  // Nothing needed here, the override happens on import
}
