// работа с AJAXStringStorage2

let productsArray = [
    {id: 1, category: "sofa", name: "STRANDMON", cost: "479", img: "Sofa.png", quantity: 0, shortDescription: "three-seat sofa, Nordvalla dark grey", discription: "Seat frame: Particleboard, Plywood, Solid beech Seat cushion: Polyurethane foam 35 kg/cu.m., Polyester wadding Back frame/ Armrest: Particleboard, Plywood, Fibreboard, Solid beech Back cushion: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 30 kg/cu.m. Leg: Solid hardwood, Tinted clear lacquer Fabric: 100 % polyester"},
    {id: 2, category: "lamp", name: "MELODI", cost: "6", img: "Lamp.png", quantity: 4, shortDescription: "pendant lamp, 28 cm, white", discription: "Ceiling cup: Polypropylene plastic Shade: Polystyrene plastic"},
    {id: 3, category: "sofa", name: "GRONLID", cost: "609", img: "Sofa3.png", quantity: 3, shortDescription: "3-seat sofa, Sporda dark grey", discription: "Back fabric: 100 % polyester (100% recycled) Seat cushion: Polyurethane foam 30 kg/cu.m., Pocket spring unit: Steel, Lining: 100% polypropylene Cross rail: Steel, Epoxy/polyester powder coating Frame: Plywood, Fibreboard, Polyurethane foam 30 kg/cu.m., Particleboard, Polyurethane foam 20 kg/cu.m., Solid wood"},
    {id: 4, category: "armchairs", name: "POANG", cost: "129", img: "Armchairs2.png", quantity: 2, shortDescription: "armchair, birch veneer/Hillared anthracite", discription: "Supporting fabric: 100% polypropylene Frame: Layer-glued wood veneer, Birch veneer, Clear acrylic lacquer Fabric: 55% cotton, 25 % polyester (100% recycled), 12% viscose/rayon, 8% linen"},
    {id: 5, category: "sofa", name: "BACKSALEN", cost: "409", img: "Sofa5.png", quantity: 3, shortDescription: "3-seat sofa, Blekinge white", discription: "Smoulder resistant lining: Polyester wadding Supporting fabric/ Seat suspension/ Lining: 100% polypropylene Seat frame: Steel, Epoxy/polyester powder coating Seat cushion: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m. Lumbar cushion: 100 % polyester - hollow fibre (100% recycled) Fabric: 100% cotton"},
    {id: 6, category: "bed", name: "MALM", cost: "259", img: "Bed.png", quantity: 3, shortDescription: "bed frame, high, w 2 storage boxes, 140x200 cm, white", discription: "Head/footboard: Particleboard, Fibreboard, Fibreboard, Printed and embossed acrylic paint, Plastic edging, Honeycomb structure paper filling (100% recycled) Bedside: Particleboard, Fibreboard, Printed and embossed acrylic paint, Paper, Plastic edging Galvanized steel Drawer side/ Drawer back: Particleboard, Foil Drawer bottom: Particleboard, Laminate (melamine), ABS plastic Ribbon: 100 % polyester"},
    {id: 7, category: "lamp", name: "HEMMA/KALLFRONT", cost: "19", img: "Lamp4.png", quantity: 3, shortDescription: "pendant lamp, black", discription: "Shade holder: Polycarbonate plastic Shade: Polycarbonate plastic (min. 50% recycled) Decoration: Steel, Pigmented epoxy/polyester powder coating"},
    {id: 8, category: "armchairs", name: "POANG", cost: "179", img: "Armchairs5.png", quantity: 3, shortDescription: "armchair, black-brown/Glose dark brown", discription: "Supporting fabric: 100% polypropylene Frame: Layer-glued wood veneer, Birch veneer, Stain, Clear acrylic lacquer Seat/ Back: Polyurethane foam 30 kg/cu.m. Seat lining/ Back lining/ Lining: 100% cotton"},
    {id: 9, category: "bed", name: "SONGESAND", cost: "349", img: "Bed4.png", quantity: 4, shortDescription: "bed frame with 2 storage boxes, 140x200 cm, white", discription: "Head/footboard: Particleboard, Fibreboard, Fibreboard, Printed and embossed acrylic paint, Plastic edging, Honeycomb structure paper filling (100% recycled) Bedside: Particleboard, Fibreboard, Printed and embossed acrylic paint, Paper, Plastic edging Galvanized steel Drawer side/ Drawer back: Particleboard, Foil Drawer bottom: Particleboard, Laminate (melamine), ABS plastic Ribbon: 100 % polyester"},
    {id: 10, category: "bed", name: "IDANAS", cost: "589", img: "Bed5.png", quantity: 6, shortDescription: "bed frame with storage, 140x200 cm, dark brown", discription: "Head/footboard: Particleboard, Fibreboard, Fibreboard, Printed and embossed acrylic paint, Plastic edging, Honeycomb structure paper filling (100% recycled) Bedside: Particleboard, Fibreboard, Printed and embossed acrylic paint, Paper, Plastic edging Galvanized steel Drawer side/ Drawer back: Particleboard, Foil Drawer bottom: Particleboard, Laminate (melamine), ABS plastic Ribbon: 100 % polyester"},
    {id: 11, category: "sofa", name: "LANDSKRONA", cost: "369", img: "Sofa2.png", quantity: 3, shortDescription: "2-seat sofa, Gunnared dark grey/wood", discription: "Back and seat frame: Plywood, Particleboard, Solid wood, Fibreboard Armrest frame: Plywood, Particleboard, Polyurethane foam 25 kg/cu.m., Solid wood, Fibreboard Back cushion: Polyurethane foam 25 kg/cu.m. Seat cushion: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m. Fabric: 100% polyester (min. 90% recycled) Solid oak, Oak veneer, Steel, Clear lacquer"},
    {id: 12, category: "lamp", name: "HARMOJA", cost: "69", img: "Lamp2.png", quantity: 2, shortDescription: "chandelier, 6-armed, brushed stainless steel", discription: "Arm/ Ceiling cup/ Housing/ Pole/ Tube/ Sleeve/ Edge/ Screw cover/ Cover plate: Steel, Nickel-plated Hook/ Chain: Stainless steel Ring/ Spacer/ Lid/ Screw/ Nut: Steel, Galvanized Hub/ Insert: Polyamide plastic Connector/ Cap: Polypropylene plastic"},
    {id: 13, category: "lamp", name: "NYMANE", cost: "74", img: "Lamp3.png", quantity: 4, shortDescription: "LED pendant lamp, 38 cm, wireless dimmable white spectrum/white", discription: "Ceiling cup/ Shade: Steel, Epoxy/polyester powder coating Diffuser: Acrylic plastic"},
    {id: 14, category: "bed", name: "MALM", cost: "289", img: "Bed2.png", quantity: 3, shortDescription: "bed frame, high, w 2 storage boxes, 160x200 cm, black-brown", discription: "Head/footboard: Particleboard, Fibreboard, Fibreboard, Printed and embossed acrylic paint, Plastic edging, Honeycomb structure paper filling (100% recycled) Bedside: Particleboard, Fibreboard, Printed and embossed acrylic paint, Paper, Plastic edging Galvanized steel Drawer side/ Drawer back: Particleboard, Foil Drawer bottom: Particleboard, Laminate (melamine), ABS plastic Ribbon: 100 % polyester"},
    {id: 15, category: "lamp", name: "HEMMA/KAPPELAND", cost: "49", img: "Lamp5.png", quantity: 3, shortDescription: "pendant lamp, rattan/black", discription: "Frame: Steel, Powder coating Body: Rattan, Clear acrylic lacquer"},
    {id: 16, category: "armchairs", name: "STRANDMON", cost: "209", img: "Armchairs.png", quantity: 6, shortDescription: "wing chair, Nordvalla dark grey", discription: "Fabric: 100 % polyester Frame: Plywood, Polyurethane foam 20 kg/cu.m., Polyurethane foam 25 kg/cu.m., Polyurethane foam 35 kg/cu.m., Particleboard, Solid wood Seat cushion: Polyurethane foam 35 kg/cu.m. Leg: Solid beech, Solid birch, Stain"},
    {id: 17, category: "sofa", name: "SMEDSTORP", cost: "609", img: "Sofa4.png", quantity: 4, shortDescription: "3-seat sofa, Viarp beige/brown/oak", discription: "Frame: Solid wood, Plywood, Particleboard, Fibreboard, Polyurethane foam 25 kg/cu.m., Polypropylene plastic, Laminated veneer lumber Seat cushion: Polyurethane foam 30 kg/cu.m., Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Felt liner, Steel Metal parts: Steel, Epoxy/polyester powder coating Fabric: 76% cotton, 24 % polyester (100% recycled)"},
    {id: 18, category: "armchairs", name: "POANG", cost: "89", img: "Armchairs3.png", quantity: 6, shortDescription: "armchair, birch veneer/Knisa light beige", discription: "Supporting fabric: 100% polypropylene Frame: Layer-glued wood veneer, Birch veneer, Clear acrylic lacquer Fabric: 55% cotton, 25 % polyester (100% recycled), 12% viscose/rayon, 8% linen"},
    {id: 19, category: "armchairs", name: "POANG", cost: "89", img: "Armchairs4.png", quantity: 3, shortDescription: "armchair, brown/Knisa light beige", discription: "Supporting fabric: 100% polypropylene Frame: Layer-glued wood veneer, Birch veneer, Clear acrylic lacquer Fabric: 55% cotton, 25 % polyester (100% recycled), 12% viscose/rayon, 8% linen"},
    {id: 20, category: "bed", name: "MALM", cost: "309", img: "Bed3.png", quantity: 2, shortDescription: "bed frame, high, w 2 storage boxes, 180x200 cm, white stained oak veneer", discription: "Head/footboard: Particleboard, Fibreboard, Fibreboard, Printed and embossed acrylic paint, Plastic edging, Honeycomb structure paper filling (100% recycled) Bedside: Particleboard, Fibreboard, Printed and embossed acrylic paint, Paper, Plastic edging Galvanized steel Drawer side/ Drawer back: Particleboard, Foil Drawer bottom: Particleboard, Laminate (melamine), ABS plastic Ribbon: 100 % polyester"},
    {id: 21, category: "vases", name: "GRADVIS", cost: "9", img: "Vases.png", quantity: 24, shortDescription: "vase, 21 cm, pink", discription: "Stoneware, Pigmented glaze"},
    {id: 22, category: "cabinets", name: "HAVSTA", cost: "438", img: "Cabinets2.png", quantity: 6, shortDescription: "storage combination, 162x37x134 cm, white", discription: "Plinth front/ Plinth side: Solid pine, Stain, Clear lacquer"},
    {id: 23, category: "armchairs", name: "MUREN", cost: "299", img: "Armchairs8.png", quantity: 2, shortDescription: "recliner, Remmarn light grey", discription: "Frame: Particleboard, Plywood, Polyurethane foam 20 kg/cu.m., Polyurethane foam 30 kg/cu.m., Polyurethane foam 25 kg/cu.m., Felt liner, Solid wood  Leg: Solid birch, Stain, Clear acrylic lacquer Fabric: 100% polyester (min. 90% recycled)"},
    {id: 24, category: "armchairs", name: "VIMLE", cost: "599", img: "Armchairs9.png", quantity: 6, shortDescription: "armchair, Grann/Bomstad black", discription: "Frame: 100% polyester (min. 70% recycled), Polyurethane foam 20 kg/cu.m., Solid wood, Fibreboard, Plywood, Particleboard Seat cushion: 100% polyester (min. 70% recycled), Highly resilient polyurethane foam (cold foam) 35 kg/cu.m. Back cushion: 30% cut polyurethane foam/ 70% polyester fibres Leg: Polypropylene plastic Coated fabric parts: 100% polyurethane, 75% polyester, 25% cotton"},
    {id: 25, category: "armchairs", name: "VIMLE", cost: "319", img: "Armchairs10.png", quantity: 6, shortDescription: "armchair, Hallarp beige", discription: "Frame: 100% polyester (min. 70% recycled), Polyurethane foam 20 kg/cu.m., Solid wood, Fibreboard, Plywood, Particleboard Seat cushion: 100% polyester (min. 70% recycled), Highly resilient polyurethane foam (cold foam) 35 kg/cu.m. Back cushion: 30% cut polyurethane foam/ 70% polyester fibres Leg: Polypropylene plastic Coated fabric parts: 100% polyurethane, 75% polyester, 25% cotton"},
    {id: 26, category: "cabinets", name: "HAVSTA", cost: "627", img: "Cabinets.png", quantity: 2, shortDescription: "storage combination, 142x47x212 cm, grey", discription: "Top panel/ Side panels/ Bottom panel/ Shelf/ Door frame/ Door panel: Solid pine, Stain, Clear acrylic lacquer"},
    {id: 27, category: "armchairs", name: "LANDSKRONA", cost: "259", img: "Armchairs7.png", quantity: 0, shortDescription: "armchair, Gunnared dark grey/wood", discription: "Back and seat frame: Plywood, Particleboard, Solid wood, Fibreboard Armrest frame: Plywood, Particleboard, Polyurethane foam 25 kg/cu.m., Solid wood, Fibreboard Back cushion: Polyurethane foam 25 kg/cu.m. Fabric: 100% polyester (min. 90% recycled) Solid oak, Oak veneer, Steel, Clear lacquer"},
    {id: 28, category: "dinnerware", name: "OMBONAD", cost: "14", img: "Dinnerware5.png", quantity: 2, shortDescription: "side plate, 20 cm, dark grey", discription: "Stoneware, Pigmented glaze, Clear glaze"},
    {id: 29, category: "cabinets", name: "HAUGA", cost: "437", img: "Cabinets4.png", quantity: 8, shortDescription: "storage combination, 244x46x116 cm, grey", discription: "Top panel/ Top shelf/ Back rail/ Bottom panel/ Shelf: Particleboard, Acrylic paint, Paper foil, Plastic edging"},
    {id: 30, category: "cabinets", name: "LOMMARP", cost: "329", img: "Cabinets5.png", quantity: 3, shortDescription: "cabinet, 102x101 cm, light beige", discription: "Top panel/ Back panel/ Drawer bottom/ Drawer front/ Bottom panel/ Leg base: Fibreboard, Polyester paint"},
    {id: 31, category: "tables", name: "MORBYLANGA", cost: "599", img: "Tables.png", quantity: 6, shortDescription: "table, 140x85 cm, oak veneer brown stained", discription: "Table top: Particleboard, Stain, Tinted clear acrylic lacquer, Thick oak veneer Leg/ Underframe/ Cross rail: Particleboard, Solid oak, Thick oak veneer, Stain, Tinted clear acrylic lacquer"},
    {id: 32, category: "dinnerware", name: "FAVORISERA", cost: "16", img: "Dinnerware2.png", quantity: 15, shortDescription: "12-piece service, white", discription: "Tempered opal glass"},
    {id: 33, category: "tables", name: "DANDERYD", cost: "179", img: "Tables3.png", quantity: 6, shortDescription: "dining table, 130x80 cm, oak veneer/white", discription: "Underframe/ Leg: Steel, Epoxy/polyester powder coating Inside leg: Steel Table top: Particleboard, Oak veneer, Solid oak, Clear acrylic lacquer, Clear acrylic lacquer"},
    {id: 34, category: "tables", name: "PINNTORP", cost: "129", img: "Tables4.png", quantity: 6, shortDescription: "table, 125x75 cm, light brown stained/white stained", discription: "Table top: Solid pine, Adhesive, Stain, Clear acrylic lacquer, Clear lacquer Under frame: Solid pine, Adhesive, Stain, Clear acrylic lacquer"},
    {id: 35, category: "tables", name: "EKEDALEN", cost: "229", img: "Tables5.png", quantity: 3, shortDescription: "extendable table, 120/180x80 cm, white", discription: "Table top/ Extension leaf: Particleboard, Ash veneer, Acrylic paint, Ash veneer Underframe: Solid birch, Solid pine, Solid beech, Ash veneer, Acrylic paint Leg: Plywood, Ash veneer, Acrylic paint"},
    {id: 36, category: "dinnerware", name: "ENTUSIASM", cost: "14", img: "Dinnerware.png", quantity: 24, shortDescription: "side plate, 18 cm, patterned/blue", discription: "Feldspar porcelain"},
    {id: 37, category: "tables", name: "SKOGSTA", cost: "499", img: "Tables2.png", quantity: 6, shortDescription: "dining table, 235x100 cm, acacia", discription: "Table top: Solid acacia, Clear acrylic lacquer, Clear acrylic lacquer, Clear lacquer Leg/ Rail: Solid acacia, Acrylic paint"},
    {id: 38, category: "dinnerware", name: "FRIKOSTIG", cost: "2", img: "Dinnerware3.png", quantity: 17, shortDescription: "bowl, 11 cm, white/patterned", discription: "Stoneware"},
    {id: 39, category: "dinnerware", name: "OMBONAD", cost: "14", img: "Dinnerware4.png", quantity: 3, shortDescription: "bowl, 15 cm, dark grey", discription: "Stoneware, Pigmented glaze, Clear glaze"},
    {id: 40, category: "cabinets", name: "HAVSTA", cost: "717", img: "Cabinets3.png", quantity: 6, shortDescription: "storage combination w glass-doors, 243x37x134 cm, white", discription: "Top panel/ Side panels/ Bottom panel/ Shelf/ Door frame/ Door panel: Solid pine, Stain, Clear acrylic lacquer"},
    {id: 41, category: "sofa", name: "SMEDSTORP", cost: "649", img: "Sofa8.png", quantity: 6, shortDescription: "3-seat sofa, Djuparp/dark grey oak", discription: "Frame: Solid wood, Plywood, Particleboard, Fibreboard, Polyurethane foam 25 kg/cu.m., Polypropylene plastic, Laminated veneer lumber Seat cushion: Polyurethane foam 30 kg/cu.m., Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Felt liner, Steel Back cushion: Polyurethane foam 25 kg/cu.m. Fabric: 62% polyester (min. 90% recycled), 38% viscose/rayon"},
    {id: 42, category: "dinnerware", name: "FARGKLAR", cost: "11", img: "Dinnerware7.png", quantity: 12, shortDescription: "deep plate, 23 cm, matt green", discription: "Stoneware"},
    {id: 43, category: "dinnerware", name: "OFANTLIGT", cost: "4", img: "Dinnerware8.png", quantity: 6, shortDescription: "bowl, 13 cm, white", discription: "Feldspar porcelain, Glaze"},
    {id: 44, category: "armchairs", name: "AGEN", cost: "59", img: "Armchairs6.png", quantity: 2, shortDescription: "chair, rattan/bamboo", discription: "Frame: Bamboo, Rattan, Clear acrylic lacquer Basematerial/ Binding: Rattan, Clear acrylic lacquer Feet: Polyethylene plastic Screw: Steel, Galvanized"},
    {id: 45, category: "vases", nam: "SOCKERART", cost: "12", img: "Vases2.png", quantity: 0, shortDescription: "vase/jug, 22 cm, white", discription: "Steel, Enamel"},
    {id: 46, category: "vases", nam: "LIVSLANG", cost: "7", img: "Vases3.png", quantity: 6, shortDescription: "vase, 20 cm, green", discription: "Stoneware, Pigmented glaze"},
    {id: 47, category: "sofa", name: "PARUP", cost: "439", img: "Sofa6.png", quantity: 6, shortDescription: "3-seat sofa, Gunnared beige", discription: "Supporting fabric/ Seat suspension/ Lining: 100% polypropylene Seat frame: Steel, Epoxy/polyester powder coating Seat cushion: Polyurethane foam 30 kg/cu.m. Pocket spring unit: Steel Backrest cushion: 30% cut polyurethane foam/ 70% polyester fibres"},
    {id: 48, category: "sofa", name: "GRONLID", cost: "519", img: "Sofa7.png", quantity: 0, shortDescription: "3-seat sofa, Inseros white", discription: "Back fabric: 100 % polyester (100% recycled) Clip: Polypropylene plastic Seat cushion: Polyurethane foam 30 kg/cu.m., Polyester fibre balls Pocket spring unit: Steel Back cushion: 30% cut polyurethane foam/ 70% polyester fibres Frame: Plywood, Polyurethane foam 20 kg/cu.m., Particleboard, Solid wood, Laminated veneer lumber, Fibreboard"},
    {id: 49, category: "dinnerware", name: "SILVERSIDA", cost: "6", img: "Dinnerware6.png", quantity: 4, shortDescription: "side plate, 20 cm, patterned/blue", discription: "Stoneware"},
    {id: 50, category: "bed", name: "IDANAS", cost: "609", img: "Bed6.png", quantity: 3, shortDescription: "bed frame with storage, 160x200 cm, dark brown", discription: "Headboard leg/ Top headboard rail/ Spindle/ Middle headboard rail/ Footboard leg/ Top footboard rail/ Top side rail: Solid pine, Stain, Clear acrylic lacquer Headboard/ Footboard/ Drawer front: Particleboard, Beech veneer, Stain, Clear acrylic lacquer, Beech veneer, Stain, Clear acrylic lacquer Bedside: Solid pine, Stain, Clear acrylic lacquer, Stain, Clear acrylic lacquer"},
    {id: 51, category: "armchairs", name: "VIMLE", cost: "319", img: "Armchairs10.png", quantity: 6, shortDescription: "armchair, Hallarp beige", discription: "Frame: 100% polyester (min. 70% recycled), Polyurethane foam 20 kg/cu.m., Solid wood, Fibreboard, Plywood, Particleboard Seat cushion: 100% polyester (min. 70% recycled), Highly resilient polyurethane foam (cold foam) 35 kg/cu.m. Back cushion: 30% cut polyurethane foam/ 70% polyester fibres Leg: Polypropylene plastic Coated fabric parts: 100% polyurethane, 75% polyester, 25% cotton"},
    {id: 52, category: "armchairs", name: "VIMLE", cost: "319", img: "Armchairs10.png", quantity: 6, shortDescription: "armchair, Hallarp beige", discription: "Frame: 100% polyester (min. 70% recycled), Polyurethane foam 20 kg/cu.m., Solid wood, Fibreboard, Plywood, Particleboard Seat cushion: 100% polyester (min. 70% recycled), Highly resilient polyurethane foam (cold foam) 35 kg/cu.m. Back cushion: 30% cut polyurethane foam/ 70% polyester fibres Leg: Polypropylene plastic Coated fabric parts: 100% polyurethane, 75% polyester, 25% cotton"}
];
let basketArray = [];
let mainArray = [
    {"id": 1, "img": "Kitchen.jpeg", "discription": "Spending most of our time at home, we all probably long to enjoy an uplifting dinner in our favourite restaurant. So why not create the environment worthy the restaurant at home? It doesn't matter if it's a romantic dinner for two, a family celebration or a special occasion just for yourself. Our interior designer reveals what could help brighten up your daily life at home."},
    {"id": 2, "img": "Bedroom.jpeg", "discription": "When so many spots in your home become alternative workspaces, it seems only fair to keep one corner for yourself. This relaxing bedroom has become a work-free sanctuary for the couple who call this loft apartment home. After the hustle and bustle of the workday, they can both look forward to winding down for a bit of cosy, cuddly time where the only task on the to-do list is getting a good night's rest."},
    {"id": 3, "img": "Christmas.jpeg", "discription": "Waiting for the winter holidays, thinking about decorations and setting the mood at home brings so much fun! So why not extend the joy. Let's start preparing for Christmas in advance and make them last a bit longer."}
];

