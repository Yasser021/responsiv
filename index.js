document.getElementById('btn').addEventListener('click',function() {
     
    let nama = document.getElementById('nama').value
    let kelas = document.getElementById('kelas').value
    let alamat = document.getElementById('alamat').value
    let tentang = document.getElementById('tentang').value
    
    alert ("hi..." + nama )
    alert ("kelas " + kelas)
    alert ("dari " + alamat)
    alert (tentang)
})