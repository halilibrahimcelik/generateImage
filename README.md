# Generate Image

A Next.js project that leverages a stable diffusion AI model's API to generate unique photorealistic images based on text and image prompts. Users can register to generate and download these images.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Demo](#demo)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Author](#author)

## Project Overview

This Next.js project enables users to generate photorealistic images using a stable diffusion AI model's API. After registering, users can provide text and image prompts to create unique images. The project incorporates rate limit checks using custom middlewares and state management with the React Context API. Styling is achieved with Tailwind CSS, and animations are implemented using the GSAP library.

## Features

- Image generation using AI model's API
- User registration and authentication with NextAuth
- Rate limit checks for API requests
- State management with React Context API
- Styling with Tailwind CSS
- Animations with GSAP library

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Vercel Postgres](https://vercel.com/docs/solutions/postgres)
- [NextAuth](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [React Context API](https://reactjs.org/docs/context.html)


### Installation

```bash
# Clone the repository
git clone https://github.com/halilibrahimcelik/generateImage.git

# Navigate to the project directory
cd your-repo

# Install dependencies
npm install

# Start the development server
npm run dev
