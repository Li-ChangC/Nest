export const mockHomeData = {
  data: {
    recentProjects: [
      {
        createdAt: '2024-12-06T10:46:54+00:00',
        key: 'project-1',
        leaders: ['Project Leader1', 'Project Leader2'],
        name: 'Project 1',
        type: 'code',
      },
      {
        createdAt: '2024-12-07T20:46:54+00:00',
        key: 'project-2',
        leaders: ['Project Leader3', 'Project Leader4'],
        name: 'Project 2',
        type: 'documentation',
      },
      {
        createdAt: '2024-12-08T20:46:54+00:00',
        key: 'project-3',
        leaders: ['Project Leader5', 'Project Leader6'],
        name: 'Project 3',
        type: 'code',
      },
      {
        createdAt: '2024-12-09T20:46:54+00:00',
        key: 'project-4',
        leaders: ['Project Leader7', 'Project Leader8'],
        name: 'Project 4',
        type: 'documentation',
      },
      {
        name: 'Project 5',
        type: 'code',
        createdAt: '2024-12-10T20:46:54+00:00',
        key: 'project-5',
        leaders: ['Project Leader9', 'Project Leader10'],
      },
    ],
    recentPosts: [
      {
        authorName: 'Author 1',
        authorImageUrl: 'https://owasp.org/assets/images/people/author1.png',
        publishedAt: '2025-02-23T18:45:30+00:00',
        title: 'Post 1',
        url: 'https://nest.owasp.org/posts/post-1',
        __typename: 'PostNode',
      },
      {
        authorName: 'Author 2',
        authorImageUrl: 'https://owasp.org/assets/images/people/author2.png',
        publishedAt: '2025-02-25T18:45:30+00:00',
        title: 'Post 2',
        url: 'https://nest.owasp.org/posts/post-2',
        __typename: 'PostNode',
      },
    ],
    recentChapters: [
      {
        createdAt: '2025-02-20T14:30:00+00:00',
        key: 'chapter-1',
        leaders: ['Chapter Leader1', 'Chapter Leader2'],
        name: 'Chapter 1',
        suggestedLocation: 'City1, Country1',
      },
      {
        name: 'Chapter 2',
        createdAt: '2025-02-19T09:15:00+00:00',
        suggestedLocation: 'City1, Country2',
        key: 'chapter-2',
        leaders: ['Chapter Leader3'],
      },
      {
        createdAt: '2025-02-18T11:45:00+00:00',
        key: 'chapter-3',
        leaders: ['Chapter Leader4'],
        name: 'Chapter 3',
        suggestedLocation: 'City1, Country3',
      },
      {
        createdAt: '2025-02-17T13:20:00+00:00',
        key: 'chapter-4',
        leaders: ['Chapter Leader5'],
        name: 'Chapter 4',
        suggestedLocation: 'City1, Country4',
      },
      {
        createdAt: '2025-02-16T16:40:00+00:00',
        key: 'chapter-5',
        leaders: ['Chapter Leader6'],
        name: 'Chapter 5',
        suggestedLocation: 'City1, Country5',
      },
    ],
    topContributors: [
      {
        name: 'Contributor 1',
        login: 'contributor1',
        contributionsCount: 15423,
        avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
        projectName: 'Project 21',
        projectUrl: 'https://nest.owasp.org/projects/project-21',
        __typename: 'RepositoryContributorNode',
      },
      {
        name: 'Contributor 2',
        login: 'contributor2',
        contributionsCount: 8956,
        avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
        projectName: 'Project 22',
        projectUrl: 'https://nest.owasp.org/projects/project-22',
        __typename: 'RepositoryContributorNode',
      },
    ],
    recentIssues: [
      {
        commentsCount: 5,
        createdAt: '2025-02-23T18:45:30+00:00',
        number: 1,
        title: 'Issue 1',
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
          name: 'Author 1',
          url: 'https://github.com/arkid15r',
          __typename: 'UserNode',
        },
        __typename: 'IssueNode',
      },
      {
        commentsCount: 2,
        createdAt: '2025-02-25T18:45:30+00:00',
        number: 1,
        title: 'Issue 2',
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
          name: 'Author 2',
          url: 'https://github.com/arkid15r',
          __typename: 'UserNode',
        },
        __typename: 'IssueNode',
      },
    ],
    recentReleases: [
      {
        author: null,
        isPreRelease: true,
        name: 'Release 1',
        publishedAt: '2025-02-22T10:15:00+00:00',
        repositoryName: 'nest-repository-1',
        __typename: 'ReleaseNode',
      },
      {
        author: null,
        isPreRelease: false,
        name: 'Release 2',
        publishedAt: '2025-02-24T10:15:00+00:00',
        repositoryName: 'owasp-repository-2',
        __typename: 'ReleaseNode',
      },
    ],
    sponsors: [
      {
        name: 'Sponsor 1',
        imageUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
    ],
    statsOverview: {
      activeChaptersStats: 100,
      activeProjectsStats: 100,
      contributorsStats: 1000,
      countriesStats: 100,
      __typename: 'StatsNode',
    },
    upcomingEvents: [
      {
        category: 'Category 1',
        endDate: '2025-02-28',
        name: 'Event 1',
        startDate: '2025-02-27',
        url: 'https://nest.owasp.org/events/event-1',
        __typename: 'EventNode',
      },
      {
        category: 'Category 2',
        endDate: '2025-03-11',
        name: 'Event 2',
        startDate: '2025-03-10',
        url: 'https://nest.owasp.org/events/event-2',
        __typename: 'EventNode',
      },
    ],
  },
}
