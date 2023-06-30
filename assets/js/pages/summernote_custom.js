// 編輯器內容變更時
//define change event 
// $(".summernote").summernote({
//     onChange: function() {
//         console.log('onchange')
//         app.total_words();
//     } // callback as option 
// });  

// onChange callback
$('#summernote1').summernote({
    placeholder: "Write something...",
    height: 230,
    callbacks: {        
      onChange: function(contents, $editable) {
        console.log($($(this).summernote("code")).text().length)
        app.totalTxt1 = $($(this).summernote("code")).text().length
      }
    }
});

$('#summernote2').summernote({
    placeholder: "Write something...",
    height: 230,
    callbacks: {        
      onChange: function(contents, $editable) {
        console.log($($(this).summernote("code")).text().length)
        app.totalTxt2 = $($(this).summernote("code")).text().length
        // $(this).next('.total').text(plainText.length)
        // console.log('onChange:', contents, $editable);
      }
    }
});