/*卡片切换处及内容区切换的脚本*/

//获取元素
const switch_span = document.querySelectorAll('.switch-span');
const courses = document.querySelectorAll('.course-list');

//辅助函数,用于去除指定标签的指定类名
function removeActiveClasses(){
    switch_span.forEach(spans => {
        spans.classList.remove('active');
    })
}

/*内容区切换脚本*/
function tags(switchName){
    courses.forEach(course => {
        course.style.display = 'none';
    })
    courses.forEach( course => {
        if (course.classList.contains(switchName)){
            course.style.display = 'block';
        }
    })
}
function allTags(){
    courses.forEach(course => {
        course.style.display = 'block';
    })
}

//主要的脚本函数
function switches(){
    switch_span.forEach(spans => {
        spans.addEventListener('click',() => {
            removeActiveClasses();
            spans.classList.add('active');
            if (spans.firstChild.textContent === 'HTML'){
                tags('HTML');
            }else if (spans.firstChild.textContent === 'CSS'){
                tags('CSS');
            }else if (spans.firstChild.textContent === 'JavaScript'){
                tags('JavaScript');
            }
            else{
                allTags();
            }
        })
    })
}

//调用脚本函数
switches();


//报名按钮点击事件
const enrolButton = document.getElementById('enrolButton');
const enrolFrom = document.getElementById('enrolFrom');

enrolButton.addEventListener('click',() => {
    enrolFrom.style.display = 'flex';
})







