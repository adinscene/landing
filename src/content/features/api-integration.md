---
title: "API Integration"
meta_title: "RESTful API & SDK Integration | Adinscene"
description: "Comprehensive APIs and SDKs for video ad platform integration. RESTful APIs, webhooks, and native SDKs for seamless video advertising integration."
image: "/images/features/tools-images-bg.png"
draft: false

# Hero Section
hero:
  title: "Integrate Video Ads in Minutes, Not Months"
  subtitle: "Developer-Friendly APIs"
  description: "Complete REST APIs and native SDKs that make video advertising integration simple. Comprehensive documentation, code examples, and dedicated support."
  image: "/images/features/insights-3.png"
  buttons:
    - label: "API Documentation"
      link: "#"
      style: "primary"
    - label: "Get API Keys"
      link: "/contact/"
      style: "outline"

# Key Features
key_features:
  title: "Built for Developers"
  items:
    - icon: "/images/icons/svg/tools.svg"
      title: "RESTful Design"
      description: "Standard HTTP methods"
    - icon: "/images/icons/svg/time.svg"
      title: "Fast Integration"
      description: "Go live in hours"
    - icon: "/images/icons/svg/chart.svg"
      title: "99.99% Uptime"
      description: "Enterprise reliability"

# API Features
capabilities:
  title: "Comprehensive API Suite"
  list:
    - title: "Content Management API"
      description: "Manage video content and metadata programmatically"
      icon: "/images/icons/svg/corporate.svg"
      endpoints:
        - "POST /videos - Upload content"
        - "GET /videos/{id} - Retrieve metadata"
        - "PUT /videos/{id} - Update content"
        - "DELETE /videos/{id} - Remove content"
    - title: "Campaign API"
      description: "Create and manage ad campaigns via API"
      icon: "/images/icons/svg/calender-plus.svg"
      endpoints:
        - "POST /campaigns - Create campaign"
        - "GET /campaigns - List campaigns"
        - "PUT /campaigns/{id} - Update campaign"
        - "GET /campaigns/{id}/stats - Get metrics"
    - title: "Analytics API"
      description: "Access real-time analytics and reporting data"
      icon: "/images/icons/svg/chart.svg"
      endpoints:
        - "GET /analytics/realtime - Live metrics"
        - "GET /analytics/reports - Historical data"
        - "POST /analytics/custom - Custom queries"
        - "GET /analytics/export - Data export"
    - title: "Webhooks"
      description: "Real-time event notifications"
      icon: "/images/icons/svg/message.svg"
      events:
        - "video.processed - Content ready"
        - "ad.served - Ad impression"
        - "campaign.complete - Campaign ended"
        - "threshold.reached - Alerts"

# SDKs
sdks:
  title: "Native SDKs"
  platforms:
    - name: "JavaScript/Node.js"
      description: "Full-featured SDK for web and server"
      code: |
        ```javascript
        const Adinscene = require('@adinscene/sdk');
        const client = new Adinscene('API_KEY');
        
        // Upload video
        const video = await client.videos.create({
          url: 'https://example.com/video.mp4',
          title: 'My Video'
        });
        ```
    - name: "Python"
      description: "Pythonic interface for all APIs"
      code: |
        ```python
        from adinscene import Client
        client = Client('API_KEY')
        
        # Create campaign
        campaign = client.campaigns.create(
          name='Holiday Campaign',
          budget=10000
        )
        ```
    - name: "Mobile SDKs"
      description: "Native iOS and Android integration"
      platforms: ["iOS (Swift)", "Android (Kotlin)", "React Native", "Flutter"]

# Technical Specs
technical:
  title: "Technical Specifications"
  specs:
    - label: "Protocol"
      value: "HTTPS/REST"
    - label: "Authentication"
      value: "OAuth 2.0 / API Keys"
    - label: "Rate Limits"
      value: "10,000 req/min"
    - label: "Response Format"
      value: "JSON"
    - label: "Versioning"
      value: "URL-based"
    - label: "SLA"
      value: "99.99% uptime"

# Statistics
stats:
  - value: "500M+"
    label: "API Calls Daily"
  - value: "<50ms"
    label: "Avg Response Time"
  - value: "99.99%"
    label: "Uptime SLA"
  - value: "24/7"
    label: "Developer Support"

# CTA Section
cta:
  title: "Start Building Today"
  description: "Get your API keys and integrate video advertising in minutes"
  button:
    label: "Get API Access"
    link: "/contact/"
---

## Developer-First Platform

Built by developers, for developers. Our APIs are designed to be intuitive, well-documented, and reliable.

### Quick Start

1. Get your API keys
2. Install SDK or use REST directly  
3. Make your first API call
4. Go live with video ads

Simple, powerful, scalable.