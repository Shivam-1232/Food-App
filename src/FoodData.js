const FoodData = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
      name: "Onion Pizza",
      price: 150,
      desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
      category: "Lunch",
      rating: 4.5,
    },
    {
      id: 2,
      img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
      name: "Margherita Pizza",
      price: 130,
      desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 3,
      img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
      name: "Pepperoni Pizza",
      price: 160,
      desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
      category: "Lunch",
      rating: 4.6,
    },
    {
      id: 4,
      img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
      name: "Mushroom and Spinach Pizza",
      price: 140,
      desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 5,
      img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
      name: "BBQ Chicken Pizza",
      price: 170,
      desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
      category: "Lunch",
      rating: 4.8,
    },
    {
      id: 6,
      img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
      name: "Classic Pancakes",
      price: 80,
      desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 7,
      img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
      name: "Egg and Bacon Croissant",
      price: 110,
      desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
      category: "Breakfast",
      rating: 4.2,
    },
    {
      id: 8,
      img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
      name: "Greek Yogurt Parfait",
      price: 95,
      desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
      category: "Breakfast",
      rating: 4.1,
    },
    {
      id: 9,
      img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
      name: "Avocado Toast",
      price: 120,
      desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
      category: "Breakfast",
      rating: 4.6,
    },
    {
      id: 10,
      img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
      name: "Fruit and Nut Oatmeal",
      price: 85,
      desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 11,
      img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
      name: "Grilled Salmon",
      price: 190,
      desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
      category: "Dinner",
      rating: 4.5,
    },
    {
      id: 12,
      img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
      name: "Chicken Alfredo Pasta",
      price: 160,
      desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
      category: "Dinner",
      rating: 4.8,
    },
    {
      id: 13,
      img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
      name: "Vegetable Stir-Fry",
      price: 130,
      desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
      category: "Dinner",
      rating: 4.2,
    },
    {
      id: 14,
      img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
      name: "Grilled Chicken Burrito Bowl",
      price: 160,
      desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
      category: "Dinner",
      rating: 4.6,
    },
    {
      id: 15,
      img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
      name: "Mushroom Risotto",
      price: 175,
      desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
      category: "Dinner",
      rating: 4.5,
    },
    {
      id: 16,
      img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
      name: "Cheese and Crackers Platter",
      price: 120,
      desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
      category: "Snacks",
      rating: 4.3,
    },
    {
      id: 17,
      img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
      name: "Crispy Chicken Wings",
      price: 130,
      desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 18,
      img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
      name: "Paneer Tikka Skewers",
      price: 130,
      desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
      category: "Snacks",
      rating: 4.9,
    },
    {
      id: 19,
      img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
      name: "Hummus and Veggie Platter",
      price: 90,
      desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 20,
      img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
      name: "Fruit Skewers",
      price: 70,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Snacks",
      rating: 4.8,
    },
    {
      id: 21,
      img: "https://w7.pngwing.com/pngs/658/279/png-transparent-pizza-dish-hawaiian-pizza-ham-pepperoni-meat-pizza-food-beef-olive.png",
      name: "Hawaiian Pizza ",
      price: 399,
      desc: "Hawaiian pizza features a tomato sauce and mozzarella cheese base topped with ham (or Canadian bacon) and pineapple chunks, offering a sweet-savory flavor contrast.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 22,
      img: "https://w7.pngwing.com/pngs/339/84/png-transparent-california-style-pizza-sicilian-pizza-hotel-hamiti-llogara-four-seasons-hotels-and-resorts-pizza-food-cheese-recipe.png",
      name: "Four Cheese Pizza",
      price: 689,
      desc: "Four Cheese pizza is a delightful blend of four cheeses atop a tomato sauce base, offering a rich and indulgent flavor experience. It's a cheese lover's dream come true, with a creamy and gooey texture that satisfies every bite.",
      category: "Breakfast",
      rating: 3.7,
    },
    {
      id: 23,
      img: "https://w7.pngwing.com/pngs/108/401/png-transparent-soup-dish-and-roti-flatbreads-vegetarian-cuisine-indian-cuisine-roti-farsan-thali-khana.png",
      name: "Gujarati Food",
      price: 329,
      desc: "A Vegetarian Gujarati Farsan Thali showcases a variety of flavorful dishes, including soup, roti flatbreads, and a selection of vegetarian specialties. ",
      category: "Dinner",
      rating: 5.0,
    },
    {
      id: 24,
      img: "https://w7.pngwing.com/pngs/520/882/png-transparent-vegetarian-cuisine-south-indian-cuisine-thali-vegetable-vegetable-food-recipe-breakfast.png",
      name: "South Indian Food",
      price: 99,
      desc: "A South Indian thali is a traditional meal featuring a variety of dishes native to the southern regions of India.Typically served on a large platter, it includes staples such as rice, sambar (a tangy lentil-based soup), rasam (a spicy and tangy soup), a selection of vegetable curries or stir-fries, coconut chutney, pickles, papadum (crispy lentil crackers), and yogurt. ",
      category: "Dinner",
      rating: 3.8,
    },
    {
      id: 25,
      img: "https://as1.ftcdn.net/v2/jpg/04/40/00/14/1000_F_440001490_xIBLViSCf72LobwdyHk01hAJTIjPDH50.jpg",
      name: "Khaman",
      price: 80,
      desc: "Gujarati Khaman is a popular snack from the western Indian state of Gujarat. It is made from fermented chickpea flour (besan) batter seasoned with spices such as turmeric, ginger, and green chilies.",
      category: "Breakfast",
      rating: 4.9,
    },
    {
      id: 26,
      img: "https://as1.ftcdn.net/v2/jpg/02/28/08/24/1000_F_228082457_sirIJlS0Aeq4wpM3RvuTJ3E9DnDmzkah.jpg",
      name: "Samosa",
      price: 50,
      desc: "A samosa is a popular Indian snack consisting of a triangular pastry filled with a savory mixture, typically containing spiced potatoes, peas, and sometimes lentils or minced meat. The pastry shell is made from wheat flour and is crispy after being deep-fried or baked.",
      category: "Snacks",
      rating: 4.8,
    },
    {
      id: 27,
      img: "https://as1.ftcdn.net/v2/jpg/03/17/96/00/1000_F_317960020_dZQlGEjGYPLcItTZfvfEP3AwTMrA7MZb.jpg",
      name: "Bhajiya",
      price: 70,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Snacks",
      rating: 4.8,
    },
    {
      id: 28,
      img: "https://as2.ftcdn.net/v2/jpg/02/84/65/61/1000_F_284656175_G6SlGTBVl4pg8oXh6jr86cOmKUZjfrym.jpg",
      name: "Pepsi",
      price: 100,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Drinks",
      rating: 4.2,
    },
    {
      id: 29,
      img: "https://as2.ftcdn.net/v2/jpg/03/09/43/59/1000_F_309435982_QOXsijUw7wx9lEPw4WKBYR2I492j8lzO.jpg",
      name: "7UP",
      price: 50,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Drinks",
      rating: 4.4,
    },
    {
      id: 30,
      img: "https://as1.ftcdn.net/v2/jpg/03/01/73/06/1000_F_301730649_tcTlW3Eqi73s95PnaZx9mk3sD4IdV15E.jpg",
      name: "Coke",
      price: 105,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Drinks",
      rating: 3.9,
    },
    {
      id: 31,
      img: "https://as1.ftcdn.net/v2/jpg/04/21/25/84/1000_F_421258494_e3Pb8EzodyP80xRHQ5aSue504SRwOkbs.jpg",
      name: "Red Bull",
      price: 120,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Drinks",
      rating: 4.7,
    },
    {
      id: 32,
      img: "https://as2.ftcdn.net/v2/jpg/03/48/54/67/1000_F_348546723_o1DzJCIxNMb3hN1Pt6KC9brNFkwWfhpK.jpg",
      name: "Monster",
      price: 120,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Drinks",
      rating: 4.2,
    },
  ];

  export default FoodData;
