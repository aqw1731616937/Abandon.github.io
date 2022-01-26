/*年份选择处脚本*/

//获取元素
const years = document.querySelectorAll('.year-select');
const yearInput = document.getElementById('year');

const provinces = document.querySelectorAll('.provinces-select');

const schools = document.querySelectorAll('.school-list span');
const schoolInput = document.getElementById('school');

//辅助函数,用于去除指定标签的指定类名
function removeActiveClass(type,obj){
    if(type === 'year'){
        obj.forEach(objs => {
            objs.classList.remove('active-font');
        })
    }else if(type === 'province'){
        obj.forEach(objs => {
            objs.classList.remove('active-provinces');
        })
    }else if(type === 'school'){
        obj.forEach(objs => {
            objs.classList.remove('active-school');
        })
    }
    
}

/*主要脚本函数*/
//年份选择处脚本
function selectYear(){
    years.forEach(year => {
        year.addEventListener('click',() => {
            removeActiveClass('year',years);
            year.classList.add('active-font');
            yearInput.firstChild.textContent = year.firstChild.textContent;
        })
    })
}

//省份选择处脚本
function selectProvince(){
    provinces.forEach(province => {
        province.addEventListener('click',() => {
            removeActiveClass('province',provinces);
            province.classList.add('active-provinces');
        })
    })
}

//具体学校选择处脚本
function selectSchool(){
    schools.forEach(school => {
        school.addEventListener('click',() => {
            removeActiveClass('school',schools);
            school.classList.add('active-school');
            schoolInput.firstChild.textContent = school.firstChild.textContent;
        })
    })
}

selectYear();
selectProvince();
selectSchool();


//判断邮箱地址输入是否符合规范
const emailInput = document.getElementById('email');
const enrol = document.getElementById('enrol');

const message = document.getElementById('message');

const enrolSuccess = document.getElementById('enrolSuccess');

//正则表达式验证邮箱地址
function isEmail(email){
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
    return reg.test(email);

}
enrol.addEventListener('click',()=>{
    let x = emailInput.value;
    if (isEmail(x)){
        message.classList.remove('errorMessage');
        let y = yearInput.firstChild.textContent;
        let s = schoolInput.firstChild.textContent;
        message.style.display = 'block' ;
        message.textContent = '恭喜您,来自'+y+s+'级'+x+'同学,您的报名信息已记录,请关注您的邮件';
        enrolSuccess.style.display = 'block';
        enrolSuccess.style.zIndex = '999';
    }else{
        message.style.display = 'block' ;
        message.classList.add('errorMessage')
        message.textContent = '邮件地址不符合要求(yourname@host.com),请重新输入';
        
    }
})


/*重新报名点击脚本*/
const reload = document.getElementById('reload');

reload.addEventListener('click',() => {
    enrolSuccess.style.display = 'none';
})