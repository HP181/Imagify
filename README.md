# 🎨 Imagify --- AI-Powered Image Editing SaaS

Imagify is a professional, full-stack AI-powered image transformation
platform. Built with a modern tech stack, it provides users with
seamless generative AI tools to restore, modify, and enhance images
through a secure, credit-based system.

------------------------------------------------------------------------

## 🔗 Project Links

-   Live Demo: https://imagify-beta.vercel.app
-   GitHub Repository: https://github.com/HP181/Imagify.git

------------------------------------------------------------------------

## 🚀 Key Features

### 🖼️ AI Image Transformations

-   Image Restoration -- Restore old, blurred, or pixelated photos.
-   Generative Fill -- Intelligently expand image borders or fill
    missing areas.
-   Object Removal -- Remove unwanted elements seamlessly.
-   Object Recoloring -- Change the color of specific objects using AI.
-   Background Removal -- High-precision background extraction in one
    click.

------------------------------------------------------------------------

### 💳 SaaS Ecosystem

-   Credit-Based System -- Users spend credits for each AI
    transformation.
-   Stripe Integration -- Secure checkout flow for purchasing credit
    packages.
-   Transformation History -- View, download, and manage previous edits.
-   Secure Payments -- Stripe webhook verification for transaction
    integrity.

------------------------------------------------------------------------

### 🔐 Architecture & Security

-   Authentication -- Secure login and protected routes for
    authenticated users.
-   Cloud Storage -- Media managed via Cloudinary for optimized delivery
    and storage.
-   Scalable Backend -- Serverless API routes with MongoDB for efficient
    data persistence.
-   Environment-Based Configuration -- Secure management of secrets and
    API keys.

------------------------------------------------------------------------

## 🛠️ Tech Stack

| Category | Technologies Used |
| :--- | :--- |
| **Frontend** | Next.js, React, TypeScript, Tailwind CSS |
| **Backend** | Next.js API Routes |
| **Database** | MongoDB (Mongoose) |
| **AI & Media** | Cloudinary AI |
| **Payments** | Stripe |
| **Deployment** | Vercel |

---


## ⚙️ Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/HP181/Imagify.git
cd Imagify
```

### 2. Install Dependencies
```
npm install
```

### 3. Setup Environment Variables

Create a .env.local file in the root directory and add:
```
MONGODB_URL=""
NEXT_PUBLIC_SERVER_URL=""
WEBHOOK_SECRET=""
NEXT_PUBLIC_UPLOAD_PRESET=""
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
CLOUDINARY_URL=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_CLERK_SIGN_IN_URL=""
NEXT_PUBLIC_CLERK_SIGN_UP_URL=""
NEXT_PUBLIC_CLERK_SIGN_AFTER_URL=""
```

### 4. Run the Development Server
```
npm run dev
```
The application will be available at:
```
http://localhost:3000
```

------------------------------------------------------------------------

## 📈 Performance & Impact

-   Efficiency: Reduces manual editing time by 60%+ through automated AI
    workflows.
-   Optimization: Utilizes Cloudinary dynamic transformations for fast
    image loading.
-   Scalability: SaaS-ready architecture designed for high-volume media
    processing.
-   Security: Secure authentication and verified payment processing.

------------------------------------------------------------------------


## 👨‍💻 Author

Hitkumar Patel\
Full Stack Developer



