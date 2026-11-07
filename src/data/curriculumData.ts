import { GroupInfo, SubmissionItem, ChapterOutline, TimelineWeek, DrillQuestion } from '../types';

export const COURSE_DETAILS = {
  name: "Pengelolaan Sumber Daya Kelautan dan Pulau-Pulau Kecil",
  code: "PjBL-IK-302",
  program: "Program Studi Ilmu Pemerintahan, Semester 3 (Tiga), TA 2026/2027",
  classes: "Kelas A & B",
  lecturer: "Dr. Bruri Melky Laimeheriwa, S.Pi., M.Si.",
  nip: "197002211998031001",
  totalJP: "39,375 JP (@ 5,625 Jam/Minggu)",
  topic: "Strategi Pengelolaan, Pengembangan, dan Mitigasi Permasalahan Pulau-Pulau Kecil Terluar (PPKT) di Indonesia: Dari Kedaulatan Wilayah Menuju Kesejahteraan Masyarakat",
  drivingQuestion: "Bagaimana merancang model pengelolaan dan pengembangan Pulau-Pulau Kecil Terluar (PPKT) yang efektif untuk memperkuat kedaulatan NKRI, meningkatkan kesejahteraan masyarakat, serta mengatasi berbagai keterbatasan geografis dan ekonomi di wilayah perbatasan?"
};

export const GROUPS_DATA: GroupInfo[] = [
  {
    id: 'group1',
    number: 1,
    name: 'Kelompok 1: Aspek Hukum & Kedaulatan',
    focus: 'Analisis regulasi (Perpres 78/2005, Kepres 6/2017) & diplomasi UNGEGN',
    targetChapters: 'Bab 1 & Bab 2',
    members: ['Jasmine Anindita Putri (Ketua)', 'Enjeli Tehusijarana', 'Marli Delya Lerebulan', 'Chika Rizkya Putri Tampalar', ' Stiven Setitit '],
    description: 'Menganalisis kriteria wilayah ≤ 2.000 km², titik dasar garis pangkal laut, penetapan 111 PPKT, serta studi kasus effective occupation Sipadan, Ligitan, Yako, dan Kambing.'
  },
  {
    id: 'group2',
    number: 2,
    name: 'Kelompok 2: Demografi & Sebaran Wilayah',
    focus: 'Analisis statistik 111 PPKT di 22 provinsi & tipologi kependudukan',
    targetChapters: 'Bab 3',
    members: ['Rian Hidayat (Ketua)', 'Fitri Anjani', 'Yoga Pratama', 'Putri Amelia'],
    description: 'Membedah sebaran PPKT (Kepri 22, Maluku 19, Sulut 12, Papua 9, Aceh/NTT 7 pulau) serta perbandingan 42 PPKT berpenduduk vs 69 PPKT tidak berpenduduk.'
  },
  {
    id: 'group3',
    number: 3,
    name: 'Kelompok 3: Analisis Permasalahan Multidimensi',
    focus: 'Investigasi keterisolasian, ekonomi maritim, SDM, dan transnational crime',
    targetChapters: 'Bab 4',
    members: ['Michael Wattimena (Ketua)', 'Clara Soplanit', 'Reza Pattiasina', 'Nabila Tualeka'],
    description: 'Menginvestigasi ketergantungan pasokan dengan negara tetangga, keterisolasian, serta ancaman illegal fishing, illegal logging, dan illegal trafficking.'
  },
  {
    id: 'group4',
    number: 4,
    name: 'Kelompok 4: Strategi Kebijakan & Editor Buku',
    focus: 'Penerapan 12 PPKT, siklus pengelolaan terpadu, roadmap, & kompilasi buku',
    targetChapters: 'Bab 5, Bab 6 & Editor Utama',
    members: ['Zulkifli Lating (Ketua/Editor)', 'Maria Renyaan', 'Fikri Haikal', 'Sarah Latumahina'],
    description: 'Merumuskan 12 prinsip kebijakan PPKT, model sinergi pengawasan perbatasan (TNI/Polri, BPPW, KKP, Pemda), policy brief, dan kompilasi akhir buku referensi.'
  }
];

