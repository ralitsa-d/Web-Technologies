$(document).ready(function () {

    $("#my_btn1").on('click', function(){
        let inputText = $('input[name="email-example"]')[0];
        let trs = $('#customers-example tr');
        let count=0;
        if(inputText.value!=''){
            for(let i=1; i<trs.length; i++){
            let currentEmail = $(trs[i].cells[1]).text();
                if(currentEmail === inputText.value){
                    trs[i].remove();
                    count++;
                }
            }
            let result = $('#result-example');
            if(count==1){
                result.text("DELETED");
            }
    
            if(count==0){
                result.text("NOT FOUND");
            }
            inputText.value ='';
        }
    });
});

