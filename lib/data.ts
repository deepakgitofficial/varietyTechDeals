import { Product, Category, BlogPost } from "@/types";

// export const categories: Category[] = [
//   {
//     id: "cat-1",
//     name: "Mobiles",
//     slug: "mobiles",
//     description: "Latest smartphones and communication devices.",
//     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
//     icon: "smartphone",
//   },
//   {
//     id: "cat-2",
//     name: "Laptops",
//     slug: "laptops",
//     description: "High-performance laptops for work and play.",
//     image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
//     icon: "laptop",
//   },
//   {
//     id: "cat-3",
//     name: "Gaming",
//     slug: "gaming",
//     description: "Consoles, accessories, and games.",
//     image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
//     icon: "gamepad-2",
//   },
//   {
//     id: "cat-4",
//     name: "Audio",
//     slug: "audio",
//     description: "Headphones, speakers, and sound systems.",
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
//     icon: "headphones",
//   },
//   {
//     id: "cat-5",
//     name: "Wearables",
//     slug: "wearables",
//     description: "Smartwatches and fitness trackers.",
//     image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop",
//     icon: "watch",
//   },
// ];

// export const products: Product[] = [
//   {
//     id: "prod-1",
//     title: "Apex Pro Ultra 15 M4",
//     slug: "apex-pro-ultra-15-m4",
//     description: "The most powerful laptop ever created with the new M4 architecture. Features a stunning 15-inch Mini-LED display, 32GB unified memory, and up to 24 hours of battery life. Perfect for creative professionals and hardcore gamers alike.",
//     price: 1899.0,
//     originalPrice: 2199.0,
//     rating: 4.9,
//     reviews: 1245,
//     image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=800&auto=format&fit=crop",
//     ],
//     category: "Laptops",
//     brand: "Apex",
//     features: [
//       "M4 Ultra Chip with 16-core CPU",
//       "15.3-inch Liquid Crystal Display Pro",
//       "32GB Unified Memory",
//       "1TB PCIe 5.0 SSD",
//       "1080p FaceTime HD camera",
//     ],
//     specs: {
//       "Processor": "Apex M4 Ultra",
//       "Memory": "32GB",
//       "Storage": "1TB SSD",
//       "Display": "15.3 in, 3456 x 2234 resolution",
//       "Weight": "3.31 lbs (1.5 kg)",
//       "Battery": "Up to 24 hours video playback"
//     },
//     pros: [
//       "Unbelievable performance",
//       "Incredible battery life",
//       "Stunning display quality",
//       "Excellent keyboard and trackpad"
//     ],
//     cons: [
//       "Very expensive",
//       "Limited port selection",
//       "Cannot upgrade RAM/Storage after purchase"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//     isPopular: true,
//     isNew: true,
//   },
//   {
//     id: "prod-2",
//     title: "Quantum Sound V4 Noise Cancelling Headphones",
//     slug: "quantum-sound-v4",
//     description: "Industry-leading noise cancellation meets audiophile sound quality. The V4 features our new Q-Chip for real-time acoustic tuning and a comfortable ergonomic design for all-day listening.",
//     price: 349.99,
//     originalPrice: 399.99,
//     rating: 4.8,
//     reviews: 3892,
//     image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
//     ],
//     category: "Audio",
//     brand: "Quantum",
//     features: [
//       "Adaptive Active Noise Cancellation",
//       "Lossless Audio Support",
//       "40-hour Battery Life",
//       "Multi-point Bluetooth 5.4",
//       "Custom EQ via App",
//     ],
//     specs: {
//       "Type": "Over-Ear",
//       "Driver": "40mm Dynamic",
//       "Connectivity": "Bluetooth 5.4, 3.5mm",
//       "Battery Life": "40 hours (ANC on), 60 hours (ANC off)",
//       "Charging": "USB-C, 15min equals 5hrs playback"
//     },
//     pros: [
//       "Best-in-class ANC",
//       "Exceptional battery life",
//       "Very comfortable",
//       "Rich, detailed sound"
//     ],
//     cons: [
//       "Carrying case is bulky",
//       "Microphone quality is average in windy conditions"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//     isPopular: true,
//   },
//   {
//     id: "prod-3",
//     title: "Nexus Z Fold 6",
//     slug: "nexus-z-fold-6",
//     description: "The ultimate productivity device. Phone when closed, tablet when open. Features a brighter internal screen, improved hinge mechanism, and pro-grade camera system.",
//     price: 1799.0,
//     rating: 4.6,
//     reviews: 845,
//     image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=800&auto=format&fit=crop",
//     ],
//     category: "Mobiles",
//     brand: "Nexus",
//     features: [
//       "7.6-inch Dynamic AMOLED 2X Main Display",
//       "6.2-inch Cover Display",
//       "Snapdragon 8 Gen 4",
//       "Stylus Support",
//       "IPX8 Water Resistant",
//     ],
//     specs: {
//       "Main Display": "7.6 in, 2176 x 1812 px, 120Hz",
//       "Cover Display": "6.2 in, 2316 x 904 px, 120Hz",
//       "Processor": "Snapdragon 8 Gen 4",
//       "Memory": "12GB RAM",
//       "Storage": "512GB",
//       "Cameras": "50MP Wide, 12MP Ultrawide, 10MP Telephoto"
//     },
//     pros: [
//       "Excellent multitasking",
//       "Much brighter screens",
//       "Improved durability",
//       "Great camera versatility"
//     ],
//     cons: [
//       "Very high price",
//       "Still thick when folded",
//       "Stylus not included or built-in"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//     isNew: true,
//   },
//   {
//     id: "prod-4",
//     title: "Velocity X1 Gaming Mouse",
//     slug: "velocity-x1-gaming-mouse",
//     description: "Ultra-lightweight wireless gaming mouse at just 55 grams. Features the new Focus Pro 30K optical sensor and optical mouse switches for zero double-clicking.",
//     price: 149.99,
//     originalPrice: 169.99,
//     rating: 4.8,
//     reviews: 1560,
//     image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800&auto=format&fit=crop"
//     ],
//     category: "Gaming",
//     brand: "Velocity",
//     features: [
//       "55g Ultra-lightweight Design",
//       "30K DPI Optical Sensor",
//       "HyperSpeed Wireless Technology",
//       "90-hour Battery Life",
//       "Optical Switches",
//     ],
//     specs: {
//       "Weight": "55g",
//       "Sensor": "Focus Pro 30K Optical",
//       "Switches": "Gen-3 Optical",
//       "Connectivity": "Wireless, USB-C",
//       "Battery": "Up to 90 hours"
//     },
//     pros: [
//       "Incredibly light",
//       "Flawless sensor",
//       "No switch double-clicks",
//       "Comfortable ambidextrous shape"
//     ],
//     cons: [
//       "Expensive for a mouse",
//       "Require software for full customization"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//     isPopular: true,
//   },
//   {
//     id: "prod-5",
//     title: "Nova Watch Series X",
//     slug: "nova-watch-series-x",
//     description: "The most advanced smartwatch for fitness and health tracking. Features a new microLED display, blood glucose monitoring, and advanced sleep tracking.",
//     price: 499.0,
//     rating: 4.7,
//     reviews: 3210,
//     image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop"
//     ],
//     category: "Wearables",
//     brand: "Nova",
//     features: [
//       "Always-On microLED Display",
//       "Advanced Health Sensors (ECG, O2)",
//       "Precision Dual-Frequency GPS",
//       "Titanium Case",
//       "48-hour Battery",
//     ],
//     specs: {
//       "Case Size": "41mm / 45mm",
//       "Material": "Titanium",
//       "Display": "Sapphire Crystal, 2000 nits",
//       "Water Resistance": "100m",
//       "Battery": "48 hours (normal use)"
//     },
//     pros: [
//       "Incredible screen brightness",
//       "Comprehensive health metrics",
//       "Premium build quality",
//       "Smooth UI"
//     ],
//     cons: [
//       "Battery life still behind dedicated fitness trackers",
//       "Only works with Nova phones"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//   },
//   {
//     id: "prod-6",
//     title: "Astro RTX 5080 Ti Graphics Card",
//     slug: "astro-rtx-5080-ti",
//     description: "Next-generation graphics built on the new Blackwell architecture. Game at 4K with ray tracing at maximum settings. Equipped with 24GB of GDDR7 memory.",
//     price: 1199.99,
//     rating: 4.9,
//     reviews: 420,
//     image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop"
//     ],
//     category: "Gaming",
//     brand: "Astro",
//     features: [
//       "24GB GDDR7 Memory",
//       "DLSS 4.0 Support",
//       "3rd Gen Ray Tracing Cores",
//       "New AI Tensor Cores",
//       "Vapor Chamber Cooling",
//     ],
//     specs: {
//       "Memory": "24GB GDDR7",
//       "Base Clock": "2200 MHz",
//       "Boost Clock": "2650 MHz",
//       "TDP": "350W",
//       "Dimensions": "320mm x 140mm x 65mm (3.2 slot)"
//     },
//     pros: [
//       "Unrivaled 4K gaming performance",
//       "Excellent cooling solution",
//       "Massive memory buffer",
//       "DLSS 4 is revolutionary"
//     ],
//     cons: [
//       "Very large size, might not fit all cases",
//       "High power consumption",
//       "Expensive"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//     isNew: true,
//   },
//   {
//     id: "prod-7",
//     title: "SoundBar Pro 7.1.4",
//     slug: "soundbar-pro-714",
//     description: "Immersive home theater audio with Dolby Atmos. Features upward-firing drivers for true overhead sound and a wireless 10-inch subwoofer.",
//     price: 899.0,
//     originalPrice: 999.0,
//     rating: 4.7,
//     reviews: 890,
//     image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop"
//     ],
//     category: "Audio",
//     brand: "CinemaVox",
//     features: [
//       "7.1.4 Channel Output",
//       "Wireless Subwoofer",
//       "Dolby Atmos & DTS:X",
//       "Room Calibration Audio",
//       "HDMI eARC",
//     ],
//     specs: {
//       "Total Power": "750W",
//       "Channels": "7.1.4",
//       "Connectivity": "HDMI eARC, Optical, Bluetooth, Wi-Fi",
//       "Dimensions (Bar)": "48 x 2.7 x 4.5 inches",
//       "Subwoofer": "10-inch Wireless"
//     },
//     pros: [
//       "Incredible Atmos immersion",
//       "Deep, shaking bass",
//       "Easy setup",
//       "Crisp dialog enhancement"
//     ],
//     cons: [
//       "Soundbar is very long",
//       "App can be clunky",
//       "Rear speakers must be plugged into outlet"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//   },
//   {
//     id: "prod-8",
//     title: "Lumina S24 Ultra",
//     slug: "lumina-s24-ultra",
//     description: "The photography king. Features a 200MP main camera and completely new AI processing pipeline for the sharpest, most vibrant photos ever taken on a smartphone.",
//     price: 1299.0,
//     rating: 4.8,
//     reviews: 5412,
//     image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=800&auto=format&fit=crop"
//     ],
//     category: "Mobiles",
//     brand: "Lumina",
//     features: [
//       "200MP Quad Camera System",
//       "6.8-inch QHD+ AMOLED Display",
//       "Snapdragon 8 Gen 3 for Lumina",
//       "Built-in Stylus",
//       "Titanium Frame",
//     ],
//     specs: {
//       "Display": "6.8 in, 3120 x 1440 px, 120Hz LTPO",
//       "Processor": "Snapdragon 8 Gen 3",
//       "Cameras": "200MP Wide, 50MP 5x Tele, 10MP 3x Tele, 12MP Ultrawide",
//       "Battery": "5000 mAh",
//       "Material": "Titanium/Glass"
//     },
//     pros: [
//       "Incredible camera system",
//       "Gorgeous anti-reflective display",
//       "Stylus is highly useful",
//       "Great battery life"
//     ],
//     cons: [
//       "Large and heavy",
//       "Charging speeds are slower than competitors",
//       "Expensive"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//     isPopular: true,
//   },
//   {
//     id: "prod-9",
//     title: "CodeMaster Pro 75% Mechanical Keyboard",
//     slug: "codemaster-pro-75",
//     description: "Premium gasket-mounted mechanical keyboard built for developers. Hot-swappable switches, sound dampening foam, and full QMK/VIA support.",
//     price: 189.99,
//     rating: 4.9,
//     reviews: 620,
//     image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop"
//     ],
//     category: "Gaming",
//     brand: "CodeMaster",
//     features: [
//       "75% Layout with Knob",
//       "Gasket Mount Design",
//       "Hot-Swappable PCB",
//       "Triple Mode Wireless",
//       "Pre-lubed Linear Switches",
//     ],
//     specs: {
//       "Layout": "75% (82 keys)",
//       "Switches": "Custom Linear 45g",
//       "Keycaps": "PBT Double-shot",
//       "Connectivity": "USB-C, Bluetooth, 2.4GHz Wireless",
//       "Battery": "4000 mAh"
//     },
//     pros: [
//       "Amazing acoustic profile (thock)",
//       "Excellent build quality",
//       "Highly customizable",
//       "Great value for features"
//     ],
//     cons: [
//       "Knob software is slightly buggy",
//       "Heavy to travel with"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//   },
//   {
//     id: "prod-10",
//     title: "StealthBook 14 OLED",
//     slug: "stealthbook-14-oled",
//     description: "The thinnest and lightest gaming laptop on the market. Weighs just 2.9 lbs but packs an RTX 4070 and a gorgeous 120Hz OLED display.",
//     price: 1599.0,
//     originalPrice: 1799.0,
//     rating: 4.5,
//     reviews: 315,
//     image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop",
//     images: [
//       "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop"
//     ],
//     category: "Laptops",
//     brand: "Stealth",
//     features: [
//       "Intel Core Ultra 7",
//       "NVIDIA RTX 4070",
//       "14-inch 2.8K OLED Display 120Hz",
//       "16GB LPDDR5x RAM",
//       "CNC Aluminum Chassis",
//     ],
//     specs: {
//       "Processor": "Intel Core Ultra 7 155H",
//       "GPU": "NVIDIA RTX 4070 8GB",
//       "Display": "14 in 2880 x 1800 OLED 120Hz",
//       "Memory": "16GB RAM",
//       "Storage": "1TB Gen4 NVMe"
//     },
//     pros: [
//       "Beautiful OLED screen",
//       "Surprisingly powerful for size",
//       "Ultra-portable",
//       "Premium build quality"
//     ],
//     cons: [
//       "Gets warm under heavy load",
//       "Loud fans while gaming",
//       "RAM is soldered"
//     ],
//     affiliateLink: "https://amazon.com?tag=techvariety-20",
//   }
// ];

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "10 Must-Have Tech Gadgets for 2026",
    slug: "10-must-have-tech-gadgets-2026",
    excerpt: "We've rounded up the absolute best tech gadgets you need to get your hands on this year, from AI wearables to next-gen folding screens.",
    content: "<p>Welcome to 2026, the year where AI finally seamlessly integrates into our everyday devices...</p>",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    date: "Mar 15, 2026",
    readTime: "5 min read",
    category: "Gadgets",
  },
  {
    id: "post-2",
    title: "Apex Pro vs. StealthBook: Which 14-inch Laptop is King?",
    slug: "apex-pro-vs-stealthbook",
    excerpt: "A deep dive comparison between the two most popular premium thin-and-light laptops on the market.",
    content: "<p>When it comes to premium laptops, you usually have to choose between Mac and PC. But which offers the best value...</p>",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
    date: "Mar 10, 2026",
    readTime: "8 min read",
    category: "Laptops",
  },
  {
    id: "post-3",
    title: "The Ultimate Guide to Mechanical Keyboards",
    slug: "ultimate-guide-mechanical-keyboards",
    excerpt: "Linear, tactile, clicky? Gasket mount? We explain everything you need to know before buying your first custom keyboard.",
    content: "<p>The mechanical keyboard hobby has exploded. What used to be a niche community is now mainstream...</p>",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    date: "Mar 05, 2026",
    readTime: "12 min read",
    category: "Gaming",
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isPopular);
}
