'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import NewFooter from '@/components/NewFooter'
import styles from './Sitemap.module.css'

const BASE_URL = 'https://kogents.ai'

// All platform channel IDs
const platformChannels = [
  'whatsapp-ai-agent',
  'instagram-ai-agent',
  'viber-ai-agent',
  'ai-agent-for-messenger',
  'zendesk-ai-integration',
  'ai-telegram-agent',
  'microsoft-teams-agents',
  'calendly-ai-integration',
  'line-ai-agent',
  'slack-ai-agent',
  'hubspot-ai-integration',
  'jira-ai-integration',
  'sunshine-conversation-ai-agent',
  'intercom-ai-agent',
  'shopify-ai-agent'
]

// Organized page sections similar to Wix sitemap
const pageSections = {
  main: {
    title: 'Main Pages',
    icon: '🏠',
    pages: [
      { path: '/', title: 'Home', priority: 1.0, changeFrequency: 'daily' },
      { path: '/platforms', title: 'Platforms', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions', title: 'Solutions', priority: 0.9, changeFrequency: 'daily' },
      { path: '/about-us', title: 'About Us', priority: 0.9, changeFrequency: 'daily' },
      { path: '/contact-us', title: 'Contact Us', priority: 0.9, changeFrequency: 'daily' },
      { path: '/case-studies', title: 'Case Studies', priority: 0.9, changeFrequency: 'daily' },
      { path: '/client-testimonials', title: 'Testimonials', priority: 0.9, changeFrequency: 'daily' },
      { path: '/blogs', title: 'Blogs', priority: 0.9, changeFrequency: 'daily' }
    ]
  },
  solutions: {
    title: 'AI Solutions',
    icon: '🤖',
    pages: [
      { path: '/solutions/customer-service-ai-agent', title: 'Customer Service AI Agent', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/ai-agent-for-marketing', title: 'AI Agent for Marketing', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/ai-agent-for-hr', title: 'AI Agent for HR', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/ai-agent-for-education', title: 'AI Agent for Education', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/ai-teacher-assistant', title: 'AI Teacher Assistant', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/healthcare-ai-agent', title: 'Healthcare AI Agent', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/survey-ai-agent', title: 'Survey AI Agent', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/ai-agent-dashboard', title: 'AI Agent Dashboard', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/ai-agent-event-planner', title: 'AI Agent Event Planner', priority: 0.9, changeFrequency: 'daily' },
      { path: '/solutions/medical-ai-agent', title: 'Medical AI Agent', priority: 0.9, changeFrequency: 'daily' }
    ]
  },
  platforms: {
    title: 'Platform Integrations',
    icon: '🔗',
    pages: platformChannels.map(channel => ({
      path: `/platforms/${channel}`,
      title: channel.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      priority: 0.9,
      changeFrequency: 'daily'
    }))
  },
  tools: {
    title: 'Tools & Resources',
    icon: '🛠️',
    pages: [
      { path: '/chatbot/brief', title: 'Chatbot Brief', priority: 0.9, changeFrequency: 'daily' },
      { path: '/sitemap', title: 'Sitemap', priority: 0.8, changeFrequency: 'monthly' }
    ]
  },
  legal: {
    title: 'Legal & Security',
    icon: '⚖️',
    pages: [
      { path: '/privacy-statement', title: 'Privacy Statement', priority: 0.9, changeFrequency: 'daily' },
      { path: '/data-protection', title: 'Data Protection', priority: 0.9, changeFrequency: 'daily' },
      { path: '/refund-policy', title: 'Refund Policy', priority: 0.9, changeFrequency: 'daily' },
      { path: '/security', title: 'Security', priority: 0.9, changeFrequency: 'daily' }
    ]
  }
}

// Blog post interface
interface BlogPost {
  id: number
  title: {
    rendered: string
  }
  slug: string
  link: string
  date: string
  excerpt: {
    rendered: string
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export default function KogentsSitemapPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setLoading(true)
        setError(null)
        
        // Use the same WordPress API endpoint that other components use
        const timestamp = Date.now()
        const response = await fetch(
          `https://kogents.ai/wordpress-blog/wp-json/wp/v2/posts?_embed&per_page=100&_=${timestamp}`,
          { 
            cache: 'no-store',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const posts = await response.json()
        
        if (Array.isArray(posts)) {
          setBlogPosts(posts)
          console.log('✅ Successfully fetched blog posts:', posts.length)
        } else {
          console.warn('⚠️ Unexpected response format:', posts)
          setBlogPosts([])
        }
      } catch (error) {
        console.error('❌ Error fetching blog posts:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch blog posts')
        setBlogPosts([])
      } finally {
        setLoading(false)
      }
    }
    
    fetchBlogPosts()
  }, [])

  // Calculate total pages
  const totalStaticPages = Object.values(pageSections).reduce((total, section) => total + section.pages.length, 0)
  const totalPages = totalStaticPages + blogPosts.length

  // Helper function to clean HTML from title
  const cleanTitle = (title: string) => {
    return title.replace(/<[^>]*>/g, '').trim()
  }

  return (
    <>
      <div className={styles.sitemapContainer}>
        <div className={styles.sitemapContent}>
          <div className={styles.sitemapHeader}>
            <h1 className={styles.sitemapTitle}>Kogents AI Sitemap</h1>
            <p className={styles.sitemapSubtitle}>Explore all pages and resources available on our AI-powered platform. Find everything from AI solutions to platform integrations and legal information.</p>
          </div>
          
          {/* Sections with Cards */}
          {Object.entries(pageSections).map(([key, section]) => (
            <div key={key} className={styles.sectionContainer}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>{section.icon}</span>
                {section.title}
              </h2>
              <div className={styles.cardsGrid}>
                {section.pages.map((page, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className={styles.pageCard}>
                      <Link 
                        href={page.path}
                        className={styles.pageLink}
                      >
                        {page.title}
                      </Link>
                      <div className={styles.pageMeta}>
                        Priority: {page.priority} | Frequency: {page.changeFrequency}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Blog Posts Section */}
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📝</span>
              Blog Posts
              {blogPosts.length > 0 && (
                <span className={styles.postCount}>({blogPosts.length} posts)</span>
              )}
            </h2>
            
            <div className={`${styles.cardsGrid} row`}>
              {loading ? (
                <div className="col-12">
                  <div className={styles.loadingContainer}>
                    <div className={styles.loadingSpinner}></div>
                    <div>Loading blog posts...</div>
                  </div>
                </div>
              ) : error ? (
                <div className="col-12">
                  <div className={styles.errorContainer}>
                    <div className={styles.errorIcon}>⚠️</div>
                    <div className={styles.errorMessage}>
                      <strong>Error loading blog posts:</strong><br />
                      {error}
                    </div>
                    <button 
                      onClick={() => window.location.reload()} 
                      className={styles.retryButton}
                    >
                      Retry
                    </button>
                  </div>
                </div>
              ) : blogPosts.length > 0 ? (
                <>
                  {blogPosts.map((post, index) => (
                    <div key={post.id || index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <div className={styles.pageCard}>
                        <Link 
                          href={`/blogs/${post.slug}`}
                          className={styles.pageLink}
                          title={cleanTitle(post.title.rendered)}
                        >
                          {cleanTitle(post.title.rendered)}
                        </Link>
                        <div className={styles.pageMeta}>
                          Priority: 0.6 | Frequency: weekly
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="col-12">
                  <div className={styles.pageCard}>
                    <div className={styles.noPostsMessage}>
                      <div className={styles.noPostsIcon}>📝</div>
                      <div>No blog posts available at the moment</div>
                      <div className={styles.noPostsSubtext}>
                        Check back later for new content!
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Site Statistics */}
          <div className={styles.sitemapStats}>
            <h3 className={styles.statsTitle}>Site Statistics</h3>
            <div className={`${styles.statsGrid} row`}>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>{totalPages}</span>
                  <div className={styles.statLabel}>Total Pages</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>{totalStaticPages}</span>
                  <div className={styles.statLabel}>Static Pages</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>{blogPosts.length}</span>
                  <div className={styles.statLabel}>Blog Posts</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>{Object.keys(pageSections).length}</span>
                  <div className={styles.statLabel}>Main Sections</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
