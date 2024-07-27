import React from 'react';
import FolderTree from './FolderTree';

const folderData = {
  "root": {
    "name": "root",
    "type": "folder",
    "contents": [
      {
        "name": "src",
        "type": "folder",
        "contents": [
          {
            "name": "components",
            "type": "folder",
            "contents": [
              {
                "name": "Header.js",
                "type": "file"
              },
              {
                "name": "Footer.js",
                "type": "file"
              },
              {
                "name": "Sidebar.js",
                "type": "file"
              }
            ]
          },
          {
            "name": "App.js",
            "type": "file"
          },
          {
            "name": "index.js",
            "type": "file"
          },
          {
            "name": "styles.css",
            "type": "file"
          }
        ]
      },
      {
        "name": "public",
        "type": "folder",
        "contents": [
          {
            "name": "index.html",
            "type": "file"
          },
          {
            "name": "favicon.ico",
            "type": "file"
          }
        ]
      },
      {
        "name": "package.json",
        "type": "file"
      },
      {
        "name": "README.md",
        "type": "file"
      },
      {
        "name": ".gitignore",
        "type": "file"
      }
    ]
  }
};

const App = () => (
  <div className="App">
    <h1>Folder Structure</h1>
    <FolderTree data={folderData.root} />
  </div>
);

export default App;