export const TIMELINE_WEEKS: TimelineWeek[] = [
  {
    week: 1,
    phase: '1. Perencanaan (Project Planning)',
    title: 'Proposal Proyek & Pembagian Tugas Kelompok',
    activities: [
      'Memahami konteks data PPKT (jumlah pulau, regulasi, dan data gazetir nasional).',
      'Menentukan fokus studi kasus wilayah provinsi tertentu.'
    ],
    output: 'Proposal Proyek & Pembagian Tugas Kelompok (Minggu 1)'
  },
  {
    week: 2,
    phase: '2. Investigasi & Analisis Data',
    title: 'Pengumpulan Data Sekunder & Regulasi',
    activities: [
      'Mengumpulkan data sekunder (regulasi Perpres 78/2005 & Kepres 6/2017, data statistik KKP/UNGEGN).',
      'Menganalisis landasan historis dan hukum pulau-pulau terluar.'
    ],
    output: 'Laporan Awal Investigasi Hukum & Data Eksisting (Minggu 2)'
  },
  {
    week: 3,
    phase: '2. Investigasi & Analisis Data',
    title: 'Pemetaan Masalah & Demografi PPKT',
    activities: [
      'Menganalisis sebaran 111 PPKT di 22 provinsi serta tipologi 42 berpenduduk vs 69 tidak berpenduduk.',
      'Investigasi akar masalah multidimensi (keterisolasian, illegal fishing, perbatasan).'
    ],
    output: 'Laporan Analisis Masalah & Pemetaan Kondisi Eksisting (Minggu 3)'
  },
  {
    week: 4,
    phase: '3. Perancangan Solusi & Kebijakan',
    title: 'Formulasi Kebijakan 12 PPKT',
    activities: [
      'Menyusun strategi kebijakan merujuk pada konsep pengelolaan 12 PPKT.',
      'Merumuskan rekomendasi inovasi ekonomi maritim, pertahanan, dan peningkatan SDM.'
    ],
    output: 'Draf Bab 5: Konsep Kebijakan Strategis (Minggu 4)'
  },
  {
    week: 5,
    phase: '3. Perancangan Solusi & Kebijakan',
    title: 'Roadmap & Model Sinergi Pengawasan',
    activities: [
      'Menyusun peta jalan (roadmap) pembangunan sarana-prasarana dasar.',
      'Merumuskan model sinergi TNI/Polri, BPPW, KKP, dan Pemda.'
    ],
    output: 'Draf Kebijakan / Greenpaper Solusi Pengembangan (Minggu 5)'
  },
  {
    week: 6,
    phase: '4. Presentasi & Publikasi (Project Exhibition)',
    title: 'Infografis, Poster Kebijakan & Rekaman Video',
    activities: [
      'Mempresentasikan hasil proyek dalam bentuk infografis/slide presentasi berwarna dan interaktif.',
      'Rekaman video presentasi kelompok dan publikasi poster kebijakan.'
    ],
    output: 'Video Presentasi Kreatif & Poster Kebijakan (Minggu 6)'
  },
  {
    week: 7,
    phase: '5. Penulisan Buku (Project Publication)',
    title: 'Finalisasi Buku Referensi (Sistemik 6 Bab) & Ujian Akhir',
    activities: [
      'Penyuntingan dan layouting akhir Buku Referensi berstandar akademik.',
      'Ujian Akhir Semester (Project Exhibition Drill & Sidang Pleno).'
    ],
    output: 'Buku Referensi Final (6 Bab Sistemik) & Ujian Akhir (Minggu 7)'
  }
];

