import { marked } from 'marked';

export const formatRelativeTime = (date) => {
  if (!date) {
    return 'Date unavailable';
  }

  let dateObject;
  try {
    // Attempt to create a Date object
    dateObject = new Date(date);
    // Check if the date is valid
    if (isNaN(dateObject.getTime())) {
      return 'Invalid date';
    }
  } catch (e) {
    return 'Invalid date';
  }


  const now = new Date();
  const diffInMilliseconds = now.getTime() - dateObject.getTime();
  const diffInSeconds = Math.abs(Math.round(diffInMilliseconds / 1000)); // Use absolute value for future dates too

  const minutes = Math.round(diffInSeconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30.44); // Approximate days in a month
  const years = Math.round(days / 365.25); // Approximate days in a year

  if (diffInMilliseconds < 0) {
    // Future dates - this simplified version won't handle "in X time" well,
    // returning "0 seconds ago" or similar. You might want to refine this
    // if future dates are a requirement.
    return 'just now'; // Or handle future dates differently
  }


  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (days < 30) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (months < 12) {
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
};

export const removeFileExtension = (filename) => {
  if (!filename) {
    return '';
  }
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) {
    // No extension found
    return filename;
  }
  return filename.substring(0, lastDotIndex);
};

export const convertMarkdownToHtml = (markdownText) => {
  if (!markdownText) {
    return '';
  }
  const html = marked(markdownText);

  return html;
};

export const removeTripleBackticks = (text) => {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let cleanedText = text.trim(); // Remove leading/trailing whitespace

  // Remove triple backticks from the beginning
  if (cleanedText.startsWith('```')) {
    // Find the first newline after the opening backticks
    const firstNewlineIndex = cleanedText.indexOf('\n');

    if (firstNewlineIndex !== -1) {
      // Check if there's a language identifier (no whitespace or just spaces after ```)
      const potentialLang = cleanedText.substring(3, firstNewlineIndex).trim();
      if (potentialLang.indexOf(' ') === -1) {
        // Assumes anything after ``` and before the first newline that doesn't contain spaces is a language specifier
        cleanedText = cleanedText.substring(firstNewlineIndex + 1); // Remove ``` and the language line
      } else {
        // No clear language specifier, just remove ```
        cleanedText = cleanedText.substring(3);
      }
    } else {
      // No newline after ```, just remove ```
      cleanedText = cleanedText.substring(3);
    }
  }

  // Remove triple backticks from the end
  if (cleanedText.endsWith('```')) {
    cleanedText = cleanedText.substring(0, cleanedText.length - 3);
  }

  // Trim again in case removing backticks introduced new leading/trailing whitespace
  return cleanedText.trim();
};

export function stripHtmlTags(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}


