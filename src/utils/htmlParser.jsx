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

    const tagStyles = {
      ul: 'list-disc pl-6 my-4 space-y-2',
      ol: 'list-decimal pl-6 my-4 space-y-2',
      li: 'list-item',
      p: 'leading-relaxed mb-4',
      h1: 'text-3xl font-bold mt-6 mb-4',
      h2: 'text-2xl font-bold mt-6 mb-3',
      h3: 'text-xl font-bold mt-4 mb-2',
      h4: 'text-lg font-bold mt-4 mb-2',
      h5: 'text-base font-bold mt-4 mb-1',
      h6: 'text-sm font-bold mt-4 mb-1',
    };

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
            { key, className: tagStyles[tagName] || undefined },
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
