"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  Image,
  Music,
  Video,
  Code,
  Archive,
  File,
  Download,
  ExternalLink,
  Calendar,
  HardDrive,
  Search,
  Grid3X3,
  List,
} from "lucide-react";

// Enhanced Types
interface FileItem {
  id: string;
  name: string; // Display name
  type: "file" | "image" | "audio" | "video" | "code" | "archive" | "document";
  size?: string;
  dateModified?: string;
  downloadUrl?: string; // For external URLs
  filePath?: string; // For local assets in public folder
  actualFilename?: string; // Optional: override the downloaded filename
  isDownloadable?: boolean; // Optional flag to control downloadability
}

interface FolderItem {
  id: string;
  name: string;
  type: "folder";
  children: (FolderItem | FileItem)[];
  color?: "blue" | "red" | "green" | "purple" | "orange" | "pink";
}

interface MacFolderProps {
  folder: FolderItem;
  className?: string;
}

// File type icon mapping
const getFileIcon = (type: FileItem["type"]) => {
  const iconProps = { size: 20, className: "flex-shrink-0" };

  switch (type) {
    case "image":
      return <Image {...iconProps} className="text-blue-500 flex-shrink-0" />;
    case "audio":
      return <Music {...iconProps} className="text-green-500 flex-shrink-0" />;
    case "video":
      return <Video {...iconProps} className="text-purple-500 flex-shrink-0" />;
    case "code":
      return <Code {...iconProps} className="text-orange-500 flex-shrink-0" />;
    case "archive":
      return (
        <Archive {...iconProps} className="text-yellow-600 flex-shrink-0" />
      );
    case "document":
      return <FileText {...iconProps} className="text-red-500 flex-shrink-0" />;
    default:
      return <File {...iconProps} className="text-gray-500 flex-shrink-0" />;
  }
};

// Download utility function
const handleDownload = async (file: FileItem) => {
  try {
    let url = "";
    let filename = file.actualFilename || file.name; // Use actualFilename if provided

    // Determine the download URL and actual filename
    if (file.downloadUrl) {
      url = file.downloadUrl;
      // If no actualFilename provided, try to extract from URL
      if (!file.actualFilename) {
        const urlParts = new URL(url).pathname.split("/");
        const urlFilename = urlParts[urlParts.length - 1];
        if (urlFilename && urlFilename.includes(".")) {
          filename = urlFilename;
        }
      }
    } else if (file.filePath) {
      url = file.filePath;
      // If no actualFilename provided, extract from file path
      if (!file.actualFilename) {
        const pathParts = file.filePath.split("/");
        const actualFilename = pathParts[pathParts.length - 1];
        if (actualFilename) {
          filename = actualFilename;
        }
      }
    } else {
      console.error("No download URL or file path provided for:", file.name);
      return;
    }

    // Always try to download as blob first to avoid opening in new tab
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 100);
    } catch (fetchError) {
      // If fetch fails (CORS issues), fallback to direct download
      console.warn("Fetch failed, trying direct download:", fetchError);

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.style.display = "none";

      // For external URLs, try to force download
      if (file.downloadUrl) {
        link.target = "_blank";
        // Add rel attributes for security
        link.rel = "noopener noreferrer";
      }

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error("Download failed:", error);
    alert("Download failed. Please try again.");
  }
};

// Mac-style folder icon component
const MacFolderIcon: React.FC<{
  color?: string;
  size?: number;
  isHovered?: boolean;
}> = ({ color = "blue", size = 64, isHovered = false }) => {
  const colorMap = {
    blue: "#3B82F6",
    red: "#EF4444",
    green: "#10B981",
    purple: "#8B5CF6",
    orange: "#F97316",
    pink: "#EC4899",
  };

  return (
    <motion.div
      animate={{
        scale: isHovered ? 1.1 : 1,
        rotateY: isHovered ? 5 : 0,
      }}
      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width: size, height: size * 0.8 }}
      className="relative"
    >
      <svg
        width={size}
        height={size * 0.8}
        viewBox="0 0 100 80"
        className="drop-shadow-lg"
      >
        {/* Folder back */}
        <path
          d="M8 15 L8 70 Q8 75 13 75 L87 75 Q92 75 92 70 L92 20 Q92 15 87 15 L42 15 L38 10 Q36 8 33 8 L13 8 Q8 8 8 13 L8 15 Z"
          fill={colorMap[color as keyof typeof colorMap]}
          className="opacity-90"
        />

        {/* Folder front */}
        <path
          d="M8 20 L8 65 Q8 70 13 70 L87 70 Q92 70 92 65 L92 25 Q92 20 87 20 L13 20 Q8 20 8 20 Z"
          fill={colorMap[color as keyof typeof colorMap]}
        />

        {/* Highlight */}
        <path
          d="M8 20 L8 25 Q8 30 13 30 L87 30 Q92 30 92 25 L92 20 Q87 20 87 20 L13 20 Q8 20 8 20 Z"
          fill="white"
          className="opacity-20"
        />
      </svg>
    </motion.div>
  );
};

