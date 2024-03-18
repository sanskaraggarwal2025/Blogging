# Blogging Application

This is a full-stack blogging application built with React.js, Hono, Prisma, PostgreSQL, TypeScript, and Tailwind CSS. It allows users to create, authenticate, and read blogs.

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Create blogs: Authenticated users can create new blog posts with a title, content, and optional image.
- Read blogs: Users can view all blogs on the platform and read individual blog posts.
- Responsive design: The application is designed to be responsive and accessible across different devices.

## Technologies Used

- **Frontend**:
  - React.js: A JavaScript library for building user interfaces.
  - TypeScript: A statically typed superset of JavaScript that adds type annotations.
  - Tailwind CSS: A utility-first CSS framework for creating custom designs quickly.
- **Backend**:
  - Hono: A lightweight server for handling HTTP requests and routing.
  - Prisma: An ORM (Object-Relational Mapping) tool for TypeScript and Node.js.
  - PostgreSQL: A powerful, open-source relational database management system.
  - Cloudflare (Serverless): The backend is deployed utilizing a serverless architecture with Cloudflare Workers.
  - Connection Pooling: A connection pool is implemented for efficient database connections.
