# Skip Platform – Skip Hire Booking System

A revamped skip hire booking experience built with **Next.js**, **TypeScript**, and **shadcn/ui** components.

---

## 🚀 Overview

This project reimagines skip selection as a streamlined, multi-step form process — offering a modern, user-friendly experience for booking skip services.

---

## ✨ Key Features

- **Multi-Step Navigation** – Route-based flow with progress tracking
- **Interactive Skip Selection** – Visual cards with detailed specifications
- **State Management** – Using Zustand to manage form selections
- **API Integration** – React Query with polling support
- **Responsive Design** – Fully optimized for mobile and desktop

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI:** shadcn/ui + Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** React Query
- **Icons:** Lucide React

---

## 📁 Project Structure

```bash
app/booking/              # Multi-step booking routes
├── layout.tsx            # Shared layout for steps
├── postcode/             # Step 1: Location entry
├── waste-type/           # Step 2: Waste category selection
├── select-skip/          # Step 3: Skip size selection
├── permit-check/         # Step 4: Permit requirements
├── choose-date/          # Step 5: Select delivery date
└── payment/              # Step 6: Payment processing

components/               # Reusable UI components
lib/                      # Utilities and Zustand stores


## 🚀 Getting Started

# Install dependencies
npm install

# Start development server
npm run dev


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
Hamburger menu for ultra small screens
