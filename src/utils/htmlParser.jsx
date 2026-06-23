import React from 'react';

/**
 * Safely parses an HTML string and converts allowed tags into React elements.
 * This avoids the security risks of dangerouslySetInnerHTML.
 * 
 * @param {string} htmlString - The raw HTML string to parse.
 * @returns {React.ReactNode[] | string | null} The safe React elements or text.
 */
export const parseHtmlToReact = (htmlString) => {
  if (!htmlString) return null;
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    
    const safeTags = ['div', 'p', 'br', 'strong', 'em', 'span', 'b', 'i', 'u', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    const renderNode = (node, key) => {
      if (node.nodeType === 3) { // Node.TEXT_NODE
        return node.textContent;
      }
      if (node.nodeType === 1) { // Node.ELEMENT_NODE
        const tagName = node.tagName.toLowerCase();
        if (safeTags.includes(tagName)) {
          const children = Array.from(node.childNodes).map((child, idx) => 
            renderNode(child, idx)
          );
          return React.createElement(
            tagName,
            { key },
            children.length > 0 ? children : null
          );
        }
      }
      return null;
    };

    return Array.from(doc.body.childNodes).map((node, index) => renderNode(node, index));
  } catch (e) {
    console.error('Error parsing HTML safely', e);
    return htmlString;
  }
};