export const CHAPTER_OUTLINES: ChapterOutline[] = [
  {
    chapterNumber: 1,
    title: 'Pengantar Kedaulatan Maritim dan PPKT Indonesia',
    assignedGroup: 'Kelompok 1',
    description: 'Landasan filosofis, geopolitik, dan yuridis pengelolaan PPKT.',
    sections: [
      { code: '1.1', title: 'Pendahuluan', details: 'Kedudukan geopolitik Indonesia sebagai negara kepulauan terbesar di dunia.' },
      { code: '1.2', title: 'Definisi dan Kriteria PPKT', details: 'Kajian Perpres No. 78 Tahun 2005 (Definisi areal <= 2.000 km², titik-titik dasar garis pangkal laut).' },
      { code: '1.3', title: 'Landasan Regulasi Nasional', details: 'Keputusan Presiden (Kepres) No. 6 Tahun 2017 tentang Penetapan 111 Pulau-Pulau Kecil Terluar.' },
      { code: '1.4', title: 'Relevansi Kebijakan Pengelolaan', details: 'Pentingnya penataan kawasan terluar demi menjaga keutuhan NKRI.' }
    ]
  },
  {
    chapterNumber: 2,
    title: 'Pembakuan Nama Rupa Bumi dan Diplomasi Internasional (UNGEGN)',
    assignedGroup: 'Kelompok 1',
    description: 'Dinamika pencatatan pulau, lesson learned kedaulatan, dan kiprah UNGEGN.',
    sections: [
      { code: '2.1', title: 'Dinamika Historis Pembakuan Pulau (2005 – Sekarang)', details: 'Sejarah pencatatan dan pendataan rupa bumi unsur pulau di Indonesia.' },
      { code: '2.2', title: 'Catatan Historis & Lesson Learned Kedaulatan', details: 'Analisis lepasnya kedaulatan atas Pulau Sipadan, Ligitan, Yako, dan Kambing akibat effective occupation.' },
      { code: '2.3', title: 'Kiprah Indonesia di UNGEGN & Gazetir Nasional', details: 'Pelaporan 16.671 pulau (UNGEGN 2019), Gazetir Nasional 2020 (16.771 pulau) & Gazetir 2022 (17.024 pulau).' }
    ]
  },
  {
    chapterNumber: 3,
    title: 'Analisis Sebaran Geografis dan Demografi PPKT',
    assignedGroup: 'Kelompok 2',
    description: 'Peta sebaran 111 PPKT, tipologi kependudukan, dan layanan publik.',
    sections: [
      { code: '3.1', title: 'Peta Sebaran 111 PPKT di 22 Provinsi', details: 'Konsentrasi Kepri 22, Maluku 19, Sulut 12, Papua 9, Aceh/NTT 7 pulau, dsb.' },
      { code: '3.2', title: 'Tipologi Kependudukan PPKT', details: 'Karakteristik 42 PPKT Berpenduduk vs 69 PPKT Tidak Berpenduduk.' },
      { code: '3.3', title: 'Implikasi Tantangan Layanan Publik', details: 'Dampak aspek demografi terhadap pemenuhan sarana-prasarana dasar oleh KKP dan kementerian terkait.' }
    ]
  },
  {
    chapterNumber: 4,
    title: 'Identifikasi Tantangan dan Permasalahan Multidimensi di PPKT',
    assignedGroup: 'Kelompok 3',
    description: 'Investigasi keterisolasian, ekonomi, SDM, dan transnational crime.',
    sections: [
      { code: '4.1', title: 'Aksesibilitas dan Keterisolasian', details: 'Jauhnya jarak dari pusat pemerintahan serta keterbatasan transportasi dan komunikasi.' },
      { code: '4.2', title: 'Optimasi Potensi Ekonomi Maritim', details: 'Hambatan tata kelola sumber daya kelautan dan perikanan yang belum optimal.' },
      { code: '4.3', title: 'Kondisi Sosial-Ekonomi dan SDM', details: 'Tingkat pendidikan penduduk yang terbatas serta tingkat kesejahteraan masyarakat lokal.' },
      { code: '4.4', title: 'Ketergantungan Ekonomi Kawasan Perbatasan', details: 'Keterikatan pasokan kebutuhan sehari-hari dengan negara tetangga.' },
      { code: '4.5', title: 'Ancaman Keamanan dan Kejahatan Lintas Negara', details: 'Isu illegal fishing, illegal logging, illegal trading, hingga illegal trafficking.' }
    ]
  },
  {
    chapterNumber: 5,
    title: 'Konsep Kebijakan Pengelolaan dan Pengembangan Strategis (Fokus 12 PPKT)',
    assignedGroup: 'Kelompok 4',
    description: 'Prinsip pengelolaan berkelanjutan, visi strategis, dan siklus terpadu.',
    sections: [
      { code: '5.1', title: 'Prinsip Pengelolaan Berkelanjutan', details: 'Pemanfaatan sumber daya secara optimal, terencana, dan berkesinambungan.' },
      { code: '5.2', title: 'Arah Visi dan Kebijakan Strategis', details: 'Peningkatan SDA, sarpras perhubungan, SDM, pertahanan, dan harmonisasi regulasi.' },
      { code: '5.3', title: 'Penerapan Siklus Pengelolaan', details: 'Perencanaan, Pelaksanaan, Pengawasan, dan Pengendalian terpadu.' }
    ]
  },
  {
    chapterNumber: 6,
    title: 'Model Rekomendasi dan Rencana Aksi Percepatan Development',
    assignedGroup: 'Kelompok 4',
    description: 'Roadmap sarpras, pemberdayaan SDM, sinergi perbatasan, dan policy brief.',
    sections: [
      { code: '6.1', title: 'Peta Jalan (Roadmap) Pembangunan Sarpras PPKT', details: 'Tahapan prioritas pembangunan infrastruktur strategis.' },
      { code: '6.2', title: 'Strategi Pemberdayaan Masyarakat Lokal & Penguatan SDM', details: 'Program peningkatan kapasitas ekonomi dan pendidikan pesisir.' },
      { code: '6.3', title: 'Model Sinergi Pengawasan Perbatasan', details: 'Koordinasi terpadu TNI/Polri, BPPW, KKP, & Pemda.' },
      { code: '6.4', title: 'Penutup & Policy Brief', details: 'Kesimpulan dan Rekomendasi Kebijakan bagi Pembuat Keputusan.' }
    ]
  }
];

