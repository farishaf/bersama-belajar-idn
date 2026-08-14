export type Bi = { en: string; id: string };

export const nav = {
  story: { en: "Our story", id: "Cerita kami" },
  place: { en: "Karang Pola", id: "Karang Pola" },
  impact: { en: "What we measure", id: "Yang kami ukur" },
  who: { en: "Who we are", id: "Siapa kami" },
  activities: { en: "Activities", id: "Kegiatan" },
  join: { en: "Get involved", id: "Ikut terlibat" },
  donate: { en: "Contribute", id: "Kontribusi" },
};

export const hero = {
  kicker: "Kampung Pemulung Karang Pola · Jakarta Selatan",
  title: {
    en: "Breaking cycles, expanding possibilities.",
    id: "Memutus siklus, membuka kemungkinan.",
  } satisfies Bi,
  body: {
    en: "A small community building an environment where children want to learn — and where learning actually leads somewhere.",
    id: "Komunitas kecil yang membangun lingkungan di mana anak-anak ingin belajar — dan belajar benar-benar membuka jalan.",
  } satisfies Bi,
  volunteer: { en: "Volunteer with us", id: "Jadi relawan" } satisfies Bi,
  readStory: { en: "Read our story", id: "Baca cerita kami" } satisfies Bi,
};

export const stats: { value: string; color: "orange" | "red" | "blue" | "ink"; label: Bi }[] = [
  { value: "30", color: "orange", label: { en: "children, ages 3–13", id: "anak, usia 3–13" } },
  { value: "5", color: "red", label: { en: "core team members", id: "anggota tim inti" } },
  { value: "20+", color: "blue", label: { en: "external volunteers", id: "relawan eksternal" } },
  { value: "", color: "ink", label: { en: "every week, 2–3 hours", id: "setiap pekan, 2–3 jam" } },
];
export const statsSundays: Bi = { en: "Sundays", id: "Minggu" };

export const place = {
  eyebrow: { en: "The place", id: "Tentang tempatnya" } satisfies Bi,
  title: {
    en: "500 meters from one of Jakarta's best public high schools.",
    id: "500 meter dari salah satu SMA negeri terbaik di Jakarta.",
  } satisfies Bi,
  body: {
    en: "That is how close Karang Pola sits to opportunity. The distance is short — the gap is enormous. What the community taught us is that education was never the whole story: the barriers start long before a child ever enters a classroom.",
    id: "Sedekat itu Karang Pola dengan kesempatan. Jaraknya pendek — kesenjangannya besar. Warga mengajarkan kami bahwa pendidikan tidak pernah menjadi satu-satunya cerita: hambatannya dimulai jauh sebelum anak masuk kelas.",
  } satisfies Bi,
};

export const barriers: { color: "yellow" | "red" | "blue"; title: Bi; body: Bi }[] = [
  {
    color: "yellow",
    title: { en: "Legal barriers", id: "Hambatan legal" },
    body: {
      en: "Missing documents keep children out of the system before they can even enrol.",
      id: "Dokumen yang tidak lengkap membuat anak tertinggal dari sistem bahkan sebelum bisa mendaftar.",
    },
  },
  {
    color: "red",
    title: { en: "Educational barriers", id: "Hambatan pendidikan" },
    body: {
      en: "Gaps compound early, and there is rarely anyone able to help a child catch up.",
      id: "Ketertinggalan menumpuk sejak dini, dan jarang ada yang bisa membantu anak mengejar.",
    },
  },
  {
    color: "blue",
    title: { en: "Structural barriers", id: "Hambatan struktural" },
    body: {
      en: "Income, housing and health shape whether school is possible at all.",
      id: "Penghasilan, tempat tinggal, dan kesehatan menentukan apakah sekolah mungkin dijalani.",
    },
  },
];

