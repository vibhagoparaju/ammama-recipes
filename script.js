const foods = [
{
  name: "Akki Pindi Payasam Balls",
  telugu: "అక్కి పిండి పాయసం ఉండలు",
  category: "Pindi Vantalu",
  ingredients: [
    "Rice flour – 1 cup",
    "Jaggery – ¾ cup (grated)",
    "Water – 1½ cups",
    "Cardamom powder – ¼ tsp",
    "Ghee – 1 tsp (optional)"
  ],
  method: [
    "Take jaggery in a pan and add water. Heat until jaggery melts completely.",
    "Strain the jaggery syrup to remove impurities.",
    "Place the syrup back on low flame.",
    "Slowly add rice flour while stirring continuously to avoid lumps.",
    "Cook the mixture until it becomes thick and starts leaving the sides of the pan.",
    "Add cardamom powder and mix well.",
    "Switch off the flame and allow the mixture to cool slightly.",
    "Grease your hands with ghee and make small round balls.",
    "Serve warm or at room temperature."
  ]
},
{
  name: "Akki Pindi Theepi Rotte",
  telugu: "అక్కి పిండి తీపి రొట్టె",
  category: "Pindi Vantalu",
  ingredients: [
    "Rice flour – 2 cups",
    "Jaggery – 1 cup (grated)",
    "Water – as required",
    "Cardamom powder – ¼ tsp",
    "Oil or ghee – for cooking"
  ],
  method: [
    "Add grated jaggery and little water to a pan and heat till jaggery melts.",
    "Strain the syrup and keep aside.",
    "Take rice flour in a bowl and add cardamom powder.",
    "Pour jaggery syrup slowly and mix to form a smooth batter.",
    "Heat a tawa and grease lightly with oil or ghee.",
    "Pour one ladle of batter and spread gently into a rotti.",
    "Cook on low flame till both sides are cooked well.",
    "Serve warm as a breakfast or sweet snack."
  ]
},
{
  name: "Akki Rotte",
  telugu: "అక్కి రొట్టె",
  category: "Pindi Vantalu",
  ingredients: [
    "Rice flour – 2 cups",
    "Onion – 1 small (finely chopped)",
    "Green chilli – 1 (finely chopped)",
    "Coriander leaves – 2 tbsp (chopped)",
    "Cumin seeds – ½ tsp",
    "Salt – to taste",
    "Water – as required",
    "Oil – for cooking"
  ],
  method: [
    "Take rice flour in a mixing bowl.",
    "Add onion, green chilli, coriander leaves, cumin seeds and salt.",
    "Add water little by little and make a soft dough.",
    "Divide the dough into lemon-sized balls.",
    "Place one ball on a plastic sheet or banana leaf and flatten with fingers.",
    "Heat tawa and drizzle little oil.",
    "Carefully place the rotti on the tawa and cook on medium flame.",
    "Flip and cook the other side till light brown spots appear.",
    "Serve hot with chutney or curry."
  ]
},
{
  name: "Alasanda Koora",
  telugu: "అలసంద కూర",
  category: "Curries",
  ingredients: [
    "Alasandalu (black-eyed peas) – 1 cup",
    "Onion – 1 medium (chopped)",
    "Green chilli – 1",
    "Turmeric powder – ¼ tsp",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Cumin seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Soak alasandalu overnight or for at least 6 hours.",
    "Pressure cook the soaked alasandalu with water and turmeric for 3 whistles.",
    "Heat oil in a pan and add mustard seeds.",
    "When they splutter, add cumin seeds and curry leaves.",
    "Add chopped onion and sauté till soft.",
    "Add cooked alasandalu and salt.",
    "Mix well and cook for 5 minutes on low flame.",
    "Serve hot with rice or roti."
  ]
},
{
  name: "Alasanda Ooragaya",
  telugu: "అలసంద ఊరగాయ",
  category: "Pachadi",
  ingredients: [
    "Alasandalu (black-eyed peas) – 1 cup",
    "Red chilli powder – 2 tsp",
    "Salt – to taste",
    "Garlic cloves – 6 (crushed)",
    "Oil – 2 tbsp",
    "Mustard seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Soak alasandalu overnight and pressure cook till soft.",
    "Drain excess water completely.",
    "Heat oil in a pan and add mustard seeds.",
    "Add curry leaves and crushed garlic.",
    "Add cooked alasandalu, chilli powder and salt.",
    "Mix well and cook for 3–4 minutes.",
    "Allow to cool before serving.",
    "Can be stored in refrigerator for 1–2 days."
  ]
},
{
  name: "Alasanda Pappu",
  telugu: "అలసంద పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Alasandalu (black-eyed peas) – 1 cup",
    "Onion – 1 small (chopped)",
    "Green chilli – 1 (slit)",
    "Turmeric powder – ¼ tsp",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Cumin seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Soak alasandalu overnight or at least 6 hours.",
    "Pressure cook soaked alasandalu with turmeric and water for 3 whistles.",
    "Mash lightly after pressure releases.",
    "Heat oil in a pan and add mustard seeds.",
    "Once they splutter, add cumin seeds and curry leaves.",
    "Add chopped onion and sauté till soft.",
    "Add cooked alasanda pappu and salt.",
    "Mix well and simmer for 5 minutes.",
    "Serve hot with rice."
  ]
},
{
  name: "Allam Pachadi",
  telugu: "అల్లం పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Ginger – 100 g (chopped)",
    "Dry red chillies – 6",
    "Tamarind – small lemon size",
    "Jaggery – 2 tbsp",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Heat oil in a pan and add chopped ginger.",
    "Fry on medium flame till ginger turns light brown.",
    "Add dry red chillies and fry briefly.",
    "Switch off flame and allow mixture to cool.",
    "Grind fried ginger, chillies, tamarind, jaggery and salt into a smooth paste.",
    "Adjust salt and jaggery as needed.",
    "Serve with hot rice and ghee."
  ]
},
{
  name: "Ambali",
  telugu: "అంబలి",
  category: "Pindi Vantalu",
  ingredients: [
    "Ragi flour – ½ cup",
    "Water – 2 cups",
    "Salt – a pinch",
    "Buttermilk – ½ cup (optional)"
  ],
  method: [
    "Mix ragi flour with water in a bowl ensuring no lumps.",
    "Cook the mixture on low flame while stirring continuously.",
    "Cook till it thickens and becomes glossy.",
    "Allow it to cool completely.",
    "Add salt and buttermilk if using.",
    "Mix well and serve as a cooling, healthy drink."
  ]
},
{
  name: "Anapakaya Curry",
  telugu: "అనపకాయ కూర",
  category: "Curries",
  ingredients: [
    "Bottle gourd (anapakaya) – 2 cups (chopped)",
    "Onion – 1 small (chopped)",
    "Green chilli – 1",
    "Turmeric powder – ¼ tsp",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Cumin seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Heat oil in a pan and add mustard seeds.",
    "When they splutter, add cumin seeds and curry leaves.",
    "Add chopped onion and sauté till translucent.",
    "Add chopped anapakaya, green chilli and turmeric.",
    "Add salt and mix well.",
    "Cover and cook on low flame till vegetable becomes soft.",
    "Stir occasionally to avoid sticking.",
    "Serve hot with rice or roti."
  ]
},
{
  name: "Anapakaya Halwa",
  telugu: "అనపకాయ హల్వా",
  category: "Sweets",
  ingredients: [
    "Bottle gourd (grated) – 2 cups",
    "Sugar – ¾ cup",
    "Ghee – 3 tbsp",
    "Cardamom powder – ¼ tsp",
    "Cashews – 1 tbsp (optional)"
  ],
  method: [
    "Heat 1 tbsp ghee in a pan and add grated anapakaya.",
    "Cook on medium flame till raw smell disappears and water evaporates.",
    "Add sugar and mix well.",
    "Cook till mixture thickens and leaves sides.",
    "Add remaining ghee gradually and stir continuously.",
    "Add cardamom powder and fried cashews.",
    "Cook till glossy and aromatic.",
    "Serve warm."
  ]
},
{
  name: "Daddojanam",
  telugu: "దద్దోజనం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups (cooled)",
    "Curd – 1½ cups",
    "Salt – to taste",
    "Oil – 1 tsp",
    "Mustard seeds – ½ tsp",
    "Green chilli – 1 (finely chopped)",
    "Ginger – ½ tsp (grated)",
    "Curry leaves – few"
  ],
  method: [
    "Take cooked and cooled rice in a bowl.",
    "Mash lightly with a ladle.",
    "Add curd and salt, mix well until creamy.",
    "Heat oil in a small pan.",
    "Add mustard seeds and let them splutter.",
    "Add green chilli, ginger and curry leaves.",
    "Pour tempering over curd rice and mix gently.",
    "Serve fresh."
  ]
},
{
  name: "Pulagam",
  telugu: "పులగం",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Moong dal – ¼ cup",
    "Water – 3 cups",
    "Salt – to taste",
    "Oil – 1 tsp",
    "Cumin seeds – ½ tsp"
  ],
  method: [
    "Wash rice and moong dal together.",
    "Add water and pressure cook for 3 whistles.",
    "Mash lightly once pressure releases.",
    "Add salt and mix well.",
    "Heat oil in a pan and add cumin seeds.",
    "Pour tempering over pulagam and mix.",
    "Serve hot with pachadi or pickle."
  ]
},
{
  name: "Pongali",
  telugu: "పొంగలి",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Moong dal – ½ cup",
    "Water – 4 cups",
    "Salt – to taste",
    "Ghee – 2 tbsp",
    "Black pepper – ½ tsp",
    "Cumin seeds – ½ tsp"
  ],
  method: [
    "Dry roast moong dal till aromatic.",
    "Wash rice and dal together.",
    "Pressure cook with water and salt for 4 whistles.",
    "Mash well until soft.",
    "Heat ghee and add cumin seeds and pepper.",
    "Pour over pongali and mix well.",
    "Serve hot."
  ]
},
{
  name: "Chakkara Pongali",
  telugu: "చక్కర పొంగలి",
  category: "Sweets",
  ingredients: [
    "Rice – 1 cup",
    "Moong dal – ½ cup",
    "Jaggery – 1 cup (grated)",
    "Water – 4 cups",
    "Ghee – 3 tbsp",
    "Cashews – 1 tbsp",
    "Cardamom powder – ¼ tsp"
  ],
  method: [
    "Dry roast moong dal lightly.",
    "Wash rice and dal together.",
    "Pressure cook with water for 4 whistles.",
    "Mash well once pressure releases.",
    "Add grated jaggery and mix on low flame.",
    "Cook till jaggery dissolves fully.",
    "Heat ghee, fry cashews and add to pongali.",
    "Add cardamom powder and mix well.",
    "Serve warm."
  ]
},
{
  name: "Perugu Pachadi",
  telugu: "పెరుగు పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Curd – 1 cup",
    "Cucumber or bottle gourd – ½ cup (finely chopped)",
    "Green chilli – 1 (finely chopped)",
    "Salt – to taste",
    "Oil – 1 tsp",
    "Mustard seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Take curd in a bowl and whisk till smooth.",
    "Add chopped vegetable, green chilli and salt.",
    "Mix well.",
    "Heat oil and add mustard seeds.",
    "When they splutter, add curry leaves.",
    "Pour tempering over curd mixture.",
    "Mix gently and serve fresh."
  ]
},
{
  name: "Kattu Pongali",
  telugu: "కట్టు పొంగలి",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Moong dal – ½ cup",
    "Water – 4 cups",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Cumin seeds – ½ tsp",
    "Black pepper – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Dry roast moong dal lightly until aromatic.",
    "Wash rice and dal together thoroughly.",
    "Pressure cook rice and dal with water and salt for 4 whistles.",
    "Mash lightly once pressure releases; consistency should be thick.",
    "Heat oil in a small pan and add mustard seeds.",
    "Add cumin seeds, black pepper and curry leaves.",
    "Pour tempering over pongali and mix well.",
    "Serve hot with pachadi or pickle."
  ]
},
{
  name: "Sambar",
  telugu: "సాంబార్",
  category: "Curries",
  ingredients: [
    "Toor dal – ¾ cup",
    "Mixed vegetables – 1½ cups (drumstick, carrot, brinjal etc.)",
    "Tamarind – small lemon size",
    "Sambar powder – 2 tsp",
    "Turmeric powder – ¼ tsp",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Dry red chilli – 1",
    "Curry leaves – few"
  ],
  method: [
    "Cook toor dal with turmeric and water until soft; mash well.",
    "Soak tamarind in warm water and extract juice.",
    "Cook vegetables separately until tender.",
    "Add tamarind extract, sambar powder and salt to vegetables.",
    "Boil for 5–7 minutes until raw smell disappears.",
    "Add cooked dal and mix well.",
    "Heat oil, add mustard seeds, dry red chilli and curry leaves.",
    "Add tempering to sambar and simmer for 5 minutes.",
    "Serve hot with rice or idli."
  ]
},
{
  name: "Chintakaya Pachadi",
  telugu: "చింతకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Raw tamarind – 1 cup (cleaned)",
    "Dry red chillies – 6",
    "Garlic cloves – 4",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Heat oil in a pan and fry dry red chillies lightly.",
    "Add raw tamarind and sauté for 2–3 minutes.",
    "Switch off flame and allow mixture to cool.",
    "Grind tamarind, chillies, garlic and salt into a coarse paste.",
    "Adjust salt if needed.",
    "Serve with hot rice and ghee."
  ]
},
{
  name: "Malai Paneer Curry",
  telugu: "మలై పన్నీర్ కూర",
  category: "Curries",
  ingredients: [
    "Paneer – 200 g (cubed)",
    "Onion – 1 medium (finely chopped)",
    "Tomato puree – 1 cup",
    "Fresh cream – ¼ cup",
    "Ginger garlic paste – 1 tsp",
    "Oil or butter – 2 tbsp",
    "Red chilli powder – ½ tsp",
    "Garam masala – ½ tsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil or butter in a pan and sauté onions till golden.",
    "Add ginger garlic paste and cook until raw smell disappears.",
    "Add tomato puree, salt and spices; cook till oil separates.",
    "Add fresh cream and mix well on low flame.",
    "Add paneer cubes and gently mix.",
    "Cook for 3–4 minutes on low flame.",
    "Switch off flame and serve hot with roti or rice."
  ]
},
{
  name: "Kandipappu",
  telugu: "కంది పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – 1 cup",
    "Water – 2½ cups",
    "Turmeric powder – ¼ tsp",
    "Salt – to taste",
    "Ghee – 1 tbsp"
  ],
  method: [
    "Wash toor dal thoroughly.",
    "Pressure cook dal with turmeric and water for 3 whistles.",
    "Mash dal well until smooth.",
    "Add salt and mix thoroughly.",
    "Serve hot with rice and ghee."
  ]
},
{
  name: "Mamidikaya Pappu",
  telugu: "మామిడికాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Raw mango – ½ cup (chopped)",
    "Green chilli – 1",
    "Turmeric powder – ¼ tsp",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Dry red chilli – 1",
    "Curry leaves – few"
  ],
  method: [
    "Wash dal and add to pressure cooker.",
    "Add raw mango pieces, green chilli, turmeric and water.",
    "Pressure cook for 3 whistles.",
    "Mash dal lightly once pressure releases.",
    "Add salt and simmer for 5 minutes.",
    "Heat oil and add mustard seeds.",
    "Add dry red chilli and curry leaves.",
    "Add tempering to dal and mix well.",
    "Serve hot with rice and ghee."
  ]
},
{
  name: "Tomato Pappu",
  telugu: "టమాట పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Tomatoes – 2 (chopped)",
    "Green chilli – 1",
    "Turmeric – ¼ tsp",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Garlic – 2 cloves",
    "Curry leaves – few"
  ],
  method: [
    "Add dal, tomatoes, green chilli and turmeric to cooker.",
    "Pressure cook for 3 whistles.",
    "Mash dal well after pressure releases.",
    "Add salt and simmer for 5 minutes.",
    "Heat oil, add mustard seeds, garlic and curry leaves.",
    "Pour tempering into dal and mix.",
    "Serve hot with rice."
  ]
},
{
  name: "Anapakaya Curry",
  telugu: "అనపకాయ కూర",
  category: "Curries",
  ingredients: [
    "Bottle gourd – 2 cups (chopped)",
    "Onion – 1 small",
    "Green chilli – 1",
    "Turmeric – ¼ tsp",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Cumin seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Heat oil and add mustard and cumin seeds.",
    "Add curry leaves and chopped onion.",
    "Sauté till onion turns soft.",
    "Add bottle gourd, green chilli and turmeric.",
    "Add salt, mix and cover.",
    "Cook on low flame till vegetable is soft.",
    "Serve hot with rice."
  ]
},
{
  name: "Dosakaya Pachadi",
  telugu: "దోసకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Dosakaya (yellow cucumber) – 1 cup",
    "Green chillies – 2",
    "Tamarind – small piece",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp"
  ],
  method: [
    "Heat oil and add mustard seeds.",
    "Add chopped dosakaya and sauté lightly.",
    "Switch off flame and cool.",
    "Grind with green chillies, tamarind and salt.",
    "Serve fresh with rice."
  ]
},
{
  name: "Daddojanam",
  telugu: "దద్దోజనం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Curd – 1½ cups",
    "Salt – to taste",
    "Oil – 1 tsp",
    "Mustard seeds – ½ tsp",
    "Green chilli – 1",
    "Curry leaves – few"
  ],
  method: [
    "Mash cooked rice lightly.",
    "Add curd and salt, mix well.",
    "Heat oil, add mustard seeds.",
    "Add green chilli and curry leaves.",
    "Add tempering to curd rice.",
    "Serve fresh."
  ]
},
{
  name: "Pulihora",
  telugu: "పులిహోర",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Tamarind extract – ½ cup",
    "Green chillies – 2",
    "Mustard seeds – ½ tsp",
    "Turmeric – ¼ tsp",
    "Salt – to taste",
    "Oil – 2 tbsp",
    "Curry leaves – few"
  ],
  method: [
    "Heat oil and add mustard seeds.",
    "Add green chillies and curry leaves.",
    "Add turmeric and tamarind extract.",
    "Cook till raw smell goes.",
    "Add salt and mix with rice.",
    "Rest for 10 minutes and serve."
  ]
},
{
  name: "Upma",
  telugu: "ఉప్మా",
  category: "Breakfast",
  ingredients: [
    "Rava – 1 cup",
    "Onion – 1 small",
    "Green chilli – 1",
    "Mustard seeds – ½ tsp",
    "Water – 2½ cups",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Dry roast rava till aromatic and keep aside.",
    "Heat oil, add mustard seeds.",
    "Add onion and green chilli; sauté.",
    "Add water and salt, bring to boil.",
    "Add rava slowly while stirring.",
    "Cook till soft and fluffy.",
    "Serve hot."
  ]
},
{
  name: "Idli",
  telugu: "ఇడ్లీ",
  category: "Breakfast",
  ingredients: [
    "Idli batter – 2 cups",
    "Oil – for greasing"
  ],
  method: [
    "Grease idli plates lightly.",
    "Pour batter into moulds.",
    "Steam for 10–12 minutes.",
    "Cool slightly and remove.",
    "Serve hot with chutney."
  ]
},
{
  name: "Sambar",
  telugu: "సాంబార్",
  category: "Curries",
  ingredients: [
    "Toor dal – ¾ cup",
    "Mixed vegetables – 1½ cups",
    "Tamarind – small piece",
    "Sambar powder – 2 tsp",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Cook dal till soft and mash.",
    "Cook vegetables separately.",
    "Add tamarind extract, sambar powder and salt.",
    "Add cooked dal and boil 5 minutes.",
    "Add tempering and serve hot."
  ]
},
{
  name: "Sakinalu",
  telugu: "సకినాలు",
  category: "Snacks",
  ingredients: [
    "Rice flour – 2 cups",
    "Sesame seeds – 2 tbsp",
    "Cumin seeds – 1 tsp",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Mix rice flour, sesame, cumin and salt.",
    "Add water and make soft dough.",
    "Shape into rings.",
    "Deep fry on medium flame till crisp.",
    "Cool and store."
  ]
},
{
  name: "Kobbari Pachadi",
  telugu: "కొబ్బరి పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Fresh grated coconut – 1 cup",
    "Green chillies – 2",
    "Roasted chana dal – 1 tbsp",
    "Salt – to taste",
    "Oil – 1 tsp",
    "Mustard seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Grind coconut, green chillies, chana dal and salt into a coarse paste.",
    "Heat oil, add mustard seeds and curry leaves.",
    "Add tempering to chutney and mix well.",
    "Serve fresh with rice or breakfast items."
  ]
},
{
  name: "Tomato Pachadi",
  telugu: "టమాట పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Tomatoes – 2 large (chopped)",
    "Dry red chillies – 3",
    "Garlic – 2 cloves",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Heat oil and fry red chillies and garlic lightly.",
    "Add tomatoes and cook till soft.",
    "Cool and grind to a coarse paste.",
    "Serve with hot rice."
  ]
},
{
  name: "Nimakaya Pachadi",
  telugu: "నిమ్మకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Lemon juice – 3 tbsp",
    "Green chillies – 2 (finely chopped)",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp"
  ],
  method: [
    "Heat oil and add mustard seeds.",
    "Add green chillies and switch off flame.",
    "Add lemon juice and salt.",
    "Mix well and serve fresh."
  ]
},
{
  name: "Vankaya Fry",
  telugu: "వంకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Brinjal – 2 cups (sliced)",
    "Turmeric – ¼ tsp",
    "Red chilli powder – ½ tsp",
    "Salt – to taste",
    "Oil – 2 tbsp"
  ],
  method: [
    "Heat oil in a pan.",
    "Add brinjal slices, turmeric, chilli powder and salt.",
    "Mix well and cook on medium flame.",
    "Stir occasionally till brinjals are crisp and cooked.",
    "Serve hot."
  ]
},
{
  name: "Kakarakaya Fry",
  telugu: "కాకరకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Bitter gourd – 2 cups (sliced)",
    "Turmeric – ¼ tsp",
    "Salt – to taste",
    "Oil – 2 tbsp"
  ],
  method: [
    "Wash and squeeze bitter gourd with salt.",
    "Heat oil and add bitter gourd.",
    "Cook on medium flame till crisp.",
    "Serve hot with rice."
  ]
},
{
  name: "Sorakaya Curry",
  telugu: "సొరకాయ కూర",
  category: "Curries",
  ingredients: [
    "Bottle gourd – 2 cups",
    "Onion – 1 small",
    "Green chilli – 1",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Heat oil and sauté onion and chilli.",
    "Add bottle gourd and salt.",
    "Cover and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Thotakura Pappu",
  telugu: "తోటకూర పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Thotakura – 1 cup (chopped)",
    "Turmeric – ¼ tsp",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and thotakura together in pressure cooker.",
    "Mash well after cooking.",
    "Add salt and mix.",
    "Serve with rice."
  ]
},
{
  name: "Beerakaya Curry",
  telugu: "బీరకాయ కూర",
  category: "Curries",
  ingredients: [
    "Ridge gourd – 2 cups",
    "Onion – 1 small",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add ridge gourd and salt.",
    "Cook covered till soft.",
    "Serve hot."
  ]
},
{
  name: "Gutti Vankaya",
  telugu: "గుత్తి వంకాయ",
  category: "Curries",
  ingredients: [
    "Small brinjals – 8",
    "Peanut powder – 3 tbsp",
    "Sesame seeds – 1 tbsp",
    "Tamarind paste – 1 tbsp",
    "Salt – to taste",
    "Oil – 2 tbsp"
  ],
  method: [
    "Prepare stuffing with peanut powder, sesame and salt.",
    "Slit brinjals and stuff masala.",
    "Heat oil and add brinjals.",
    "Cook covered on low flame till soft.",
    "Serve hot."
  ]
},
{
  name: "Upma",
  telugu: "ఉప్మా",
  category: "Breakfast",
  ingredients: [
    "Rava – 1 cup",
    "Water – 2½ cups",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Roast rava lightly and keep aside.",
    "Boil water with salt.",
    "Add rava slowly while stirring.",
    "Cook till soft and fluffy.",
    "Serve hot."
  ]
},
{
  name: "Idli",
  telugu: "ఇడ్లీ",
  category: "Breakfast",
  ingredients: [
    "Idli batter – 2 cups"
  ],
  method: [
    "Pour batter into greased moulds.",
    "Steam for 10–12 minutes.",
    "Serve hot with chutney."
  ]
},
{
  name: "Plain Rice",
  telugu: "అన్నం",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Water – 2 cups"
  ],
  method: [
    "Wash rice thoroughly.",
    "Cook with water till soft.",
    "Serve hot."
  ]
},
{
  name: "Rasam",
  telugu: "రసం",
  category: "Curries",
  ingredients: [
    "Tamarind water – 1 cup",
    "Rasam powder – 1 tsp",
    "Salt – to taste"
  ],
  method: [
    "Boil tamarind water with rasam powder and salt.",
    "Simmer for 5 minutes.",
    "Serve hot."
  ]
},
{
  name: "Curd",
  telugu: "పెరుగు",
  category: "Others",
  ingredients: [
    "Milk – 1 litre",
    "Curd starter – 1 tsp"
  ],
  method: [
    "Boil milk and cool till warm.",
    "Add curd starter and mix.",
    "Set aside for 6–8 hours.",
    "Use as needed."
  ]
},
{
  name: "Perugu Pachadi",
  telugu: "పెరుగు పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Curd – 1 cup",
    "Cucumber – ½ cup (finely chopped)",
    "Salt – to taste",
    "Oil – 1 tsp",
    "Mustard seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Whisk curd until smooth.",
    "Add chopped cucumber and salt.",
    "Heat oil, add mustard seeds and curry leaves.",
    "Pour tempering over curd mixture and mix.",
    "Serve fresh."
  ]
},
{
  name: "Majjiga Pulusu",
  telugu: "మజ్జిగ పులుసు",
  category: "Curries",
  ingredients: [
    "Buttermilk – 2 cups",
    "Bottle gourd – 1 cup (cubed)",
    "Green chillies – 2",
    "Turmeric – ¼ tsp",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Cook bottle gourd till soft.",
    "Add turmeric, salt and green chillies.",
    "Add buttermilk and heat gently (do not boil).",
    "Add tempering and mix.",
    "Serve warm with rice."
  ]
},
{
  name: "Pulihora",
  telugu: "పులిహోర",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Tamarind extract – ½ cup",
    "Turmeric – ¼ tsp",
    "Salt – to taste",
    "Oil – 2 tbsp",
    "Mustard seeds – ½ tsp",
    "Green chillies – 2",
    "Curry leaves – few"
  ],
  method: [
    "Heat oil, add mustard seeds.",
    "Add green chillies and curry leaves.",
    "Add turmeric and tamarind extract.",
    "Cook till raw smell disappears.",
    "Add salt and mix with rice.",
    "Rest 10 minutes before serving."
  ]
},
{
  name: "Lemon Rice",
  telugu: "నిమ్మకాయ అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Lemon juice – 2 tbsp",
    "Turmeric – ¼ tsp",
    "Salt – to taste",
    "Oil – 2 tbsp",
    "Mustard seeds – ½ tsp",
    "Green chillies – 2",
    "Peanuts – 2 tbsp"
  ],
  method: [
    "Heat oil, fry peanuts till golden.",
    "Add mustard seeds, green chillies.",
    "Add turmeric and salt.",
    "Mix with rice and add lemon juice.",
    "Serve warm."
  ]
},
{
  name: "Neyyi Annam",
  telugu: "నెయ్యి అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Ghee – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Add ghee and salt to hot rice.",
    "Mix gently.",
    "Serve immediately."
  ]
},
{
  name: "Rava Upma",
  telugu: "రవ్వ ఉప్మా",
  category: "Breakfast",
  ingredients: [
    "Rava – 1 cup",
    "Water – 2½ cups",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp",
    "Green chilli – 1"
  ],
  method: [
    "Dry roast rava till aromatic.",
    "Boil water with salt.",
    "Add rava slowly while stirring.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Rava Laddu",
  telugu: "రవ్వ లడ్డు",
  category: "Sweets",
  ingredients: [
    "Rava – 1 cup",
    "Sugar – ¾ cup",
    "Ghee – 3 tbsp",
    "Cashews – 1 tbsp",
    "Cardamom powder – ¼ tsp"
  ],
  method: [
    "Roast rava in ghee till golden.",
    "Grind sugar into powder.",
    "Mix rava, sugar and cardamom.",
    "Add ghee and shape laddus.",
    "Cool and store."
  ]
},
{
  name: "Poornam Boorelu",
  telugu: "పూర్ణం బూరెలు",
  category: "Sweets",
  ingredients: [
    "Chana dal – 1 cup",
    "Jaggery – ¾ cup",
    "Rice flour – ¼ cup",
    "Urad dal – 2 tbsp",
"Oil – for frying"
  ],
  method: [
    "Cook chana dal and mash with jaggery.",
    "Prepare batter with rice flour and urad dal.",
    "Dip poornam balls in batter.",
    "Deep fry till golden.",
    "Serve warm."
  ]
},
{
  name: "Sunnundalu",
  telugu: "సున్నుండలు",
  category: "Sweets",
  ingredients: [
    "Urad dal – 1 cup",
    "Jaggery – ¾ cup",
    "Ghee – 2 tbsp"
  ],
  method: [
    "Dry roast urad dal till aromatic.",
    "Grind into fine powder.",
    "Add jaggery and ghee.",
    "Shape into laddus.",
    "Store in airtight container."
  ]
},
{
  name: "Gavvalu",
  telugu: "గవ్వలు",
  category: "Sweets",
  ingredients: [
    "Maida – 1 cup",
    "Sugar – ¾ cup",
    "Oil – for frying"
  ],
  method: [
    "Prepare stiff dough with maida.",
    "Shape into shells using mould.",
    "Deep fry till crisp.",
    "Coat with sugar syrup.",
    "Cool and store."
  ]
},
{
  name: "Palakova",
  telugu: "పాలకోవా",
  category: "Sweets",
  ingredients: [
    "Milk – 1 litre",
    "Sugar – ½ cup"
  ],
  method: [
    "Boil milk and simmer till reduced.",
    "Add sugar and mix.",
    "Cook till thick.",
    "Cool and serve."
  ]
},
{
  name: "Semya Payasam",
  telugu: "సేమ్యా పాయసం",
  category: "Sweets",
  ingredients: [
    "Vermicelli – ½ cup",
    "Milk – 2 cups",
    "Sugar – ½ cup",
    "Ghee – 1 tbsp",
    "Cashews – 1 tbsp"
  ],
  method: [
    "Roast vermicelli in ghee.",
    "Add milk and cook till soft.",
    "Add sugar and simmer.",
    "Add fried cashews.",
    "Serve warm."
  ]
},
{
  name: "Kobbari Laddu",
  telugu: "కొబ్బరి లడ్డు",
  category: "Sweets",
  ingredients: [
    "Grated coconut – 1 cup",
    "Sugar – ¾ cup",
    "Cardamom powder – ¼ tsp"
  ],
  method: [
    "Cook coconut and sugar till thick.",
    "Add cardamom powder.",
    "Cool slightly and shape laddus.",
    "Store airtight."
  ]
},
{
  name: "Undrallu",
  telugu: "ఉండ్రాళ్లు",
  category: "Pindi Vantalu",
  ingredients: [
    "Rice rava – 1 cup",
    "Water – 2 cups",
    "Salt – a pinch"
  ],
  method: [
    "Boil water with salt.",
    "Add rice rava and mix.",
    "Cook till soft dough forms.",
    "Shape into balls.",
    "Steam for 10 minutes.",
    "Serve hot."
  ]
},
{
  name: "Jantikalu",
  telugu: "జంతికలు",
  category: "Snacks",
  ingredients: [
    "Rice flour – 2 cups",
    "Butter – 1 tbsp",
    "Cumin seeds – 1 tsp",
    "Salt – to taste",
    "Water – as needed",
    "Oil – for frying"
  ],
  method: [
    "Mix rice flour, butter, cumin seeds and salt.",
    "Add water gradually and make soft dough.",
    "Fill dough in jantikalu press.",
    "Press directly into hot oil in circular shapes.",
    "Fry on medium flame till golden and crisp.",
    "Remove and cool completely before storing."
  ]
},
{
  name: "Karapusa",
  telugu: "కారపూస",
  category: "Snacks",
  ingredients: [
    "Besan – 1 cup",
    "Rice flour – 2 tbsp",
    "Red chilli powder – ½ tsp",
    "Salt – to taste",
    "Water – as needed",
    "Oil – for frying"
  ],
  method: [
    "Mix besan, rice flour, chilli powder and salt.",
    "Add water to make thick batter.",
    "Heat oil and press batter through sev press.",
    "Fry till crisp on medium flame.",
    "Cool and store in airtight container."
  ]
},
{
  name: "Chekkalu",
  telugu: "చెక్కలు",
  category: "Snacks",
  ingredients: [
    "Rice flour – 2 cups",
    "Butter – 2 tbsp",
    "Sesame seeds – 1 tbsp",
    "Green chilli – 1 (finely chopped)",
    "Salt – to taste",
    "Water – as required",
    "Oil – for frying"
  ],
  method: [
    "Mix rice flour, butter, sesame seeds, chilli and salt.",
    "Add water and make firm dough.",
    "Take small balls and flatten into thin discs.",
    "Fry in hot oil till golden and crisp.",
    "Cool and store."
  ]
},
{
  name: "Mixture",
  telugu: "మిక్చర్",
  category: "Snacks",
  ingredients: [
    "Sev – 1 cup",
    "Peanuts – ½ cup",
    "Roasted chana dal – ½ cup",
    "Red chilli powder – ½ tsp",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Deep fry peanuts till crisp.",
    "Fry roasted chana dal lightly.",
    "Mix sev, peanuts and chana dal.",
    "Add chilli powder and salt.",
    "Mix well and cool before storing."
  ]
},
{
  name: "Karam Boondi",
  telugu: "కారం బూంది",
  category: "Snacks",
  ingredients: [
    "Besan – 1 cup",
    "Red chilli powder – ½ tsp",
    "Salt – to taste",
    "Water – as needed",
    "Oil – for frying"
  ],
  method: [
    "Prepare batter with besan, chilli powder, salt and water.",
    "Heat oil and pour batter through boondi ladle.",
    "Fry till crisp.",
    "Remove and cool completely."
  ]
},
{
  name: "Pakodi",
  telugu: "పకోడీ",
  category: "Snacks",
  ingredients: [
    "Besan – 1 cup",
    "Onion – 1 (sliced)",
    "Green chilli – 1",
    "Salt – to taste",
    "Water – little",
    "Oil – for frying"
  ],
  method: [
    "Mix besan, onion, chilli and salt.",
    "Add little water to coat onions.",
    "Drop small portions in hot oil.",
    "Fry till golden and crisp.",
    "Serve hot."
  ]
},
{
  name: "Garelu",
  telugu: "గారెలు",
  category: "Breakfast",
  ingredients: [
    "Urad dal – 1 cup",
    "Green chilli – 1",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Soak urad dal for 4–5 hours.",
    "Grind to smooth fluffy batter.",
    "Add salt and chilli.",
    "Shape into vadas and deep fry.",
    "Serve hot with chutney."
  ]
},
{
  name: "Bellam Garelu",
  telugu: "బెల్లం గారెలు",
  category: "Sweets",
  ingredients: [
    "Garelu – 6",
    "Jaggery – ¾ cup",
    "Water – ½ cup"
  ],
  method: [
    "Prepare jaggery syrup with water.",
    "Soak hot garelu in syrup.",
    "Rest for 10 minutes.",
    "Serve warm."
  ]
},
{
  name: "Poha Upma",
  telugu: "అటుకుల ఉప్మా",
  category: "Breakfast",
  ingredients: [
    "Thick poha – 2 cups",
    "Onion – 1 small",
    "Green chilli – 1",
    "Salt – to taste",
    "Oil – 1 tbsp",
    "Mustard seeds – ½ tsp"
  ],
  method: [
    "Wash poha and drain water.",
    "Heat oil, add mustard seeds.",
    "Add onion and chilli, sauté.",
    "Add poha and salt.",
    "Mix gently and cook for 2–3 minutes.",
    "Serve hot."
  ]
},
{
  name: "Rava Dosa",
  telugu: "రవ్వ దోస",
  category: "Breakfast",
  ingredients: [
    "Rava – ½ cup",
    "Rice flour – ¼ cup",
    "Maida – 2 tbsp",
    "Water – as needed",
    "Salt – to taste"
  ],
  method: [
    "Mix all flours and salt.",
    "Add water to make thin batter.",
    "Pour batter on hot tawa.",
    "Cook till crisp.",
    "Serve hot."
  ]
},
{
  name: "Masala Dosa",
  telugu: "మసాలా దోస",
  category: "Breakfast",
  ingredients: [
    "Dosa batter – 2 cups",
    "Potato masala – 1 cup",
    "Oil – for cooking"
  ],
  method: [
    "Heat tawa and pour dosa batter.",
    "Spread evenly and drizzle oil.",
    "Place potato masala in center.",
    "Fold dosa and serve hot."
  ]
},
{
  name: "Plain Dosa",
  telugu: "దోస",
  category: "Breakfast",
  ingredients: [
    "Dosa batter – 2 cups",
    "Oil – for cooking"
  ],
  method: [
    "Heat tawa and pour batter.",
    "Spread thinly.",
    "Cook till crisp.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Kurma",
  telugu: "వెజ్ కుర్మా",
  category: "Curries",
  ingredients: [
    "Mixed vegetables – 2 cups",
    "Onion – 1",
    "Ginger garlic paste – 1 tsp",
    "Kurma masala – 2 tsp",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add ginger garlic paste.",
    "Add vegetables and masala.",
    "Add water and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Veg Fried Rice",
  telugu: "వెజ్ ఫ్రైడ్ రైస్",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Mixed vegetables – 1 cup",
    "Soy sauce – 1 tsp",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil in pan.",
    "Add vegetables and sauté.",
    "Add rice and sauces.",
    "Mix on high flame.",
    "Serve hot."
  ]
},
{
  name: "Curd Rice",
  telugu: "పెరుగు అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Curd – 1½ cups",
    "Salt – to taste"
  ],
  method: [
    "Mash rice lightly.",
    "Add curd and salt.",
    "Mix well.",
    "Serve fresh."
  ]
},
{
  name: "Pesarattu",
  telugu: "పెసరట్టు",
  category: "Breakfast",
  ingredients: [
    "Green gram (pesalu) – 1 cup",
    "Green chilli – 1",
    "Ginger – ½ tsp",
    "Salt – to taste",
    "Oil – for cooking"
  ],
  method: [
    "Soak green gram for 6 hours.",
    "Grind with chilli, ginger and salt to smooth batter.",
    "Heat tawa and pour batter like dosa.",
    "Cook both sides with little oil.",
    "Serve hot with chutney."
  ]
},
{
  name: "Upma Pesarattu",
  telugu: "ఉప్మా పెసరట్టు",
  category: "Breakfast",
  ingredients: [
    "Pesarattu batter – 2 cups",
    "Upma – 1 cup",
    "Oil – for cooking"
  ],
  method: [
    "Prepare pesarattu on hot tawa.",
    "Place upma in center.",
    "Fold and cook lightly.",
    "Serve hot."
  ]
},
{
  name: "Idli Sambar",
  telugu: "ఇడ్లీ సాంబార్",
  category: "Breakfast",
  ingredients: [
    "Idli – 4",
    "Sambar – 1 cup"
  ],
  method: [
    "Steam idlis till soft.",
    "Heat sambar.",
    "Serve idlis with hot sambar."
  ]
},
{
  name: "Ven Pongal",
  telugu: "వెన్న పొంగల్",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Moong dal – ½ cup",
    "Water – 4 cups",
    "Ghee – 2 tbsp",
    "Pepper – ½ tsp",
    "Cumin – ½ tsp",
    "Salt – to taste"
  ],
  method: [
    "Cook rice and dal till soft.",
    "Heat ghee, add cumin and pepper.",
    "Mix tempering into pongal.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Pulao",
  telugu: "వెజ్ పులావ్",
  category: "Rice Items",
  ingredients: [
    "Basmati rice – 1 cup",
    "Mixed vegetables – 1 cup",
    "Whole spices – 1 tsp",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Wash and soak rice for 20 minutes.",
    "Sauté spices and vegetables.",
    "Add rice, water and salt.",
    "Cook till rice is fluffy.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Biryani",
  telugu: "వెజ్ బిర్యానీ",
  category: "Rice Items",
  ingredients: [
    "Basmati rice – 1 cup",
    "Vegetables – 1½ cups",
    "Biryani masala – 2 tsp",
    "Curd – ¼ cup",
    "Oil – 3 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook rice till 70% done.",
    "Cook vegetables with masala and curd.",
    "Layer rice and vegetables.",
    "Dum cook for 10 minutes.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Khichdi",
  telugu: "ఖిచిడీ",
  category: "Rice Items",
  ingredients: [
    "Rice – ½ cup",
    "Moong dal – ½ cup",
    "Vegetables – 1 cup",
    "Turmeric – ¼ tsp",
    "Salt – to taste"
  ],
  method: [
    "Wash rice and dal.",
    "Add vegetables, turmeric and water.",
    "Pressure cook till soft.",
    "Mix well and serve hot."
  ]
},
{
  name: "Cabbage Curry",
  telugu: "క్యాబేజీ కూర",
  category: "Curries",
  ingredients: [
    "Cabbage – 2 cups (shredded)",
    "Onion – 1 small",
    "Green chilli – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion and chilli.",
    "Add cabbage and salt.",
    "Cook covered till soft.",
    "Serve hot."
  ]
},
{
  name: "Beans Curry",
  telugu: "బీన్స్ కూర",
  category: "Curries",
  ingredients: [
    "Green beans – 2 cups",
    "Onion – 1 small",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add beans and salt.",
    "Cook till beans are soft.",
    "Serve hot."
  ]
},
{
  name: "Carrot Curry",
  telugu: "క్యారెట్ కూర",
  category: "Curries",
  ingredients: [
    "Carrot – 2 cups",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil in pan.",
    "Add carrot and salt.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Beetroot Curry",
  telugu: "బీట్‌రూట్ కూర",
  category: "Curries",
  ingredients: [
    "Beetroot – 2 cups",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add beetroot.",
    "Add salt and cook covered.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Potato Fry",
  telugu: "ఆలూ వేపుడు",
  category: "Curries",
  ingredients: [
    "Potatoes – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste",
    "Chilli powder – ½ tsp"
  ],
  method: [
    "Heat oil and add potatoes.",
    "Add salt and chilli powder.",
    "Cook till crispy.",
    "Serve hot."
  ]
},
{
  name: "Potato Kurma",
  telugu: "ఆలూ కుర్మా",
  category: "Curries",
  ingredients: [
    "Potatoes – 2 cups",
    "Onion – 1",
    "Kurma masala – 2 tsp",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add potatoes and masala.",
    "Add water and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Pakora",
  telugu: "కూరగాయల పకోడీ",
  category: "Snacks",
  ingredients: [
    "Besan – 1 cup",
    "Mixed vegetables – 1 cup",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Mix vegetables with besan and salt.",
    "Add little water.",
    "Deep fry spoonfuls till golden.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Cutlet",
  telugu: "వెజ్ కట్లెట్",
  category: "Snacks",
  ingredients: [
    "Boiled vegetables – 2 cups",
    "Bread crumbs – ½ cup",
    "Salt – to taste",
    "Oil – for shallow frying"
  ],
  method: [
    "Mash vegetables and mix salt and crumbs.",
    "Shape into cutlets.",
    "Shallow fry till golden.",
    "Serve hot."
  ]
},
{
  name: "Onion Pakodi",
  telugu: "ఉల్లిపాయ పకోడీ",
  category: "Snacks",
  ingredients: [
    "Onion – 2 large (thinly sliced)",
    "Besan – 1 cup",
    "Rice flour – 2 tbsp",
    "Green chilli – 1 (chopped)",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Mix onion, besan, rice flour, chilli and salt.",
    "Sprinkle little water and mix to coat onions.",
    "Heat oil and drop small portions.",
    "Fry till golden and crisp.",
    "Serve hot."
  ]
},
{
  name: "Mirchi Bajji",
  telugu: "మిర్చి బజ్జి",
  category: "Snacks",
  ingredients: [
    "Large green chillies – 6",
    "Besan – 1 cup",
    "Salt – to taste",
    "Water – as needed",
    "Oil – for frying"
  ],
  method: [
    "Slit chillies and remove seeds.",
    "Prepare thick batter with besan, salt and water.",
    "Dip chillies in batter.",
    "Deep fry till golden.",
    "Serve hot."
  ]
},
{
  name: "Aloo Bonda",
  telugu: "ఆలూ బోండా",
  category: "Snacks",
  ingredients: [
    "Boiled potatoes – 2 cups (mashed)",
    "Green chilli – 1",
    "Ginger – ½ tsp",
    "Besan – 1 cup",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Mix potato, chilli, ginger and salt.",
    "Make small balls.",
    "Prepare besan batter.",
    "Dip balls and deep fry till golden.",
    "Serve hot."
  ]
},
{
  name: "Punugulu",
  telugu: "పునుగులు",
  category: "Snacks",
  ingredients: [
    "Dosa batter – 2 cups",
    "Onion – 1 small",
    "Green chilli – 1",
    "Cumin seeds – ½ tsp",
    "Oil – for frying"
  ],
  method: [
    "Mix onion, chilli and cumin into batter.",
    "Heat oil and drop spoonfuls.",
    "Fry till crisp.",
    "Serve hot with chutney."
  ]
},
{
  name: "Masala Vada",
  telugu: "మసాలా వడ",
  category: "Snacks",
  ingredients: [
    "Chana dal – 1 cup (soaked)",
    "Onion – 1 small",
    "Green chilli – 1",
    "Curry leaves – few",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Grind dal coarsely.",
    "Add onion, chilli, curry leaves and salt.",
    "Shape into vadas.",
    "Deep fry till crisp.",
    "Serve hot."
  ]
},
{
  name: "Cabbage Pakodi",
  telugu: "క్యాబేజీ పకోడీ",
  category: "Snacks",
  ingredients: [
    "Cabbage – 1½ cups (shredded)",
    "Besan – ¾ cup",
    "Green chilli – 1",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Mix cabbage, besan, chilli and salt.",
    "Add little water.",
    "Drop spoonfuls in hot oil.",
    "Fry till golden.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Samosa",
  telugu: "వెజ్ సమోసా",
  category: "Snacks",
  ingredients: [
    "Maida – 2 cups",
    "Potato filling – 1½ cups",
    "Oil – for frying",
    "Salt – to taste"
  ],
  method: [
    "Prepare stiff dough with maida.",
    "Fill with potato masala.",
    "Shape samosas.",
    "Deep fry till golden.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Sandwich",
  telugu: "వెజ్ సాండ్‌విచ్",
  category: "Breakfast",
  ingredients: [
    "Bread slices – 4",
    "Vegetables – 1 cup (grated)",
    "Butter – as needed",
    "Salt – to taste"
  ],
  method: [
    "Mix vegetables with salt.",
    "Apply butter on bread.",
    "Place filling and cover.",
    "Toast or grill.",
    "Serve hot."
  ]
},
{
  name: "Tomato Soup",
  telugu: "టమాట సూప్",
  category: "Others",
  ingredients: [
    "Tomatoes – 3",
    "Pepper – ¼ tsp",
    "Salt – to taste",
    "Butter – 1 tsp"
  ],
  method: [
    "Boil tomatoes and peel skin.",
    "Blend into puree.",
    "Cook with butter, salt and pepper.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Stew",
  telugu: "వెజ్ స్ట్యూ",
  category: "Curries",
  ingredients: [
    "Mixed vegetables – 2 cups",
    "Coconut milk – 1 cup",
    "Green chilli – 1",
    "Salt – to taste"
  ],
  method: [
    "Cook vegetables till soft.",
    "Add coconut milk and chilli.",
    "Heat gently without boiling.",
    "Serve warm."
  ]
},
{
  name: "Vegetable Kootu",
  telugu: "వెజ్ కూటు",
  category: "Curries",
  ingredients: [
    "Vegetables – 2 cups",
    "Moong dal – ½ cup",
    "Coconut paste – ¼ cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and vegetables together.",
    "Add coconut paste.",
    "Simmer 5 minutes.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Poriyal",
  telugu: "వెజ్ పొరియల్",
  category: "Curries",
  ingredients: [
    "Vegetables – 2 cups",
    "Grated coconut – 2 tbsp",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook vegetables till tender.",
    "Add salt and coconut.",
    "Mix well and serve."
  ]
},
{
  name: "Vegetable Thoran",
  telugu: "వెజ్ తోరన్",
  category: "Curries",
  ingredients: [
    "Vegetables – 2 cups",
    "Grated coconut – ¼ cup",
    "Green chilli – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook vegetables till soft.",
    "Add coconut and chilli.",
    "Mix well.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Avial",
  telugu: "వెజ్ అవియల్",
  category: "Curries",
  ingredients: [
    "Mixed vegetables – 2 cups",
    "Coconut paste – ½ cup",
    "Curd – ¼ cup",
    "Salt – to taste"
  ],
  method: [
    "Cook vegetables till soft.",
    "Add coconut paste and cook briefly.",
    "Switch off flame and add curd.",
    "Mix gently and serve."
  ]
},
{
  name: "Vegetable Pulao (Simple)",
  telugu: "సాధారణ వెజ్ పులావ్",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Vegetables – 1 cup",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Sauté vegetables in oil.",
    "Add rice, water and salt.",
    "Cook till rice is done.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Lemon Soup",
  telugu: "వెజ్ నిమ్మ సూప్",
  category: "Others",
  ingredients: [
    "Vegetable stock – 2 cups",
    "Lemon juice – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat vegetable stock.",
    "Add salt and lemon juice.",
    "Serve hot."
  ]
},
{
  name: "Tomato Rasam",
  telugu: "టమాట రసం",
  category: "Curries",
  ingredients: [
    "Tomatoes – 2 (chopped)",
    "Tamarind water – 1 cup",
    "Rasam powder – 1 tsp",
    "Salt – to taste",
    "Oil – 1 tsp",
    "Mustard seeds – ½ tsp",
    "Curry leaves – few"
  ],
  method: [
    "Boil tomatoes with tamarind water till soft.",
    "Add rasam powder and salt.",
    "Simmer for 5 minutes.",
    "Add tempering and serve hot."
  ]
},
{
  name: "Pepper Rasam",
  telugu: "మిరియాల రసం",
  category: "Curries",
  ingredients: [
    "Tamarind water – 1 cup",
    "Crushed pepper – 1 tsp",
    "Cumin powder – ½ tsp",
    "Salt – to taste",
    "Ghee – 1 tsp"
  ],
  method: [
    "Heat tamarind water with salt.",
    "Add pepper and cumin powder.",
    "Simmer briefly.",
    "Add ghee and serve hot."
  ]
},
{
  name: "Coriander Rasam",
  telugu: "కొత్తిమీర రసం",
  category: "Curries",
  ingredients: [
    "Tamarind water – 1 cup",
    "Coriander paste – 2 tbsp",
    "Salt – to taste",
    "Oil – 1 tsp"
  ],
  method: [
    "Boil tamarind water.",
    "Add coriander paste and salt.",
    "Simmer 5 minutes.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Dal",
  telugu: "కూరగాయల పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Mixed vegetables – 1 cup",
    "Turmeric – ¼ tsp",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and vegetables together till soft.",
    "Mash lightly.",
    "Add salt and simmer.",
    "Serve hot with rice."
  ]
},
{
  name: "Spinach Dal",
  telugu: "పాలకూర పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Spinach – 1 cup (chopped)",
    "Turmeric – ¼ tsp",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and spinach together.",
    "Mash well.",
    "Add salt and simmer.",
    "Serve hot."
  ]
},
{
  name: "Cabbage Dal",
  telugu: "క్యాబేజీ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Cabbage – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and cabbage together.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Stir Fry",
  telugu: "కూరగాయల వేపుడు",
  category: "Curries",
  ingredients: [
    "Mixed vegetables – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil in pan.",
    "Add vegetables and salt.",
    "Stir fry till cooked.",
    "Serve hot."
  ]
},
{
  name: "Cucumber Curry",
  telugu: "దోసకాయ కూర",
  category: "Curries",
  ingredients: [
    "Cucumber – 2 cups",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add cucumber.",
    "Add salt.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Pumpkin Curry",
  telugu: "గుమ్మడికాయ కూర",
  category: "Curries",
  ingredients: [
    "Pumpkin – 2 cups",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add pumpkin.",
    "Add salt and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Okra Fry",
  telugu: "బెండకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Okra – 2 cups (sliced)",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add okra.",
    "Add salt.",
    "Cook till crisp.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Salad",
  telugu: "కూరగాయల సలాడ్",
  category: "Others",
  ingredients: [
    "Mixed raw vegetables – 1 cup",
    "Salt – a pinch",
    "Lemon juice – 1 tsp"
  ],
  method: [
    "Chop vegetables finely.",
    "Add salt and lemon juice.",
    "Mix well.",
    "Serve fresh."
  ]
},
{
  name: "Fruit Salad",
  telugu: "పండ్ల సలాడ్",
  category: "Others",
  ingredients: [
    "Mixed fruits – 2 cups",
    "Honey – 1 tbsp"
  ],
  method: [
    "Chop fruits.",
    "Add honey.",
    "Mix gently.",
    "Serve fresh."
  ]
},
{
  name: "Vegetable Omelette (Eggless)",
  telugu: "వెజ్ ఆమ్లెట్",
  category: "Breakfast",
  ingredients: [
    "Besan – 1 cup",
    "Vegetables – ½ cup (finely chopped)",
    "Salt – to taste",
    "Oil – for cooking"
  ],
  method: [
    "Mix besan, vegetables, salt and water to batter.",
    "Pour on hot tawa like omelette.",
    "Cook both sides.",
    "Serve hot."
  ]
},
{
  name: "Besan Chilla",
  telugu: "బేసన్ చిల్లా",
  category: "Breakfast",
  ingredients: [
    "Besan – 1 cup",
    "Onion – ¼ cup",
    "Salt – to taste",
    "Oil – for cooking"
  ],
  method: [
    "Mix besan, onion, salt and water.",
    "Pour on hot tawa.",
    "Cook both sides.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Paratha",
  telugu: "వెజ్ పరాఠా",
  category: "Breakfast",
  ingredients: [
    "Wheat flour – 2 cups",
    "Vegetable stuffing – 1 cup",
    "Salt – to taste",
    "Oil – for cooking"
  ],
  method: [
    "Prepare dough with wheat flour.",
    "Stuff with vegetable mixture.",
    "Roll and cook on tawa.",
    "Serve hot."
  ]
},
{
  name: "Chapati",
  telugu: "చపాతీ",
  category: "Breakfast",
  ingredients: [
    "Wheat flour – 2 cups",
    "Water – as needed",
    "Salt – a pinch"
  ],
  method: [
    "Mix wheat flour and salt.",
    "Add water gradually and knead soft dough.",
    "Rest for 15 minutes.",
    "Roll into rotis and cook on hot tawa.",
    "Serve hot."
  ]
},
{
  name: "Phulka",
  telugu: "ఫుల్కా",
  category: "Breakfast",
  ingredients: [
    "Wheat flour – 2 cups",
    "Water – as needed"
  ],
  method: [
    "Prepare soft dough with wheat flour.",
    "Roll thin rotis.",
    "Cook on tawa and puff on direct flame.",
    "Serve hot."
  ]
},
{
  name: "Poori",
  telugu: "పూరీ",
  category: "Breakfast",
  ingredients: [
    "Wheat flour – 2 cups",
    "Salt – a pinch",
    "Water – as needed",
    "Oil – for frying"
  ],
  method: [
    "Prepare stiff dough with flour and salt.",
    "Roll small discs.",
    "Deep fry in hot oil till puffed.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Kurma (Simple)",
  telugu: "సాధారణ వెజ్ కుర్మా",
  category: "Curries",
  ingredients: [
    "Mixed vegetables – 2 cups",
    "Onion – 1",
    "Green chilli – 1",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion and chilli.",
    "Add vegetables and salt.",
    "Add little water and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Potato Masala",
  telugu: "ఆలూ మసాలా",
  category: "Curries",
  ingredients: [
    "Potatoes – 2 cups (boiled)",
    "Onion – 1",
    "Green chilli – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion and chilli.",
    "Add mashed potatoes and salt.",
    "Mix well and cook briefly.",
    "Serve hot."
  ]
},
{
  name: "Tomato Kurma",
  telugu: "టమాట కుర్మా",
  category: "Curries",
  ingredients: [
    "Tomatoes – 3",
    "Onion – 1",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add chopped tomatoes and salt.",
    "Cook till thick gravy forms.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Korma",
  telugu: "వెజ్ కోర్మా",
  category: "Curries",
  ingredients: [
    "Mixed vegetables – 2 cups",
    "Cashew paste – ¼ cup",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook vegetables till soft.",
    "Add cashew paste and salt.",
    "Simmer for 5 minutes.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Steamed Momos",
  telugu: "వెజ్ మోమోస్",
  category: "Snacks",
  ingredients: [
    "Maida – 2 cups",
    "Vegetable filling – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Prepare soft dough with maida.",
    "Fill with vegetable mixture.",
    "Shape momos.",
    "Steam for 10 minutes.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Spring Roll",
  telugu: "వెజ్ స్ప్రింగ్ రోల్",
  category: "Snacks",
  ingredients: [
    "Spring roll sheets – 6",
    "Vegetable filling – 1 cup",
    "Oil – for frying"
  ],
  method: [
    "Fill sheets with vegetables.",
    "Roll tightly.",
    "Deep fry till crisp.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Frankie",
  telugu: "వెజ్ ఫ్రాంకీ",
  category: "Snacks",
  ingredients: [
    "Roti – 2",
    "Vegetable filling – 1 cup",
    "Sauce – as needed"
  ],
  method: [
    "Place filling on roti.",
    "Add sauce.",
    "Roll tightly.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Puffs",
  telugu: "వెజ్ పఫ్స్",
  category: "Snacks",
  ingredients: [
    "Puff pastry sheets – 1 pack",
    "Vegetable filling – 1 cup"
  ],
  method: [
    "Fill pastry with vegetables.",
    "Shape puffs.",
    "Bake till golden.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Pizza",
  telugu: "వెజ్ పిజ్జా",
  category: "Others",
  ingredients: [
    "Pizza base – 1",
    "Vegetables – 1 cup",
    "Cheese – ½ cup"
  ],
  method: [
    "Spread sauce on base.",
    "Add vegetables and cheese.",
    "Bake till cheese melts.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Pasta",
  telugu: "వెజ్ పాస్తా",
  category: "Others",
  ingredients: [
    "Pasta – 1 cup",
    "Vegetables – 1 cup",
    "Sauce – ½ cup"
  ],
  method: [
    "Cook pasta till soft.",
    "Sauté vegetables.",
    "Add sauce and pasta.",
    "Mix and serve."
  ]
},
{
  name: "Vegetable Noodles",
  telugu: "వెజ్ నూడుల్స్",
  category: "Others",
  ingredients: [
    "Noodles – 1 pack",
    "Vegetables – 1 cup",
    "Soy sauce – 1 tsp"
  ],
  method: [
    "Boil noodles.",
    "Sauté vegetables.",
    "Add noodles and sauces.",
    "Mix well and serve."
  ]
},
{
  name: "Vegetable Manchurian",
  telugu: "వెజ్ మంచూరియన్",
  category: "Others",
  ingredients: [
    "Vegetable balls – 10",
    "Manchurian sauce – ½ cup"
  ],
  method: [
    "Prepare vegetable balls.",
    "Cook sauce.",
    "Add balls and toss.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Soup",
  telugu: "వెజ్ సూప్",
  category: "Others",
  ingredients: [
    "Vegetable stock – 2 cups",
    "Vegetables – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Boil vegetables in stock.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Juice",
  telugu: "కూరగాయల జ్యూస్",
  category: "Others",
  ingredients: [
    "Mixed vegetables – 2 cups",
    "Salt – a pinch"
  ],
  method: [
    "Blend vegetables.",
    "Strain if needed.",
    "Serve fresh."
  ]
},
{
  name: "Vegetable Smoothie",
  telugu: "వెజ్ స్మూతీ",
  category: "Others",
  ingredients: [
    "Vegetables – 1 cup",
    "Water – as needed"
  ],
  method: [
    "Blend vegetables with water.",
    "Serve fresh."
  ]
},
{
  name: "Tomato Chutney",
  telugu: "టమాట చట్నీ",
  category: "Pachadi",
  ingredients: [
    "Tomatoes – 3 (chopped)",
    "Dry red chillies – 3",
    "Garlic – 2 cloves",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Heat oil and fry red chillies and garlic.",
    "Add tomatoes and cook till soft.",
    "Cool and grind to coarse paste.",
    "Serve with hot rice or idli."
  ]
},
{
  name: "Allam Pachadi (Sweet)",
  telugu: "తీపి అల్లం పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Ginger – 100 g",
    "Jaggery – 3 tbsp",
    "Dry red chillies – 4",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Fry ginger pieces in oil till golden.",
    "Add red chillies and fry lightly.",
    "Cool and grind with jaggery and salt.",
    "Serve with rice and ghee."
  ]
},
{
  name: "Usiri Pachadi",
  telugu: "ఉసిరి పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Amla (usiri) – 3",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Steam or boil amla till soft.",
    "Grind with chillies and salt.",
    "Serve fresh."
  ]
},
{
  name: "Gongura Pachadi",
  telugu: "గోంగూర పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Gongura leaves – 2 cups",
    "Dry red chillies – 4",
    "Garlic – 3 cloves",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Wash and sauté gongura leaves till wilted.",
    "Fry red chillies and garlic in oil.",
    "Cool and grind all ingredients together.",
    "Serve with hot rice."
  ]
},
{
  name: "Beerakaya Pachadi",
  telugu: "బీరకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Ridge gourd – 1 cup (chopped)",
    "Green chillies – 2",
    "Tamarind – small piece",
    "Salt – to taste"
  ],
  method: [
    "Cook ridge gourd till soft.",
    "Cool and grind with chillies, tamarind and salt.",
    "Serve fresh."
  ]
},
{
  name: "Sorakaya Pachadi",
  telugu: "సొరకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Bottle gourd – 1 cup",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Cook bottle gourd till soft.",
    "Grind with chillies and salt.",
    "Serve with rice."
  ]
},
{
  name: "Dosakaya Pachadi (Raw)",
  telugu: "పచ్చి దోసకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Dosakaya – 1 cup (grated)",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Grind dosakaya with chillies and salt.",
    "Serve fresh."
  ]
},
{
  name: "Vankaya Pachadi",
  telugu: "వంకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Brinjal – 2",
    "Green chillies – 2",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Roast brinjals till soft.",
    "Peel skin and mash.",
    "Grind with chillies and salt.",
    "Serve fresh."
  ]
},
{
  name: "Kobbari Noju",
  telugu: "కొబ్బరి నోజు",
  category: "Pachadi",
  ingredients: [
    "Coconut water – 1 cup",
    "Green chilli – 1",
    "Salt – a pinch"
  ],
  method: [
    "Blend coconut water with chilli and salt.",
    "Serve fresh."
  ]
},
{
  name: "Pappu Charu",
  telugu: "పప్పు చారు",
  category: "Curries",
  ingredients: [
    "Cooked dal water – 1 cup",
    "Tamarind water – ½ cup",
    "Rasam powder – 1 tsp",
    "Salt – to taste"
  ],
  method: [
    "Boil dal water and tamarind water together.",
    "Add rasam powder and salt.",
    "Simmer 5 minutes.",
    "Serve hot."
  ]
},
{
  name: "Majjiga Charu",
  telugu: "మజ్జిగ చారు",
  category: "Curries",
  ingredients: [
    "Buttermilk – 2 cups",
    "Green chilli – 1",
    "Salt – to taste"
  ],
  method: [
    "Heat buttermilk gently.",
    "Add chilli and salt.",
    "Serve warm."
  ]
},
{
  name: "Pulusu",
  telugu: "పులుసు",
  category: "Curries",
  ingredients: [
    "Tamarind water – 2 cups",
    "Vegetables – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Boil vegetables in tamarind water.",
    "Add salt and cook till done.",
    "Serve hot."
  ]
},
{
  name: "Ulavacharu",
  telugu: "ఉలవచారు",
  category: "Curries",
  ingredients: [
    "Horse gram – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Soak horse gram overnight.",
    "Cook and extract thick stock.",
    "Season lightly and serve hot."
  ]
},
{
  name: "Ragi Mudda",
  telugu: "రాగి ముద్ద",
  category: "Pindi Vantalu",
  ingredients: [
    "Ragi flour – 1 cup",
    "Water – 3 cups",
    "Salt – a pinch"
  ],
  method: [
    "Boil water with salt.",
    "Add ragi flour slowly stirring continuously.",
    "Cook till thick.",
    "Shape into balls and serve hot."
  ]
},
{
  name: "Jowar Sangati",
  telugu: "జొన్న సంగటి",
  category: "Pindi Vantalu",
  ingredients: [
    "Jowar flour – 1 cup",
    "Rice – ¼ cup",
    "Water – 3 cups"
  ],
  method: [
    "Cook rice till very soft.",
    "Add jowar flour slowly.",
    "Cook till thick.",
    "Shape and serve."
  ]
},
{
  name: "Ragi Dosa",
  telugu: "రాగి దోస",
  category: "Breakfast",
  ingredients: [
    "Ragi flour – 1 cup",
    "Rice flour – ½ cup",
    "Curd – ½ cup",
    "Salt – to taste",
    "Water – as needed"
  ],
  method: [
    "Mix ragi flour, rice flour, curd and salt.",
    "Add water to make thin batter.",
    "Pour batter on hot tawa.",
    "Cook till crisp.",
    "Serve hot."
  ]
},
{
  name: "Ragi Idli",
  telugu: "రాగి ఇడ్లీ",
  category: "Breakfast",
  ingredients: [
    "Ragi flour – 1 cup",
    "Idli batter – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Mix ragi flour with idli batter.",
    "Pour into greased moulds.",
    "Steam for 12 minutes.",
    "Serve hot."
  ]
},
{
  name: "Ragi Upma",
  telugu: "రాగి ఉప్మా",
  category: "Breakfast",
  ingredients: [
    "Ragi flour – 1 cup",
    "Water – 2½ cups",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Boil water with salt.",
    "Add ragi flour slowly stirring continuously.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Jowar Dosa",
  telugu: "జొన్న దోస",
  category: "Breakfast",
  ingredients: [
    "Jowar flour – 1 cup",
    "Rice flour – ½ cup",
    "Salt – to taste",
    "Water – as needed"
  ],
  method: [
    "Mix flours and salt.",
    "Add water to make thin batter.",
    "Pour on hot tawa.",
    "Cook till crisp.",
    "Serve hot."
  ]
},
{
  name: "Jowar Roti",
  telugu: "జొన్న రొట్టె",
  category: "Pindi Vantalu",
  ingredients: [
    "Jowar flour – 2 cups",
    "Hot water – as needed",
    "Salt – a pinch"
  ],
  method: [
    "Mix flour and salt.",
    "Add hot water and make soft dough.",
    "Flatten into rotis.",
    "Cook on hot tawa.",
    "Serve hot."
  ]
},
{
  name: "Corn Upma",
  telugu: "మొక్కజొన్న ఉప్మా",
  category: "Breakfast",
  ingredients: [
    "Corn rava – 1 cup",
    "Water – 3 cups",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Boil water with salt.",
    "Add corn rava slowly.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Corn Pakodi",
  telugu: "మొక్కజొన్న పకోడీ",
  category: "Snacks",
  ingredients: [
    "Sweet corn – 1 cup (crushed)",
    "Besan – ½ cup",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Mix corn, besan and salt.",
    "Drop spoonfuls in hot oil.",
    "Fry till crisp.",
    "Serve hot."
  ]
},
{
  name: "Corn Curry",
  telugu: "మొక్కజొన్న కూర",
  category: "Curries",
  ingredients: [
    "Sweet corn – 1½ cups",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add corn and salt.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Pongal",
  telugu: "వెజ్ పొంగల్",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Moong dal – ½ cup",
    "Vegetables – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook rice, dal and vegetables together.",
    "Mash lightly.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Rice",
  telugu: "వెజ్ అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Vegetables – 1 cup",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Sauté vegetables in oil.",
    "Add rice and salt.",
    "Mix well.",
    "Serve hot."
  ]
},
{
  name: "Coconut Rice",
  telugu: "కొబ్బరి అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Grated coconut – ½ cup",
    "Green chilli – 1",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté chilli.",
    "Add coconut and salt.",
    "Mix with rice.",
    "Serve warm."
  ]
},
{
  name: "Tomato Rice",
  telugu: "టమాట అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Tomato puree – 1 cup",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook tomato puree till thick.",
    "Add salt and rice.",
    "Mix well.",
    "Serve hot."
  ]
},
{
  name: "Curd Pachadi",
  telugu: "పెరుగు పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Curd – 1 cup",
    "Green chilli – 1",
    "Salt – to taste"
  ],
  method: [
    "Whisk curd well.",
    "Add chilli and salt.",
    "Mix and serve."
  ]
},
{
  name: "Onion Pachadi",
  telugu: "ఉల్లిపాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Onion – 1 large",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Chop onion finely.",
    "Grind with chillies and salt.",
    "Serve fresh."
  ]
},
{
  name: "Garlic Pachadi",
  telugu: "వెల్లుల్లి పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Garlic cloves – 10",
    "Dry red chillies – 3",
    "Salt – to taste"
  ],
  method: [
    "Grind garlic, chillies and salt.",
    "Serve with rice."
  ]
},
{
  name: "Coriander Rice",
  telugu: "కొత్తిమీర అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Coriander leaves – 1 cup",
    "Green chillies – 2",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Grind coriander leaves and green chillies to paste.",
    "Heat oil and sauté paste till aromatic.",
    "Add salt and mix with rice.",
    "Serve warm."
  ]
},
{
  name: "Mint Rice",
  telugu: "పుదీనా అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Mint leaves – 1 cup",
    "Green chillies – 2",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Grind mint and chillies.",
    "Cook paste in oil till raw smell goes.",
    "Mix with rice and salt.",
    "Serve hot."
  ]
},
{
  name: "Tamarind Rice",
  telugu: "చింతపండు అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Tamarind extract – ½ cup",
    "Turmeric – ¼ tsp",
    "Salt – to taste",
    "Oil – 2 tbsp"
  ],
  method: [
    "Cook tamarind extract with turmeric and salt.",
    "Mix with rice.",
    "Serve after resting 10 minutes."
  ]
},
{
  name: "Jeera Rice",
  telugu: "జీరా అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Cumin seeds – 1 tsp",
    "Ghee – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat ghee and fry cumin seeds.",
    "Add rice and salt.",
    "Mix gently and serve hot."
  ]
},
{
  name: "Ghee Rice",
  telugu: "నెయ్యి అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Ghee – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat ghee.",
    "Add rice and salt.",
    "Mix gently and serve."
  ]
},
{
  name: "Vegetable Pulao (Pressure Cooker)",
  telugu: "కుక్కర్ వెజ్ పులావ్",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Vegetables – 1 cup",
    "Whole spices – 1 tsp",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté spices and vegetables.",
    "Add rice, water and salt.",
    "Pressure cook for 2 whistles.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Lemon Rice",
  telugu: "వెజ్ నిమ్మకాయ అన్నం",
  category: "Rice Items",
  ingredients: [
    "Cooked rice – 2 cups",
    "Mixed vegetables – 1 cup",
    "Lemon juice – 2 tbsp",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Sauté vegetables in oil.",
    "Add rice and salt.",
    "Switch off flame and add lemon juice.",
    "Mix gently and serve."
  ]
},
{
  name: "Vegetable Tomato Bath",
  telugu: "టమాట బాత్",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Tomatoes – 2",
    "Vegetables – 1 cup",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook tomatoes into thick paste.",
    "Add vegetables and rice.",
    "Cook till rice is done.",
    "Serve hot."
  ]
},
{
  name: "Curd Semiya",
  telugu: "పెరుగు సేమియా",
  category: "Breakfast",
  ingredients: [
    "Semiya – 1 cup",
    "Curd – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook semiya till soft.",
    "Cool completely.",
    "Add curd and salt.",
    "Mix and serve."
  ]
},
{
  name: "Semiya Upma",
  telugu: "సేమియా ఉప్మా",
  category: "Breakfast",
  ingredients: [
    "Semiya – 1 cup",
    "Water – 2 cups",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Roast semiya lightly.",
    "Boil water with salt.",
    "Add semiya and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Semiya Pulihora",
  telugu: "సేమియా పులిహోర",
  category: "Rice Items",
  ingredients: [
    "Semiya – 1 cup",
    "Tamarind extract – ¼ cup",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook semiya and drain.",
    "Prepare tamarind seasoning.",
    "Mix with semiya and serve."
  ]
},
{
  name: "Vegetable Omelette (Besan)",
  telugu: "బేసన్ ఆమ్లెట్",
  category: "Breakfast",
  ingredients: [
    "Besan – 1 cup",
    "Vegetables – ½ cup",
    "Salt – to taste",
    "Oil – for cooking"
  ],
  method: [
    "Mix besan, vegetables, salt and water.",
    "Pour batter on hot tawa.",
    "Cook both sides.",
    "Serve hot."
  ]
},
{
  name: "Bread Upma",
  telugu: "బ్రెడ్ ఉప్మా",
  category: "Breakfast",
  ingredients: [
    "Bread slices – 4",
    "Onion – 1",
    "Green chilli – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Sauté onion and chilli in oil.",
    "Add bread pieces and salt.",
    "Mix gently and serve."
  ]
},
{
  name: "Bread Poha",
  telugu: "బ్రెడ్ అటుకులు",
  category: "Breakfast",
  ingredients: [
    "Bread – 4 slices",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cut bread into small pieces.",
    "Sauté onion in oil.",
    "Add bread and salt.",
    "Mix and serve."
  ]
},
{
  name: "Vegetable Toast",
  telugu: "వెజ్ టోస్ట్",
  category: "Breakfast",
  ingredients: [
    "Bread – 4 slices",
    "Vegetable topping – 1 cup",
    "Butter – as needed"
  ],
  method: [
    "Apply topping on bread.",
    "Toast with butter till crisp.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Uttapam",
  telugu: "వెజ్ ఉత్తప్పం",
  category: "Breakfast",
  ingredients: [
    "Dosa batter – 2 cups",
    "Onion – ¼ cup (chopped)",
    "Tomato – ¼ cup (chopped)",
    "Green chilli – 1 (chopped)",
    "Oil – for cooking",
    "Salt – to taste"
  ],
  method: [
    "Heat tawa and pour thick dosa batter.",
    "Sprinkle vegetables and salt on top.",
    "Drizzle oil and cook on medium flame.",
    "Flip gently and cook the other side.",
    "Serve hot with chutney."
  ]
},
{
  name: "Set Dosa",
  telugu: "సెట్ దోస",
  category: "Breakfast",
  ingredients: [
    "Dosa batter – 2 cups",
    "Oil – for cooking"
  ],
  method: [
    "Heat tawa and grease lightly.",
    "Pour batter thick without spreading.",
    "Cook covered on low flame.",
    "Serve soft set dosas hot."
  ]
},
{
  name: "Plain Idli",
  telugu: "సాదా ఇడ్లీ",
  category: "Breakfast",
  ingredients: [
    "Idli batter – 2 cups"
  ],
  method: [
    "Grease idli moulds.",
    "Pour batter into moulds.",
    "Steam for 10–12 minutes.",
    "Serve hot with chutney."
  ]
},
{
  name: "Idli Fry",
  telugu: "ఇడ్లీ వేపుడు",
  category: "Snacks",
  ingredients: [
    "Idli – 4 (cubed)",
    "Oil – 1 tbsp",
    "Chilli powder – ¼ tsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil in pan.",
    "Add idli pieces.",
    "Sprinkle chilli powder and salt.",
    "Fry till golden.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Poha",
  telugu: "వెజ్ అటుకులు",
  category: "Breakfast",
  ingredients: [
    "Thick poha – 2 cups",
    "Vegetables – ½ cup",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Wash poha and drain.",
    "Sauté vegetables in oil.",
    "Add poha and salt.",
    "Mix gently and cook 2 minutes.",
    "Serve hot."
  ]
},
{
  name: "Vegetable Kichadi",
  telugu: "వెజ్ కిచడి",
  category: "Rice Items",
  ingredients: [
    "Rice – ½ cup",
    "Moong dal – ½ cup",
    "Vegetables – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Wash rice and dal.",
    "Add vegetables and water.",
    "Pressure cook till soft.",
    "Mix and serve hot."
  ]
},
{
  name: "Vegetable Pulusu",
  telugu: "కూరగాయల పులుసు",
  category: "Curries",
  ingredients: [
    "Mixed vegetables – 2 cups",
    "Tamarind water – 2 cups",
    "Salt – to taste"
  ],
  method: [
    "Boil vegetables in tamarind water.",
    "Add salt and cook till soft.",
    "Serve hot with rice."
  ]
},
{
  name: "Bendakaya Pulusu",
  telugu: "బెండకాయ పులుసు",
  category: "Curries",
  ingredients: [
    "Okra – 2 cups",
    "Tamarind water – 1½ cups",
    "Salt – to taste",
    "Oil – 1 tbsp"
  ],
  method: [
    "Fry okra lightly in oil.",
    "Add tamarind water and salt.",
    "Cook till gravy thickens.",
    "Serve hot."
  ]
},
{
  name: "Tomato Pulusu",
  telugu: "టమాట పులుసు",
  category: "Curries",
  ingredients: [
    "Tomatoes – 3",
    "Tamarind water – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook tomatoes till soft.",
    "Add tamarind water and salt.",
    "Simmer 5 minutes.",
    "Serve hot."
  ]
},
{
  name: "Chamagadda Pulusu",
  telugu: "చామగడ్డ పులుసు",
  category: "Curries",
  ingredients: [
    "Colocasia – 1½ cups",
    "Tamarind water – 1½ cups",
    "Salt – to taste"
  ],
  method: [
    "Boil colocasia till soft.",
    "Add tamarind water and salt.",
    "Cook till gravy thickens.",
    "Serve hot."
  ]
},
{
  name: "Chamagadda Vepudu",
  telugu: "చామగడ్డ వేపుడు",
  category: "Curries",
  ingredients: [
    "Colocasia – 1½ cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Boil colocasia and peel.",
    "Slice and fry in oil.",
    "Add salt and cook till crisp.",
    "Serve hot."
  ]
},
{
  name: "Aratikaya Fry",
  telugu: "అరటికాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Raw banana – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Boil raw banana lightly and slice.",
    "Fry in oil till golden.",
    "Add salt and serve."
  ]
},
{
  name: "Aratikaya Curry",
  telugu: "అరటికాయ కూర",
  category: "Curries",
  ingredients: [
    "Raw banana – 2 cups",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Sauté onion in oil.",
    "Add raw banana and salt.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Aratikaya Bajji",
  telugu: "అరటికాయ బజ్జి",
  category: "Snacks",
  ingredients: [
    "Raw banana slices – 10",
    "Besan – 1 cup",
    "Salt – to taste",
    "Oil – for frying"
  ],
  method: [
    "Prepare thick besan batter with salt.",
    "Dip banana slices in batter.",
    "Deep fry till golden.",
    "Serve hot."
  ]
},
{
  name: "Arati Puvvu Curry",
  telugu: "అరటి పువ్వు కూర",
  category: "Curries",
  ingredients: [
    "Banana flower – 1 cup (chopped)",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Soak chopped flower in buttermilk.",
    "Cook till soft.",
    "Sauté onion in oil.",
    "Add flower and salt.",
    "Cook and serve hot."
  ]
},
{
  name: "Arati Puvvu Vepudu",
  telugu: "అరటి పువ్వు వేపుడు",
  category: "Curries",
  ingredients: [
    "Banana flower – 1 cup (finely chopped)",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Soak chopped banana flower in buttermilk.",
    "Boil till soft and drain water.",
    "Heat oil and add banana flower.",
    "Add salt and fry till dry.",
    "Serve hot with rice."
  ]
},
{
  name: "Arati Puvvu Pachadi",
  telugu: "అరటి పువ్వు పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Banana flower – ½ cup (cooked)",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Cook banana flower till soft.",
    "Grind with green chillies and salt.",
    "Serve fresh with rice."
  ]
},
{
  name: "Drumstick Curry",
  telugu: "మునగకాయ కూర",
  category: "Curries",
  ingredients: [
    "Drumstick – 2 cups",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add drumstick pieces and salt.",
    "Cook covered till soft.",
    "Serve hot."
  ]
},
{
  name: "Drumstick Pappu",
  telugu: "మునగకాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Drumstick – 1 cup",
    "Turmeric – ¼ tsp",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and drumstick together till soft.",
    "Mash lightly.",
    "Add salt and mix.",
    "Serve hot with rice."
  ]
},
{
  name: "Drumstick Pachadi",
  telugu: "మునగకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Drumstick – ½ cup (cooked pulp)",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Extract pulp from cooked drumstick.",
    "Grind with chillies and salt.",
    "Serve fresh."
  ]
},
{
  name: "Beerakaya Pappu",
  telugu: "బీరకాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Ridge gourd – 1 cup",
    "Turmeric – ¼ tsp",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and ridge gourd together.",
    "Mash lightly.",
    "Add salt and mix.",
    "Serve hot."
  ]
},
{
  name: "Beerakaya Vepudu",
  telugu: "బీరకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Ridge gourd – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add ridge gourd.",
    "Add salt and fry till soft.",
    "Serve hot."
  ]
},
{
  name: "Dosakaya Curry",
  telugu: "దోసకాయ కూర",
  category: "Curries",
  ingredients: [
    "Dosakaya – 2 cups",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add dosakaya and salt.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Dosakaya Pappu",
  telugu: "దోసకాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Dosakaya – 1 cup",
    "Turmeric – ¼ tsp",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and dosakaya together.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Dosakaya Vepudu",
  telugu: "దోసకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Dosakaya – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add dosakaya.",
    "Add salt and fry till soft.",
    "Serve hot."
  ]
},
{
  name: "Gummadikaya Curry",
  telugu: "గుమ్మడికాయ కూర",
  category: "Curries",
  ingredients: [
    "Pumpkin – 2 cups",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add pumpkin and salt.",
    "Cook covered till soft.",
    "Serve hot."
  ]
},
{
  name: "Gummadikaya Pappu",
  telugu: "గుమ్మడికాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Pumpkin – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and pumpkin together.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Gummadikaya Vepudu",
  telugu: "గుమ్మడికాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Pumpkin – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add pumpkin.",
    "Add salt and fry till golden.",
    "Serve hot."
  ]
},
{
  name: "Chikkudukaya Curry",
  telugu: "చిక్కుడుకాయ కూర",
  category: "Curries",
  ingredients: [
    "Hyacinth beans – 2 cups",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add beans.",
    "Add salt and cook covered.",
    "Cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Chikkudukaya Pappu",
  telugu: "చిక్కుడుకాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Hyacinth beans – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and beans together.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Kakarakaya Curry",
  telugu: "కాకరకాయ కూర",
  category: "Curries",
  ingredients: [
    "Bitter gourd – 2 cups",
    "Onion – 1",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Slice bitter gourd and rub with salt, rinse lightly.",
    "Heat oil and sauté onion.",
    "Add bitter gourd and cook covered.",
    "Cook till soft and slightly crisp.",
    "Serve hot."
  ]
},
{
  name: "Kakarakaya Vepudu",
  telugu: "కాకరకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Bitter gourd – 2 cups",
    "Oil – 3 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add bitter gourd.",
    "Fry on medium flame till crisp.",
    "Add salt and mix.",
    "Serve hot."
  ]
},
{
  name: "Kakarakaya Pachadi",
  telugu: "కాకరకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Bitter gourd – ½ cup (fried)",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Fry bitter gourd till golden.",
    "Cool and grind with chillies and salt.",
    "Serve with hot rice."
  ]
},
{
  name: "Bendakaya Curry",
  telugu: "బెండకాయ కూర",
  category: "Curries",
  ingredients: [
    "Okra – 2 cups",
    "Onion – 1",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add okra and salt.",
    "Cook uncovered till slime disappears.",
    "Serve hot."
  ]
},
{
  name: "Bendakaya Vepudu",
  telugu: "బెండకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Okra – 2 cups",
    "Oil – 3 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and fry okra till crisp.",
    "Add salt and mix.",
    "Serve hot."
  ]
},
{
  name: "Bendakaya Pachadi",
  telugu: "బెండకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Okra – ½ cup (fried)",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Fry okra till crisp.",
    "Cool and grind with chillies and salt.",
    "Serve with rice."
  ]
},
{
  name: "Anapakaya Curry",
  telugu: "అనపకాయ కూర",
  category: "Curries",
  ingredients: [
    "Ash gourd – 2 cups",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and sauté onion.",
    "Add ash gourd and salt.",
    "Cook covered till soft.",
    "Serve hot."
  ]
},
{
  name: "Anapakaya Pappu",
  telugu: "అనపకాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Ash gourd – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and ash gourd together.",
    "Mash lightly.",
    "Add salt and mix.",
    "Serve hot."
  ]
},
{
  name: "Anapakaya Pachadi",
  telugu: "అనపకాయ పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Ash gourd – 1 cup (grated)",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Grind ash gourd with chillies and salt.",
    "Serve fresh."
  ]
},
{
  name: "Sorakaya Pappu",
  telugu: "సొరకాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Bottle gourd – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and bottle gourd together.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Sorakaya Vepudu",
  telugu: "సొరకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Bottle gourd – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add bottle gourd.",
    "Add salt and fry till soft.",
    "Serve hot."
  ]
},
{
  name: "Sorakaya Pulusu",
  telugu: "సొరకాయ పులుసు",
  category: "Curries",
  ingredients: [
    "Bottle gourd – 2 cups",
    "Tamarind water – 2 cups",
    "Salt – to taste"
  ],
  method: [
    "Boil bottle gourd in tamarind water.",
    "Add salt and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Potlakaya Curry",
  telugu: "పొట్లకాయ కూర",
  category: "Curries",
  ingredients: [
    "Snake gourd – 2 cups",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add snake gourd.",
    "Add salt and cook covered.",
    "Serve hot."
  ]
},
{
  name: "Potlakaya Pappu",
  telugu: "పొట్లకాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Snake gourd – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and snake gourd together.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Potlakaya Vepudu",
  telugu: "పొట్లకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Snake gourd – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and fry snake gourd.",
    "Add salt and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Chikkudukaya Vepudu",
  telugu: "చిక్కుడుకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Hyacinth beans – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add beans.",
    "Add salt and fry on medium flame.",
    "Cook till soft and slightly crisp.",
    "Serve hot."
  ]
},
{
  name: "Chikkudukaya Pulusu",
  telugu: "చిక్కుడుకాయ పులుసు",
  category: "Curries",
  ingredients: [
    "Hyacinth beans – 2 cups",
    "Tamarind water – 2 cups",
    "Salt – to taste"
  ],
  method: [
    "Boil beans in tamarind water.",
    "Add salt and cook till soft.",
    "Serve hot with rice."
  ]
},
{
  name: "Alasandalu Curry",
  telugu: "అలసందల కూర",
  category: "Curries",
  ingredients: [
    "Black eyed peas – 1½ cups",
    "Onion – 1",
    "Oil – 1 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Soak and cook alasandalu till soft.",
    "Sauté onion in oil.",
    "Add alasandalu and salt.",
    "Cook for 5 minutes.",
    "Serve hot."
  ]
},
{
  name: "Alasandalu Pappu",
  telugu: "అలసందల పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ½ cup",
    "Black eyed peas – ½ cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and peas together.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Alasandalu Vepudu",
  telugu: "అలసందల వేపుడు",
  category: "Curries",
  ingredients: [
    "Black eyed peas – 1½ cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook peas till soft.",
    "Heat oil and add peas.",
    "Add salt and fry lightly.",
    "Serve hot."
  ]
},
{
  name: "Cowpea Pulusu",
  telugu: "అలసందల పులుసు",
  category: "Curries",
  ingredients: [
    "Cowpeas – 2 cups",
    "Tamarind water – 2 cups",
    "Salt – to taste"
  ],
  method: [
    "Cook cowpeas till soft.",
    "Add tamarind water and salt.",
    "Boil for 5 minutes.",
    "Serve hot."
  ]
},
{
  name: "Vankaya Pulusu",
  telugu: "వంకాయ పులుసు",
  category: "Curries",
  ingredients: [
    "Brinjal – 2 cups",
    "Tamarind water – 2 cups",
    "Salt – to taste"
  ],
  method: [
    "Boil brinjal in tamarind water.",
    "Add salt and cook till soft.",
    "Serve hot."
  ]
},
{
  name: "Vankaya Pappu",
  telugu: "వంకాయ పప్పు",
  category: "Pappu Vantalu",
  ingredients: [
    "Toor dal – ¾ cup",
    "Brinjal – 1 cup",
    "Salt – to taste"
  ],
  method: [
    "Cook dal and brinjal together.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot."
  ]
},
{
  name: "Vankaya Vepudu",
  telugu: "వంకాయ వేపుడు",
  category: "Curries",
  ingredients: [
    "Brinjal – 2 cups",
    "Oil – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Heat oil and add brinjal.",
    "Add salt and fry till soft.",
    "Serve hot."
  ]
},
{
  name: "Ulli Karam",
  telugu: "ఉల్లి కారం",
  category: "Pachadi",
  ingredients: [
    "Onion – 2",
    "Dry red chillies – 4",
    "Salt – to taste"
  ],
  method: [
    "Grind onion, chillies and salt.",
    "Serve fresh with rice."
  ]
},
{
  name: "Nuvvula Pachadi",
  telugu: "నువ్వుల పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Sesame seeds – ½ cup",
    "Dry red chillies – 3",
    "Salt – to taste"
  ],
  method: [
    "Dry roast sesame seeds till aromatic.",
    "Cool and grind with chillies and salt.",
    "Serve with hot rice."
  ]
},
{
  name: "Palli Pachadi",
  telugu: "పల్లి పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Peanuts – 1 cup",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Dry roast peanuts and remove skin.",
    "Grind with chillies and salt.",
    "Serve fresh."
  ]
},
{
  name: "Putnala Pachadi",
  telugu: "పుట్నాల పచ్చడి",
  category: "Pachadi",
  ingredients: [
    "Roasted chana dal – 1 cup",
    "Green chillies – 2",
    "Salt – to taste"
  ],
  method: [
    "Grind chana dal with chillies and salt.",
    "Serve with idli or dosa."
  ]
},
{
  name: "Kandipodi",
  telugu: "కందిపొడి",
  category: "Podi",
  ingredients: [
    "Toor dal – 1 cup",
    "Dry red chillies – 6",
    "Garlic – 4 cloves",
    "Salt – to taste"
  ],
  method: [
    "Dry roast dal till golden.",
    "Fry chillies and garlic lightly.",
    "Cool and grind to powder.",
    "Store airtight."
  ]
},
{
  name: "Karivepaku Podi",
  telugu: "కరివేపాకు పొడి",
  category: "Podi",
  ingredients: [
    "Curry leaves – 1 cup",
    "Toor dal – ½ cup",
    "Dry red chillies – 4",
    "Salt – to taste"
  ],
  method: [
    "Dry roast curry leaves till crisp.",
    "Roast dal and chillies.",
    "Cool and grind to powder.",
    "Store airtight."
  ]
},
{
  name: "Sakinalu",
  telugu: "సకినాలు",
  category: "Snacks",
  ingredients: [
    "Rice flour – 2 cups",
    "Sesame seeds – 2 tbsp",
    "Butter – 2 tbsp",
    "Salt – a pinch",
    "Oil – for frying"
  ],
  method: [
    "Mix rice flour, sesame seeds, butter and salt.",
    "Add water to make soft dough.",
    "Shape into small spirals.",
    "Deep fry on low flame till crisp.",
    "Cool and store."
  ]
},
{
  name: "Goru Mitaai",
  telugu: "గోరు మిఠాయి",
  category: "Sweets",
  ingredients: [
    "Rice flour – 1 cup",
    "Jaggery – ¾ cup",
    "Water – as needed",
    "Oil – for frying"
  ],
  method: [
    "Make stiff dough with rice flour and water.",
    "Shape into nail-like pieces.",
    "Deep fry till crisp.",
    "Prepare jaggery syrup.",
    "Soak fried pieces briefly and remove.",
    "Cool and store."
  ]
},
{
  name: "Gavvalu Bellam",
  telugu: "బెల్లం గవ్వలు",
  category: "Sweets",
  ingredients: [
    "Maida – 1 cup",
    "Jaggery – ¾ cup",
    "Oil – for frying"
  ],
  method: [
    "Prepare dough with maida and water.",
    "Shape into shells.",
    "Deep fry till crisp.",
    "Coat with jaggery syrup.",
    "Cool and store."
  ]
},
{
  name: "Poornalu",
  telugu: "పూర్ణాలు",
  category: "Sweets",
  ingredients: [
    "Chana dal – 1 cup",
    "Jaggery – ¾ cup",
    "Rice flour – ¼ cup",
    "Oil – for frying"
  ],
  method: [
    "Cook chana dal and mash with jaggery.",
    "Prepare rice flour batter.",
    "Dip poornam balls in batter.",
    "Deep fry till golden.",
    "Serve warm."
  ]
},
{
  name: "Undrallu (Bellam)",
  telugu: "బెల్లం ఉండ్రాళ్లు",
  category: "Pindi Vantalu",
  ingredients: [
    "Rice rava – 1 cup",
    "Jaggery – ½ cup",
    "Water – 2 cups"
  ],
  method: [
    "Boil water with jaggery.",
    "Add rice rava and cook.",
    "Shape into balls.",
    "Steam for 10 minutes.",
    "Serve warm."
  ]
},
{
  name: "Pulagam",
  telugu: "పులగం",
  category: "Rice Items",
  ingredients: [
    "Rice – ½ cup",
    "Moong dal – ½ cup",
    "Salt – to taste"
  ],
  method: [
    "Cook rice and dal together till soft.",
    "Mash lightly.",
    "Add salt.",
    "Serve hot with pachadi."
  ]
},
{
  name: "Kattu Pongali",
  telugu: "కట్టు పొంగలి",
  category: "Rice Items",
  ingredients: [
    "Rice – 1 cup",
    "Moong dal – ½ cup",
    "Ghee – 2 tbsp",
    "Salt – to taste"
  ],
  method: [
    "Cook rice and dal till soft.",
    "Mash well.",
    "Add ghee and salt.",
    "Serve hot."
  ]
},
{
  name: "Chakkara Pongali",
  telugu: "చక్కర పొంగలి",
  category: "Sweets",
  ingredients: [
    "Rice – ½ cup",
    "Moong dal – ¼ cup",
    "Jaggery – ¾ cup",
    "Ghee – 2 tbsp"
  ],
  method: [
    "Cook rice and dal till soft.",
    "Add jaggery and cook till thick.",
    "Add ghee and mix.",
    "Serve warm."
  ]
},
{
  name: "Anapakaya Halwa",
  telugu: "అనపకాయ హల్వా",
  category: "Sweets",
  ingredients: [
    "Ash gourd – 2 cups (grated)",
    "Sugar – 1 cup",
    "Ghee – 4 tbsp"
  ],
  method: [
    "Cook ash gourd till soft.",
    "Add sugar and cook till thick.",
    "Add ghee gradually and stir.",
    "Cook till glossy.",
    "Serve warm."
  ]
},
{
  name: "Gummadikaya Halwa",
  telugu: "గుమ్మడికాయ హల్వా",
  category: "Sweets",
  ingredients: [
    "Pumpkin – 2 cups (grated)",
    "Sugar – 1 cup",
    "Ghee – 4 tbsp"
  ],
  method: [
    "Cook pumpkin till soft.",
    "Add sugar and cook till thick.",
    "Add ghee slowly and stir.",
    "Cook till halwa consistency.",
    "Serve warm."
  ]
},
{
  name: "Ivva",
  telugu: "ఇవ్వ",
  category: "Sweets",
  ingredients: [
    "Rice flour – 1 cup",
    "Jaggery – ½ cup",
    "Water – as needed"
  ],
  method: [
    "Prepare jaggery syrup.",
    "Add rice flour slowly stirring.",
    "Cook till thick paste.",
    "Cool slightly and serve."
  ]
},
{
  name: "Hayagreeva",
  telugu: "హయగ్రీవ",
  category: "Sweets",
  ingredients: [
    "Chana dal – ½ cup",
    "Jaggery – ¾ cup",
    "Ghee – 2 tbsp",
    "Cardamom – ¼ tsp"
  ],
  method: [
    "Cook chana dal till soft.",
    "Add jaggery and cook till thick.",
    "Add ghee and cardamom.",
    "Serve warm."
  ]
},
];

