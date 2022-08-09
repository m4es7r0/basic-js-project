import { getCardInfo } from "../services/services"

export function cards() {

    // Card
    
    class Card {
        constructor(parentSelector, img, alt, title, text, price, currency, ...classes) {
            this.img = img
            this.alt = alt
            this.title = title
            this.text = text
            this.price = price
            this.currency = currency
            this.parentSelector = document.querySelector(parentSelector)
            this.classes = classes;
        }
        render() {
            const card = document.createElement('div');
            if (this.classes.length === 0) {
                this.card = 'menu__item';
                card.classList.add(this.card)
            } else {
                this.classes.forEach(className => card.classList.add(className));
            }


            switch (this.currency) {
                case 'UAH':
                    this.currency = '₴'
                    break
                case 'USD':
                    this.currency = '$'
                    break
                case 'EUR':
                    this.currency = '€'
                    break
                default:
                    this.currency = '₴'
            }

            card.innerHTML = `
                                <img src=${this.img} alt="${this.alt}">
                                <h3 class="menu__item-subtitle">${this.title}</h3>
                                <div class="menu__item-descr">${this.text}</div>
                                <div class="menu__item-divider"></div>
                                <div class="menu__item-price-wrapper">
                                    <div class="menu__item-price">
                                        <div class="menu__item-cost">Цена:</div>
                                        <div class="menu__item-total"><span>${this.price}</span> <span>${this.currency}</span>/день</div>
                                    </div>
                                </div>
                                </div>
                             `;

            this.parentSelector.append(card);

        }
    }

    getCardInfo(Card)
}