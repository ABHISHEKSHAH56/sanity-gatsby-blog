export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60916efc54de8e3e8a5c400d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-o2vb4ta3",
                  apiId: "594637ce-d3a2-4a88-a8fb-1c322c5c1906",
                },
                {
                  buildHookId: "60916efc3ac843407cba99e6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4eiw88dd",
                  apiId: "cb1d11bd-634e-4116-a498-9ae01b5b1a2f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ABHISHEKSHAH56/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4eiw88dd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
