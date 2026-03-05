# IKEA PLP (Product Listing Page)

A modern, responsive React implementation of the IKEA Product Listing Page. Migrated from Vanilla JavaScript, this project features a high-fidelity recreation of the IKEA aesthetic using Vite and React.

## Features

- **Product Grid Overview:** Renders 24 beautifully styled product cards modeled after real IKEA items.
- **Dynamic Filtering:** 
  - **Category Filter:** Checkbox filtering for Fabric sofas, Armchairs, and Sofa-beds.
  - **Price Range:** Min and Max price inputs.
- **Sorting Logic:** "Sort by" functionality for identifying Best matches, Newest items, Price (Low-High/High-Low), and Alphabetical lists.
- **Client-Side Pagination:** Seamlessly paginates products securely managed in component state.
- **Functional Cart:** Simulates a shopping bag experience by saving clicked items to `localStorage` and dynamically updating the bag icon counter in the header.
- **Robust UI States:** Built-in empty states ("No products found") and global `Reset/Clear All Filters` buttons for quick recovery from complex filtering states.
- **Responsive Layout:** Adjusts from a desktop multi-column structure with an omnipresent sidebar to a mobile-friendly 2-column grid utilizing an off-canvas filtering menu.

## Folder Structure

```
ikea-plp/
├── public/                 # Static assets
└── src/
    ├── components/
    │   ├── PLP.jsx          # Main container holding the logic and layout
    │   ├── ProductCard.jsx  # Individual product interface
    │   ├── Filters.jsx      # Mobile/Desktop sidebar filtering controls
    │   ├── SortDropdown.jsx # Custom UI logic for the sort options
    │   └── Pagination.jsx   # Pagination elements
    ├── data/
    │   └── products.js      # Mock database of all 24 initial products
    ├── styles/
    │   └── plp.css          # Core monolithic stylesheet enforcing IKEA's UX
    ├── App.jsx              # Main entry point and header definition
    ├── index.css            # Scaffolding (removed/cleaned)
    └── main.jsx             # Vite entry
```

## Getting Started

### Prerequisites

- Node.js installed

### Installation & Setup

1. **Clone or Extract the Source Code:** Navigate into the project directory via terminal.
   ```bash
   cd "your-path/ikea-plp"
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run Development Server:**
   ```bash
   npm run dev
   ```
4. **Open in Browser:** Navigate to `http://localhost:5173` to interact with the application.

## Testing the Features

- **Filters:** Open the sidebar (or click "Sort & Filter" on mobile). Check multiple category boxes and apply a rigid price limit (e.g., `0` to `25000`).
- **Sorting:** Combine multiple filters, then open the `Sort` dropdown in the toolbar toolbar. Try toggling `Price: low to high`.
- **Empty States:** Artificially set the price bounds to an impossible value (e.g., max 50 rupees) to see the newly implemented "No products found" component trigger. Pressing the "Clear all filters" call-to-action there will instantly reset everything.
- **Cart Interactions:** Click the small basket icon on the bottom right of any product card image. The button will momentarily flash green logic verifying insertion, and the bag integer flag in the header will reliably increment. You can refresh the page and verify counts persist.
