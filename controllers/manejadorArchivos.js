const fs = require('fs');

class contenedor {
    constructor(fileName) {
        this.fileName = fileName
    }

    async save(title, price, thumbnail) {
        const product = {
            id: null,
            title: title,
            price: price,
            thumbnail: thumbnail
        }
        try{
            const contenido = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
            const products = JSON.parse(contenido);
            product.id = products.length +  1;
            products.push(product);
            fs.writeFileSync(`./${this.fileName}`, JSON.stringify(products));
        }
        catch(error){
            const products = []
            product.id = 1;
            products.push(product);
            fs.writeFileSync(`./${this.fileName}`, JSON.stringify(products));
        }
    }

    async getAll() {
        try{
            const contenido = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
            return JSON.parse(contenido)
        }
        catch(error){
            console.log(error)
        }
    }

    async getById(id) {
            const contenido = await fs.promises.readFile(`./${this.fileName}`, 'utf-8');
            const products = JSON.parse(contenido);
            return products.find(prod=> prod.id == id)
    }

    async deleteAll() {
        try{
            const products = [];
            fs.writeFileSync(`./${this.fileName}`, JSON.stringify(products));
        }
        catch(error){
            console.log('error getAll')
        }
    }

    async deleteById(id) {
        try{
            const contenido = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
            const products = JSON.parse(contenido)
            const index = products.findIndex( x => x.id === id );
            if(index === -1){
                console.log('no existe el id buscado')
            }
            products.splice( index, 1 );
            fs.writeFileSync(`./${this.fileName}`, JSON.stringify(products));
        }
        catch(error){
            console.log('error getById')
        }
    }
}

module.exports = contenedor