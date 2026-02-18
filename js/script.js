document.querySelectorAll('.btnDetail').forEach(item=>{
item.addEventListener('click',(e) => {
  let parent = e.target.parentNode.parentNode;

  let gambar = parent.querySelector('.card-img-top').src;
  let harga = parent.querySelector('.harga').innerHTML;
  let judul = parent.querySelector('.card-text').innerHTML;
  let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML:'';

  //let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML:'<i>tidak tersedia</i>'; { fungsi script yang dicomand :jika barang tidak ada maka akan menampilkan "tidak tersedia"}

  let tombolModal = document.querySelector(`.btnModal`);
   tombolModal.click(); 

   document.querySelector('.modalTitle').innerHTML = judul;
   let image = document.createElement('img');
   image.src = gambar;
   image.classList.add('w-100');
   document.querySelector('.modalImage').innerHTML ='';
   document.querySelector('.modalImage').appendChild(image);
   document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
   document.querySelector('.modalHarga').innerHTML = harga;

   const nohp = '+628568084552';

document.querySelector('.btnBeli').addEventListener('click', function(e) {
  e.preventDefault(); // supaya tidak langsung reload halaman

  // Ambil value dari input
  const nama = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;
  const address = document.querySelector('#address').value;

  // Ambil harga dari span
  const harga = document.querySelector('.modalHarga').textContent;

  // Buat pesan WhatsApp
  const pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Hai kak, saya ${nama}, mau pesan product ini dengan harga ${harga}. Nomor saya: ${phone}, alamat: ${address}`;

  // Set href tombol
  this.href = pesan;

  // Optional: langsung buka link
  window.open(pesan, '_blank');
});


});
});





