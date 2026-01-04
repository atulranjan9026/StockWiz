# StockWiz Trading Dashboard

A pixel-perfect React implementation of a trading dashboard UI with dark theme, built using functional components, hooks, and Tailwind CSS.

## Features

- 🎨 **Pixel-perfect UI** - Matches the Figma design exactly
- ⚡ **React Functional Components** - Modern React with hooks
- 🎯 **Tailwind CSS** - Utility-first styling
- 📱 **Responsive Design** - Works on all screen sizes
- 🔄 **Reusable Components** - Modular and maintainable code
- 🌙 **Dark Theme** - Professional trading interface

## Components

### Layout Components
- **`Dashboard.jsx`** - Main layout container
- **`Sidebar.jsx`** - Collapsible navigation sidebar
- **`TopNavBar.jsx`** - Top navigation with user info and balance

### Feature Components
- **`AlertBanner.jsx`** - Error/notification banner
- **`MarketOverview.jsx`** - Market indices and sentiment cards
- **`ProfitLossCard.jsx`** - P&L summary with algo list
- **`DeployedAlgos.jsx`** - Active algorithms with filters
- **`FeaturedAlgos.jsx`** - Highlighted algorithm cards

## Installation

```bash
# Install dependencies
npm install

# Install required packages
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind (if not already done)
npx tailwindcss init -p
```

## Usage

```bash
# Run development server
npm run dev

# Build for production
npm run build
```

## Component Structure

```
src/
├── components/
│   ├── Dashboard.jsx          # Main container
│   ├── Sidebar.jsx            # Navigation sidebar
│   ├── TopNavBar.jsx          # Top navigation
│   ├── AlertBanner.jsx        # Alert notifications
│   ├── MarketOverview.jsx     # Market indices
│   ├── ProfitLossCard.jsx     # P&L summary
│   ├── DeployedAlgos.jsx      # Active algos list
│   └── FeaturedAlgos.jsx      # Featured algos
├── App.jsx                    # Root component
└── index.css                  # Global styles
```

## Customization

All components accept props for easy customization:

```jsx
<TopNavBar 
  userName="John Smith"
  balance="₹20,00,764.84"
/>

<AlertBanner 
  message="Custom alert message"
  onViewAll={() => console.log('View all clicked')}
/>

<MarketOverview 
  markets={customMarketData}
/>
```

## Design Tokens

The design uses a consistent color palette:

- **Background**: `#0a0a0a` (gray-950)
- **Cards**: `#0f0f0f`, `#111111`
- **Borders**: `#1f1f1f` (gray-800)
- **Primary**: Blue (`#3b82f6`)
- **Success**: Emerald (`#10b981`)
- **Error**: Red (`#ef4444`)

## Production Ready

- ✅ Clean, semantic HTML
- ✅ Accessible components
- ✅ Optimized performance
- ✅ Type-safe props (add PropTypes if needed)
- ✅ Responsive design
- ✅ Reusable and maintainable

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