export const INITIAL_SUBMISSIONS: SubmissionItem[] = [
  {
    id: 'sub-1',
    groupId: 'group1',
    groupName: 'Kelompok 1 (Aspek Hukum & Kedaulatan)',
    week: 2,
    targetChapter: 'Bab 1 & Bab 2',
    title: 'Analisis Yuridis Perpres 78/2005 dan Kepres 6/2017 serta Pelajaran Effective Occupation Sipadan-Ligitan',
    content: 'Kelompok 1 telah mengkaji ketentuan Perpres No. 78 Tahun 2005 mengenai batasan wilayah PPKT dengan luas areal <= 2.000 km² serta titik dasar garis pangkal laut. Berdasarkan Kepres No. 6 Tahun 2017, ditetapkan sebanyak 111 pulau. Dari studi historis kasus Sipadan dan Ligitan, terbukti bahwa kependudukan efektif (effective occupation) dan kehadiran fisik negara sangat menentukan kedaulatan di Mahkamah Internasional.',
    author: 'Andi Pratama (Ketua Kelompok 1)',
    submittedAt: '2026-11-04 14:30',
    status: 'Approved',
    rubric: {
      cognitive: { score: 92, notes: 'Analisis regulasi Perpres 78/2005 dan Kepres 6/2017 sangat presisi dan mendalam.' },
      creativity: { score: 88, notes: 'Penyajian data historis terstruktur dengan baik dan mudah dibaca.' },
      solution: { score: 90, notes: 'Relevansi terhadap pertahanan kedaulatan NKRI sangat kuat.' }
    },
    storageTag: '[STORAGE VAULT] -> Kelompok: 1 | Minggu Ke: 2 | Bab Target: Bab 1 & 2 | Status: Approved',
    feedback: 'Sangat baik! Pertahankan ketepatan sitasi hukum dan pastikan sinkronisasi dengan data UNGEGN pada Bab 2.'
  },
  {
    id: 'sub-2',
    groupId: 'group2',
    groupName: 'Kelompok 2 (Demografi & Sebaran Wilayah)',
    week: 3,
    targetChapter: 'Bab 3',
    title: 'Pemetaan Sebaran 111 PPKT di 22 Provinsi dan Tipologi 42 Berpenduduk vs 69 Tidak Berpenduduk',
    content: 'Berdasarkan data spasial dan demografi, 111 PPKT tersebar di 22 provinsi. Konsentrasi terbanyak berada di Kepulauan Riau (22 pulau), Maluku (19 pulau), Sulawesi Utara (12 pulau), Papua (9 pulau), serta Aceh dan NTT (masing-masing 7 pulau). Dari total 111 pulau, terdapat 42 PPKT berpenduduk dan 69 PPKT tidak berpenduduk yang memerlukan pos pengamanan terpadu.',
    author: 'Rian Hidayat (Ketua Kelompok 2)',
    submittedAt: '2026-11-05 10:15',
    status: 'Approved',
    rubric: {
      cognitive: { score: 95, notes: 'Data sebaran 22 provinsi dan tipologi 42 vs 69 sangat akurat.' },
      creativity: { score: 90, notes: 'Visualisasi distribusi wilayah sangat informatif.' },
      solution: { score: 91, notes: 'Menyoroti implikasi layanan publik kementerian terkait.' }
    },
    storageTag: '[STORAGE VAULT] -> Kelompok: 2 | Minggu Ke: 3 | Bab Target: Bab 3 | Status: Approved',
    feedback: 'Data demografi sangat akurat. Perhatikan hubungan antara pulau tidak berpenduduk dengan kerawanan illegal fishing di Bab 4.'
  },
  {
    id: 'sub-3',
    groupId: 'group3',
    groupName: 'Kelompok 3 (Analisis Permasalahan Multidimensi)',
    week: 3,
    targetChapter: 'Bab 4',
    title: 'Investigasi Keterisolasian, Ketergantungan Ekonomi Perbatasan, dan Ancaman Transnational Crime di PPKT',
    content: 'Analisis mendalam menunjukkan bahwa pulau-pulau di wilayah perbatasan (seperti Miangas, Rote, atau Wetar) mengalami keterisolasian transportasi laut yang parah. Akibat mahalnya logistik domestik, masyarakat pesisir kerap menggantungkan pasokan kebutuhan pokok pada negara tetangga (Malaysia/Timor Leste/Filipina). Selain itu, maraknya illegal fishing dan illegal trafficking menjadi ancaman nyata kedaulatan.',
    author: 'Michael Wattimena (Ketua Kelompok 3)',
    submittedAt: '2026-11-05 16:45',
    status: 'Approved',
    rubric: {
      cognitive: { score: 90, notes: 'Investigasi 5 permasalahan utama di PPKT sangat komprehensif.' },
      creativity: { score: 87, notes: 'Penyusunan akar masalah menggunakan diagram fishbone yang efektif.' },
      solution: { score: 89, notes: 'Menyajikan realitas lapangan dengan tajam.' }
    },
    storageTag: '[STORAGE VAULT] -> Kelompok: 3 | Minggu Ke: 3 | Bab Target: Bab 4 | Status: Approved',
    feedback: 'Analisis permasalahan sudah tajam. Pastikan Kelompok 4 merespon seluruh 5 poin masalah ini dalam strategi kebijakan Bab 5.'
  },
  {
    id: 'sub-4',
    groupId: 'group4',
    groupName: 'Kelompok 4 (Strategi Kebijakan & Editor Buku)',
    week: 5,
    targetChapter: 'Bab 5 & Bab 6',
    title: 'Masterplan Strategi 12 PPKT, Roadmap Sarpras, Model Sinergi Pengawasan, dan Draf Kompilasi Buku',
    content: 'Kelompok 4 merumuskan strategi berbasis 12 PPKT yang mencakup kelestarian SDA, penataan sarana perhubungan, peningkatan SDM, penguatan pertahanan batas wilayah, dan harmonisasi regulasi. Roadmap pembangunan sarpras dibagi dalam 3 fase jangka pendek hingga panjang. Model sinergi pengawasan melibatkan TNI/Polri, BPPW, KKP, dan Pemda secara terpadu.',
    author: 'Zulkifli Lating (Ketua/Editor Kelompok 4)',
    submittedAt: '2026-11-06 09:00',
    status: 'Approved',
    rubric: {
      cognitive: { score: 94, notes: 'Penerapan konsep 12 PPKT dan siklus pengelolaan terpadu sangat matang.' },
      creativity: { score: 93, notes: 'Tata letak roadmap dan policy brief sangat profesional layaknya buku referensi ilmiah.' },
      solution: { score: 96, notes: 'Solusi komprehensif menjawab seluruh tantangan kedaulatan dan kesejahteraan.' }
    },
    storageTag: '[STORAGE VAULT] -> Kelompok: 4 | Minggu Ke: 5 | Bab Target: Bab 5 & 6 | Status: Approved',
    feedback: 'Luar biasa! Sebagai editor utama, Kelompok 4 telah berhasil menyatukan seluruh benang merah dari Bab 1 hingga Bab 4.'
  }
];

