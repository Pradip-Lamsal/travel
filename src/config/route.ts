// Public Routes
export const PUBLIC_ROUTES = {
  HOME: "/",
  LANDING: "/",
  ABOUT_US: "/about-us",
  CONTACT: "/contact",
  PACKAGES: "/packages",
  DESTINATIONS: "/destinations",
  PACKAGE_DETAIL: (id: number | string) => `/packages/${id}`,
};

// Protected Routes (Admin)
export const ADMIN_ROUTES = {
  DASHBOARD: "/admin",
  PACKAGES: "/admin/packages",
  BOOKINGS: "/admin/bookings",
  SETTINGS: "/admin/settings",
};

// API Routes
export const API_ROUTES = {
  PACKAGES: "/api/packages",
  BOOKINGS: "/api/bookings",
  NEWSLETTER: "/api/newsletter",
  CONTACT: "/api/contact",
};

// Navigation Menu Items
export const MAIN_NAVIGATION = [
  { label: "Home", href: PUBLIC_ROUTES.HOME },
  { label: "Packages", href: PUBLIC_ROUTES.PACKAGES },
  { label: "Destinations", href: PUBLIC_ROUTES.DESTINATIONS },
  { label: "About Us", href: PUBLIC_ROUTES.ABOUT_US },
  { label: "Contact", href: PUBLIC_ROUTES.CONTACT },
];

// Footer Links
export const FOOTER_LINKS = {
  COMPANY: [
    { label: "About Us", href: PUBLIC_ROUTES.ABOUT_US },
    { label: "Our Packages", href: PUBLIC_ROUTES.PACKAGES },
    { label: "Destinations", href: PUBLIC_ROUTES.DESTINATIONS },
    { label: "Blog", href: "/blog" },
  ],
  SUPPORT: [
    { label: "Contact Us", href: PUBLIC_ROUTES.CONTACT },
    { label: "FAQ", href: "/faq" },
    { label: "Booking Terms", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
