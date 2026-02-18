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
  e.preventDefault();



  const nama = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;
  const address = document.querySelector('#address').value;
  const barang = document.querySelector('.modalNama').textContent;
  const harga = document.querySelector('.modalHarga').textContent;
  

  // Susun pesan dengan line break
  const pesanText = 
    `Hai kak,%0A` +
    `Saya mau pesan product ini:%0A` +
    `Barang: ${barang}%0A` +
    `Harga: ${harga}%0A` +
     `Nama: ${nama}%0A` +
    `No. HP: ${phone}%0A` +
    `Alamat: ${address}%0A` ;
  

  const pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=${pesanText}`;

  this.href = pesan;
  window.open(pesan, '_blank');
});


  


});
});





