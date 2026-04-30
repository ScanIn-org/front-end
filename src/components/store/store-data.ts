export type StoreMenuItem = {
  id: string;
  name: string;
  price: string;
  imageAlt: string;
  imageSrc: string;
  imageClassName: string;
  quantity?: number;
};

export type StoreCategory = {
  label: string;
  active?: boolean;
};

export type StoreViewData = {
  slug: string;
  storeName: string;
  subtitle: string;
  description: string;
  location: string;
  status: string;
  categories: StoreCategory[];
  menuItems: StoreMenuItem[];
  cartItems: number;
  cartTotal: string;
  accentClassName: string;
};

const stores: Record<string, StoreViewData> = {
  "kedai-kopi-senja": {
    slug: "kedai-kopi-senja",
    storeName: "Kedai Kopi Senja",
    subtitle: "Select items to add to current order",
    description: "Menu QR interaktif untuk pelanggan scan, pilih item, dan checkout lebih cepat.",
    location: "Jakarta Selatan · Dine In",
    status: "Open Now",
    categories: [
      { label: "Coffee", active: true },
      { label: "Non-Coffee" },
      { label: "Pastry" },
      { label: "Snacks" },
    ],
    menuItems: [
      {
        id: "iced-caramel",
        name: "Iced Caramel Macchiato",
        price: "Rp 35.000",
        imageAlt: "Iced latte in a clear glass on a dark wooden table",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD4b9mOfdCLe96gWNHEALoVZs7NW4aSHLY3P97GitrV0oxoMDET9DmteoW9DkR3np-Em8wlKaRmqQZ2pEax_AqHSdeqXvvyM68lbuN7n-C0O5EaaAImrrp0-n2FS3Aoy_epu34PbYpOW7ChOt5JVUeM63H3-cenc9oxQpSn2Cohe3AsOlbKK0g3Ga_nmchy5bLDhAOrvKuDyZscEtmqFytTlT6O1kBCPRidKmMcnr2c5K-wtJaNZncNlKMhpa8DitrJQH_QEu1JamI",
        imageClassName: "from-[#6d4c41] via-[#241919] to-[#0f0f0f]",
        quantity: 1,
      },
      {
        id: "espresso",
        name: "Espresso Single",
        price: "Rp 20.000",
        imageAlt: "Hot espresso shot in a small dark ceramic cup",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCQzl7A09Fib4V-EJcwPF4yPviNabevfYxd0llMoWwcODt0eUrGX-HDz07oYlw-I9cNIYwTpICWxciyc3QS9OILLLD1nhrapkiaqvji-u0Foufy8RPWZob1pGsoRMFfSaLRupov3wnZocfp3n5J7qXk8qFzT6byKTHVTPZI_rEf9l6z0Mb0IEDMkfFFrw1vnQOhbEWnEFk0xbUy-_VCpQswhPC8De5ESyA73lqwKmoz8j8bLSdK69VYA41PR-EI3N8p78XatpVjm0Y",
        imageClassName: "from-[#3f2b24] via-[#191414] to-[#0f0f0f]",
      },
      {
        id: "v60",
        name: "V60 Manual Brew",
        price: "Rp 40.000",
        imageAlt: "Pour over coffee being made with a V60 dripper",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCsGYLf4KZW3K12dRCnLEg0DSrWqOP1FQVkNDdf2GsGyquiKZr6X-pFT0cGeBqzfPhc0rxPMzQS3ZpGoXfR4vRKj85Uw7kcDMNODK2pVDEnHXx3Fcl49E6IZaXGVeIu6dXFAhaosUeIpP-UVdLy9UHdOl1h4tTBZcqPBsgE5tkdickwqeqQsFY17Y8DAfNztVM5_7AfXsZp8dcMC3URM0A-5dlgf1seg0u1rd3UvS-ybPQd8VxeqBhkC0y7vwxYa2BXfIkl7pfr94w",
        imageClassName: "from-[#5d4037] via-[#201612] to-[#0f0f0f]",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: "Rp 32.000",
        imageAlt: "Classic cappuccino with latte art in a white cup",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB0-aFUtvvpI4zMQ2X-Ew_Cg9TnlQWGtw-fwcNSSQUkhrfhGwB8Ogc3CVJjbQLLzjx08leh9WEMDHPfdmdk2hcxQGnNqDkNRM3h3nSJHRIGfpwhbrXO1fnmG1JNSVKrtjuQYXy8z49STzRomlV8lnbm8xBAfPl_OU3EIBdhmj6IHgUmmZgxhWew3W9oBTSEBWsBZfFHjPjuLJzWkrtyRDvTf8njb2muOFNqhr24T8OCr4tm0hEH_346CQxor3SvXskkGxOqHMV9mrA",
        imageClassName: "from-[#78654d] via-[#25201b] to-[#0f0f0f]",
        quantity: 2,
      },
    ],
    cartItems: 3,
    cartTotal: "Rp 99.000",
    accentClassName: "bg-[#1ed760]",
  },
  "warung-nusantara": {
    slug: "warung-nusantara",
    storeName: "Warung Nusantara",
    subtitle: "Tap items, customize, then place your order",
    description:
      "Tampilan menu QR untuk warung dengan daftar menu yang lebih ringkas dan cepat dipindai.",
    location: "Bandung · Take Away",
    status: "Busy",
    categories: [
      { label: "Signature", active: true },
      { label: "Rice Bowl" },
      { label: "Drinks" },
      { label: "Dessert" },
    ],
    menuItems: [
      {
        id: "nasi-goreng",
        name: "Nasi Goreng Kampung",
        price: "Rp 28.000",
        imageAlt: "Fried rice served on a rustic plate",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD4b9mOfdCLe96gWNHEALoVZs7NW4aSHLY3P97GitrV0oxoMDET9DmteoW9DkR3np-Em8wlKaRmqQZ2pEax_AqHSdeqXvvyM68lbuN7n-C0O5EaaAImrrp0-n2FS3Aoy_epu34PbYpOW7ChOt5JVUeM63H3-cenc9oxQpSn2Cohe3AsOlbKK0g3Ga_nmchy5bLDhAOrvKuDyZscEtmqFytTlT6O1kBCPRidKmMcnr2c5K-wtJaNZncNlKMhpa8DitrJQH_QEu1JamI",
        imageClassName: "from-[#6f4f31] via-[#261a10] to-[#0f0f0f]",
        quantity: 1,
      },
      {
        id: "ayam-bakar",
        name: "Ayam Bakar Rempah",
        price: "Rp 34.000",
        imageAlt: "Grilled chicken with herbs and sambal",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCQzl7A09Fib4V-EJcwPF4yPviNabevfYxd0llMoWwcODt0eUrGX-HDz07oYlw-I9cNIYwTpICWxciyc3QS9OILLLD1nhrapkiaqvji-u0Foufy8RPWZob1pGsoRMFfSaLRupov3wnZocfp3n5J7qXk8qFzT6byKTHVTPZI_rEf9l6z0Mb0IEDMkfFFrw1vnQOhbEWnEFk0xbUy-_VCpQswhPC8De5ESyA73lqwKmoz8j8bLSdK69VYA41PR-EI3N8p78XatpVjm0Y",
        imageClassName: "from-[#8d4d3b] via-[#2a1710] to-[#0f0f0f]",
      },
      {
        id: "es-teh",
        name: "Es Teh Manis",
        price: "Rp 8.000",
        imageAlt: "Sweet iced tea in a tall glass",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCsGYLf4KZW3K12dRCnLEg0DSrWqOP1FQVkNDdf2GsGyquiKZr6X-pFT0cGeBqzfPhc0rxPMzQS3ZpGoXfR4vRKj85Uw7kcDMNODK2pVDEnHXx3Fcl49E6IZaXGVeIu6dXFAhaosUeIpP-UVdLy9UHdOl1h4tTBZcqPBsgE5tkdickwqeqQsFY17Y8DAfNztVM5_7AfXsZp8dcMC3URM0A-5dlgf1seg0u1rd3UvS-ybPQd8VxeqBhkC0y7vwxYa2BXfIkl7pfr94w",
        imageClassName: "from-[#4b6f89] via-[#16202b] to-[#0f0f0f]",
      },
      {
        id: "pisang-goreng",
        name: "Pisang Goreng Cokelat",
        price: "Rp 15.000",
        imageAlt: "Fried banana dessert with melted chocolate",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB0-aFUtvvpI4zMQ2X-Ew_Cg9TnlQWGtw-fwcNSSQUkhrfhGwB8Ogc3CVJjbQLLzjx08leh9WEMDHPfdmdk2hcxQGnNqDkNRM3h3nSJHRIGfpwhbrXO1fnmG1JNSVKrtjuQYXy8z49STzRomlV8lnbm8xBAfPl_OU3EIBdhmj6IHgUmmZgxhWew3W9oBTSEBWsBZfFHjPjuLJzWkrtyRDvTf8njb2muOFNqhr24T8OCr4tm0hEH_346CQxor3SvXskkGxOqHMV9mrA",
        imageClassName: "from-[#78663d] via-[#241d11] to-[#0f0f0f]",
      },
    ],
    cartItems: 2,
    cartTotal: "Rp 62.000",
    accentClassName: "bg-[#4cf479]",
  },
};

export function getStoreViewData(slug: string): StoreViewData {
  return stores[slug] ?? stores["kedai-kopi-senja"];
}

export function getStoreSlugs() {
  return Object.keys(stores);
}
