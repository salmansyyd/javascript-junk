function* get_more_number(num){

    while(num<10){
        yield num;
        num++
    }

}



function do_someting_else(){
    console.log("Other async task")
}

// Creating a usefull generator function for implemntation of yeilding 


const caller_obj = get_more_number(1)
/* 
create a generator 
call the function once 
do somethingg else
call the fucntion again
repeat until generator exhaust out of values 
*/

while (!caller_obj.next().done){
    console.log(caller_obj.next().value)
    do_someting_else()
    console.log(caller_obj.next().value)
}