// Modal component with enhanced UI
const FolderModal: React.FC<{
  folder: FolderItem;
  isOpen: boolean;
  onClose: () => void;
  onOpenFolder: (folder: FolderItem) => void;
}> = ({ folder, isOpen, onClose, onOpenFolder }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchQuery, setSearchQuery] = useState("");

  // Fixed animation variants with proper typing
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { 
        duration: 0.3,
        ease: "easeOut" as const
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" as const
      },
    },
  };

  // Add safety check for folder and children
  const filteredItems = folder?.children ? folder.children.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  const handleItemClick = (
    item: FolderItem | FileItem,
    e: React.MouseEvent
  ) => {
    if (item.type === "folder") {
      onOpenFolder(item as FolderItem);
    } else {
      // For files, prevent default click behavior since we handle download separately
      e.preventDefault();
    }
  };

  const handleDownloadClick = (e: React.MouseEvent, file: FileItem) => {
    e.preventDefault();
    e.stopPropagation();
    handleDownload(file);
  };

  const getFileTypeCount = (type: string) => {
    return folder?.children ? folder.children.filter(item => item.type === type).length : 0;
  };

  const totalFiles = folder?.children ? folder.children.filter(item => item.type !== "folder").length : 0;
  const totalFolders = folder?.children ? folder.children.filter(item => item.type === "folder").length : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Enhanced Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 max-w-4xl w-full max-h-[85vh] overflow-hidden"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Enhanced Header with gradient background */}
              <div className="relative bg-gradient-to-r from-gray-50 to-white border-b border-gray-100/50 backdrop-blur-sm">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MacFolderIcon color={folder.color} size={40} />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        {folder?.name || "Folder"}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Archive size={14} />
                          {totalFolders} {totalFolders === 1 ? "folder" : "folders"}
                        </span>
                        <span className="flex items-center gap-1">
                          <File size={14} />
                          {totalFiles} {totalFiles === 1 ? "file" : "files"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Header Controls */}
                  <div className="flex items-center gap-3">
                    {/* View Mode Toggle */}
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-md transition-all ${
                          viewMode === "list"
                            ? "bg-white shadow-sm text-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <List size={16} />
                      </button>
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-md transition-all ${
                          viewMode === "grid"
                            ? "bg-white shadow-sm text-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <Grid3X3 size={16} />
                      </button>
                    </div>

                    {/* Close Button */}
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 group"
                    >
                      <X size={20} className="group-hover:rotate-90 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="px-6 pb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search files and folders..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 overflow-y-auto max-h-[55vh] bg-gradient-to-b from-transparent to-gray-50/30">
                {filteredItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 opacity-20">
                      <MacFolderIcon color="blue" size={80} />
                    </div>
                    <p className="text-gray-500 text-lg">
                      {searchQuery ? "No matching items found" : "This folder is empty"}
                    </p>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="mt-3 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Clear search
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        : "grid grid-cols-1 gap-2"
                    }
                  >
                    {filteredItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        className={`${
                          viewMode === "grid"
                            ? "flex flex-col items-center p-4 rounded-xl hover:bg-white/70 hover:shadow-lg"
                            : "flex items-center gap-4 p-4 rounded-xl hover:bg-white/70 hover:shadow-lg"
                        } transition-all duration-300 cursor-pointer group border border-transparent hover:border-white/50 backdrop-blur-sm ${
                          hoveredItem === item.id
                            ? "bg-white/80 shadow-xl transform scale-[1.02] border-white/50"
                            : ""
                        }`}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div
                          className={`${
                            viewMode === "grid"
                              ? "flex flex-col items-center text-center"
                              : "flex items-center gap-4 flex-1"
                          } cursor-pointer`}
                          onClick={(e) => handleItemClick(item, e)}
                        >
                          {item.type === "folder" ? (
                            <motion.div
                              whileHover={{ scale: 1.1, rotateY: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <MacFolderIcon
                                color={(item as FolderItem).color}
                                size={viewMode === "grid" ? 48 : 40}
                                isHovered={hoveredItem === item.id}
                              />
                            </motion.div>
                          ) : (
                            <motion.div
                              className={`${
                                viewMode === "grid" ? "w-12 h-12" : "w-10 h-10"
                              } flex items-center justify-center bg-white/50 rounded-lg border border-white/50`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {getFileIcon((item as FileItem).type)}
                            </motion.div>
                          )}

                          <div className={`${viewMode === "grid" ? "mt-3" : "flex-1"} min-w-0`}>
                            <h3 className={`font-semibold text-gray-900 ${viewMode === "grid" ? "text-center" : ""} truncate`}>
                              {item.name}
                            </h3>
                            <div className={`flex ${viewMode === "grid" ? "flex-col items-center" : "items-center gap-4"} text-sm text-gray-500 mt-1`}>
                              <span className="capitalize font-medium">
                                {item.type === "folder" ? "Folder" : item.type}
                              </span>
                              {item.type !== "folder" && (item as FileItem).size && (
                                <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
                                  {(item as FileItem).size}
                                </span>
                              )}
                              {item.type !== "folder" && (item as FileItem).dateModified && (
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  {(item as FileItem).dateModified}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Action buttons */}
                        <div className={`flex items-center gap-2 ${viewMode === "grid" ? "mt-3" : ""}`}>
                          {item.type !== "folder" &&
                            (item as FileItem).isDownloadable !== false &&
                            ((item as FileItem).downloadUrl ||
                              (item as FileItem).filePath) && (
                              <motion.button
                                onClick={(e) => handleDownloadClick(e, item as FileItem)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                                title="Download file"
                              >
                                <Download
                                  size={16}
                                  className="group-hover:animate-bounce"
                                />
                              </motion.button>
                            )}

                          {item.type === "folder" && (
                            <motion.div
                              initial={{ opacity: 0.5 }}
                              animate={{ opacity: hoveredItem === item.id ? 1 : 0.5 }}
                              className="text-blue-500"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="transform rotate-0 group-hover:rotate-90 transition-transform duration-200"
                              >
                                <path d="M7 14L12 9L7 4V14Z" />
                              </svg>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Enhanced Footer with stats */}
              {filteredItems.length > 0 && (
                <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100/50">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span>{filteredItems.length} items</span>
                      {searchQuery && (
                        <span className="text-blue-600">
                          filtered from {folder.children.length} total
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <HardDrive size={12} />
                      <span>Folder contents</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Main folder component
const MacFolder: React.FC<MacFolderProps> = ({ folder, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openFolders, setOpenFolders] = useState<FolderItem[]>([]);

  const handleFolderClick = () => {
    setOpenFolders([folder]);
  };

  const handleOpenFolder = (newFolder: FolderItem) => {
    setOpenFolders([...openFolders, newFolder]);
  };

  const handleCloseModal = () => {
    setOpenFolders((prev) => prev.slice(0, -1));
  };

  const currentFolder = openFolders[openFolders.length - 1];

  return (
    <>
      <motion.div
        className={`flex flex-col items-center cursor-pointer p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleFolderClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <MacFolderIcon color={folder.color} size={80} isHovered={isHovered} />
        <motion.span
          className="mt-2 text-sm font-medium text-gray-700 text-center max-w-20 truncate"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {folder.name}
        </motion.span>
      </motion.div>

      <FolderModal
        folder={currentFolder}
        isOpen={openFolders.length > 0}
        onClose={handleCloseModal}
        onOpenFolder={handleOpenFolder}
      />
    </>
  );
};


export { MacFolder, type FileItem, type FolderItem, type MacFolderProps };
