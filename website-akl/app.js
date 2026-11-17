const IMG={
 "logo": "images/logo.jpg",
 "lab": "images/lab.jpg",
 "t1": "images/t1.jpg",
 "t2": "images/t2.jpg",
 "t3": "images/t3.jpg",
 "t4": "images/t4.jpg",
 "t5": "images/t5.jpg",
 "t6": "images/t6.jpg",
 "t7": "images/t7.jpg",
 "t8": "images/t8.jpg",
 "t9": "images/t9.jpg",
 "t10": "images/t10.jpg",
 "t11": "images/t11.jpg",
 "t12": "images/t12.jpg",
 "u1": "images/u1.jpg",
 "u2": "images/u2.jpg",
 "a1": "images/a1.jpg",
 "a2": "images/a2.jpg",
 "club1": "images/club1.jpg",
 "club2": "images/club2.jpg",
 "grp": "images/foto dokum timm.jpeg",
 "grp2": "images/grp2.jpg"
};
const T=[["Dra. Bimaswati Juni Iswari","t1"],["Dra. Lilies Setiawati","t2"],["Fitri Anita, S.Pd.","t3"],["Mega Ayu Sekarwati, S.Pd.","t4"],["Erlina Imawati, S.E.","t5"],["Mei Eka Arianti,S.Pd","t6"],["Heri Bambang Santoso,S.Pd","t7"],["Muhammad Akbar Idris,S.Pd","t8"],["Ingrid Eka Pangestu,S.Pd","t9"],["Sulistiyani,S.Pd","t10"],["Erlina Yunita,S.St","t11"],["Rosita Adiningsih,S.Pd","t12"]];
const K=[["Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur","Proses pencatatan dan pelaporan keuangan sesuai aktivitas utama penyedia layanan, jual beli barang, atau pengolahan bahan baku menjadi produk jadi."],["Pelayanan Kepada Kolega dan Pelanggan","Interaksi profesional untuk memberikan layanan dan solusi terbaik guna menjaga kepuasan serta hubungan baik."],["Administrasi Pajak","Pengelolaan pencatatan, perhitungan, pelaporan, dan pembayaran pajak sesuai ketentuan perpajakan yang berlaku."],["Komputer Akuntansi (MYOB)","Aplikasi pencatatan transaksi keuangan menggunakan software MYOB untuk menghasilkan laporan secara cepat dan akurat."],["Ekonomi Bisnis","Penerapan teori ekonomi dan analisis kuantitatif untuk membantu manajemen merumuskan strategi dan mengoptimalkan sumber daya perusahaan."],["Akuntansi Keuangan","Proses pencatatan, pengikhtisaran, dan pelaporan transaksi keuangan untuk pihak eksternal."]];
const C=[["Junior accountant","Membantu pencatatan transaksi dan menyiapkan laporan di bawah supervisi."],["Staf keuangan","Mendukung pengelolaan kas, dokumen pembayaran, dan rekonsiliasi."],["Admin pajak","Membantu menata dokumen serta administrasi perpajakan."],["Auditor junior","Mendukung pemeriksaan data; umumnya memerlukan studi lanjut dan pelatihan."]];
const D=[["Pahami alurnya","Dari bukti transaksi, jurnal umum, dan buku besar sampai laporan keuangan."],["Praktikkan ilmunya","Olah data dengan spreadsheet dan perangkat lunak komputer akuntansi."],["Tumbuh bersama","Latih komunikasi, ketelitian, dan kerja sama melalui studi kasus kelompok."]];
const R=[["NADHIF ASYRAF.H","Web Developer","Mengembangkan desain mockup dan prototype menjadi website fungsional menggunakan kode pemrograman"],["FREYA ZHAFIRAH.A","UX Designer & Content Specialist","Mengumpulkan serta menyusun data jurusan sekaligus merancang alur pengalaman pengguna yang terstruktur."],["LIVIANI PUTRI.R","UX Designer","Mengubah mockup statis menjadi prototype interaktif yang dapat diuji coba untuk memastikan navigasi website berjalan lancar."],["SAMUEL FERDINAND.P","UI Designer","Merancang design system, elemen visual, dan tata letak halaman untuk menciptakan tampilan website yang konsisten."]];
const card=(a,cls)=>a.map(([t,d])=>`<div class="card"><div class="ico"></div><h3>${t}</h3><p>${d}</p></div>`).join('');
const P={
beranda:()=>`<div class="hero"><div class="w hg"><div><span class="pill">AKUNTANSI & KEUANGAN LEMBAGA</span><h1>Langkah kecil, masa depan terhitung.</h1><p class="lead">Kenali dunia akuntansi dari dekat. Tempat belajar mengelola angka, membangun ketelitian, dan menyiapkan langkahmu selanjutnya.</p><a class="btn" href="#beranda">Kenali jurusan</a><a class="lnk" href="#galeri">Lihat galeri</a></div>
<figure><img class="ph" data-k="lab" alt="Ruang praktik komputer akuntansi"><figcaption>Dari jurnal pertama hingga laporan keuangan. Ruang belajar, ruang mencoba bersama.</figcaption></figure></div></div>
<section class="lav"><div class="w two"><div><h2>Latar Belakang</h2><p class="mut" style="font-size:12px">Teliti dalam proses. Jujur dalam pencatatan. Bertanggung jawab dalam keputusan.</p></div><div class="t"><h3>Akuntansi & Keuangan Lembaga .<br>SMKN 2 Balikpapan</h3><p style="margin-top:10px">Jurusan Akuntansi SMK Negeri 2 Balikpapan didirikan pada 24 Agustus 1964 dengan nama awal Jurusan Tata Buku di bawah SMEA Dwikora. Pada masa perintisan, proses belajar masih menumpang di SMP Negeri 1 Balikpapan dengan metode pembukuan yang sepenuhnya manual. Status sekolah kemudian berubah menjadi negeri pada tahun 1972 untuk menyelaraskan kurikulum dengan kebutuhan industri kota.</p><p>Seiring perubahan nomenklatur pemerintah pada tahun 1997, namanya resmi diubah menjadi Jurusan Akuntansi seiring dimulainya era digitalisasi komputer. Kini, program ini telah bertransformasi menjadi Konsentrasi Keahlian Akuntansi dan Keuangan Lembaga (AKL) yang mencetak teknisi akuntansi modern.</p></div></div></section>
<section><div class="w"><h2>Dasar yang kuat. Praktik yang dekat.</h2><div class="g3">${card(D)}</div></div></section>
<section style="padding-top:0"><div class="w"><span class="eb">03 / GURU JURUSAN</span><h2>Pendidik & Pengajar</h2><p class="mut">Berikut guru produktif di akuntansi dan keuangan lembaga</p><div class="tr">${T.map(([n,k])=>`<div><img data-k="${k}" alt="${n}"><b style="font-weight:500">${n}</b></div>`).join('')}</div></div></section>
<section class="lav"><div class="w"><h2>Kompetensi Keahlian</h2><p class="mut">Konsep, keterampilan digital, dan praktik administrasi saling melengkapi.</p><div class="g3">${K.map(([t,d])=>`<div class="card"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>
<section><div class="w"><h2>Seragam Jurusan</h2><p class="mut">Rapi dan siap belajar. Kenali seragam sekolah akuntansi.</p><div class="g2"><img class="top" data-k="u1" alt="Seragam sekolah"><img class="top" data-k="u2" alt="Seragam praktik"></div></div></section>
<section class="lav"><div class="w"><h2>Program & Ekstrakurikuler</h2><h3 style="margin-top:14px">Accounting club</h3><p class="mut" style="font-size:12px">Wadah atau organisasi pelajar/mahasiswa untuk mengembangkan wawasan, keterampilan praktis, dan jaringan di bidang akuntansi.</p><div class="g2"><img data-k="club2" alt=""><img data-k="club1" alt=""></div></div></section>
<section><div class="w"><h2>Peluang Karier</h2><p class="mut">Bekal akuntansi membuka beragam arah: bekerja, melanjutkan studi, atau merintis usaha.</p><div class="g4">${card(C)}</div><p class="note">Peluang karier bergantung pada kompetensi, kualifikasi pendidikan, sertifikasi, dan kebutuhan pemberi kerja. Ini adalah contoh arah pengembangan, bukan jaminan penempatan.</p></div></section>`,
galeri:()=>`<div class="hero"><div class="w"><h1 style="font-size:36px">Cerita belajar, dalam gambar.</h1><p class="lead" style="max-width:560px;margin:0">Seragam yang menyatukan, ruang yang menghidupkan ide, dan proses kecil yang membuat kami semakin terampil.</p></div></div>
<section><div class="w"><h2>Tampil rapi, siap berkarya.</h2><p class="mut">Atribut kebanggaan yang mencerminkan profesionalisme di kelas maupun ruang praktik.</p><div class="g2"><img class="top" data-k="u1" alt=""><img class="top" data-k="u2" alt=""></div></div></section>
<section class="lav"><div class="w"><h2>Aktivitas & Praktik Akuntansi</h2><p class="mut">Dokumentasi proses belajar: mencatat, mengolah, memeriksa, dan berdiskusi.</p><div class="g2"><img data-k="a1" alt=""><img data-k="a2" alt=""></div></div></section>
<section><div class="w"><h2>Kenali orang di balik ceritanya.</h2><a class="btn o" style="margin-top:14px" href="#pembuat">Temui kelompok pembuat</a></div></section>`,
pembuat:()=>`<div class="hero"><div class="w hg"><div><h1 style="font-size:38px">Satu kelompok, banyak peran.</h1><p class="lead">Kami belajar merangkai informasi jurusan menjadi pengalaman digital yang sederhana, jelas, dan menyenangkan untuk dijelajahi.</p><p class="mut" style="max-width:430px;font-size:13px">Website ini adalah ruang kolaborasi: mengumpulkan cerita, merancang tampilan, membangun halaman, dan memeriksa detail bersama.</p></div><figure><img class="ph" data-k="grp" alt="Kelompok belajar"><figcaption>Bertukar ide sebelum merangkai halaman.</figcaption></figure></div></div>
<section><div class="w"><span class="eb">01 / KENALI KELOMPOK</span><h2>Setiap peran ikut membentuk karya.</h2><p class="mut">Pembagian tugas membantu kami bekerja terarah, dengan hasil yang tetap ditinjau bersama.</p><div class="g4">${R.map(([n,r,d])=>`<div><h3 style="font-size:11px;letter-spacing:.03em">${n}</h3><p class="mut" style="font-size:11px;margin-bottom:6px">${r}</p><p style="font-size:12px" class="mut">${d}</p></div>`).join('')}</div></div></section>`};
function go(){let h=(location.hash||'#beranda').slice(1);if(!P[h])h='beranda';
document.getElementById('app').innerHTML=P[h]();
document.querySelectorAll('[data-k]').forEach(e=>e.src=IMG[e.dataset.k]);
document.querySelectorAll('nav a[data-n]').forEach(a=>a.classList.toggle('on',a.dataset.n===h));
document.getElementById('fs').textContent='AKL SMKN 2 BPP / Profil jurusan'+(h==='beranda'?'':' & karya kelompok siswa');
document.title='AKL – SMK Negeri 2 Balikpapan';scrollTo(0,0)}
addEventListener('hashchange',go);go();