const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const teluguToggle = document.getElementById("teluguToggle");

let isTelugu = false;

function displayRecipes(list) {
  container.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    const randomColor =
      colorClasses[Math.floor(Math.random() * colorClasses.length)];

    card.className = `card ${randomColor}`;

    card.innerHTML = `
      <div class="card-content">
        <h3>${isTelugu ? item.telugu : item.name}</h3>
        <p>${item.category}</p>
      </div>

      <div class="recipe-details">
        <h4>🧺 Ingredients</h4>
        <ul>${item.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

        <h4>👩‍🍳 Method</h4>
        <ol>${item.method.map(m => `<li>${m}</li>`).join("")}</ol>
      </div>
    `;

    card.onclick = () => {
  const details = card.querySelector(".recipe-details");
  const isOpen = details.style.display === "block";

  // close all recipes
  document.querySelectorAll(".recipe-details").forEach(d => {
    d.style.display = "none";
  });

  // toggle: open only if it was previously closed
  if (!isOpen) {
    details.style.display = "block";
  }
};

    container.appendChild(card);
  });
}

function filterRecipes() {
  const text = searchInput.value.toLowerCase();
  const cat = categoryFilter.value;

  const filtered = foods.filter(f =>
    (f.name.toLowerCase().includes(text) ||
     f.telugu.includes(text)) &&
    (cat === "all" || f.category === cat)
  );

  displayRecipes(filtered);
}

searchInput.oninput = filterRecipes;
categoryFilter.onchange = filterRecipes;

teluguToggle.onclick = () => {
  isTelugu = !isTelugu;
  document.body.classList.toggle("telugu");
  displayRecipes(foods);
};

displayRecipes(foods);