export const story = {
  eyebrow: { en: "Our story", id: "Cerita kami" } satisfies Bi,
  title: {
    en: "Thirty children. Every Sunday. For years now.",
    id: "Tiga puluh anak. Setiap Minggu. Bertahun-tahun.",
  } satisfies Bi,
  body: {
    en: "None of it was planned. Here is how it started.",
    id: "Tidak ada yang direncanakan. Begini awalnya.",
  } satisfies Bi,
};

export const beginning = {
  eyebrow: { en: "The beginning", id: "Awal mula" } satisfies Bi,
  title: { en: "Where it all began", id: "Awal mula semuanya" } satisfies Bi,
  bodyA: {
    en: "Bersama Belajar was never part of the original plan. A thesis became a lifelong commitment once it was clear that research alone would never change children's realities — so research turned into long-term community engagement.",
    id: "Bersama Belajar tidak pernah ada dalam rencana awal. Sebuah skripsi berubah menjadi komitmen seumur hidup ketika jelas bahwa riset saja tidak akan pernah mengubah kenyataan anak-anak — riset itu berkembang menjadi keterlibatan jangka panjang bersama warga.",
  } satisfies Bi,
  quote: {
    en: "“If education wasn't the only problem, it couldn't be the only solution.”",
    id: "“Kalau pendidikan bukan satu-satunya masalah, ia tidak bisa jadi satu-satunya solusi.”",
  } satisfies Bi,
  bodyB: {
    en: "So we changed the question — from “How can we teach them?” to “How can education become a pathway to a different future?”",
    id: "Maka kami mengubah pertanyaannya — dari “Bagaimana kami mengajar mereka?” menjadi “Bagaimana pendidikan bisa menjadi jalan menuju masa depan yang berbeda?”",
  } satisfies Bi,
};

export const pillars: { num: string; color: "orange" | "red" | "blue" | "ink"; title: Bi }[] = [
  { num: "01", color: "orange", title: { en: "Academic learning", id: "Pembelajaran akademik" } },
  { num: "02", color: "red", title: { en: "Character development", id: "Pengembangan karakter" } },
  { num: "03", color: "blue", title: { en: "Future readiness", id: "Kesiapan masa depan" } },
  { num: "04", color: "ink", title: { en: "Community connection", id: "Keterhubungan komunitas" } },
];
export const pillarsHeading = { en: "Four learning pillars", id: "Empat pilar belajar" } satisfies Bi;
export const pillarsSub = { en: "and, above all of them, hope", id: "dan, di atas semuanya, harapan" } satisfies Bi;

export const impact = {
  eyebrow: { en: "Progress", id: "Perkembangan" } satisfies Bi,
  title: { en: "What we measure", id: "Yang kami ukur" } satisfies Bi,
  academic: {
    title: { en: "Academic indicators", id: "Indikator akademik" } satisfies Bi,
    body: {
      en: "Basic reading; English reading, grammar, vocabulary and speaking; mathematics; and a target set for the next assessment.",
      id: "Membaca dasar; bahasa Inggris (membaca, tata bahasa, kosakata, berbicara); matematika; dan target untuk asesmen berikutnya.",
    } satisfies Bi,
  },
  social: {
    title: { en: "Socio-emotional indicators", id: "Indikator sosial-emosional" } satisfies Bi,
    body: {
      en: "More confident, more respectful, more curious, more expressive — and more willing to dream.",
      id: "Lebih percaya diri, lebih menghargai, lebih ingin tahu, lebih ekspresif — dan lebih berani bermimpi.",
    } satisfies Bi,
  },
  howWeTeach: { en: "How we teach", id: "Cara kami mengajar" } satisfies Bi,
  tags: [
    { en: "Level-based curriculum", id: "Kurikulum berjenjang" },
    { en: "Interactive games", id: "Permainan interaktif" },
    { en: "Storytelling", id: "Mendongeng" },
    { en: "Reading habits", id: "Kebiasaan membaca" },
    { en: "English conversations", id: "Percakapan bahasa Inggris" },
    { en: "Small-group learning", id: "Belajar kelompok kecil" },
  ] as Bi[],
};

