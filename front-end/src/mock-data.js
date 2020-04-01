let mock = [{
    id: 1,
    name: "Italian Bread",
    image: 'Bread.jpg',
    ingredients: [{
        name: "active dry yeast",
        measurement: "1 (1/4-ounce) envelope"
      },
      {
        name: "bread flour",
        measurement: "2 to 3 cups"
      },
      {
        name: "sugar",
        measurement: "1 teaspoon"
      },
      {
        name: "salt",
        measurement: "1 teaspoon"
      },
      {
        name: "olive oil",
        measurement: "2 tablespoons"
      },
      {
        name: "warm water (100° to 110°)",
        measurement: "1 cup"
      }
    ],
    recipe: [
      "Combine yeast, sugar, and 1 cup warm water in bowl of a heavy-duty electric stand mixer; let stand 5 minutes. Add 2 cups flour, oil, and salt to bowl, and beat at low speed, using dough hook attachment, 1 minute. Gradually add additional flour until dough begins to leave the sides of the bowl and pull together. (Note: The dough will take on a 'shaggy' appearance as the flour is being added. When enough flour has been added, the dough will look soft and smooth, not wet and sticky or overly dry with a rough surface.)",
      "Increase speed to medium, and beat 5 minutes. Cover bowl of dough with plastic wrap, and let stand in a warm place (85°), free from drafts, 30 minutes or until doubled in bulk. Punch dough down, and let stand 10 minutes.",
      "Turn dough out onto a lightly floured surface; shape dough into a 12-inch loaf, and place on a lightly greased baking sheet. Cut 3 (1/4-inch deep) slits across top of dough with a sharp paring knife. (The slits release interior steam and prevent the loaf from blowing apart at the side.)",
      "Bake at 400° for 16 minutes or until golden brown. Cool on a wire rack."
    ],
    difficulty: "Hard",
    imageSource: "https://www.flickr.com/photos/cuttingboard/3952783930/in/photolist-72i3X5-Tds8yG-9ZgTkh-9z4r8f-a61Ryz-7nC1a9-rWNjU-dEuqWt-bA7QsV-qKy4WF-bwcmuf-4esUNi-4gEyUw-4KG1bq-id84EC-8HU4r2-9qbRyT-aqSiAc-o2FfMj-RQJ1gP-72i3Uj-7W8iT7-5dafJZ-fP8AMj-23w3xZx-sJAig-bxoRdF-8qUdaa-9wHXgD-aqUWUf-91wC1Q-5rJNqL-9WBb8U-cjcHs3-dkk8Lr-4Lgb9v-9z6myp-7wX6Cz-aqSjg4-d8SPc5-7D1Ztr-eQA3Zk-Q2B9nS-ADK3i-id7G4H-55qWrT-aqUZCy-aD8Cgm-cRDdh-qUQKtE",
    recipeSource: "https://www.myrecipes.com/recipe/italian-bread",
  },
  {
    id: 2,
    name: "Oreo White Chocolate Pudding Cookies",
    image: 'Cookies.jpg',
    ingredients: [{
        name: "room temperature, unsalted butter",
        measurement: "1 cup"
      },
      {
        name: "brown sugar",
        measurement: "3/4 cup"
      },
      {
        name: "granulated sugar",
        measurement: "1/4 cup"
      },
      {
        name: "white chocolate instant pudding mix",
        measurement: "1 3.4 oz package"
      },
      {
        name: "eggs",
        measurement: "2 large"
      },
      {
        name: "vanilla extract",
        measurement: "1 teaspoon"
      },
      {
        name: "all-purpose flour",
        measurement: "2 1/2 cups"
      },
      {
        name: "baking soda",
        measurement: "1 teaspoon"
      },
      {
        name: "salt",
        measurement: "1/2 teaspoon"
      },
      {
        name: "chopped Oreos",
        measurement: "2 cups"
      },
      {
        name: "white chocolate chips",
        measurement: "1 1/2 cups"
      }
    ],
    recipe: [
      "Preheat oven to 350 degrees F. Line a baking sheet with parchment paper or a Silpat baking mat and set aside.",
      "Using a mixer, beat together butter and sugars until creamy. Add in white chocolate pudding mix, eggs, and vanilla extract. In a medium bowl, whisk together the flour, baking soda, and salt. Add the dry ingredients to the wet ingredients and mix until just combined. Stir in the Oreos and white chocolate chips.",
      "Drop cookie dough by rounded tablespoons onto prepared baking sheet. Bake for 10 minutes, or until slightly golden around the edges and set. Remove cookies from oven and let cool on baking sheet for two minutes. Transfer to a cooling rack and cool completely.",
      "Note-these cookies will stay soft for 3-4 days. Store in an air-tight container on the counter."
    ],
    difficulty: "Easy",
    imageSource: "https://search.creativecommons.org/photos/38db1f38-5805-46f5-b56b-0c25f3914967",
    recipeSource: "https://www.twopeasandtheirpod.com/oreo-white-chocolate-pudding-cookies/",
  },
  {
    id: 3,
    name: "Fettuccine Alfredo",
    image: 'Fettuccine-Alfredo.jpg',
    ingredients: [{
        name: "Fettuccine Pasta",
        measurement: "1 lb"
      },
      {
        name: "butter",
        measurement: "6 tablespoons"
      },
      {
        name: "garlic clove (minced)",
        measurement: "1"
      },
      {
        name: "heavy cream",
        measurement: "1 1/2 cups"
      },
      {
        name: "salt",
        measurement: "1/4 teaspoon"
      },
      {
        name: "shredded parmesan cheese",
        measurement: "1 1/4 cup"
      },
      {
        name: "pepper",
        measurement: "1/4 teaspoon"
      },
      {
        name: "Italian parsley",
        measurement: "2 tablespoons"
      }
    ],
    recipe: [
      "In a large pot, heat water over high heat until boiling. Add salt to season the water. Once it is boiling, add fettuccine and cook according to package instructions.",
      "In a large skillet or pan, heat butter over medium heat. Add minced garlic and cook for 1 to 2 minutes. Stir in heavy cream. ",
      "Let heavy cream reduce and cook for 5 to 8 minutes. Add half of the parmesan cheese to the mixture and whisk well until smooth. Keep over heat and whisk well until cheese is melted.",
      "Save some pasta water. The pasta water is full of flavor and can be used to thin out the sauce.",
      "Toss alfredo sauce with fettuccine pasta and add half of the parmesan cheese. Once it is tossed, garnish with the remaining parmesan cheese. Add a little pasta water if it needs to be thinned out.",
      "Garnish with Italian parsley, if so desired."
    ],
    difficulty: "Medium",
    imageSource: "https://www.flickr.com/photos/by_dianne/6767423101/in/photolist-bj1P7D-9qyzRf-4svCBA-23Letr-5tteoT-9JHvcK-mhU5Uc-mC33L-fbw7Ci-988yKn-4Yhp7d-2cLVQQC-75tK8z-2cub36D-cazRqU-2cLVQPf-rEwby5-7QMWbc-Dbjh5j-bF4wDi-demrXz-cpKTfo-51gnQS-mhU6be-bs9AD1-HtGZz-jrpnU-bnJZYz-HxeJH-3goyE1-9VgxzP-2a4rUL-JdZ2v-pMWv93-88jasd-qNCYFe-rreF4B-pFUdUo-2e9ZRAf-fT7XXp-88XzMT-88XzNv-72cA9-orqkU-9VAfKr-VWJjuD-8qE3jJ-9Kh7E-29D51W-9Kh7C",
    recipeSource: "https://www.modernhoney.com/fettuccine-alfredo/",
  },
  {
    id: 4,
    name: "Marble Brownies",
    image: 'Marble-Brownies.jpg',
    ingredients: [{
        name: "cream cheese, softened",
        measurement: "1 package (8 oz.)"
      },
      {
        name: "brown mix",
        measurement: "1 package (18 to 20 oz.)"
      },
      {
        name: "sugar",
        measurement: "1/3 cup"
      },
      {
        name: "egg",
        measurement: "1"
      },
      {
        name: "vanilla",
        measurement: "1/2 teaspoon"
      }
    ],
    recipe: [
      "Heat oven to 350ºF.",
      "Prepare brownie batter as directed on package; pour into 13x9-inch pan sprayed with cooking spray.",
      "Beat cream cheese in large bowl with mixer until creamy. Add sugar, egg and vanilla; mix well. Drop by tablespoonfuls over brownie batter; swirl gently with knife.",
      "Bake 35 to 40 min. or until toothpick inserted in center comes out with fudgy crumbs. (Do not overbake.) Cool completely."
    ],
    difficulty: "Medium",
    imageSource: "https://www.flickr.com/photos/melissa_flowers/5745518780/in/photolist-9KHhyC-4pBgXh-7Chj8q-bf8ECZ-4zwvEh-6gvhrq-iqoafn-5CGkqn-b2vTwz-6vcm1p-5YZMA9-2B8WcE-QDggF-2KzCuh-eaWzWU-ewidHQ-8oTy6T-384BDM-ah6rSH-9fvonE-389c6m-6qmuiP-9QNaa8-4NAwQA-5uBEdA-5FBWbG-dhupZ-9Hy34u-5WqzNP-28x4GGJ-4NAwAA-76L516-af2WvF-7gHGbZ-5iqYHK-5CGkpR-bvWCuC-8usYjz-72ymCz-QDg4c-8sN4oh-4qGrfp-aCDG8b-e3f4ZG-77mHAj-38N2FJ-9HV89Y-99qX5E-4PSdeN-4GYazW",
    recipeSource: "https://www.myfoodandfamily.com/recipe/050925/philadelphia-marble-brownies",
  },
  {
    id: 5,
    name: "Chicken Quesadilla",
    image: 'Chicken-Quesadilla.jpg',
    ingredients: [{
        name: "mayonaise",
        measurement: "1 cup"
      },
      {
        name: "taco seasoning",
        measurement: "1/2 teaspoon"
      },
      {
        name: "garlic salt",
        measurement: "1/4 teaspoon"
      },
      {
        name: "hot sauce",
        measurement: "2 teaspoons"
      },
      {
        name: "tortillas",
        measurement: "6"
      },
      {
        name: "mexican cheese",
        measurement: "2 cups"
      },
      {
        name: "seasoned shredded chicken",
        measurement: "2 cups"
      },
    ],
    recipe: [
      "Whisk together mayo, taco seasoning, garlic salt, and hot sauce. NOTE: You can use whatever hot sauce you prefer.",
      "Spread mixture on one side of tortilla. Sprinkle desired amount of shredded chicken on top, then cheese. Add sauce to a second tortilla and place on top.",
      "Heat in the microwave for about 20 seconds, then put on the stove, until nice a crisp. If you have sauce left over, use for dipping!",
    ],
    difficulty: "Easy",
    imageSource: "https://www.flickr.com/photos/mastermaq/2269241931/in/photolist-6iy2S5-9bomYB-8y3brA-7SMp8P-ceByFA-9ww2ug-yJsKh-54BD6p-izN3yW-6PKzZq-4taqWh-hhNPR-asibth-hhNUh-hhNNc-3CsE6C-hhNSu-9zFCkk-MkVcTF-8jTVh8-4swsyT-7zPwgS-7fngKD-HDWh-9Yb8wm-9jeZN3-8CGCCm-4NhZyd-c9u73G-brd19p-51sAeE-4Sskvm-6P25cq-a6Yw-angDmH-7e33Gz-77DH5c-77HCLQ-77HCwG-5zYueJ-7e33pe-6UdDCh-77HCpu-4Z6zbu-6Su9My-9jpvHr-5AbNy7-9jpvLM-8euaCD-bQBQE4",
    recipeSource: "https://lilluna.com/chicken-quesadillas/",
  },
  {
    id: 6,
    name: "Chicken Ranch Wraps",
    image: 'Chicken-Ranch-Wrap.jpg',
    ingredients: [{
        name: "seasoned, grilled chicken breasts",
        measurement: "2 cups"
      },
      {
        name: "ranch dressing",
        measurement: "1/4 cup"
      },
      {
        name: "mozzarella cheese",
        measurement: "1/2 cup"
      },
      {
        name: "minced cilantro (optional)",
        measurement: "1/4 cup"
      },
      {
        name: "8 inch tortillas",
        measurement: "4"
      }
    ],
    recipe: [
      "Lay tortillas on a clean flat surface. Place about 1/2 cup chicken, 1 tablespoon ranch, 2 tablespoons of cheese, and 1 tablespoon of minced cilantro on each tortilla. Fold tightly to form a burrito shape.",
      "Heat a heavy-duty pan or grill to medium heat. Coat with a light layer or oil or cooking spray and cook wraps for 1-2 minutes on each side or until the tortilla is crispy and golden. Remove from heat, slice in half and serve immediately.",
    ],
    difficulty: "Easy",
    imageSource: "https://gimmedelicious.com/chicken-ranch-wraps/",
    recipeSource: "https://gimmedelicious.com/chicken-ranch-wraps/",
  },
  {
    id: 7,
    name: "Edible Cookie Dough",
    image: 'Cookie-Dough.jpg',
    ingredients: [{
        name: "packed brown sugar",
        measurement: "1/4 cup"
      },
      {
        name: "softened butter",
        measurement: "2 tablespoons"
      },
      {
        name: "salt",
        measurement: "1/8 teaspoon"
      },
      {
        name: "vanilla",
        measurement: "1/8 teaspoon"
      },
      {
        name: "milk",
        measurement: "1 tablespoon"
      },
      {
        name: "flour - toasted at 350ºF for 5 to minutes to kill bacteria",
        measurement: "5 tablespoons"
      },
      {
        name: "chocolate chips",
        measurement: "2 tablespoons"
      },
    ],
    recipe: [
      "Start by mixing/mashing your softened butter, brown sugar, salt and vanilla together until well combined.",
      "Next mix in your 1 Tablespoon of milk. Slowly add in flour, 1 Tablespoon at a time until you have a cookie dough texture.",
      "Finally, add in chocolate chips. Mix until well combined.  Enjoy."
    ],
    difficulty: "Easy",
    imageSource: "https://www.flickr.com/photos/courtarro/8700034297/in/photolist-efMX6k-aTjSme-7UXRhT-4sMBa9-9QZDo6-4JVaiS-gagc3-4wtA2Z-5LEs1n-a1fteV-48qeYb-dhGGKA-dhGELn-7sA4wS-5T5ft5-4SLHhs-a3JFA-7F5nsH-6D8PkE-99yxdA-nDttvR-nDtrwF-nkcmLp-nBpfMn-nkcC23-nBGgkr-nkcA2U-nkcvHT-nBG9Ro-8zA12P-nkcCxf-nkcQpD-nBGbvg-dkNmjZ-nBpocn-4F8sPb-3HKomX-qwiE-7jWjY5-f3iNk-4eTyBh-j6xRE-eCgC-2dsQtUC-j6xRC-5eFWx-dS8zws-68aY9m-bSZbnB-8LcM5Q",
    recipeSource: "https://www.familyfreshmeals.com/2014/04/edible-cookie-dough-recipe-two.html",
  },
  {
    id: 8,
    name: "Old Fashioned Pancakes",
    image: 'Pancakes.jpg',
    ingredients: [{
        name: "all-purpose flour",
        measurement: "1 1/2 cups"
      },
      {
        name: "baking powder",
        measurement: "3 1/2 teaspoons"
      },
      {
        name: "salt",
        measurement: "1 teaspoon"
      },
      {
        name: "white sugar",
        measurement: "1 tablespoon"
      },
      {
        name: "milk",
        measurement: "1 1/4 cups"
      },
      {
        name: "egg",
        measurement: "1"
      },
      {
        name: "melted butter",
        measurement: "3 tablespoons"
      },
    ],
    recipe: [
      "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    ],
    difficulty: "Easy",
    imageSource: "https://www.flickr.com/photos/potaufeu/385459112/in/photolist-A4zyL-7TUwS9-87ktzo-FKV7nh-dRX3pL-xsny6-4xUvys-5NQtxb-aq75sJ-7Et9zq-7avtLp-9Uw3x6-8HD8cL-7e3zJa-8HD88C-6cS9Qr-492RAs-8FWQU-6HEcov-8FWPb-9jPmeY-4tThN7-4RsxUm-i18QvG-5VuKvE-77Vjj5-B5qv4-8FnTr5-6JXC4Y-3f9BZq-9EdHNj-cTsHW-4qFJDV-kdjsXc-cTsHU-dvXY6M-7rXo87-48XS9F-9Z7r1L-8AUSsT-97CLuk-8HD86E-2wAUS-8AXYFq-5yfhzx-492PTY-2VkT1h-5BZ1bp-gMi7q5-8HD841",
    recipeSource: "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/",
  }, {
    id: 9,
    name: "Adobo",
    image: 'Adobo.jpg',
    ingredients: [{
        name: "white vinegar",
        measurement: "1 cup"
      },
      {
        name: "soy sauce",
        measurement: "1/4 cup"
      },
      {
        name: "garlic",
        measurement: "1 bulb"
      },
      {
        name: "salt",
        measurement: "2 teaspoons"
      },
      {
        name: "ground pepper",
        measurement: "1 teaspoon"
      },
      {
        name: "bay leaf",
        measurement: "1"
      },
      {
        name: "chicken thighs or drumsticks",
        measurement: "2 pounds"
      },
      {
        name: "canola oil",
        measurement: "1 tablespoon"
      },
      {
        name: "water",
        measurement: "1 cup"
      }
    ],
    recipe: [
      "Combine the first six ingredients. Add chicken; refrigerate, covered, 20-30 minutes. Drain, reserving marinade. Pat chicken dry.",
      "In a large skillet, heat oil over medium-high heat; brown chicken. Stir in water and reserved marinade. Bring to a boil. Reduce heat; simmer, uncovered, until chicken is no longer pink and sauce is slightly reduced, 20-25 minutes. If desired, serve chicken with cooking sauce."
    ],
    difficulty: "Hard",
  }, {
    id: 10,
    name: "Lasagna",
    image: 'Lasagna.jpg',
    ingredients: [{
        name: "ground beef",
        measurement: "1 pound"
      },
      {
        name: "diced onion",
        measurement: "3/4 cups"
      },
      {
        name: "diced bell pepper (green, red, or yellow)",
        measurement: "3/4 cups"
      },
      {
        name: "tomato sauce",
        measurement: "28 ounces"
      },
      {
        name: "tomato paste",
        measurement: "3 ounces"
      },
      {
        name: "crushed tomatoes",
        measurement: "14 ounces"
      },
      {
        name: "oregano",
        measurement: "2 tablespoons (fresh) or 2 teaspoons (dried)"
      },
      {
        name: "parsley",
        measurement: "1/4 cup"
      },
      {
        name: "Italian Seasoning",
        measurement: "1 tablespoon"
      },
      {
        name: "garlic salt or galic powder",
        measurement: ""
      },
      {
        name: "red or white wine vinegar",
        measurement: "1 tablespoon"
      },
      {
        name: "salt",
        measurement: ""
      },
      {
        name: "dry lasagna noodles",
        measurement: "1/2 pound"
      },
      {
        name: "Ricotta cheese",
        measurement: "15 ounces"
      },
      {
        name: "Mozarella cheese",
        measurement: "1 1/2 pounds"
      },
      {
        name: "Parmesan cheese",
        measurement: "1/4 pounds"
      }
    ],
    recipe: [
      "Put pasta water on to boil: Put a large pot of salted water (1 Tbsp salt for every 2 quarts of water) on the stovetop on high heat. It can take a while for a large pot of water to come to a boil (this will be your pasta water), so prepare the sauce in the next steps while the water is heating.",
      "Brown the ground beef: In a large skillet heat 2 teaspoons of olive oil on medium high heat. Add the ground beef and cook until it is lightly browned on all sides. Remove the beef with a slotted spoon to a bowl. Drain off all but a tablespoon of fat.",
      "Cook the bell pepper, onions, garlic, add back the beef: Add the diced bell pepper and onions to skillet (in the photo we are using yellow bell pepper and red onions). Cook for 4 to 5 minutes, until the onions are translucent and the peppers softened. Add the minced garlic and cook half a minute more. Return the browned ground beef to the pan. Stir to combine, reduce the heat to low and cook for another 5 minutes.",
      "Transfer to medium sized pot, add tomatoes and remaining sauce ingredients to build the sauce: Transfer the beef mixture to a medium sized (3- to 4-quart) pot. Add the crushed tomatoes, tomato sauce, and tomato paste to the pot. Add the parsley, oregano, and Italian seasonings, adjusting the amounts to taste. Sprinkle with garlic powder and/or garlic salt, to taste. Sprinkle with red or white wine vinegar. Stir in sugar, a tablespoon at a time, tasting after each addition, to taste. (The amount of sugar needed will vary, depending on how acidic the tomatoes are that you are using.) Add salt to taste, and note that you will later be adding Parmesan, which is salty. Bring the sauce to a simmer and then lower the heat to maintain a low simmer.  Cook for 15 to 45 minutes, stirring often. Scrape the bottom of the pot every so often so nothing sticks to the bottom and scorches. Remove from heat.",
      "Boil and drain the lasagna noodles: By now the salted water you started heating in step one should be boiling. Add the dry lasagna noodles and cook them to al dente, per package directions. (Note noodles may be cooked in advance.) Stir often to prevent from sticking. Make sure that water remains at a full rolling boil during the entire cooking to prevent noodles from sticking. When ready, drain in a colander and rinse with cool water, gently separating any noodles that may be sticking together. Spread a little olive oil on a large rimmed baking sheet, and lay out the cooked noodles on this sheet, turning them over so that they get coated with a little of the olive oil. This will prevent them from sticking together.",
      "Heat the oven to 375°F",
      "Assemble the lasagna: In a 9x13-inch casserole or lasagna dish, ladle a cup of sauce and spread it over the bottom of the dish. Arrange one layer of lasagna noodles lengthwise (about 3 long noodles, edge may overlap, depending on your pan) over the sauce. Ladle a third of the remaining sauce over the noodles. Sprinkle a layer of a third of the grated mozzarella on top of lasagna sauce. Add half of the ricotta cheese, by placing cheese dollops every couple inches. Sprinkle half the grated parmesan cheese evenly over the top of ricotta cheese. Apply second layer of noodles, top it with half of the remaining sauce. Add half of the remaining Mozzarella, the remaining ricotta cheese, and another the remaining Parmesan. Finish with another layer of noodles. Spread the remaining sauce over the top layer of noodles and sprinkle with the remaining Mozzarella cheese.",
      "Bake: Cover the lasagna pan with aluminum foil, tented slightly so it doesn't touch the noodles or sauce). Bake at 375°F for 45 minutes. Uncover in the last 10 minutes if you'd like more of a crusty top or edges.",
      "Cool and serve: Allow the lasagna to cool at least 15 before serving. Leftovers will keep for about 5 days. May be reheated in conventional oven or microwave. Leave aluminum tent on for storage. (Try to keep the aluminum foil from touching the sauce.)"
    ],
    difficulty: "Very Hard",
    recipeSource: "https://www.simplyrecipes.com/recipes/lasagna/",
    imageSource: "https://www.simplyrecipes.com/recipes/lasagna/"
  }, {
    id: 11,
    name: "Fried Potatoes",
    image: 'Potatoes.jpg',
    ingredients: [{
        name: "baby potatoes",
        measurement: "1 pound"
      },
      {
        name: "vegetable oil",
        measurement: "1 tablespoon"
      },
      {
        name: "extra-virign olive oil",
        measurement: "1 tablespoon"
      },
      {
        name: "freshly chopped rosemary",
        measurement: "1 tablespoon"
      },
      {
        name: "garlic powder",
        measurement: "1 teaspoon"
      },
      {
        name: "chili powder",
        measurement: "1/2 teaspoon"
      },
      {
        name: "salt",
        measurement: ""
      },
      {
        name: "pepper",
        measurement: ""
      }
    ],
    recipe: [
      "Slice potatoes into coins about ¼” thick. In a large skillet over medium-high heat, heat oils. Add potatoes and season with rosemary, salt and pepper. Cook, undisturbed, until potatoes are golden and crusty underneath, 4 to 5 minutes. Flip potatoes and cook until golden on other sides, 4 to 5 minutes more.",
      "Sprinkle with garlic powder and chili powder, and continue to cook, stirring occasionally, until potatoes are tender, about 2 minutes more. Serve warm."
    ],
    difficulty: "Easy",
    recipeSource: "https://www.delish.com/cooking/a23463225/pan-fried-potatoes/",
    imageSource: "https://www.delish.com/cooking/a23463225/pan-fried-potatoes/"
  }, {
    id: 12,
    name: "Fajitas",
    image: 'Fajitas.jpg',
    ingredients: [{
        name: "chili powder",
        measurement: "2 teaspoons"
      },
      {
        name: "ground cumin",
        measurement: "1 teaspoon"
      },
      {
        name: "smoked paprika",
        measurement: "1 teaspoon"
      },
      {
        name: "minced garlic",
        measurement: "3 cloves"
      },
      {
        name: "flat iron steak",
        measurement: "1 1/2 pounds"
      },
      {
        name: "conola oil",
        measurement: "2 1/2 tablespoons"
      },
      {
        name: "red bell pepper",
        measurement: "1"
      },
      {
        name: "yellow bell pepper",
        measurement: "1"
      },
      {
        name: "red onion",
        measurement: "1"
      },
      {
        name: "salt",
        measurement: ""
      },
      {
        name: "pepper",
        measurement: ""
      }
    ],
    recipe: [
      "Preheat grill to medium high heat.",
      "In a small bowl, combine chili powder, cumin, paprika, garlic, 1 teaspoon salt and 1/2 teaspoon pepper. Season steak with chili powder mixture.",
      "Brush steak with 1 tablespoon canola oil. Add steak to grill, and cook, flipping once, until desired doneness, about 4-5 minutes per side for medium rare. Let rest 5 minutes.",
      "Season bell peppers and onion with remaining 1 1/2 tablespoons canola oil; season with salt and pepper, to taste.",
      "Add bell peppers and onion to grill, and cook, turning occasionally, until charred and tender, about 6-8 minutes.",
      "Thinly slice steak against the grain and serve with bell peppers and onion."
    ],
    difficulty: "Easy",
    recipeSource: "https://damndelicious.net/2019/10/24/easy-steak-fajitas//",
    imageSource: "https://damndelicious.net/2019/10/24/easy-steak-fajitas/"
  }, {
    id: 13,
    name: "Sisig",
    image: 'Sisig.jpg',
    ingredients: [{
        name: "pig ears",
        measuresent: "1 pound"
      },
      {
        name: "pork belly",
        measurement: "1 1/2 pound"
      },
      {
        name: "onion",
        measurement: "1"
      },
      {
        name: "soy sauce",
        measurement: "3 tablespoons"
      },
      {
        name: "ground black pepper",
        measurement: "1/4 teaspoon"
      },
      {
        name: "minced ginger",
        measurement: "1 knob"
      },
      {
        name: "chili flakes",
        measurement: "3 tablespoons"
      },
      {
        name: "garlic powder",
        measurement: "1/2 teaspoon"
      },
      {
        name: "lemon",
        measurement: "1"
      },
      {
        name: "butter",
        measurement: "1/2 cup"
      },
      {
        name: "chicken liver",
        measurement: "1/3 pound"
      },
      {
        name: "water",
        measurement: "6 cups"
      },
      {
        name: "mayonnaise",
        measurement: "3 tablespoons"
      },
      {
        name: "salt",
        measurement: "1/2 teaspoon"
      }
    ],
    recipe: [
      "Pour the water in a pan and bring to a boil. Add salt and pepper.",
      "Put-in the pig’s ears and pork belly then simmer for 40 minutes to 1 hour (or until tender).",
      "Remove the boiled ingredients from the pot then drain excess water",
      "Grill the boiled pig ears and pork belly until done",
      "Chop the pig ears and pork belly into fine pieces",
      "In a wide pan, melt the butter or margarine. Add the onions. Cook until onions are soft.",
      "Put-in the ginger and cook for 2 minutes",
      "Add the chicken liver. Crush the chicken liver while cooking it in the pan.",
      "Add the chopped pig ears and pork belly. Cook for 10 to 12 minutes",
      "Put-in the soy sauce, garlic powder, and chili. Mix well",
      "Add salt and pepper to taste",
      "Put-in the mayonnaise and mix with the other ingredients",
      "Transfer to a serving plate. Top with chopped green onions and raw egg.",
      "Serve hot. Share and Enjoy (add the lemon or calamansi before eating)"
    ],
    difficulty: "Very Hard",
    recipeSource: "https://panlasangpinoy.com/pork-sisig/",
    imageSource: "https://panlasangpinoy.com/pork-sisig/"
  }, {
    id: 14,
    name: "Pinakbet",
    image: 'Pinakbet.jpg',
    ingredients: [{
        name: "olive oil",
        measuresent: "3 tablespoons"
      },
      {
        name: "onion",
        measurement: "1"
      },
      {
        name: "minced garlic",
        measurement: "2 cloves"
      },
      {
        name: "pork loin",
        measurement: "1/2 pound"
      },
      {
        name: "prawns",
        measurement: "1/2 pound"
      },
      {
        name: "tomato",
        measurement: "1"
      },
      {
        name: "zucchini",
        measurement: "1/4 pound"
      },
      {
        name: "okra",
        measurement: "1/4 pound"
      },
      {
        name: "green beans",
        measurement: "1/4 pound"
      },
      {
        name: "eggplant",
        measurement: "1/4 pound"
      },
      {
        name: "bitter melon",
        measurement: "1 small"
      },
      {
        name: "salt",
        measurement: ""
      },
      {
        name: "pepper",
        measurement: ""
      }
    ],
    recipe: [
      "Heat the oil in a large pot over medium heat; cook and stir the onion and garlic in the hot oil until tender, about 5 minutes. Stir in the pork and cook until completely browned, 5 to 7 minutes. Stir the shrimp into the mixture; season with salt and pepper. Continue cooking until the shrimp turn pink, about 5 minutes. Add the tomato to the pot, cover, and let cook 5 minutes. Stir the zucchini, okra, green beans, eggplant, and bitter melon into the mixture; cover, and cook until the vegetables are all soft to the touch, about 10 minutes more. Serve hot."
    ],
    difficulty: "Hard",
    recipeSource: "https://www.allrecipes.com/recipe/212994/pinakbet/",
    imageSource: "https://www.allrecipes.com/recipe/212994/pinakbet/"
  }, {
    id: 15,
    name: "Chicken Curry",
    image: 'Curry.jpg',
    ingredients: [{
        name: "chicken thighs",
        measuresent: "2 pounds"
      },
      {
        name: "onion",
        measurement: "1"
      },
      {
        name: "minced garlic",
        measurement: "4 cloves"
      },
      {
        name: "Fresh broccoli florets",
        measurement: "1 cup"
      },
      {
        name: "Fresh cauliflower florets",
        measurement: "1 cup"
      },
      {
        name: "chopped carrots",
        measurement: "1 cup"
      },
      {
        name: "tomato paste",
        measurement: "3 tablespoons"
      },
      {
        name: "grated fresh ginger",
        measurement: "1 tablespoon"
      },
      {
        name: "curry powder",
        measurement: "2 teaspoons"
      },
      {
        name: "cajun seasoning",
        measurement: "1 teaspoon"
      },
      {
        name: "italian seasoning",
        measurement: "1 teaspoon"
      },
      {
        name: "chicken broth",
        measurement: "1/2 cup"
      },
      {
        name: "coconut milk",
        measurement: "2 cups"
      },
      {
        name: "lime juice",
        measurement: "1/4 cup"
      },
      {
        name: "salt",
        measurement: ""
      },
      {
        name: "pepper",
        measurement: ""
      }
    ],
    recipe: [
      "Heat the oil in a large pot over medium heat; cook and stir the onion and garlic in the hot oil until tender, about 5 minutes. Stir in the pork and cook until completely browned, 5 to 7 minutes. Stir the shrimp into the mixture; season with salt and pepper. Continue cooking until the shrimp turn pink, about 5 minutes. Add the tomato to the pot, cover, and let cook 5 minutes. Stir the zucchini, okra, green beans, eggplant, and bitter melon into the mixture; cover, and cook until the vegetables are all soft to the touch, about 10 minutes more. Serve hot."
    ],
    difficulty: "Easy",
    recipeSource: "http://wholeandheavenlyoven.com/2015/03/12/30-minute-chicken-veggie-curry-2/",
    imageSource: "http://wholeandheavenlyoven.com/2015/03/12/30-minute-chicken-veggie-curry-2/"
  }
]

export default mock;
