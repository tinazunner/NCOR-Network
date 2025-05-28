# NCOR Network Development

This directory contains documentation for developers working on the NCOR Network website.

## Features

### Algolia Search (WIP)

The NCOR Network site uses Algolia DocSearch for powerful, user-friendly search functionality. See [Setting Up Algolia Search](./algolia-search-setup.md) for detailed configuration instructions.

#### Key Benefits

- Fast, typo-tolerant search
- Structured search results with categories and highlights
- Keyboard navigation support
- Mobile-friendly interface
- Analytics for monitoring search performance

#### Local Development

When working locally, you'll need to set the following environment variables for Algolia search to work properly:

```bash
# For bash/zsh
export ALGOLIA_APP_ID=your_app_id
export ALGOLIA_API_KEY=your_search_api_key
export ALGOLIA_INDEX_NAME=ncor

# For Windows Command Prompt
set ALGOLIA_APP_ID=your_app_id
set ALGOLIA_API_KEY=your_search_api_key
set ALGOLIA_INDEX_NAME=ncor

# For PowerShell
$env:ALGOLIA_APP_ID = "your_app_id"
$env:ALGOLIA_API_KEY = "your_search_api_key"
$env:ALGOLIA_INDEX_NAME = "ncor"
```

## Deployment

For production deployment, these environment variables should be configured in your hosting platform's environment settings.

## Other Development Topics

Additional development documentation will be added here as the project evolves. 