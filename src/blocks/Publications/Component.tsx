import React from 'react'

export const PublicationsSection = ({ researchArticles, popularArticles, blogPosts }) => (
  <section className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">Publications</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Research Articles</h3>
        <ul>
          {researchArticles.map((item, idx) => (
            <li
              key={idx}
              className="mb-2 border-b border-blue-100 pb-2"
              style={{ borderRadius: 0 }}
            >
              <a href={item.url} className="text-blue-800 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Popular Articles</h3>
        <ul>
          {popularArticles.map((item, idx) => (
            <li
              key={idx}
              className="mb-2 border-b border-blue-100 pb-2"
              style={{ borderRadius: 0 }}
            >
              <a href={item.url} className="text-blue-800 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Blog</h3>
        <ul>
          {blogPosts.map((item, idx) => (
            <li
              key={idx}
              className="mb-2 border-b border-blue-100 pb-2"
              style={{ borderRadius: 0 }}
            >
              <a href={item.url} className="text-blue-800 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)
