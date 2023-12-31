"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('drinks', [
            {
                id: 1,
                drink_name: 'GG',
                drink_tag: null,
                drink_video: null,
                drink_category: 'Ordinary Drink',
                alcoholic: 'Optional alcohol',
                drink_glass: 'Collins Glass',
                drink_instructions: 'Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.',
                drink_image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
                drink_ingredient_01: 'Galliano',
                drink_ingredient_02: 'Ginger ale',
                drink_ingredient_03: 'Ice',
                drink_measure_01: '2 1/2 shots',
            },
            {
                id: 2,
                drink_name: 'A1',
                drink_tag: null,
                drink_video: null,
                drink_category: 'Cocktail',
                alcoholic: 'Alcoholic',
                drink_glass: 'Cocktail glass',
                drink_instructions: 'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
                drink_image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
                drink_ingredient_01: 'Gin',
                drink_ingredient_02: 'Grand Marnier',
                drink_ingredient_03: 'Lemon Juice',
                drink_ingredient_04: 'Grenadine',
                drink_measure_01: '1 3/4 shot',
                drink_measure_02: '1 Shot',
                drink_measure_03: '1/4 Shot',
                drink_measure_04: '1/8 Shot',
            },
            {
                id: 3,
                drink_name: 'Ace',
                drink_tag: null,
                drink_video: null,
                drink_category: 'Cocktail',
                alcoholic: 'Alcoholic',
                drink_glass: 'Martini Glass',
                drink_instructions: 'Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.',
                drink_image: 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg',
                drink_ingredient_01: 'Gin',
                drink_ingredient_02: 'Grenadine',
                drink_ingredient_03: 'Heavy cream',
                drink_ingredient_04: 'Milk',
                drink_ingredient_05: 'Egg White',
                drink_measure_01: '2 shots',
                drink_measure_02: '1/2 shot',
                drink_measure_03: '1/2 shot',
                drink_measure_04: '1/2 shot',
                drink_measure_05: '1/2 Fresh',
            },
            {
                id: 4,
                drink_name: '747',
                drink_tag: null,
                drink_video: null,
                drink_category: 'Shot',
                alcoholic: 'Alcoholic',
                drink_glass: 'Shot glass',
                drink_instructions: 'Pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!',
                drink_image: 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg',
                drink_ingredient_01: 'Kahlua',
                drink_ingredient_02: 'Baileys irish cream',
                drink_ingredient_03: 'Frangelico',
                drink_measure_01: '1/3 part',
                drink_measure_02: '1/3 part',
                drink_measure_03: '1/3 part',
            },
            {
                id: 5,
                drink_name: 'Kir',
                drink_tag: 'IBA,ContemporaryClassic',
                drink_video: null,
                drink_category: 'Ordinary Drink',
                alcoholic: 'Alcoholic',
                drink_glass: 'Wine Glass',
                drink_instructions: 'Add the crème de cassis to the bottom of the glass, then top up with wine.',
                drink_image: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
                drink_ingredient_01: 'Creme de Cassis',
                drink_ingredient_02: 'Champagne',
                drink_measure_01: '1 part',
                drink_measure_02: '5 parts',
            },
            {
                id: 6,
                drink_name: 'Wontons',
                drink_category: 'Pork',
                drink_instructions: 'Combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables in a bowl. Separate wonton skins. Place a heaping teaspoon of filling in the center of the wonton. Brush water on 2 borders of the skin, covering 1/4 inch from the edge. Fold skin over to form a triangle, sealing edges. Pinch the two long outside points together. Heat oil to 450 degrees and fry 4 to 5 at a time until golden. Drain and serve with sauce.',
                drink_image: 'https://www.themealdb.com/images/media/meals/1525876468.jpg',
                drink_tag: 'MainMeal',
                drink_video: 'https://www.youtube.com/watch?v=9h9No18ZyCI',
                drink_ingredient_01: 'Pork',
                drink_ingredient_02: 'Garlic Clove',
                drink_ingredient_03: 'Ginger',
                drink_ingredient_04: 'Soy Sauce',
                drink_ingredient_05: 'Sesame Seed Oil',
                drink_ingredient_06: 'Carrots',
                drink_ingredient_07: 'Celery',
                drink_ingredient_08: 'Spring Onions',
                drink_ingredient_09: 'Wonton Skin',
                drink_ingredient_10: 'Oil',
                drink_ingredient_11: 'Water',
                drink_measure_01: '1lb',
                drink_measure_02: '3 chopped',
                drink_measure_03: '1 tsp',
                drink_measure_04: '1 tbs',
                drink_measure_05: '1 tsp',
                drink_measure_06: '3 finely chopped',
                drink_measure_07: '3 finely chopped',
                drink_measure_08: '6 chopped',
                drink_measure_09: '1 Packet',
                drink_measure_10: 'Fry',
                drink_measure_11: 'Bottle',
            },
            {
                id: 7,
                drink_name: 'Poutine',
                drink_category: 'Miscellaneous',
                drink_instructions: 'Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C). Warm gravy in saucepan or microwave. Place the fries into the hot oil, and cook until light brown, about 5 minutes. Remove to a paper towel lined plate to drain. Place the fries on a serving platter, and sprinkle the cheese over them. Ladle gravy over the fries and cheese, and serve immediately.',
                drink_image: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
                drink_tag: 'UnHealthy,Speciality,HangoverFood',
                drink_video: 'https://www.youtube.com/watch?v=UVAMAoA2_WU',
                drink_ingredient_01: 'Vegetable Oil',
                drink_ingredient_02: 'Beef Gravy',
                drink_ingredient_03: 'Potatoes',
                drink_ingredient_04: 'Cheese Curds',
                drink_measure_01: 'Dash',
                drink_measure_02: '1 Can',
                drink_measure_03: '5 thin cut',
                drink_measure_04: '2 cups',
            },
            {
                id: 8,
                drink_name: 'Timbits',
                drink_category: 'Dessert',
                drink_instructions: 'Sift together dry ingredients. Mix together wet ingredients and incorporate into dry. Stir until smooth. Drop by teaspoonfuls (no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides. Remove and drain. Roll in cinnamon sugar while still warm and serve.',
                drink_image: 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
                drink_tag: 'Snack,Treat',
                drink_video: 'https://www.youtube.com/watch?v=fFLn1h80AGQ',
                drink_ingredient_01: 'Flour',
                drink_ingredient_02: 'Sugar',
                drink_ingredient_03: 'Baking Powder',
                drink_ingredient_04: 'Salt',
                drink_ingredient_05: 'Egg',
                drink_ingredient_06: 'Milk',
                drink_ingredient_07: 'Oil',
                drink_ingredient_08: 'Oil (for frying)',
                drink_ingredient_09: 'Icing Sugar (garnish)',
                drink_measure_01: '2 cups',
                drink_measure_02: '1/3 cup',
                drink_measure_03: '3 tsp',
                drink_measure_04: '½ tsp',
                drink_measure_05: '1 beaten',
                drink_measure_06: '¾ cup',
                drink_measure_07: '3 tbs',
                drink_measure_08: 'for frying',
                drink_measure_09: 'garnish',
            },
            {
                id: 9,
                drink_name: 'Koshari',
                drink_category: 'Vegetarian',
                drink_instructions: 'Cook the lentils. Bring lentils and 4 cups of water to a boil in a medium pot or saucepan over high heat. Reduce the heat to low and cook until lentils are just tender (15-17 minutes). Drain from water and season with a little salt. (Note: when the lentils are ready, they should not be fully cooked. They should be only par-cooked and still have a bite to them as they need to finish cooking with the rice). Now, for the rice. Drain the rice from its soaking water. Combine the par-cooked lentils and the rice in the saucepan over medium-high heat with 1 tbsp cooking oil, salt, pepper, and coriander. Cook for 3 minutes, stirring regularly. Add warm water to cover the rice and lentil mixture by about 1 1/2 inches (you’ll probably use about 3 cups of water here). Bring to a boil; the water should reduce a bit. Now cover and cook until all the liquid has been absorbed and both the rice and lentils are well cooked through (about 20 minutes). Keep covered and undisturbed for 5 minutes or so. Now make the pasta. While the rice and lentils are cooking, make the pasta according to package instructions by adding the elbow pasta to boiling water with a dash of salt and a little oil. Cook until the pasta is al dente. Drain. Cover the chickpeas and warm in the microwave briefly before serving. Make the crispy onion topping. Sprinkle the onion rings with salt, then toss them in the flour to coat. Shake off excess flour. In a large skillet, heat the cooking oil over medium-high heat, cook the onion rings, stirring often, until they turn a nice caramelized brown. Onions must be crispy, but not burned (15-20 minutes).',
                drink_image: 'https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg',
                drink_tag: null,
                drink_video: 'https://www.youtube.com/watch?v=y0d2ZMZBW4Y',
                drink_ingredient_01: 'Brown Lentils',
                drink_ingredient_02: 'Rice',
                drink_ingredient_03: 'Coriander',
                drink_ingredient_04: 'Macaroni',
                drink_ingredient_05: 'Chickpeas',
                drink_ingredient_06: 'Onion',
                drink_ingredient_07: 'Salt',
                drink_ingredient_08: 'Vegetable Oil',
                drink_measure_01: '1 1/2 cups',
                drink_measure_02: '1 1/2 cups',
                drink_measure_03: '1/2 tsp',
                drink_measure_04: '2 cups',
                drink_measure_05: 'Can',
                drink_measure_06: '1 large',
                drink_measure_07: 'Sprinkling',
                drink_measure_08: '1/2 cup',
            },
            {
                id: 10,
                drink_name: "ABC",
                drink_category: "Shot",
                drink_instructions: "Layered in a shot glass.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
                drink_tag: null,
                drink_ingredient_01: "Amaretto",
                drink_ingredient_02: "Baileys irish cream",
                drink_ingredient_03: "Cognac",
                drink_measure_01: "1/3 ",
                drink_measure_02: "1/3 ",
                drink_measure_03: "1/3 ",
            },
            {
                id: 11,
                drink_name: "252",
                drink_category: "Shot",
                drink_instructions: "Add both ingredients to shot glass, shoot, and get drunk quick",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
                drink_tag: null,
                drink_ingredient_01: "151 proof rum",
                drink_ingredient_02: "Wild Turkey",
                drink_measure_01: "1/2 shot Bacardi ",
                drink_measure_02: "1/2 shot ",
            },
            {
                id: 12,
                drink_name: "AT&T",
                drink_category: "Ordinary Drink",
                drink_instructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
                drink_tag: null,
                drink_ingredient_01: "Absolut Vodka",
                drink_ingredient_02: "Gin",
                drink_ingredient_03: "Tonic water",
                drink_measure_01: "1 oz ",
                drink_measure_02: "1 oz ",
                drink_measure_03: "4 oz ",
            },
            {
                id: 13,
                drink_name: "Smut",
                drink_category: "Punch / Party Drink",
                drink_instructions: "Throw it all together and serve real cold.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
                drink_tag: null,
                drink_ingredient_01: "Red wine",
                drink_ingredient_02: "Peach schnapps",
                drink_ingredient_03: "Pepsi Cola",
                drink_ingredient_04: "Orange juice",
                drink_measure_01: "1/3 part ",
                drink_measure_02: "1 shot ",
                drink_measure_03: "1/3 part ",
                drink_measure_04: "1/3 part ",
            }
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('drinks', {});
    }),
};
//# sourceMappingURL=FreeAPIDrinkSeeder.js.map