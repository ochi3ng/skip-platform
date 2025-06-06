# Skip Hire Booking System

Skip hire Revamp rebuilt with Next.js, TypeScript, and shadcn/ui components.

## 🚀 Overview

This application redesigns skip selection into a multi-step form selection process.

## ✨ Key Features

- **Multi-Step Selection**: Route-based navigation with progress tracking
- **Skip Selection**: Interactive cards with detailed specifications
- **State Management**: Zustand with for state management of selected forms.
- **API Integration**: React Query for data fetching with polling
- **Responsive Design**: Mobile and desktop optimized layouts

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui + Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Icons**: Lucide React

## 📋 Project Structure

\`\`\`
app/booking/ # Route-based steps
├── layout.tsx # Shared booking layout
├── postcode/ # Step 1: Location
├── waste-type/ # Step 2: Waste category
├── select-skip/ # Step 3: Skip selection
├── permit-check/ # Step 4: Permit check
├── choose-date/ # Step 5: Delivery date
└── payment/ # Step 6: Payment
components/ # Reusable components
lib/ # Utilities and state
\`\`\`

## 🚀 Getting Started

\`\`\`bash

# Install dependencies

npm install

# Start development server

npm run dev
\`\`\`

## 🔑 Implementation Highlights

- **Smart Navigation Logic**: Prevents skipping incomplete steps
- **API Integration**: Fetches skip data from WeWantWaste API
- **Drawer System**: slide-out panels for detailed information
- **Responsive Cards**: Adaptive grid layout for different screen sizes

## 📱 User Experience

- **Progress Tracking**: Visual indicators for completed steps
- **Form Validation**: Prevents proceeding with incomplete information
- **Visual Feedback**: Clear selection states and hover effects

---

## 🔑 Future Improvements

Incorporate URl state management to enable sharable links.