const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword;
const products = 'LEONOVICH_SHOP_PRODUCTS';
const basketName = 'LEONOVICH_SHOP';
const main = 'LEONOVICH_SHOP_MAIN';

// отправляем данные о продуктах
// function insert () {
//      updatePassword=Math.random();
//       $.ajax({
//           url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
//           data : { f : 'INSERT', n : products, 
//           v : JSON.stringify(productsArray), p : updatePassword },
//           success : successInsert, error : errorHandler
//       });
// }
// insert()

// отправляем данные о корзине
// function insertBasket () {
//         updatePassword=Math.random();
//         $.ajax({
//             url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
//             data : { f : 'INSERT', n : basketName, 
//             v : JSON.stringify(basketArray), p : updatePassword },
//             success : successInsert, error : errorHandler
//         });
// }
// insertBasket()

// отправляем данные о главной странице
// function insertMain () {
//     updatePassword=Math.random();
//     $.ajax({
//         url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
//          data : { f : 'INSERT', n : main, 
//          v : JSON.stringify(mainArray), p : updatePassword },
//          success : successInsert, error : errorHandler
//         });
//  }
//  insertMain ()

function successInsert (jqXHR,statusStr) {
    console.log(statusStr)
}

function errorHandler(jqXHR,statusStr,errorStr) {
    console.log(errorStr);
}