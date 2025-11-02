import React from "react";
import { MacFolder, type FolderItem } from "@/lib/docs/ui/folder";

const FolderDemo = () => {
  const sampleFolderStructureWithDownloads: FolderItem = {
    id: "root",
    name: "My Projects",
    type: "folder",
    color: "blue",
    children: [
      {
        id: "design",
        name: "Design Assets",
        type: "folder",
        color: "purple",
        children: [
          {
            id: "logo",
            name: "Logo.sketch", // Display name
            type: "image",
            size: "2.4 MB",
            dateModified: "Today",
            filePath: "/assets/mobile.png", // Actual file path
            actualFilename: "mobile.png", // This will be the downloaded filename
            isDownloadable: true,
          },
          {
            id: "sample-image",
            name: "Sample Image.jpg", // Display name
            type: "image",
            size: "1.2 MB",
            dateModified: "Today",
            downloadUrl:
              "https://raw.githubusercontent.com/vishxly/Certification/refs/heads/main/2k_uranus.jpg",
            actualFilename: "uranus-image.jpg", // Custom download filename
            isDownloadable: true,
          },
          {
            id: "mockup",
            name: "App Mockup.fig",
            type: "image",
            size: "15.7 MB",
            dateModified: "2 days ago",
            filePath: "/assets/design/mockup.fig",
            // No actualFilename provided, so it will use "mockup.fig" from the path
            isDownloadable: true,
          },
        ],
      },
      {
        id: "development",
        name: "Development",
        type: "folder",
        color: "green",
        children: [
          {
            id: "readme",
            name: "README.md",
            type: "document",
            size: "1.2 KB",
            dateModified: "Yesterday",
            filePath: "/assets/docs/readme.md",
            isDownloadable: true,
          },
          {
            id: "config",
            name: "config.json",
            type: "code",
            size: "500 B",
            dateModified: "Yesterday",
            // This file might not be downloadable
            isDownloadable: false,
          },
        ],
      },
      {
        id: "media",
        name: "Media Files",
        type: "folder",
        color: "red",
        children: [
          {
            id: "video1",
            name: "Demo Video.mp4",
            type: "video",
            size: "125 MB",
            dateModified: "Last week",
            downloadUrl:
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            actualFilename: "big-buck-bunny-demo.mp4",
            isDownloadable: true,
          },
          {
            id: "audio1",
            name: "Background Music.mp3",
            type: "audio",
            size: "8.2 MB",
            dateModified: "Last week",
            filePath: "/assets/audio/background.mp3",
            isDownloadable: true,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">
          Folder Explorer
        </h1>
        <MacFolder folder={sampleFolderStructureWithDownloads} />

        
      </div>
    </div>
  );
};

export default FolderDemo;
