const siteData: websiteData = {
  heroTitle: "Darshan's Blog",
  blogs: [
    {
      topic: "Math",
      title: "Fast Fourier Transform.",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "TBA",
      imagePath:
        "https://images.pexels.com/photos/415779/pexels-photo-415779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      shortDescription:
        "Fourier analysis converts a signal from its original domain to a representation in the frequency domain and vice versa.",
      blogTextParagraphs: [
        "This is paragraph 1",
        "This is paragraph 2",
        "This is paragraph 3",
        "This is paragraph 4",
      ],
    },
    {
      topic: "Math",
      title: "Burrows–Wheeler transform",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "TBA",
      imagePath:
        "https://images.pexels.com/photos/4031442/pexels-photo-4031442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      shortDescription:
        "The Burrows–Wheeler transform rearranges a character string into runs of similar characters.",
      blogTextParagraphs: [
        "This is paragraph 1",
        "This is paragraph 2",
        "This is paragraph 3",
        "This is paragraph 4",
      ],
    },
    {
      topic: "Math",
      title: "Recommendation Systems",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "10 Dec 2019",
      imagePath:
        "https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      shortDescription:
        " a recommendation system, is a subclass of information filtering system that seeks to predict the rating or preference a user would give to an item.",
      blogTextParagraphs: [
        "This is paragraph 1",
        "This is paragraph 2",
        "This is paragraph 3",
        "This is paragraph 4",
      ],
    },
    {
      topic: "Computer Science",
      title: "React Testing Library",
      authorImagePath:
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      authorName: "Darshan Raju",
      publishedDate: "10 Dec 2019",
      imagePath:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      shortDescription: "",
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

export type content = "Math" | "Philosophy" | "Computer Science";

export interface websiteData {
  heroTitle: string;
  contributers: Array<participant>;
  blogs: Array<blog>;
  podcasts: Array<podcast>;
}

export interface blog {
  topic: content;
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
