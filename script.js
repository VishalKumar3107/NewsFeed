// const btns = [
//   { btn: document.getElementById('headingbtn1'), category: 'all' },
//   { btn: document.getElementById('btn1'), category: 'politics' },
//   { btn: document.getElementById('btn2'), category: 'science' },
//   { btn: document.getElementById('btn3'), category: 'automobile' },
//   { btn: document.getElementById('btn4'), category: 'world' },
//   { btn: document.getElementById('btn5'), category: 'sports' },
//   { btn: document.getElementById('btn6'), category: 'business' }
// ];

// btns.forEach(({ btn, category }) => {
//   btn.addEventListener('click', () => fetchNewsApi(category));
// });


// async function fetchNewsApi(category) {
//   var y = document.querySelector(".new_news_box");
//   var x = document.querySelector(".loader");
//   var z = document.querySelector(".category_btn");

//   x.style.display = "block";

//   try {
//     let headers = new Headers([
//       ['Content-Type', 'application/json'],
//       ['Accept', 'application/json']
//     ]);

//     let request = new Request(`https://inshorts.deta.dev/news?category=${category}`, {
//       method: 'GET',
//       headers: headers
//     });
//     let result = await fetch(request);
//     let apiResponse = await result.json();
//     x.style.display = "none";
//     y.style.display = "block";
//     z.style.display = "block";

//     let htmlCode = '';

//     apiResponse.data.forEach(val => {
//       htmlCode = htmlCode + `<div class="news_box">
//       <div class="news_category">
//     Category: ${category}</div>
//       <div class="news_box_title">
//         <h2 id="new_news_title" style="margin:0;">${val.title}</h2>
//       </div>
//       <div class="news_box_media" style="display:flex;">
//         <img id="new_img" src=${val.imageUrl} style="width:30%; height:auto;" />
//         <div id="new_news_content" class="news_box_content" style="width:70%; padding:10px;">
//           <p id="new_news_content" style="font-weight:bold">${val.content}</p>
//           <button id="save_news" style="margin-top:10px;"><i class="fa-solid fa-heart"></i></button>
//         </div>
//       </div>
//       <hr style="border-top: 1px solid white;">
//     </div>`;
//     });


//     const Newscard = document.querySelector(".new_news_box");
//     Newscard.innerHTML = htmlCode;
//     console.log(apiResponse)
//   } catch (err) {
//     console.log(err)
//   }

// }




  let count = 1;
function dbx(a) {
  var rem = document.getElementsByClassName('remove');
  for (var p = 0; p < rem.length; p++) {
    localStorage.setItem(count,rem[p]);
    console.log(rem[p]);
    rem[p].remove();
  }
  let pro = fetch(`https://inshorts.deta.dev/news?category=${a.value}`).then((reponse) => {
    return reponse.json()
  }).then((value) => {

    var s = value.data;
    for (var i = 0; i < s.length; i++) {
      var auth = s[i].author;
      var content = s[i].content;
      filling(auth, content);

    }
  })

  var parent = document.querySelector('.parent');
  function filling(auth, content) {
    var span = document.createElement('span');
    var span1 = document.createElement('span');
    var p = document.createElement('p');
    var div = document.createElement('div');
    var l = document.createElement('i');
    l.setAttribute('class','fa-solid fa-heart myicon');
    l.setAttribute('onclick','saved(this)');
    div.setAttribute('class', 'textarea remove');
    span1.setAttribute('class', 'right');
    div.appendChild(span);
    div.appendChild(span1);
    div.appendChild(p);
    div.appendChild(l);
    parent.appendChild(div);
    span.innerHTML = "Author :" + auth;
    span1.innerHTML = "Category :" + a.innerHTML;
    p.innerHTML = content;
  }
}
var w =0;
function saved(a){
  var data = document.querySelector('.stored');
  var x = a.parentNode;
  data.appendChild(x);
  console.log(x);
}