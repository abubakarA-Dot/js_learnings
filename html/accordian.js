const accordian = document.querySelectorAll('.content-container');

for (i = 0; i < accordian.length; i++){

    accordian[i].addEventListener('click', accordianToggle)
    function accordianToggle() {
        console.log('\n This :', this)
        this.classList.toggle('active');
    
    
}
    
}