export const beyond = {
  title: { en: "Beyond the classroom", id: "Di luar ruang kelas" } satisfies Bi,
  quote: {
    en: "“Community work begins where classrooms end.”",
    id: "“Kerja komunitas dimulai di tempat kelas berakhir.”",
  } satisfies Bi,
  lead: { en: "Beyond teaching, we also try to help with:", id: "Selain mengajar, kami juga berusaha membantu:" } satisfies Bi,
  items: [
    { en: "Legal identity applications", id: "Pengurusan identitas legal" },
    { en: "Connecting families to healthcare", id: "Menghubungkan keluarga ke layanan kesehatan" },
    { en: "Emergency referrals", id: "Rujukan darurat" },
    { en: "Coordinating with partners", id: "Koordinasi dengan mitra" },
    { en: "Raising awareness", id: "Meningkatkan kesadaran publik" },
    { en: "Working with government institutions", id: "Bekerja dengan instansi pemerintah" },
    { en: "Building trust with parents", id: "Membangun kepercayaan dengan orang tua" },
  ] as Bi[],
};

export const nextSteps = {
  eyebrow: { en: "Looking ahead", id: "Ke depan" } satisfies Bi,
  title: { en: "What's next?", id: "Apa selanjutnya?" } satisfies Bi,
  items: [
    { en: "A permanent learning center", id: "Pusat belajar permanen" },
    { en: "A scholarship pathway", id: "Jalur beasiswa" },
    { en: "Deeper stakeholder engagement", id: "Keterlibatan pemangku kepentingan" },
    { en: "Youth mentorship", id: "Mentorship untuk remaja" },
    { en: "A replicable community-learning model", id: "Model belajar komunitas yang bisa direplikasi" },
  ] as Bi[],
};

export const sustainability = {
  title: { en: "Building something that lasts", id: "Membangun sesuatu yang bertahan" } satisfies Bi,
  sub: {
    en: "Two kinds of sustainability we work on in parallel.",
    id: "Dua jenis keberlanjutan yang kami kerjakan bersamaan.",
  } satisfies Bi,
  financial: {
    title: { en: "Financial sustainability", id: "Keberlanjutan finansial" } satisfies Bi,
    items: [
      { en: "Corporate social responsibility", id: "Tanggung jawab sosial perusahaan (CSR)" },
      { en: "Grants", id: "Hibah" },
      { en: "Individual donors", id: "Donatur perorangan" },
      { en: "Partnerships", id: "Kemitraan" },
    ] as Bi[],
  },
  organizational: {
    title: { en: "Organizational sustainability", id: "Keberlanjutan organisasi" } satisfies Bi,
    items: [
      { en: "Volunteer handbook", id: "Buku panduan relawan" },
      { en: "Knowledge management & documentation", id: "Manajemen pengetahuan & dokumentasi" },
      { en: "Monitoring & evaluation", id: "Monitoring & evaluasi" },
      { en: "Leadership development", id: "Pengembangan kepemimpinan" },
    ] as Bi[],
  },
};

export const teamTeaser = {
  title: { en: "So, who are we?", id: "Jadi, siapa kami?" } satisfies Bi,
  body: {
    en: "Five core team members, more than twenty external volunteers, and a growing set of institutional collaborations — meeting the children of Karang Pola every Sunday.",
    id: "Lima anggota tim inti, lebih dari dua puluh relawan eksternal, dan kolaborasi institusional yang terus bertambah — bertemu anak-anak Karang Pola setiap hari Minggu.",
  } satisfies Bi,
  cta: { en: "Meet the whole team →", id: "Kenali tim lengkapnya →" } satisfies Bi,
};

