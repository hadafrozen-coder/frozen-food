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

        document.querySelector('.btnBeli').addEventListener('click', function(e) {
  e.preventDefault();

  const namaInput = document.querySelector('#name');
  const phoneInput = document.querySelector('#phone');
  const addressInput = document.querySelector('#address');

  const nama = namaInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput.value.trim();
  const barang = document.querySelector('.modalNama').textContent.trim();
  const harga = document.querySelector('.modalHarga').textContent.trim();

  // Reset pesan error & border
  document.querySelector('#errorName').textContent = '';
  document.querySelector('#errorPhone').textContent = '';
  document.querySelector('#errorAddress').textContent = '';
  namaInput.classList.remove('input-error');
  phoneInput.classList.remove('input-error');
  addressInput.classList.remove('input-error');

  let valid = true;

  // Validasi nama
  if (!nama) {
    document.querySelector('#errorName').textContent = 'Nama wajib diisi';
    namaInput.classList.add('input-error');
    valid = false;
  }

  // Validasi nomor HP
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phone) {
    document.querySelector('#errorPhone').textContent = 'Nomor HP wajib diisi';
    phoneInput.classList.add('input-error');
    valid = false;
  } else if (!phoneRegex.test(phone)) {
    document.querySelector('#errorPhone').textContent = 'Nomor HP tidak valid';
    phoneInput.classList.add('input-error');
    valid = false;
  }

  // Validasi alamat
  if (!address) {
    document.querySelector('#errorAddress').textContent = 'Alamat wajib diisi';
    addressInput.classList.add('input-error');
    valid = false;
  }

  // Jika ada error, hentikan eksekusi
  if (!valid) return;

  // Susun pesan WhatsApp
  const pesanText = 
    `Hai kak,%0A` +
    `Saya mau pesan product ini:%0A` +
    `Barang: ${barang}%0A` +
    `Harga: ${harga}%0A` +
    `Nama: ${nama}%0A` +
    `No. HP: ${phone}%0A` +
    `Alamat: ${address}%0A`;

  const nohp = '+628568084552';
  const pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=${pesanText}`;

  this.href = pesan;
  window.open(pesan, '_blank');
});



  


});
});





