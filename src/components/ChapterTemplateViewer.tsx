import React, { useState } from 'react';
import { CHAPTER_OUTLINES } from '../data/curriculumData';
import { BookOpen, FileText, CheckCircle2, Shield, Download } from 'lucide-react';

export const ChapterTemplateViewer: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<number>(1);

  const currentCh = CHAPTER_OUTLINES.find(c => c.chapterNumber === activeChapter) || CHAPTER_OUTLINES[0];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 border border-cyan-500/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs mb-1">
              <Shield className="w-4 h-4" />
              <span>SISTEMATIKA STRUKTUR BUKU (TABLE OF CONTENTS)</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Template & Outline Buku Referensi PjBL (Bab 1 - 6)
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Panduan penulisan baku untuk kompilasi akhir buku referensi Mata Kuliah Pengelolaan Sumber Daya Kelautan dan Pulau-Pulau Kecil.
            </p>
          </div>
          <button
            onClick={() => alert('Template lengkap buku referensi format Word/Markdown berhasil diunduh.')}
            className="bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 shadow transition"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Template Lengkap</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chapter Selection Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">Pilih Bab Buku:</h3>
          {CHAPTER_OUTLINES.map(ch => (
            <button
              key={ch.chapterNumber}
              onClick={() => setActiveChapter(ch.chapterNumber)}
              className={`w-full text-left p-3.5 rounded-xl transition flex flex-col space-y-1 border ${
                activeChapter === ch.chapterNumber
                  ? 'bg-cyan-950/80 border-cyan-500 text-white shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-bold">BAB {ch.chapterNumber}</span>
                <span className="text-slate-400">{ch.assignedGroup}</span>
              </div>
              <div className="text-sm font-bold line-clamp-1">{ch.title}</div>
            </button>
          ))}
        </div>

        {/* Chapter Detail View */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono bg-cyan-950 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800">
                  BAB UTAMA {currentCh.chapterNumber} • Ditugaskan ke {currentCh.assignedGroup}
                </span>
                <h3 className="text-xl font-extrabold text-white mt-2">{currentCh.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{currentCh.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sub-Bab & Detail Substansi:</h4>
              <div className="space-y-3">
                {currentCh.sections.map(sec => (
                  <div key={sec.code} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start space-x-3">
                    <div className="bg-cyan-950 text-cyan-300 font-mono text-xs font-bold px-2.5 py-1 rounded border border-cyan-800">
                      {sec.code}
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm">{sec.title}</h5>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{sec.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-950/30 p-4 rounded-xl border border-blue-900/40 text-xs text-slate-300 leading-relaxed">
              <strong className="text-cyan-300">💡 Instruksi Penulisan:</strong> Setiap kelompok wajib mengacu pada standar tata tulis ilmiah, mencantumkan rujukan pustaka primer (Perpres 78/2005, Kepres 6/2017, data UNGEGN, dan Gazetir Nasional 17.024 pulau), serta memastikan kohesi dengan bab kelompok lainnya.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