export const DRILL_QUESTIONS: DrillQuestion[] = [
  {
    id: 1,
    category: 'Kedaulatan & Hukum (Bab 1 & 2)',
    question: 'Mengapa kasus lepasnya Pulau Sipadan dan Ligitan menjadi pelajaran berharga (lesson learned) bagi pengelolaan 111 PPKT di Indonesia saat ini?',
    hint: 'Fokuskan pada konsep effective occupation (kehadiran fisik dan yurisdiksi efektif negara).',
    expertAnswer: 'Kasus Sipadan dan Ligitan lepas ke Malaysia karena Mahkamah Internasional (ICJ) menilai Malaysia melakukan effective occupation (pembangunan mercusuar, pengaturan penyu, dan administrasi nyata) sementara Indonesia kurang hadir secara efektif di pulau tersebut. Oleh karena itu, 111 PPKT wajib dijaga melalui pos terpadu, pembangunan infrastruktur, dan kehadiran sipil-militer.'
  },
  {
    id: 2,
    category: 'Demografi & Data Gazetir (Bab 2 & 3)',
    question: 'Jelaskan perbedaan data pulau Indonesia pada UNGEGN 2019, Gazetir Nasional 2020, dan Gazetir Nasional 2022, serta signifikansinya bagi kedaulatan!',
    hint: 'Sebutkan angka 16.671 (2019), 16.771 (2020), dan 17.024 (2022).',
    expertAnswer: 'Pelaporan resmi Indonesia di UNGEGN 2019 mencatat 16.671 pulau, yang kemudian diverifikasi dan dibakukan dalam Gazetir Nasional 2020 sebanyak 16.771 pulau, dan Gazetir Nasional 2022 menjadi 17.024 pulau. Pertambahan ini menunjukkan keberhasilan pembakuan nama rupa bumi, verifikasi titik dasar, dan pencegahan klaim sepihak oleh negara lain.'
  },
  {
    id: 3,
    category: 'Permasalahan & Solusi Kebijakan (Bab 4, 5, & 6)',
    question: 'Bagaimana model sinergi pengawasan perbatasan antara TNI/Polri, BPPW, KKP, dan Pemda dapat mengatasi ketergantungan ekonomi pulau terluar pada negara tetangga?',
    hint: 'Gabungkan aspek keamanan pertahanan dengan pembangunan ekonomi maritim dan logistik nasional.',
    expertAnswer: 'Sinergi dilakukan melalui pendekatan keamanan kesejahteraan (prosperity and security approach). TNI/Polri menjaga keamanan dari illegal fishing dan transnational crime, KKP dan Pemda membangun pusat cold storage, pelabuhan perikanan nusantara, dan subsidi logistik reguler oleh BPPW sehingga nelayan di pulau terluar dapat menjual hasil tangkapan secara langsung ke pasar domestik tanpa bergantung pada negara tetangga.'
  }
];
