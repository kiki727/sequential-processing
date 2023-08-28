class SekvencijalnaObrada {
  constructor() {
    this.funkcije = [];
  }

  dodajFunkciju(funkcija) {
    this.funkcije.push(funkcija);
    return this; // Omogućava pozivanje metoda u lancu
  }

  obradiSekvencijalno(data) {
    this._processFunctions(0, data);
  }

  _processFunctions(index, data) {
    if (index < this.funkcije.length) {
      const currentFunction = this.funkcije[index];
      currentFunction(data, () => {
        this._processFunctions(index + 1, data);
      });
    } else {
      console.log('Završena obrada funkcija');
    }
  }
}

// Kreiranje instance klase i dodavanje funkcija u lancu
const sekvencijalnaObrada = new SekvencijalnaObrada()
  .dodajFunkciju((data, next) => {
    console.log('Prva funkcija izvršava se sa podacima:', data);
    next();
  })
  .dodajFunkciju((data, next) => {
    console.log('Druga funkcija izvršava se sa podacima:', data);
    next();
  });

// Simulacija upotrebe
const primjerPodaci = 'Ovo su podaci za primer';
sekvencijalnaObrada.obradiSekvencijalno(primjerPodaci);
