import React from "react";
import { MessageAreaProps, SearchInfo } from "@/types";
import ReactMarkdown from "react-markdown";

const PremiumTypingAnimation = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-1.5">
        <div
          className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
          style={{ animationDuration: "1s", animationDelay: "0ms" }}
        ></div>
        <div
          className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
          style={{ animationDuration: "1s", animationDelay: "300ms" }}
        ></div>
        <div
          className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
          style={{ animationDuration: "1s", animationDelay: "600ms" }}
        ></div>
      </div>
    </div>
  );
};

interface SearchStagesProps {
  searchInfo: SearchInfo;
}

const SearchStages = ({ searchInfo }: SearchStagesProps) => {
  if (!searchInfo || !searchInfo.stages || searchInfo.stages.length === 0)
    return null;

  return (
    <div className="mb-3 mt-1 relative pl-4">
      {/* Search Process UI */}
      <div className="flex flex-col space-y-4 text-sm text-gray-700">
        {/* Searching Stage */}
        {searchInfo.stages.includes("searching") && (
          <div className="relative">
            {/* Green dot */}
            <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-teal-400 rounded-full z-10 shadow-sm"></div>

            {/* Connecting line to next item if reading exists */}
            {searchInfo.stages.includes("reading") && (
              <div className="absolute -left-[7px] top-3 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-teal-300 to-teal-200"></div>
            )}

            <div className="flex flex-col">
              <span className="font-medium mb-2 ml-2">Searching the web</span>

              {/* Search Query in box styling */}
              <div className="flex flex-wrap gap-2 pl-2 mt-1">
                <div className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 inline-flex items-center">
                  <svg
                    className="w-3 h-3 mr-1.5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  {searchInfo.query}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reading Stage */}
        {searchInfo.stages.includes("reading") && (
          <div className="relative">
            {/* Green dot */}
            <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-teal-400 rounded-full z-10 shadow-sm"></div>

            <div className="flex flex-col">
              <span className="font-medium mb-2 ml-2">Reading</span>

              {/* Search Results */}
              {searchInfo.urls && searchInfo.urls.length > 0 && (
                <div className="pl-2 space-y-1">
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(searchInfo.urls) ? (
                      searchInfo.urls.map((url, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 truncate max-w-[200px] transition-all duration-200 hover:bg-gray-50"
                        >
                          {typeof url === "string"
                            ? url
                            : JSON.stringify(url).substring(0, 30)}
                        </div>
                      ))
                    ) : (
                      <div className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 truncate max-w-[200px] transition-all duration-200 hover:bg-gray-50">
                        {typeof searchInfo.urls === "string"
                          ? searchInfo.urls.substring(0, 30)
                          : Array.isArray(searchInfo.urls)
                          ? JSON.stringify(searchInfo.urls).substring(0, 30)
                          : ""}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Writing Stage */}
        {searchInfo.stages.includes("writing") && (
          <div className="relative">
            {/* Green dot with subtle glow effect */}
            <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-teal-400 rounded-full z-10 shadow-sm"></div>
            <span className="font-medium pl-2">Writing answer</span>
          </div>
        )}

        {/* Error Message */}
        {searchInfo.stages.includes("error") && (
          <div className="relative">
            {/* Red dot over the vertical line */}
            <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-red-400 rounded-full z-10 shadow-sm"></div>
            <span className="font-medium">Search error</span>
            <div className="pl-4 text-xs text-red-500 mt-1">
              {searchInfo.error || "An error occurred during search."}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MessageArea = ({ messages }: MessageAreaProps) => {
  return (
    <div
      className="flex-grow overflow-y-auto bg-[#FCFCF8] border-b border-gray-100 relative"
      style={{ minHeight: 0 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-teal-50/50 to-blue-50/50 animate-gradient-x pointer-events-none"></div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-1 w-1 rounded-full bg-teal-400/20 animate-float-1 top-1/4 left-1/4"></div>
        <div className="absolute h-1 w-1 rounded-full bg-purple-400/20 animate-float-2 top-1/2 right-1/4"></div>
        <div className="absolute h-1 w-1 rounded-full bg-blue-400/20 animate-float-3 bottom-1/4 left-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto p-6 relative">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            } mb-5 animate-message-popup`}
          >
            <div className="flex flex-col max-w-[85%] w-full">
              {!message.isUser && message.searchInfo && (
                <SearchStages searchInfo={message.searchInfo} />
              )}

              <div
                className={`rounded-lg py-3 px-5 ${
                  message.isUser
                    ? "bg-gradient-to-br from-[#5E507F] to-[#4A3F71] text-white rounded-br-none shadow-md hover:shadow-lg transition-shadow duration-200"
                    : "bg-[#F3F3EE] text-gray-800 border border-gray-200 rounded-bl-none shadow-sm prose prose-sm max-w-none overflow-hidden hover:shadow-md transition-shadow duration-200"
                } animate-message-slide`}
              >
                {message.isLoading ? (
                  <PremiumTypingAnimation />
                ) : message.content ? (
                  <div className="prose-pre:max-w-full prose-pre:overflow-x-auto">
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                ) : (
                  <span className="text-gray-400 text-xs italic">
                    Waiting for response...
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageArea;
