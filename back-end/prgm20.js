// nested function // closure property

function a () {

    let parent_variable = 'parent'
    console.log('inside function a');
    console.log(`this variable come from ${parent_variable}`);
    // console.log(`this variable is come from ${child_variable}`); // this will not work coz cild function nte variable ne parentil use akkan pattilla
    


    function b () {

        let child_variable = 'child'
        console.log('inside function b');
        console.log(`this variable come from ${parent_variable}`);
        console.log(`this variable is come from ${child_variable}`);
        

        
    }
    b()

}
a()

