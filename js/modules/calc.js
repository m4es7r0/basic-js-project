export function calc() {
    
        // Calculator

        const result = document.querySelector('.calculating__result');
        let sex, height, weight, age, ratio;
    
        if (localStorage.getItem('sex')) sex = localStorage.getItem('sex')
        else sex = 'female', localStorage.setItem('sex', 'female')
    
        if (localStorage.getItem('ratio')) ratio = localStorage.getItem('ratio')
        else ratio = '1.375', localStorage.setItem('ratio', '1.375')
    
        function initCalc(selector, activeClass) {
            const elements = document.querySelectorAll(selector)
    
            elements.forEach(item => {
                if (item.getAttribute('id') === localStorage.getItem('sex')) item.classList.add(activeClass)
                if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) item.classList.add(activeClass)
            })
        }
        initCalc('#gender div', 'calculating__choose-item_active')
        initCalc('.calculating__choose_big div', 'calculating__choose-item_active')
    
        function calcTotal() {
            if (!sex || !height || !weight || !age || !ratio) {
                result.innerHTML = `<img src="./img/spinner.svg" alt="loading" style="height: 46.67px" />`
                return
            }
    
            if (sex === 'female') {
                result.innerHTML = `<span>${Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)}</span> ккал`
            } else {
                result.innerHTML = `<span>${Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)}</span> ккал`
            }
        }
        calcTotal()
    
        function getStaticInfo(selector, activeClass) {
            const elements = document.querySelectorAll(selector)
    
            elements.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target.getAttribute('data-ratio')) {
                        ratio = +e.target.getAttribute('data-ratio')
                        localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'))
                    } else {
                        sex = e.target.getAttribute('id')
                        localStorage.setItem('sex', e.target.getAttribute('id'))
                    }
    
                    elements.forEach(item => item.classList.remove(activeClass))
                    e.target.classList.add(activeClass)
    
                    calcTotal()
                })
            })
        }
        getStaticInfo('#gender div', 'calculating__choose-item_active')
        getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active')
    
        function getDynamicInfo(selector) {
            const input = document.querySelector(selector)
    
            input.addEventListener('input', (e) => {
                switch (input.getAttribute('id')) {
                    case 'height':
                        height = +input.value
                        break
                    case 'weight':
                        weight = +input.value
                        break
                    case 'age':
                        age = +input.value
                        break
                    default:
                        0
                }
                calcTotal()
            })
        }
        getDynamicInfo('#height')
        getDynamicInfo('#weight')
        getDynamicInfo('#age')
}