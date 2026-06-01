document.getElementById('connectBtn').onclick=async()=>{
if(window.ethereum){
const a=await window.ethereum.request({method:'eth_requestAccounts'});
document.getElementById('connectBtn').innerText=a[0].slice(0,6)+'...'+a[0].slice(-4);
}else{alert('Install MetaMask or Core Wallet');}
};
