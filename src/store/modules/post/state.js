export default {
  posts: {
    data: [],
    meta: {
      pagination: {
        total: 0,
        per_page: 4,
        current_page: 1,
        total_pages: 10,
        links: {}
      }
    },
  },
  currentPost: {
    parent_id: null,
    author_id: null,
    title: null,
    meta_title: null,
    slug: null,
    summary: null,
    content: null,
    published: null,
    published_at: null
  },
}
