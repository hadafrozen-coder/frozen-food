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
   let pesan = `https://api.whatsapp.com/send?phone=${+6285692928708}&text=hai kak,saya mau pesan product ini ${gambar}, dengan harga ${harga}`;


    document.querySelector('.btnBeli').href = pesan;

});
});
