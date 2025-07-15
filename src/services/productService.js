let products = [
  {
    id: 1,
    name: "Iso Whey Protein Isolate (ESN)",
    description: "Aislado de proteína de suero con hasta 26 g de proteína por ración, bajo en carbohidratos y grasas, sin azúcares añadidos. Ideal para pérdida de peso o musculación." ,
    price: 17.90,
    image_url: "https://m.media-amazon.com/images/I/61WpAxeNAOL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    name: "Optimum Nutrition Whey Protein Isolate",
    description: "Proteína de suero aislada de rápida absorción, ayuda a la creación y recuperación muscular; baja en azúcares y grasas." ,
    price: 19.99,
    image_url: "https://m.media-amazon.com/images/I/71vWMQaT-aL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    name: "Creatina Monohidratada Mewell",
    description: "Creatina monohidratada micronizada (3,41 g por toma), 100 % vegana, para mejorar rendimiento en esfuerzos máximos cortos." ,
    price: 13.95,
    image_url: "https://m.media-amazon.com/images/I/71R7hEDOLhL._AC_SL1500_.jpg"
  },
  {
    id: 4,
    name: "Optimum Nutrition Gold Standard Pre‑Workout",
    description: "Pre‑entreno con creatina monohidratada, cafeína, beta‑alanina, citrulina y vitaminas B6/B12 para energía y rendimiento." ,
    price: 29.90,
    image_url: "https://www.preworkout.org/wp-content/uploads/2022/10/Gold-Standard-PW.jpg"
  },
  {
    id: 5,
    name: "Micronized Creatine Powder ON (Blueberry Lemonade)",
    description: "Creatina micronizada sabor Blueberry Lemonade de Optimum Nutrition, 60 servings, en Walmart por $21.99." ,
    price: 21.99,
    image_url: "https://i5.walmartimages.com/seo/Optimum-Nutrition-Micronized-Creatine-Powder-Blueberry-Lemonade-60-Servings_2b7da1a0-dc61-4969-809e-55c8ebac3e62.55e7afe4bd57fa207054c3a264815b6b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
  },
  {
    id: 6,
    name: "NOW Sports Creatine Monohydrate",
    description: "Creatina monohidratada en polvo, sin aditivos, diseñada para mejorar fuerza, potencia y recuperación." ,
    price: 24.99,
    image_url: "https://assets.farmakeio101.gr/media/resize/1200/1200/cache/c/r/creatine-monohydrate-powder-micronized-11-lbs-by-now.jpg"
  },
  {
    id: 7,
    name: "BPI Sports Best Creatine",
    description: "Creatina tipo micronizada de BPI Sports, diseñada para apoyar la construcción muscular y rendimiento." ,
    price: 25.00,
    image_url: "https://i5.walmartimages.com/seo/BPI-Sports-Best-Creatine-Monohydrate-Himalayan-Salt-Strength-Pump-Endurance-Muscle-Growth-Definition-No-Bloat-Fruit-Punch-50-servings-10-58-oz_a4cf9b8b-3cba-4bfa-b686-60e4e53f56df.758db99bfdf6b768853f43f3334180b7.jpeg"
  },
  {
    id: 8,
    name: "ESN Creapure Ultraclean Creatine",
    description: "Creatina monohidratada Creapure de alta pureza, para hidratación muscular y fuerza." ,
    price: 23.90,
    image_url: "https://www.fitbodyshop.at/wp-content/uploads/2023/10/esn-creapure-creatine-monohydrate-a1.jpg" 
  },
  {
    id: 9,
    name: "NOW Sports Whey Protein Isolate",
    description: "Aislado de proteína de suero de NOW®, alto valor biológico, apto para deportistas, lab-tested." ,
    price: 39.99,
    image_url: "https://www.ipumpshop.com/media/catalog/product/cache/15940949cd72e393e5d3f0baa54abe0d/2/1/2166C_v4.jpg"
  },
  {
    id: 10,
    name: "Optimum Nutrition Gold Standard Whey",
    description: "Mezcla de concentrado y aislado de proteína de suero, 24 g de proteína por servicio, sabores variados." ,
    price: 29.99,
    image_url: "https://i5.walmartimages.com/asr/44873740-f633-4bbc-bcc0-4ceedbba3bde.8e76398457f24726a756e697b825f853.jpeg"
  }
]

exports.getAllProduct = async () => {
    return products
}