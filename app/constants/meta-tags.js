//* SCRIPT TAGs *//

export const defaultScriptTag = {
  type: 'script',
  tagId: "",
  attrs: {
    src: ""
  }
}

//* LINK TAGS *//

export const defaultLinkTag = {
  type: 'link',
  tagId: "",
  attrs: {
    integrity: "",
    rel: "",
    href: ""
  }
}

//* META TAGS *//

export const defaultMetaTag = {
  type: 'meta',
  tagId: "",
  attrs: {
    property: "",
    content: ""
  }
}

export const seoDescription = {
  type: 'meta',
  match: 'description',
  editType: "replace",
  tagId: 'meta-seo-description-tag',
  attrs: {
    property: "description",
    content: "Software Engineer"
  }
}

export const seoKeywords = { //* Note Google devalued this tag after many were keyword stuffing, but doesn't hurt to use in case it gets revalued or is used by another SERP (Search Engine Result Provider)
  type: 'meta',
  match: "keywords",
  editType: "join",
  tagId: 'meta-seo-keywords-tag',
  attrs: {
    property: "keywords",
    content: [
      "Software Engineer",
      "Software Developer",
      "Full Stack Developer",
      "Full-Stack Developer",
      "Full Stack",
      "Full-Stack",
      "Dev",
      "Matthew Aderhold",
      "Matthew",
      "Aderhold",
      "Aderhold.io"
    ].join(",")
  }
}

export const SeoMetaTags = {
  seoDescription,
  seoKeywords,
  array: [seoDescription, seoKeywords]
}

//* Open Graph Tags (Used by Facebook/Twitter for sharing)

export const ogType = {
  type: 'meta',
  match: "type",
  editType: 'replace',
  tagId: 'meta-og-type-tag',
  attrs: {
    property: "og:type",
    content: "website"
  }
}

export const ogTitle = {
  type: 'meta',
  match: "title",
  editType: "replace",
  tagId: 'meta-og-title-tag',
  attrs: {
    property: "og:title",
    content: "Matthew Aderhold"
  }
}

export const ogDescription = {
  type: 'meta',
  match: "description",
  editType: "replace",
  tagId: 'meta-og-description-tag',
  attrs: {
    property: "og:description",
    content: "Software Engineer"
  }
}

export const ogImage = {
  type: 'meta',
  match: "image",
  editType: "replace",
  tagId: 'meta-og-image-tag',
  attrs: {
    property: "og:image",
    content: `http://www.aderhold.io/images/og/img.png`
  }
}

export const ogImageAlt = {
  type: 'meta',
  match: "imageAlt",
  editType: "replace",
  tagId: 'meta-og-image-alt-tag',
  attrs: {
    property: "og:image:alt",
    content: "Matthew Aderhold | Software Engineer"
  }
}

export const ogUrl = {
  type: 'meta',
  match: "url",
  editType: "replace",
  tagId: 'meta-og-url-tag',
  attrs: {
    property: "og:url",
    content: `http://www.aderhold.io`
  }
}

export const ogSiteName = {
  type: 'meta',
  match: "siteName",
  editType: "replace",
  tagId: 'meta-og-site-name-tag',
  attrs: {
    property: "og:site_name",
    content: "Aderhold.io"
  }
}

export const OpenGraphMetaTags = {
  ogType,
  ogDescription,
  ogImage,
  ogImageAlt,
  ogSiteName,
  ogTitle,
  ogUrl,
  array: [ogType, ogDescription, ogImage, ogImageAlt, ogSiteName, ogTitle, ogUrl]
}

//* Twitter Specific Sharing Tags

export const twitterCard = {
  type: 'meta',
  match: "twitterCard",
  editType: "replace",
  tagId: 'meta-twitter-card-tag',
  attrs: {
    name: "twitter:card",
    content: "summary_large_image"
  }
}

export const twitterImageAlt = {
  type: 'meta',
  match: "imageAlt",
  editType: "replace",
  tagId: 'meta-twitter-image-alt-tag',
  attrs: {
    name: "twitter:image:alt",
    content: "Matthew Aderhold | Software Engineer"
  }
}

export const twitterCreator = {
  type: 'meta',
  match: "creator",
  editType: "replace",
  tagId: 'meta-twitter-creator-tag',
  attrs: {
    name: "twitter:creator",
    content: "@matthewaderhold"
  }
}

export const TwitterMetaTags = {
  twitterCard,
  twitterImageAlt,
  twitterCreator,
  array: [twitterCard, twitterImageAlt, twitterCreator]
}

//* Facebook Specific Meta Tags

export const fbAppId = {
  type: 'meta',
  match: "fbAppId",
  editType: "replace",
  tagId: 'meta-fb-app-id-tag',
  attrs: {
    property: "fb:app_id",
    content: "your_app_id" //TODO Setup App ID for Facebook Analytics
  }
}

export const FacebookMetaTags = {
  fbAppId,
  array: [fbAppId]
}



export const defaultTags = {
  SeoMetaTags,
  OpenGraphMetaTags,
  TwitterMetaTags,
  array: [...SeoMetaTags.array, ...OpenGraphMetaTags.array, ...TwitterMetaTags.array] //TODO Add FacebookMetaTags when fbAppId is setup
}

export const headTagsGenerator = (customTags = {}) => {
  const { description, keywords, title, image, imageAlt } = customTags;

  const tagArray = defaultTags.array.map(tag => {
    let content = tag.attrs.content;

    if (description && tag.match === "description") {
      content = description;
    } else if (keywords && tag.match === "keywords") {
      content = keywords;
    } else if (title && tag.match === "title") {
      content = title;
    } else if (image && tag.match === "image") {
      content = image;
    } else if (imageAlt && tag.match === "imageAlt") {
      content = imageAlt;
    }

    switch(tag.editType) {
      case "replace":
        tag.attrs.content = content;
        break;
      case "join":
        tag.attrs.content = `${tag.attrs.content} ${content}`;
        break;
      default:
        //* Do nothing as if permission to edit is denied
        break;
    }

    return tag;
  })

  //* Remove identifiers that are for this function only and map the array back then return it
  return tagArray.map(tag => {
    delete tag.match;
    delete tag.editType;
    return tag;
  });
}

export default headTagsGenerator;