export const collaboration = {
  eyebrow: { en: "Collaboration", id: "Kolaborasi" } satisfies Bi,
  title: { en: "From New York to Jakarta", id: "Dari New York ke Jakarta" } satisfies Bi,
  body: {
    en: "Working with students and researchers at Columbia University on how a small community-learning model can grow without losing what makes it work.",
    id: "Bekerja bersama mahasiswa dan peneliti Columbia University tentang bagaimana model belajar komunitas kecil bisa bertumbuh tanpa kehilangan esensinya.",
  } satisfies Bi,
};

export const faqIntro = {
  eyebrow: { en: "Open questions", id: "Pertanyaan terbuka" } satisfies Bi,
  title: {
    en: "Questions we'd love to discuss",
    id: "Pertanyaan yang ingin kami diskusikan",
  } satisfies Bi,
  body: {
    en: "We don't have all the answers. The most meaningful work is never done alone — tap a question to see where our thinking is.",
    id: "Kami tidak punya semua jawabannya. Kerja yang bermakna tidak pernah dilakukan sendirian — klik pertanyaan untuk melihat pemikiran kami.",
  } satisfies Bi,
};

export const faq: { q: Bi; a: Bi }[] = [
  {
    q: { en: "How do we secure sustainable funding?", id: "Bagaimana kami mendapatkan pendanaan berkelanjutan?" },
    a: {
      en: "Right now we run on goodwill, personal contributions and small collaborations. We are building a mix of CSR partnerships, grants and individual donors so a single quiet month never puts Sunday at risk.",
      id: "Saat ini kami berjalan dari niat baik, kontribusi pribadi, dan kolaborasi kecil. Kami sedang membangun kombinasi kemitraan CSR, hibah, dan donatur perorangan agar satu bulan sepi tidak pernah membahayakan hari Minggu.",
    },
  },
  {
    q: {
      en: "How do we measure long-term impact beyond academic achievement?",
      id: "Bagaimana mengukur dampak jangka panjang di luar capaian akademik?",
    },
    a: {
      en: "Test scores are the easy part. We also track confidence, curiosity, respect, expression and whether a child is willing to talk about their future at all — and we are still looking for better ways to do it honestly.",
      id: "Nilai ujian adalah bagian yang mudah. Kami juga memantau rasa percaya diri, rasa ingin tahu, sikap menghargai, ekspresi, dan apakah seorang anak mau membicarakan masa depannya — dan kami masih mencari cara yang lebih jujur untuk mengukurnya.",
    },
  },
  {
    q: { en: "How do we build stronger parent engagement?", id: "Bagaimana memperkuat keterlibatan orang tua?" },
    a: {
      en: "Parents here work long, unpredictable hours. Engagement cannot mean meetings — it means showing up in the kampung, being useful with documents and healthcare, and earning trust slowly.",
      id: "Orang tua di sini bekerja dengan jam panjang dan tidak menentu. Keterlibatan tidak bisa berarti rapat — artinya hadir di kampung, membantu urusan dokumen dan kesehatan, dan membangun kepercayaan perlahan.",
    },
  },
];

export const join = {
  title: { en: "Come build the environment with us.", id: "Bangun lingkungannya bersama kami." } satisfies Bi,
  body: {
    en: "Three ways to be part of it — every one of them starts with a conversation.",
    id: "Tiga cara untuk ikut terlibat — semuanya dimulai dari sebuah obrolan.",
  } satisfies Bi,
  ways: [
    {
      color: "orange" as const,
      title: { en: "Volunteer", id: "Jadi relawan" } satisfies Bi,
      body: {
        en: "Teach, mentor or help run a Sunday session.",
        id: "Mengajar, mendampingi, atau membantu sesi hari Minggu.",
      } satisfies Bi,
    },
    {
      color: "red" as const,
      title: { en: "Donate", id: "Berdonasi" } satisfies Bi,
      body: {
        en: "Books, materials and snacks for 30 children. Details coming soon.",
        id: "Buku, materi, dan makanan untuk 30 anak. Detail menyusul.",
      } satisfies Bi,
    },
    {
      color: "blue" as const,
      title: { en: "Partner", id: "Berkolaborasi" } satisfies Bi,
      body: {
        en: "Institutions and organisations working on the same barriers.",
        id: "Institusi dan organisasi yang menghadapi hambatan yang sama.",
      } satisfies Bi,
    },
  ],
};

