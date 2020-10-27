import React from "react";
export const Float: React.FC = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div::after {
        content: "";
        display: block;
        clear: both;
      }
    `}</style>
  </div>
);
export const Right: React.FC = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        float: right;
      }
    `}</style>
  </div>
);
export const Left: React.FC = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        float: left;
      }
    `}</style>
  </div>
);
