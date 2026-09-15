const products=[
{name:"আমের আচার",cat:"mango",price:350,old:400,emoji:"🥭",tag:"বেস্ট সেলার",desc:"টক-ঝাল-মিষ্টি, ঘরোয়া স্বাদের ঐতিহ্যবাহী আমের আচার।"},
{name:"লেবুর আচার",cat:"lemon",price:360,old:420,emoji:"🍋",tag:"জনপ্রিয়",desc:"টাটকা লেবু ও মশলার ভারসাম্যে তৈরি।"},
{name:"জলপাই আচার",cat:"special",price:350,old:400,emoji:"🫒",tag:"নতুন",desc:"দেশি জলপাইয়ের টক-মিষ্টি দারুণ স্বাদ।"},
{name:"কাঁচামরিচ আচার",cat:"spicy",price:360,old:420,emoji:"🌶️",tag:"ঝালপ্রেমীদের",desc:"ঝাল ও মশলাদার স্বাদের জন্য বিশেষভাবে তৈরি।"},
{name:"মিশ্র আচার",cat:"special",price:400,old:450,emoji:"🥭",tag:"স্পেশাল",desc:"বিভিন্ন ফলের অসাধারণ কম্বিনেশন।"},
{name:"চটপটি আচার",cat:"spicy",price:390,old:450,emoji:"🌶️",tag:"ঝাল",desc:"মুখরোচক ঝাল-মশলার জমজমাট স্বাদ।"},
{name:"মসলা আচার",cat:"special",price:380,old:430,emoji:"🫙",tag:"প্রিমিয়াম",desc:"বাছাই করা মশলার ঘ্রাণে অনন্য স্বাদ।"},
{name:"গাজর আচার",cat:"special",price:330,old:380,emoji:"🥕",tag:"ফ্রেশ",desc:"মচমচে গাজর ও মশলার মজার সমন্বয়।"}];
let cart=[];
const grid=document.getElementById("productsGrid");
function render(cat="all"){grid.innerHTML=products.filter(p=>cat==="all"||p.cat===cat).map((p,i)=>`<article class="product"><div class="pimg">${p.emoji}</div><div class="product-body"><span class="tag">${p.tag}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="price">৳${p.price} <small>/ ৫০০ গ্রাম &nbsp; <s>৳${p.old}</s></small></div><button class="btn add" onclick="add(${products.indexOf(p)})">কার্টে যোগ করুন +</button></div></article>`).join("")}
render();
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.cat)});
function add(i){cart.push(products[i]);update();openCart()}
function update(){document.getElementById("count").textContent=cart.length;let box=document.getElementById("cartItems");if(!cart.length){box.innerHTML="<p>আপনার কার্ট এখনো খালি।</p>";document.getElementById("total").textContent="৳0";return}box.innerHTML=cart.map((p,i)=>`<div class="cart-row"><span>${p.emoji} ${p.name}</span><b>৳${p.price}</b></div>`).join("");document.getElementById("total").textContent="৳"+cart.reduce((a,p)=>a+p.price,0)}
function openCart(){document.getElementById("cartModal").classList.add("show");update()}function closeCart(){document.getElementById("cartModal").classList.remove("show")}
function goCheckout(){if(!cart.length)return alert("প্রথমে একটি পণ্য কার্টে যোগ করুন।");closeCart();document.getElementById("contact").scrollIntoView();alert("আপনার কার্ট প্রস্তুত। অর্ডার নিশ্চিত করতে নিচের তথ্য পাঠান।")}
function sendMessage(e){e.preventDefault();alert("ধন্যবাদ! আপনার বার্তা গ্রহণ করা হয়েছে। আমরা দ্রুত যোগাযোগ করব।");e.target.reset()}
