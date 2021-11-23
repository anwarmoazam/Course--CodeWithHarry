console.log('Welcome in tutorial 17');

/*
document.getElementById('heading').addEventListener('click',function(e){
    // console.log('You have clicked the heading');
    // location.href = '//covid19cc.nic.in'; 
    // location.href = '//codewithharry.com';
    // location.href = '//ihip.nhp.gov.in'; //why location.href not redirect when click on heading
    let variable = e.target.className;
    variable = Array.from(e.target.classList);
    // variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;

    console.log(variable);
}); 
*/

document.getElementById('heading').addEventListener('mousemove',function(e){
    // console.log('You have clicked the heading');
    // location.href = '//covid19cc.nic.in'; 
    // location.href = '//codewithharry.com';
    // location.href = '//ihip.nhp.gov.in'; //why location.href not redirect when click on heading
    // let variable = e.target.className;
    // variable = Array.from(e.target.classList);
    // variable = e.target.id;

//what is difference between offsetX,Y and clientX,Y    

    variableX = e.offsetX;
    variableY = e.offsetY;
    // variable = e.clientX;
    // variable = e.clientY;

    // console.log(variableX,variableY);
});