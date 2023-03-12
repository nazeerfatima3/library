console.log("This is my first ever library code");

//Creating our function from the values entered by the user
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

function Display(){

}
Display.prototype.add=function(book){
    let tableBody=document.getElementById("tableBody");
    let uiString = `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                </tr>`
  tableBody.innerHTML+= uiString;
}
Display.prototype.clear=function(){
   let libraryForm=document.getElementById("libraryForm");
   libraryForm.reset();
}
Display.prototype.validate=function(book){
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show=function(type,msg){
    let message=document.getElementById("message");
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message</strong> ${msg}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>`

    setTimeout(function() {
        message.innerHTML=" ";
    }, 2000);
}

//when the user click on the submit button after filling the form
//then we will create one such new book and then display it on our table and clearing the form

let libraryForm =document.getElementById("libraryForm");
libraryForm.addEventListener('submit',libraryFormSubmit);

//whenever library form submit button is clicked then library form submit event listener 
//will be called

function libraryFormSubmit(e){
    let name=document.getElementById("bookName").value;
    let author=document.getElementById("author").value;
    let type;
    let fiction= document.getElementById("fiction");
    let programming=document.getElementById("programming");
    let sitcom=document.getElementById("sictom");
    //we get all the values which can be filled in the radio box
    //out of all these only one will be checked which will be filled in type

    if(fiction.checked){
        type=fiction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(sitcom.checked){
        type=sitcom.value;   
    }
    let book=new Book(name,author,type);
    console.log(book);

    e.preventDefault();
    let display=new Display();
    if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success',"Your book is added successfully.")
    }
    else{
    display.show('danger',"Sorry your book cannot be added.")
    }
}
