class Fedex {
    calculate(pack) {
        return 2.45;
    }
}

class UPS {
    calculate(pack) {
        return 1.56;
    }
}

class USPS {
    calculate(pack) {
        return 4.5;
    }
}


class Shipping {
    constructor() {
        this.company = '';
    }

    setStrategy(company) {
        this.company = company;
    }

    calculate(pack) {
        return this.company.calculate(pack)
    }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log('Fedex: ' + shipping.calculate({from: 'Alabama', to: 'Georgia', weight: 1.56}))
