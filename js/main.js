function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-light" type="submit" style="background-color: #EFCFCF;">Agregar al carrito</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':' KVD Beautiful Modcon Liquid Contour - Tan Neutral 30',
    'img':'/Fotos-productos/FullSizeRender-1.jpg',
    'description':'Contour Líquido de la marca Kat Von D en tono "" en su presentación de .57 oz/17mL full size.'});

addItem({'name':'Anastasia Beverly Hills Cream Bronzer',
    'img':'/Fotos-productos/FullSizeRender-2.jpg',
    'description':'Un bronceador en crema ligero que agrega color multidimensional mientras crea una definición esculpida.'});

addItem({'name':'Paleta de Labios Mua Matte Kara Beauty',
    'img':'/Fotos-productos/FullSizeRender-3.jpg',
    'description':'Paleta de labios con 12 tonos diferentes, hechos con una fórmula mate cremosa.'});

addItem({'name':'KKW BEAUTY Creme Contour & Highlight Set - Medium',
    'img':'/Fotos-productos/FullSizeRender-4.jpg',
    'description':'Contornee, sombree, resalte y esculpe con el KKW BEAUTY creme Contour & Highlight Set.'});

addItem({'name':'NARS | The Multiple Cream Blush, Lip and Eye Stick',
    'img':'/Fotos-productos/FullSizeRender-5.jpg',
    'description':'Una barra multipropósito para ojos, mejillas, labios y cuerpo con una fórmula única de crema a polvo que se puede usar como rubor, iluminador, contorno y más.    '});

addItem({'name':'Wet n Wild Jabón Suds Esponja + Cepillo Limpiador Bob Squarepants.',
    'img':'/Fotos-productos/FullSizeRender-6.jpg',
    'description':'Mantén tus brochas de maquillaje y esponjas limpias con la ayuda de este práctico limpiador.'});

addItem({'name':'Bellaluxe Lipstick Matte Here To Stay #BBLP-05',
    'img':'/Fotos-productos/FullSizeRender-7.jpg',
    'description':'Saluda a nuestros nuevos lippies Bella Luxe! Esta fórmula de polvo a gamuza proporciona el mejor acabado, ya que no se seca tanto en los labios, pero sigue siendo lo suficientemente mate como para no transferirse.'});

addItem({'name':' Bellaluxe Lipstick Matte Over It #BBLP-08',
    'img':'/Fotos-productos/FullSizeRender-8.jpg',
    'description':' Los lápices labiales de mate Bella Luxe tienen una fórmula de polvo a gamuza que brinda el mejor acabado.'});

addItem({'name':'The Ordinary - Aha 30% + Bha 2% Peeling Solution - 30ml',
    'img':'/Fotos-productos/FullSizeRender-9.jpg',
    'description':'Combate el acné y recupera la claridad e incluso tonifica tu piel con esta máscara facial exfoliante. '});

addItem({'name':'Polvo traslúcido Airspun - Coty',
    'img':'/Fotos-productos/FullSizeRender.jpg',
    'description':'Airspun Loose Face Powder es de larga duración y ayuda a proporcionar una cobertura total que se siente lo suficientemente liviana como para usarla durante todo el día.'});