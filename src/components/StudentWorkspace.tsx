import React, { useState } from 'react';
import { GroupInfo, SubmissionItem, RoleType } from '../types';
import { CHAPTER_OUTLINES, TIMELINE_WEEKS } from '../data/curriculumData';
import { Shield, BookOpen, Send, CheckCircle2, AlertTriangle, FileText, Sparkles, Smile, Meh, Frown } from 'lucide-react';

interface StudentWorkspaceProps {
  group: GroupInfo;
  currentRole: RoleType;
  submissions: SubmissionItem[];
  onSubmitDraft: (newSub: Omit<SubmissionItem, 'id' | 'submittedAt'>) => void;
  onSelectRole: (role: RoleType) => void;
}

export const StudentWorkspace: React.FC<StudentWorkspaceProps> = ({
  group,
  currentRole,
  submissions,
  onSubmitDraft
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState(group.members[0]);
  const [week, setWeek] = useState<number>(3);

  const groupSubmissions = submissions.filter(s => s.groupId === group.id);
  const relevantChapters = CHAPTER_OUTLINES.filter(ch => ch.assignedGroup === group.name.split(':')[0]);

  // Simple Sentiment Analysis helper
  const analyzeSentiment = (text: string) => {
    if (!text || text.length < 20) return { label: 'Belum cukup teks', score: 50, tone: 'neutral' };
    const lower = text.toLowerCase();
    const optimisticWords = ['optimal', 'strategis', 'sejahtera', 'berdaulat', 'berkembang', 'sinergi', 'berkelanjutan', 'sukses', 'kuat', 'efektif', 'maju'];
    const hesitationWords = ['kendala', 'kesulitan', 'belum', 'terbatas', 'masalah', 'ancaman', 'keraguan', 'tertinggal', 'lemah', 'risiko', 'berat'];

    let optCount = 0;
    let hesCount = 0;

    optimisticWords.forEach(w => {
      if (lower.includes(w)) optCount++;
    });
    hesitationWords.forEach(w => {
      if (lower.includes(w)) hesCount++;
    });

    const total = optCount + hesCount || 1;
    const optimismScore = Math.round((optCount / total) * 100);

    if (optimismScore >= 65) {
      return { label: 'Optimisme Tinggi & Solutif', score: optimismScore, tone: 'positive' };
    } else if (optimismScore >= 40) {
      return { label: 'Analisis Kritis & Waspada', score: optimismScore, tone: 'neutral' };
    } else {
      return { label: 'Keraguan Tinggi / Perlu Penguatan Solusi', score: optimismScore, tone: 'negative' };
    }
  };

  const currentSentiment = analyzeSentiment(content);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Mohon isi judul dan draf materi terlebih dahulu.');
      return;
    }

    const targetChap = group.targetChapters;
    const storageTag = `[STORAGE VAULT] -> Kelompok: ${group.number} | Minggu Ke: ${week} | Bab Target: ${targetChap} | Status: Pending Review`;
    
    const hasRegValidation = content.toLowerCase().includes('perpres') || content.toLowerCase().includes('kepres') || content.toLowerCase().includes('gazetir') || content.toLowerCase().includes('ungegn');
    const cogScore = hasRegValidation ? 92 : 80;
    const creScore = content.length > 200 ? 88 : 75;
    const solScore = content.toLowerCase().includes('nkri') || content.toLowerCase().includes('kesejahteraan') || content.toLowerCase().includes('perbatasan') ? 94 : 82;

    onSubmitDraft({
      groupId: group.id,
      groupName: group.name,
      week,
      targetChapter: targetChap,
      title,
      content,
      author,
      status: 'Approved',
      rubric: {
        cognitive: { score: cogScore, notes: hasRegValidation ? 'Sitasi regulasi/data gazetir terdeteksi dengan baik.' : 'Perlu memperkuat rujukan Perpres/Kepres/Gazetir.' },
        creativity: { score: creScore, notes: 'Struktur draf cukup jelas dan sistematis.' },
        solution: { score: solScore, notes: 'Relevansi terhadap kedaulatan NKRI dan kesejahteraan masyarakat pulau terluar terpenuhi.' }
      },
      storageTag: `[STORAGE VAULT] -> Kelompok: ${group.number} | Minggu Ke: ${week} | Bab Target: ${targetChap} | Status: Approved`,
      feedback: `Draf divalidasi AI & Sentimen Analisis [${currentSentiment.label} (${currentSentiment.score}% Optimisme)]. Sangat baik!`
    });

    setTitle('');
    setContent('');
    alert('Draf berhasil disetorkan ke Storage Vault dengan analisis sentimen otomatis!');
  };

  return (
    <div className="space-y-6">
      {/* Group Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 rounded-2xl p-6 border border-blue-500/30 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs mb-1">
              <Shield className="w-4 h-4" />
              <span>RUANG KERJA KELOMPOK MAHASISWA • UNIVERSITAS PATTIMURA</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {group.name}
            </h2>
            <p className="text-cyan-200 text-sm mt-1">
              Fokus Utama: <span className="font-semibold">{group.focus}</span>
            </p>
            <p className="text-slate-300 text-xs mt-1">
              Target Luaran Buku: <strong className="text-amber-300">{group.targetChapters}</strong>
            </p>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 max-w-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Anggota Kelompok:</h4>
            <div className="flex flex-wrap gap-1.5">
              {group.members.map((m, idx) => (
                <span key={idx} className="bg-slate-900 text-cyan-300 border border-cyan-500/30 px-2.5 py-1 rounded-md text-xs font-medium">
                  👤 {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Assigned Chapters & Cross-Group Synergy Detector */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-3">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Target Bab Buku Referensi</span>
            </h3>

            <div className="space-y-4">
              {relevantChapters.map(ch => (
                <div key={ch.chapterNumber} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                      BAB {ch.chapterNumber}
                    </span>
                    <span className="text-xs text-slate-400">{ch.assignedGroup}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">{ch.title}</h4>
                  <p className="text-xs text-slate-400">{ch.description}</p>
                  <div className="pt-2 border-t border-slate-900 space-y-1.5">
                    {ch.sections.map(sec => (
                      <div key={sec.code} className="text-xs text-slate-300 flex items-start space-x-2">
                        <span className="font-mono text-cyan-400 font-semibold">{sec.code}</span>
                        <span>{sec.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Group Synergy Detector (Modul 3) */}
          <div className="bg-slate-900 rounded-2xl border border-purple-500/30 p-5 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-purple-300 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Cross-Group Synergy Detector</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sistem AI mendeteksi keterkaitan substansi:
            </p>
            <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4">
              <li><strong>Kelompok 1 & 2:</strong> Data gazetir & regulasi Perpres 78/2005 menjadi fondasi dasar Bab 3.</li>
              <li><strong>Kelompok 3:</strong> 5 permasalahan multidimensi harus dijawab dalam Solusi Kebijakan Bab 5 oleh Kelompok 4.</li>
              <li><strong>Kelompok 4:</strong> Perumusan 12 PPKT wajib merujuk langsung pada temuan data demografi Kelompok 2 & tantangan perbatasan Kelompok 3.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Submission Form & Storage Vault Vaults */}
        <div className="lg:col-span-2 space-y-6">
          {/* Submission Form */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Setor Draf Milestone / Luaran Bab</h3>
                <p className="text-xs text-slate-400">Kirimkan draf analisis dengan analisis sentimen otomatis AI</p>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                Sentiment AI & Validator Aktif
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Minggu Pelaksanaan PjBL</label>
                  <select
                    value={week}
                    onChange={(e) => setWeek(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    {TIMELINE_WEEKS.map(w => (
                      <option key={w.week} value={w.week}>Minggu {w.week}: {w.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Perwakilan Pengirim</label>
                  <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    {group.members.map((m, idx) => (
                      <option key={idx} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Judul Draf / Bab</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Contoh: Analisis Kebijakan Pengelolaan PPKT di Wilayah Perbatasan..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Isi Draf / Argumen Analisis</label>
                <textarea
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Tuliskan analisis mendalam, sitasi regulasi (Perpres 78/2005 / Kepres 6/2017 / Gazetir 17.024 pulau), serta rekomendasi kebijakan..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-500 font-mono leading-relaxed"
                />
                
                {/* Realtime Sentiment Analysis Feedback Widget */}
                {content.length > 15 && (
                  <div className={`mt-3 p-3 rounded-xl border flex items-center justify-between text-xs ${
                    currentSentiment.tone === 'positive' 
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
                      : currentSentiment.tone === 'neutral'
                      ? 'bg-blue-950/40 border-blue-500/40 text-blue-200'
                      : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                  }`}>
                    <div className="flex items-center space-x-2">
                      {currentSentiment.tone === 'positive' ? <Smile className="w-4 h-4 text-emerald-400" /> : currentSentiment.tone === 'neutral' ? <Meh className="w-4 h-4 text-blue-400" /> : <Frown className="w-4 h-4 text-amber-400" />}
                      <span>Analisis Sentimen Draf: <strong>{currentSentiment.label}</strong></span>
                    </div>
                    <span className="font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Optimisme: {currentSentiment.score}%
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-lg shadow-cyan-600/30 flex items-center space-x-2 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Setor ke Storage Vault</span>
                </button>
              </div>
            </form>
          </div>

          {/* Storage Vault & Submission History */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-3">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Storage Vault & Riwayat Penyetoran Kelompok {group.number}</span>
            </h3>

            {groupSubmissions.length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-sm italic">
                Belum ada draf yang disetorkan. Gunakan form di atas untuk mengirimkan tugas kelompok.
              </div>
            ) : (
              <div className="space-y-4">
                {groupSubmissions.map(sub => (
                  <div key={sub.id} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 shadow-md">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-b border-slate-900 pb-3">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                          {sub.storageTag}
                        </span>
                        <h4 className="text-base font-bold text-white mt-1.5">{sub.title}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${
                        sub.status === 'Approved'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {sub.status === 'Approved' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                        <span>{sub.status}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
                      {sub.content}
                    </p>

                    <div className="grid grid-cols-3 gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-xs text-center font-mono">
                      <div>Kognitif: <strong className="text-cyan-400">{sub.rubric.cognitive.score}</strong></div>
                      <div>Kreatif: <strong className="text-purple-400">{sub.rubric.creativity.score}</strong></div>
                      <div>Solusi: <strong className="text-emerald-400">{sub.rubric.solution.score}</strong></div>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center justify-between pt-1">
                      <span>Pengirim: <strong>{sub.author}</strong> • {sub.submittedAt}</span>
                      <span className="text-cyan-300 font-medium">Ulasan AI: {sub.feedback}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
