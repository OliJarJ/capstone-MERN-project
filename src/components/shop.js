// var shop = [
//     {
//       title: 'Dogs ',
//       image: './img/roi-dimor-4Tx3p2DT4F4-unsplash.jpg',
//       price: '90 - $200',
//       description: 'dogs are beloved pets that bring joy, companionship, and unconditional love to millions of people around the world. Whether you prefer a playful puppy, a loyal working dog, or a gentle senior, there\'s a canine companion out there for everyone.'
//     }, //this is one object
//     {
//       title: 'Cats',
//       image: './img/leiada-krozjhen-YrNYR3vr73w-unsplash.jpg',
//       price: '90 - $200',
//       description: 'Cats require a safe and comfortable living environment with access to food, water, litter boxes, scratching posts, and toys for mental and physical stimulation. Indoor cats should be provided with enrichment activities to prevent boredom and encourage natural behaviors.'
//     }, //this is one object
//     {
//       title: 'Ball Pythons',
//       image: './img/fidias-cervantes-oHW-2VFNg-Q-unsplash.jpg',
//       price: '75 - $150',
//       description: 'Ball pythons are relatively small and stout-bodied snakes, typically reaching lengths of 3 to 5 feet (though some individuals can grow larger). They have smooth scales and a distinctive, docile demeanor.'
//     }, //this is one object
//     {
//       title: 'Fancy Ball Pythons',
//       image: './img/timothy-dykes-SGW7enB7bl0-unsplash.jpg',
//       price: '100 - $300',
//       description: 'Fancy ball pythons, also known as morph ball pythons, are popular reptile pets known for their striking and unique color patterns. These snakes are selectively bred to produce visually appealing variations in their appearance, often featuring vibrant colors, intricate patterns, and unusual markings. '
//     }, //this is one object
//     {
//       title: 'Leopard Geckos',
//       image: './img/andrey-tikhonovskiy-BbXxbbbTmRc-unsplash.jpg',
//       price: '60 - $120',
//       description: 'Leopard geckos are popular reptile pets known for their docile nature, unique appearance, and relatively low maintenance requirements. When handling leopard geckos, approach them gently and support their body to prevent them from feeling insecure or stressed.'
//     }, //this is one object
//     {
//       title: 'Budgies',
//       image: './img/budgie-photo.jpg',
//       price: '65 - $120',
//       description: 'Budgies are social birds that thrive on interaction and companionship. They are often happiest when kept in pairs or small groups, but they can also bond closely with their human caregivers. Spend time interacting with your budgie daily to build trust and strengthen your bond.'
//     }, //this is one object
//     {
//       title: 'Finches',
//       image: './img/zebra-finches.webp',
//       price: '45 - $90',
//       description: 'Finches are active birds that enjoy flying, hopping, and exploring their environment. Provide plenty of toys, perches, and other enrichment activities to keep your finches mentally and physically stimulated. Natural branches, swings, and nesting materials can also be added to the cage for additional enrichment.'
//     }, //this is one object
//     {
//       title: 'Rabbits',
//       image: './img/aswathy-n-srMHHWCTvcU-unsplash.jpg',
//       price: '80 - $200',
//       description: 'Rabbits are curious animals and may chew on electrical cords, household plants, and other hazards. Rabbit-proof your home by removing or securing potential dangers, and provide plenty of safe chew toys to satisfy your rabbit\'s natural chewing instincts.'
//     }, //this is one object
//     {
//       title: 'Clown Fish',
//       image: './img/jw-QXWnYUPHDvc-unsplash.jpg',
//       price: '35',
//       description: 'Clownfish, also known as anemonefish, are popular pets in the aquarium hobby due to their vibrant colors, interesting behavior, and relatively easy care requirements. can make fascinating and rewarding pets for hobbyists with a passion for marine aquariums and the dedication to provide proper care.'
//     }, //this is one object
//     {
//       title: 'Starfish',
//       image: './img/david-clode-xTj9uJxJBXY-unsplash.jpg',
//       price: '120',
//       description: 'Did you know that starfish don\'t have a brain? Instead of a central nervous system like most animals, they have a decentralized nervous system spread throughout their bodies. This unique adaptation allows them to respond to their environment and coordinate movement without a traditional brain structure.'
//     }, //this is one object
//     {
//       title: 'Pleco',
//       image: './img/pleco.jpg',
//       price: '60',
//       description: 'Plecos are renowned for their ability to consume algae in aquariums, which makes them popular choices for keeping tanks clean. They have specialized mouthparts designed for scraping algae off surfaces. Plecos are fascinating and useful additions to freshwater aquariums, but they require proper care and consideration of their specific needs to thrive in captivity.'
//     }, //this is one object
//     {
//       title: 'Snails',
//       image: './img/magda-vrabetz-tV4U7sJ0IVI-unsplash.jpg',
//       price: '40',
//       description: 'Snails can indeed make interesting and low-maintenance pets for many people, especially those who are interested in observing their unique behaviors and characteristics.'
//     }, //this is one object
  
//     {
//       title: 'Frogs',
//       image: './img/david-clode-UBN5a4IA3bk-unsplash.jpg',
//       price: '80',
//       description: 'While some frog species tolerate handling better than others, most frogs are delicate creatures and should be handled as little as possible to minimize stress. When handling is necessary, it\'s important to do so gently and with clean, moist hands to avoid injuring the frog or transferring harmful substances.'
//     } //this is one object
  
//   ]
  
//   var postHTML = " "
  
  
  
//   // for (var i = 0; i < shop.length; i++) {
//   //   var heading = '<div class="col-3 mt-5 d-flex" ' + '"><span class="text-center"><h3 class="justify-content-center fw-bolder" style="font-family: Aoboshi One">' + shop[i].title + '</h3>'
//   //   var image = '<img class="img-fluid justify-content-center marketIMG py-4 px-4" src="' + shop[i].image + '"/>'
//   //   var price = '<p class="price text-black fw-bold"> $' + shop[i].price + '</p></span>'
//   //   var description = '<p class="text-center">' + shop[i].description + '</p><button id="addtocart-btn" type="button" class="btn btn-info"> add to cart</button></div>'
//   //   var concatThis = heading + image + price + description;
//   //   postHTML = postHTML + concatThis
//   // }
  
//   for (var i = 0; i < shop.length; i++) {
//     var heading = '<div class="card col-3 mt-5 mx-2 d-flex justify-items-center shop-page" ' + '"><div class="card-body d-flex flex-column"><h3 class="justify-content-center fw-bold card-title" style="font-family: Aoboshi One"; color: gray;>' + shop[i].title + '</h3>'
//     var image = '<img class="card-img-top img-fluid justify-content-center marketIMG py-4 px-4" src="' + shop[i].image + '"/>'
//     var price = '<p class="price text-black fw-bold card-text text-center"> $' + shop[i].price + '</p></span>'
//     var description = '<p class="text-center">' + shop[i].description + '</p><button id="addtocart-btn" type="button" class="btn btn-info mt-auto"> add to cart</button></div></div>'
//     var concatThis = heading + image + price + description;
//     postHTML = postHTML + concatThis
//   }
  
//   document.getElementById('shop').innerHTML = postHTML
  
//   export default shop;