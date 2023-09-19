// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CaseStudyDocumentDataSlicesSlice =
  | OverlineSlice
  | BodyCopySlice
  | ImageSlice;

/**
 * Content for Case Study documents
 */
interface CaseStudyDocumentData {
  /**
   * Title field in *Case Study*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Project Name field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.project_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_name: prismic.KeyTextField;

  /**
   * Case Study Type field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.case_study_type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  case_study_type: prismic.KeyTextField;

  /**
   * Timeline field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.timeline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  timeline: prismic.KeyTextField;

  /**
   * Project Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.project_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Case Study*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CaseStudyDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: case_study.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: case_study.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Case Study document from Prismic
 *
 * - **API ID**: `case_study`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaseStudyDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CaseStudyDocumentData>,
    "case_study",
    Lang
  >;

type Ct1DocumentDataSlicesSlice = ImageSlice;

/**
 * Content for CT1 documents
 */
interface Ct1DocumentData {
  /**
   * Slice Zone field in *CT1*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: ct1.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Ct1DocumentDataSlicesSlice>;
}

/**
 * CT1 document from Prismic
 *
 * - **API ID**: `ct1`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Ct1Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<Ct1DocumentData>, "ct1", Lang>;

type Ct2DocumentDataSlicesSlice = BodyCopySlice;

/**
 * Content for CT2 documents
 */
interface Ct2DocumentData {
  /**
   * Slice Zone field in *CT2*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: ct2.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Ct2DocumentDataSlicesSlice>;
}

/**
 * CT2 document from Prismic
 *
 * - **API ID**: `ct2`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Ct2Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<Ct2DocumentData>, "ct2", Lang>;

type PageDocumentDataSlicesSlice = BodyCopySlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type StoryDocumentDataSlicesSlice = BodyCopySlice | ImageSlice | OverlineSlice;

/**
 * Content for Story documents
 */
interface StoryDocumentData {
  /**
   * Story Title field in *Story*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story.story_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  story_title: prismic.RichTextField;

  /**
   * Story Type field in *Story*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story.story_type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  story_type: prismic.KeyTextField;

  /**
   * Time Meta field in *Story*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story.time_meta
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  time_meta: prismic.KeyTextField;

  /**
   * Slice Zone field in *Story*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: story.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<StoryDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Story*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: story.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Story*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: story.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Story*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: story.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Story document from Prismic
 *
 * - **API ID**: `story`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<StoryDocumentData>, "story", Lang>;

export type AllDocumentTypes =
  | CaseStudyDocument
  | Ct1Document
  | Ct2Document
  | PageDocument
  | StoryDocument;

/**
 * Primary content in *BodyCopy → Primary*
 */
export interface BodyCopySliceDefaultPrimary {
  /**
   * Content field in *BodyCopy → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: body_copy.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for BodyCopy Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BodyCopySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BodyCopySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BodyCopy*
 */
type BodyCopySliceVariation = BodyCopySliceDefault;

/**
 * BodyCopy Shared Slice
 *
 * - **API ID**: `body_copy`
 * - **Description**: BodyCopy
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BodyCopySlice = prismic.SharedSlice<
  "body_copy",
  BodyCopySliceVariation
>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Overline field in *Image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.overline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  overline: prismic.KeyTextField;

  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Caption field in *Image → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption: prismic.RichTextField;

  /**
   * Image Style field in *Image → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image_style
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  image_style: prismic.SelectField<"Screenshot" | "Diagram">;

  /**
   * Display Size field in *Image → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.display_size
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  display_size: prismic.SelectField<"Cover_Image" | "Large" | "Aside">;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *NewChapter → Primary*
 */
export interface OverlineSliceDefaultPrimary {
  /**
   * Overline field in *NewChapter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: overline.primary.overline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  overline: prismic.KeyTextField;

  /**
   * Chapter Title field in *NewChapter → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: overline.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Lede field in *NewChapter → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: overline.primary.lede
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  lede: prismic.RichTextField;
}

/**
 * Default variation for NewChapter Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OverlineSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OverlineSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewChapter*
 */
type OverlineSliceVariation = OverlineSliceDefault;

/**
 * NewChapter Shared Slice
 *
 * - **API ID**: `overline`
 * - **Description**: Overline
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OverlineSlice = prismic.SharedSlice<
  "overline",
  OverlineSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CaseStudyDocument,
      CaseStudyDocumentData,
      CaseStudyDocumentDataSlicesSlice,
      Ct1Document,
      Ct1DocumentData,
      Ct1DocumentDataSlicesSlice,
      Ct2Document,
      Ct2DocumentData,
      Ct2DocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      StoryDocument,
      StoryDocumentData,
      StoryDocumentDataSlicesSlice,
      AllDocumentTypes,
      BodyCopySlice,
      BodyCopySliceDefaultPrimary,
      BodyCopySliceVariation,
      BodyCopySliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      OverlineSlice,
      OverlineSliceDefaultPrimary,
      OverlineSliceVariation,
      OverlineSliceDefault,
    };
  }
}
