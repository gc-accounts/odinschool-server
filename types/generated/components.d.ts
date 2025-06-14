import type { Schema, Struct } from '@strapi/strapi';

export interface BookChapter extends Struct.ComponentSchema {
  collectionName: 'components_book_chapters';
  info: {
    displayName: 'chapter';
  };
  attributes: {
    children: Schema.Attribute.Component<'book.children', true>;
    content: Schema.Attribute.RichText;
    is_html: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
    url_slug: Schema.Attribute.String;
  };
}

export interface BookChildren extends Struct.ComponentSchema {
  collectionName: 'components_book_children';
  info: {
    displayName: 'children';
  };
  attributes: {
    title: Schema.Attribute.String;
    url_slug: Schema.Attribute.String;
  };
}

export interface NewStudentsEnrolled extends Struct.ComponentSchema {
  collectionName: 'components_new_students_enrolleds';
  info: {
    displayName: 'Students enrolled';
  };
  attributes: {
    enrolled_avatars: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    total_enrolled: Schema.Attribute.Integer;
  };
}

export interface PropertiesAuthor extends Struct.ComponentSchema {
  collectionName: 'components_properties_authors';
  info: {
    description: '';
    displayName: 'Author';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface PropertiesCompany extends Struct.ComponentSchema {
  collectionName: 'components_properties_companies';
  info: {
    description: '';
    displayName: 'Company';
    icon: 'cog';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface PropertiesContent extends Struct.ComponentSchema {
  collectionName: 'components_properties_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface PropertiesCurriculum extends Struct.ComponentSchema {
  collectionName: 'components_properties_curricula';
  info: {
    description: '';
    displayName: 'Curriculum';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    lessons: Schema.Attribute.Integer;
  };
}

export interface PropertiesEducation extends Struct.ComponentSchema {
  collectionName: 'components_properties_educations';
  info: {
    description: '';
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    degree: Schema.Attribute.String;
    graduating_year: Schema.Attribute.String;
    school: Schema.Attribute.String;
  };
}

export interface PropertiesFile extends Struct.ComponentSchema {
  collectionName: 'components_properties_files';
  info: {
    displayName: 'File';
    icon: 'file';
  };
  attributes: {};
}

export interface PropertiesItenary extends Struct.ComponentSchema {
  collectionName: 'components_properties_itenaries';
  info: {
    displayName: 'itenary';
  };
  attributes: {
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PropertiesJoinedStudents extends Struct.ComponentSchema {
  collectionName: 'components_properties_joined_students';
  info: {
    displayName: 'Joined Students';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface PropertiesJourney extends Struct.ComponentSchema {
  collectionName: 'components_properties_journeys';
  info: {
    displayName: 'Journey';
    icon: 'car';
  };
  attributes: {};
}

export interface PropertiesRating extends Struct.ComponentSchema {
  collectionName: 'components_properties_ratings';
  info: {
    displayName: 'rating';
    icon: 'star';
  };
  attributes: {
    overall_rating: Schema.Attribute.Decimal;
    total_rated: Schema.Attribute.Integer;
  };
}

export interface PropertiesSuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_properties_success_stories';
  info: {
    description: '';
    displayName: 'Success Stories';
    icon: 'restaurant';
  };
  attributes: {
    current_position: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    description_course: Schema.Attribute.RichText;
    image_url: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    investment_roi: Schema.Attribute.Decimal;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    salary_increase: Schema.Attribute.Decimal;
    skills: Schema.Attribute.String;
    time_to_job: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCohortDates extends Struct.ComponentSchema {
  collectionName: 'components_shared_cohort_dates';
  info: {
    displayName: 'cohort-dates';
  };
  attributes: {
    cohort1: Schema.Attribute.Date;
    cohort2: Schema.Attribute.Date;
  };
}

export interface SharedFinancingPartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_financing_partners';
  info: {
    description: '';
    displayName: 'Financing Partners';
  };
  attributes: {
    FinancingPartners: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'book.chapter': BookChapter;
      'book.children': BookChildren;
      'new.students-enrolled': NewStudentsEnrolled;
      'properties.author': PropertiesAuthor;
      'properties.company': PropertiesCompany;
      'properties.content': PropertiesContent;
      'properties.curriculum': PropertiesCurriculum;
      'properties.education': PropertiesEducation;
      'properties.file': PropertiesFile;
      'properties.itenary': PropertiesItenary;
      'properties.joined-students': PropertiesJoinedStudents;
      'properties.journey': PropertiesJourney;
      'properties.rating': PropertiesRating;
      'properties.success-stories': PropertiesSuccessStories;
      'shared.cohort-dates': SharedCohortDates;
      'shared.financing-partners': SharedFinancingPartners;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
