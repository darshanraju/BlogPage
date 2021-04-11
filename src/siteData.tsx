const siteData: websiteData = {
  heroTitle: "",
  blogs: [],
  podcasts: [],
  contributers: [],
};

interface websiteData {
  heroTitle: string;
  contributers: Array<participant>;
  blogs: Array<blog>;
  podcasts: Array<podcast>;
}

interface blog {
  blogImagePath: string;
  shortDescription: string;
  authorImagePath: string;
  authorName: string;
  publishedDate: string;
}

interface podcast {
  podcastImagePath?: string;
  audioURLPath: string;
  shortDescription: string;
  participants: Array<string>;
}

interface participant {
  name: string;
  shortDescription: string;
}

export default siteData;
