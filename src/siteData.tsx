const siteData: websiteData = {
  heroTitle: "",
  blogs: [],
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
  blogImagePath: string;
  shortDescription: string;
  authorImagePath: string;
  authorName: string;
  publishedDate: string;
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
