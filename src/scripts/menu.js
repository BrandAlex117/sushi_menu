const menuItems = [
  {
    category: "Sushi Rolls",
    items: [
      { name: "California Roll", description: "Crab, avocado, cucumber", price: "$8.95" },
      { name: "Philadelphia Roll", description: "Salmon, cream cheese, cucumber", price: "$9.95" },
      { name: "Spicy Tuna Roll", description: "Spicy tuna, cucumber, spicy mayo", price: "$10.95" },
      { name: "Dragon Roll", description: "Eel, cucumber, avocado on top", price: "$14.95" }
    ]
  },
  {
    category: "Burguers",
    items: [
      { name: "Chopper Burguer", 
        ingredients: [
          { protein: "Arrachera", description: "Pan de arroz y nori con queso crema, aguacate, guiso de arrachera y chiles toreados", sauce: "Chipotle" },
        ],
        price: "$200" },
      { name: "Robin Burguer", 
        ingredients: [
          { protein: "Camaron y Cangrejo", description: "Relleno de queso crema, aguacate, pepino y salsa tampico", sauce: "Anguila" },
        ], 
        price: "$200" },
      { name: "Ussop Burguer", 
        ingredients: [
          { protein: "Arrachera y Pollo", description: "Relleno de aguacate, zanahoria y queso crema", sauce: "Tampico, anguila y ajonjoli" },
      ], price: "$200" }
    ]
  },
  {
    category: "Appetizers",
    items: [
      { name: "Edamame", description: "Steamed soybeans with sea salt", price: "$5.95" },
      { name: "Gyoza", description: "Pan-fried pork dumplings (6 pieces)", price: "$8.95" },
      { name: "Miso Soup", description: "Traditional soybean paste soup", price: "$3.95" },
      { name: "Seaweed Salad", description: "Wakame seaweed with sesame", price: "$6.95" }
    ]
  }
];