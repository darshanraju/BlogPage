const siteData: websiteData = {
  heroTitle: "Darshan's Blog",
  blogs: [
    {
      title: "Lungs of Earth.",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "10 Dec 2019",
      imagePath:
        "https://images.pexels.com/photos/3002028/pexels-photo-3002028.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      shortDescription:
        "Brazil continues to burn the amazon forest, the lungs of our planet. Assuming all will be burnt, what will Earth look like in 10 years",
      blogTextParagraphs: [
        "This is paragraph 1",
        "This is paragraph 2",
        "This is paragraph 3",
        "This is paragraph 4",
      ],
    },
    {
      title: "Lungs of Earth.",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "10 Dec 2019",
      imagePath:
        "https://images.pexels.com/photos/3002028/pexels-photo-3002028.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      shortDescription:
        "Brazil continues to burn the amazon forest, the lungs of our planet. Assuming all will be burnt, what will Earth look like in 10 years",
      blogTextParagraphs: [
        "This is paragraph 1",
        "This is paragraph 2",
        "This is paragraph 3",
        "This is paragraph 4",
      ],
    },
    {
      title: "Lungs of Earth.",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "10 Dec 2019",
      imagePath:
        "https://images.pexels.com/photos/3002028/pexels-photo-3002028.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      shortDescription:
        "Brazil continues to burn the amazon forest, the lungs of our planet. Assuming all will be burnt, what will Earth look like in 10 years",
      blogTextParagraphs: [
        "This is paragraph 1",
        "This is paragraph 2",
        "This is paragraph 3",
        "This is paragraph 4",
      ],
    },
    {
      title: "Lungs of Earth.",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "10 Dec 2019",
      imagePath:
        "https://images.pexels.com/photos/3002028/pexels-photo-3002028.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      shortDescription:
        "Brazil continues to burn the amazon forest, the lungs of our planet. Assuming all will be burnt, what will Earth look like in 10 years",
      blogTextParagraphs: [
        "This is paragraph 1",
        "This is paragraph 2",
        "This is paragraph 3",
        "This is paragraph 4",
      ],
    },
    {
      title: "Lungs of Earth.",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "10 Dec 2019",
      imagePath:
        "https://images.pexels.com/photos/3002028/pexels-photo-3002028.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      shortDescription:
        "Brazil continues to burn the amazon forest, the lungs of our planet. Assuming all will be burnt, what will Earth look like in 10 years",
      blogTextParagraphs: [
        "This is paragraph 1",
        "This is paragraph 2",
        "This is paragraph 3",
        "This is paragraph 4",
      ],
    },
  ],
  podcasts: [],
  contributers: [],
};

export interface websiteData {
  heroTitle: string;
  contributers: Array<participant>;
  blogs: Array<blog>;
  podcasts: Array<podcast>;
}

export interface blog {
  title: string;
  imagePath: string;
  shortDescription: string;
  authorImagePath: string;
  authorName: string;
  publishedDate: string;
  blogTextParagraphs: Array<string>;
}

export interface podcast {
  podcastImagePath?: string;
  audioURLPath: string;
  shortDescription: string;
  participants: Array<string>;
}

export interface participant {
  name: string;
  shortDescription: string;
}

export default siteData;
