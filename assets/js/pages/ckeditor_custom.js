CKEDITOR.replace( 'editor1' );
CKEDITOR.replace( 'editor2' )

CKEDITOR.instances.editor1.on('change', function() { 
    let data = CKEDITOR.instances.editor1.getData().replace(/(<([^>]+)>)/gi, "");
    
    if ( data.length <= 0 ) {
        app.totalTxt1 = 0 
    } else {
        app.totalTxt1 = data.length-1
    }

})

CKEDITOR.instances.editor2.on('change', function() { 
    let data = CKEDITOR.instances.editor2.getData().replace(/(<([^>]+)>)/gi, "");
    
    if ( data.length <= 0 ) {
        app.totalTxt2 = 0 
    } else {
        app.totalTxt2 = data.length-1
    }
    
})