export const footer = {
  address: { en: "Kampung Pemulung Karang Pola, Jakarta Selatan", id: "Kampung Pemulung Karang Pola, Jakarta Selatan" } satisfies Bi,
};

// --- Who We Are page ---

export const whoHero = {
  eyebrow: { en: "Who we are", id: "Siapa kami" } satisfies Bi,
  title: {
    en: "Five people, twenty volunteers, thirty kids.",
    id: "Lima orang, dua puluh relawan, tiga puluh anak.",
  } satisfies Bi,
  body: {
    en: "Bersama Belajar is a small community that builds an environment where children want to learn. We meet in Kampung Pemulung Karang Pola, South Jakarta, every Sunday.",
    id: "Bersama Belajar adalah komunitas kecil yang membangun lingkungan di mana anak-anak ingin belajar. Kami berkumpul di Kampung Pemulung Karang Pola, Jakarta Selatan, setiap hari Minggu.",
  } satisfies Bi,
};

export const coreTeam = {
  heading: { en: "Core team", id: "Tim inti" } satisfies Bi,
  note: { en: "5 people — content placeholder", id: "5 orang — placeholder konten" } satisfies Bi,
  count: 5,
};

export const volunteersSection = {
  title: { en: "Volunteers", id: "Relawan" } satisfies Bi,
  body: {
    en: "More than twenty external volunteers teach, mentor and document — students, young professionals and neighbours from the kampung itself.",
    id: "Lebih dari dua puluh relawan eksternal mengajar, mendampingi, dan mendokumentasikan — mahasiswa, pekerja muda, dan warga kampung sendiri.",
  } satisfies Bi,
  count: 18,
};

export const partners = {
  title: { en: "Partners & collaborators", id: "Mitra & kolaborator" } satisfies Bi,
  body: {
    en: "Institutional collaborations, including Columbia University. Logos to be added.",
    id: "Kolaborasi institusional, termasuk Columbia University. Logo menyusul.",
  } satisfies Bi,
  count: 4,
};

export const whoJoin = {
  title: { en: "Want to join the next Sunday?", id: "Mau ikut hari Minggu berikutnya?" } satisfies Bi,
  body: {
    en: "Volunteers, donors and partner organisations are all welcome.",
    id: "Relawan, donatur, dan organisasi mitra sangat kami sambut.",
  } satisfies Bi,
  cta: { en: "Get involved", id: "Ikut terlibat" } satisfies Bi,
};

// --- Activities page ---

export const activitiesHero = {
  eyebrow: { en: "Activities", id: "Kegiatan" } satisfies Bi,
  title: {
    en: "What a Sunday actually looks like.",
    id: "Seperti apa hari Minggu di sini.",
  } satisfies Bi,
  body: {
    en: "Sessions, field trips, celebrations — a running record of what we build together, in photos.",
    id: "Sesi belajar, kunjungan lapangan, perayaan — catatan berjalan tentang apa yang kami bangun bersama, dalam foto.",
  } satisfies Bi,
};

export const activitiesEmpty = {
  title: { en: "Nothing published yet.", id: "Belum ada yang terbit." } satisfies Bi,
  body: {
    en: "Activities are managed from our CMS — check back soon.",
    id: "Kegiatan dikelola dari CMS kami — kembali lagi sebentar lagi.",
  } satisfies Bi,
};

export const activitiesBack = { en: "All activities", id: "Semua kegiatan" } satisfies Bi;

export const activityGallery = {
  heading: { en: "Photos", id: "Foto" } satisfies Bi,
  close: { en: "Close", id: "Tutup" } satisfies Bi,
};
