"use client"
import React, { useState, useCallback } from "react";
import {
  Undo2,
  Redo2,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
} from "lucide-react";

export default function Editor() {
  const [currentText, setCurrentText] = useState("");
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [fontSize, setFontSize] = useState("16px");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  // New states for additional features
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState("left");
  const [listType, setListType] = useState("none");

  // Previous handlers
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrentText(newText);
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(newText);
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };

  const undo = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentText(history[currentIndex - 1]);
    }
  }, [currentIndex, history]);

  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentText(history[currentIndex + 1]);
    }
  }, [currentIndex, history]);

  const handleFontSize = (e) => {
    setFontSize(`${e.target.value}px`);
  };

  // New handlers for additional features
  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const handleAlignment = (alignment) => {
    setTextAlign(alignment);
  };

  const handleListType = (type) => {
    if (listType === type) {
      setListType("none");
    } else {
      setListType(type);
    }
  };

  // Function to format text as a list
  const formatAsList = (text, type) => {
    if (type === "none") return text;

    return text
      .split("\n")
      .map((line, index) => {
        if (!line.trim()) return line;
        const prefix = type === "numbered" ? `${index + 1}. ` : "• ";
        return line.startsWith("• ") || /^\d+\. /.test(line)
          ? line
          : prefix + line;
      })
      .join("\n");
  };

  // Handle list formatting when text changes
  const handleTextWithList = (e) => {
    let newText = e.target.value;
    if (listType !== "none") {
      newText = formatAsList(newText, listType);
    }
    handleTextChange({ target: { value: newText } });
  };

  return (
    <div className="p-4 w-full max-w-2xl mx-auto">
      <div className="mb-4 flex flex-wrap items-center gap-4 bg-gray-100 p-2 rounded">
        {/* First row of controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={undo}
            disabled={currentIndex <= 0}
            className={`p-2 rounded ${
              currentIndex <= 0 ? "text-gray-400" : "hover:bg-gray-200"
            }`}
            title="Undo"
          >
            <Undo2 size={20} />
          </button>

          <button
            onClick={redo}
            disabled={currentIndex >= history.length - 1}
            className={`p-2 rounded ${
              currentIndex >= history.length - 1
                ? "text-gray-400"
                : "hover:bg-gray-200"
            }`}
            title="Redo"
          >
            <Redo2 size={20} />
          </button>
        </div>

        {/* Font controls */}
        <div className="flex items-center gap-2">
          <Type size={20} />
          <input
            type="range"
            min="12"
            max="24"
            value={parseInt(fontSize)}
            onChange={handleFontSize}
            className="w-24"
            title="Font Size"
          />
        </div>

        {/* Text style controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsBold(!isBold)}
            className={`p-2 rounded ${
              isBold ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            title="Bold"
          >
            <Bold size={20} />
          </button>

          <button
            onClick={() => setIsItalic(!isItalic)}
            className={`p-2 rounded ${
              isItalic ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            title="Italic"
          >
            <Italic size={20} />
          </button>

          <button
            onClick={toggleUnderline}
            className={`p-2 rounded ${
              isUnderline ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            title="Underline"
          >
            <Underline size={20} />
          </button>
        </div>

        {/* Alignment controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleAlignment("left")}
            className={`p-2 rounded ${
              textAlign === "left" ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            title="Align Left"
          >
            <AlignLeft size={20} />
          </button>

          <button
            onClick={() => handleAlignment("center")}
            className={`p-2 rounded ${
              textAlign === "center" ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            title="Align Center"
          >
            <AlignCenter size={20} />
          </button>

          <button
            onClick={() => handleAlignment("right")}
            className={`p-2 rounded ${
              textAlign === "right" ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            title="Align Right"
          >
            <AlignRight size={20} />
          </button>
        </div>

        {/* List controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleListType("bullet")}
            className={`p-2 rounded ${
              listType === "bullet" ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            title="Bullet List"
          >
            <List size={20} />
          </button>

          <button
            onClick={() => handleListType("numbered")}
            className={`p-2 rounded ${
              listType === "numbered" ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            title="Numbered List"
          >
            <ListOrdered size={20} />
          </button>
        </div>
      </div>

      <textarea
        value={currentText}
        onChange={handleTextWithList}
        className="w-full h-64 p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          fontSize,
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
          textDecoration: isUnderline ? "underline" : "none",
          textAlign: textAlign,
        }}
        placeholder="Start typing here..."
      />

      <div className="mt-2 text-sm text-gray-500">
        {history.length > 0
          ? `${currentIndex + 1} / ${history.length} changes`
          : "No changes yet"}
      </div>
    </div>
  );
}
