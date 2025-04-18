// src/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow">
      <div className="flex items-center gap-3">
        {/* 절대경로 `/` 로 시작 */}
        <img src="/kohologo.jpg" alt="Global Home Logo" className="h-10" />
        {/* 필요하면 텍스트 추가 */}
        {/* <span className="text-xl font-bold">Global Home</span> */}
      </div>
      <nav>
        …
      </nav>
    </header>
  );
}
