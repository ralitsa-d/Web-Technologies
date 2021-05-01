function deleteByEmail(){
    let inputText = document.getElementsByName('email')[0];
    let trs = document.getElementById('customers').children[0].children;
    let count=0;
    if(inputText.value!=''){
        for(let i=1; i<trs.length; i++){
        let currentEmail = trs[i].cells[1].textContent;
            if(currentEmail === inputText.value){
                trs[i].parentNode.removeChild(trs[i]);
                count++;
            }
        }
        let result = document.getElementById('result');
        if(count==1){
            result.textContent = 'DELETED';
        }

        if(count==0){
            result.textContent = 'Not found. ';
        }
        inputText.value ='';
    }
}


