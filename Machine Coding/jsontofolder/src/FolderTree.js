import React from 'react';

// Function to recursively render folders and files
const renderTree = (node) => {
  if (node.type === 'folder') {
    return (
      <div key={node.name} style={{ marginLeft: 20 }}>
        <strong>{node.name}/</strong>
        {node.contents && node.contents.map((child) => renderTree(child))}
      </div>
    );
  } else if (node.type === 'file') {
    return (
      <div key={node.name} style={{ marginLeft: 40 }}>
        {node.name}
      </div>
    );
  }
  return null;
};

const FolderTree = ({ data }) => {
  return <div>{renderTree(data)}</div>;
};

export default FolderTree;
