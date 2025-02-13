import React from "react";
import "./DocumentLayout.css";

const DocumentLayout = ({ children }) => {
  return (
    <div className="main-content">
      {children} {/* Здесь будет отображаться текущий экран */}
    </div>
  );
};

export default DocumentLayout;
