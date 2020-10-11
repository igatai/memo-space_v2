// $(function(){

//   function buildBEZEL(){
//     var html = `<div class="wrapper__contents__index">
//                   <div class="wrapper__contents__index__head">
//                     <div class="wrapper__contents__index__head__sub_title">
//                       Memo list
//                     </div>
//                   </div>
//                 </div>
//                 <ul class="wrapper__contents__index__ul">
//                 </ul>`
//     return html
//   }

//   function buildLIST(memo){
//     if(memo.image){
//       var list = `<li class="wrapper__contents__index__ul__list">
//                     <div class="wrapper__contents__index__ul__list__title">
//                       ${memo.title}
//                     </div>
//                     <div class="wrapper__contents__index__ul__list__content">
//                       <div class="wrapper__contents__index__ul__list__content__text">
//                         ${memo.text}
//                       </div>
//                       <img class="wrapper__contents__index__ul__list__content__image" src="${memo.image}" width="30" height="30">
//                     </div>
//                     <div class="wrapper__contents__index__ul__list__date">
//                       ${memo.updated_at}
//                     </div>
//                   </li>`
//     } else {
//       var list = `<li class="wrapper__contents__index__ul__list">
//                     <div class="wrapper__contents__index__ul__list__title">
//                       ${memo.title}
//                     </div>
//                     <div class="wrapper__contents__index__ul__list__content">
//                       <div class="wrapper__contents__index__ul__list__content__text">
//                         ${memo.text}
//                       </div>
//                     </div>
//                     <div class="wrapper__contents__index__ul__list__date">
//                       ${memo.updated_at}
//                     </div>
//                   </li>`
//     }
//     return list
//   }

//   function buildPAGINATE(){
//     var html = `<div class="wrapper__contents__index__pagination">
//                 </div>`
//     return html
//   }

//   $(".pagination").on("click", function(e){
//     $(this).parent().parent().children().remove();
//   });

//   $("xxxxxxx").on("submit", function(e){
//   // $("#tag_search_form").on("submit", function(e){
//     e.preventDefault()
//     // var formData = new FormData(document.getElementById("tag_search_form")); //FormDataオブジェクトの生成
//     let formData = new FormData(this); //FormDataオブジェクトの生成
//     let url = $(this).attr('action'); //searchアクションを取得
//     console.log(formData);
//     $.ajax({
//       url: url,
//       type: "GET",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(memos){

//       $('.wrapper_contents').children().remove();

//       var html_bezel = buildBEZEL;
//       $('.wrapper_contents').append(html_bezel);

//       var insertHTML = '';
//       $.each(memos, function(i, memo){
//         insertHTML += buildLIST(memo)
//       });
//       $('.wrapper__contents__index__ul').append(insertHTML);
//       // $('xxxxx_submit').prop('disabled', false);

//       // $('.wrapper_contents__index__pagination').remove();
//       // var html_paginate = buildPAGINATE;
//       // $('.wrapper_contents').append(html_paginate);

//     })
//     .fail(function(){
//       alert('error');
//     });
//   });
// });