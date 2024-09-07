var arr = [
  {
    img: "https://images.unsplash.com/photo-1600180225585-b78e6961c585?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Pragya Sharma",
    p: "Success is in Your Hands,You Just have to work a little hard.",
    h: "🙂I Have A Calm Nature <br>😘!!!!!!! MODAL",
    stat: "Strangers",
    btn: "Add Friends",
  },
  {
    img: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Priya Gupta",
    p: "The Identity of A Singer Is Not his Looks but His Voice and his Name.",
    h: "🤞🎤Your Success  In Your HandS🔥*******SINGER",
    stat: "Strangers",
    btn: "Add Friends",
  },
  {
    img: "https://images.unsplash.com/photo-1527736947477-2790e28f3443?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neha Tripathi",
    p: "It'S a great Time to be An Actress at this point in my Life.",
    h: "🤗Listen To EverYone'S HearT💘.......ACTRESS",
    stat: "Strangers",
    btn: "Add Friends",
  },
];
// clutter ko banne se le kar ForEach ke loop me chalne tak or uske andar pua data store karne tak sara kam me ek function
// bana kar karti hu jiska naam hai "show" naam ka function
function show() {
  var clutter = "";
  arr.forEach(function (elem, idx) {
    clutter += ` <div id="card">
            <img src="${elem.img}" alt="">
            <h1>${elem.name}</h1>
            <p>${elem.p}</p>
            <h4>${elem.h}</h4>
            <h5 class ="${elem.stat}">${elem.stat}</h5>
            <button id = "${idx}" class = "">${elem.btn}</button>

        </div>`;
    // <button id = "${idx}">Add Friends</button>

    // jese hi me button pe click karti hu toh button ko id mil aayi hai
    // console.log(clutter)
  });

  document.querySelector("#main").innerHTML = clutter;
}
show();
// show naam ka mera function kar kya raha hai?
// Answer = show naam ka function mera pura ke pura data ko re-defined karne ka kam karega re-fill karne ka kam karega
document.querySelector("#main").addEventListener("click", function (dets) {
  if (arr[dets.target.id].stat == "Strangers") {
    arr[dets.target.id].stat = "Friends";
    arr[dets.target.id].btn = " Remove Friend";
    show();
  } else {
    arr[dets.target.id].stat = "Strangers";
    arr[dets.target.id].btn = " Add Friend";
    show();
  }
  // multipals objects ka mera array hai
  // mene iske andar ForEach ka loop lagaya tha
  // or uske baad mene clutter naam ke variable me bahut sara data dal diya tha
  // or clutter ka main ke andar dal diya
  // sara kam mera show() function ke andar hua or mene show() ko ek bar call kar diya
  // document.querySelector ("#main") main jo tha mera main  div jo tha mera uspe me laungi addEventlistener click wala pure main div pe click wala EventListener lagti hu
  // jab jab mere element ki id strangers hai toh mene uska status kar diya hai "Remove Friends" or else ke andar bhi same kam kiya tha

  // console.log(dets)
  // me kahi bhi click karti hu toh ye mujhe pointerEvents deta hai
  // console.log(dets.target)
  // targeted element bata dega
  // console.log(dets.target.id)
  // targeted element ki id bata do
  // console.log(arr[dets.target.id])
  // iska matlb ye hai ki jab bhi me is button pe click karungi toh ye pura ke pura element uth ke a jayega /data uth ke a jayega
  // console.log(arr[dets.target.id].stat)
  // ab button pe click karne pe strangers friendsa raha hai
});
// card kis ke andar bana hua hai main ke andar toh main ko selector karege
// document.querySelector("#main").innerHTML = clutter;
// document.querySelector("#main").addEventListener("click", function (dets) {
// console.log(dets.target.id)
// console.log(arr[dets.target.id])

// dets.target.id toh ye aapko ye batayega jo target element hai uski id kya hai / ye aapko id batati hai
//   console.log("hey");
// kahi bhi click kar rahi hu toh console pe "hey" Print ho raha hia
// });
// document.querySelector("#main").addEventListener("click", function (dets) {
// console.log(dets);
// ab me kahi pe bhi click kar rahi hu toh ab mujhe ye de raha hai "pointerEvent"
// jab hum keyboard ka koi sa event parform karte hai toh ye mujhe deta hai "keyboradEvent"
// jab hum mouse ka koi sa event parform karte hai toh ye deta hai "MouseEvent"
// or jab me yaha par koi pointerevent parform karti hu ya aap click karte ho toh isse bolte hai "ClickEvent" ya "PointerEvent"
// });
// jab me pointerEvent ko open karti hu toh mujhe bahut hi imp cheez milti hai uska naam hai "Target"
// Target means ki aapne kis event ko target kara
// document.querySelector("#main").addEventListener("click", function (dets) {
//   console.log(dets.target);
//   // aisa karne se mujhe element ka naam pata chal jayega ki me kis pe click kar rahi hu "dets.target" se
//   // elem means element
//   // element matlb kya ? = kis element se aap kam kara rahe ho kis element se kam le rahe ho woh hai mera element
//   // me elem ke sath hi sath ek or variable pass kar sakti hu jo ki mera indexes ka kam karta hai
//   // me ek variable pass karti hu "idx"
// });

// arr.forEach(function (elem) {
//   console.log("hey");
// console.log(elem)
// console.log(elem.name)
// elem.name karne se mujhe har bar ek naya naam dikhi deta hai
// });
// yaha pe mene ek variable banaya hai clutter naam ka
// clutter mene bana ke khali chhod diya hai
// khali chhodne ka matlb kya hota hai?
// Answer = khali chhodne ka matlb hai ki iske andar koi bhi data nahi hai or
//  har bar me loop chalti hu toh me kehti hu clutter += "hey" matlb ki jab bhi loop chalta hai clutter ke andar jo bhi data hai uske sath me jud kar "hey" chala jata hai
// jab pehli bar loop chalega toh uske andar pehla "hey" aayega [again aisa hi hoga teen bar]
// var clutter = ""
// arr.forEach(function(){
//     clutter += "hey"
// })
// console.log(clutter)
// clutter ko bana kar khali kyu chhodna hai ? aise bhi chhod sakte hai [var clutter] ye bhi toh sahi hai na
// Answer = [+=] karta kya hai ? = clutter ke andar jo bhi data hai uske sath me jo aapne yaha pe likha hai woh jod deta hai [clutter += "hey"]
// humesa kisi bhi variable ke andar undefine naame ki cheez hoti hai
// var clutter =
// arr.forEach(function(){
//     clutter += "hey"
// })
// console.log(clutter)
// Mera loop utni bar chalega jitna bada mera array hai
// var clutter = ""
// arr.forEach(function(elem){
//     clutter += elem
// })
// console.log(clutter)
// var clutter = ""
// arr.forEach(function(elem){
//     clutter += elem.name
// })
// console.log(clutter)

/* clutter ke through data kese dalte hai ? */
// agar me EventListener button pe lagugi toh mujhe har bar ek button ke liye naya EvenLIstener use karna padega
// toh me main pe hi EventListener laga dugi
// agar strangers hai toh show naam ka function call karna agar aisa nahi hai toh just positive kar dena 
// button ko style deni hai toh class ka use karna padega jese h5 ke liye kiya tha
// add friend naam ki button ko class bhi de dena alg se bana kar 
// id or class dono work karegi button pe